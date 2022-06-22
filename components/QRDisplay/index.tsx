import React from "react";
import EncryptRsa from "encrypt-rsa";
import base64js from "base64-js";
import QRCode from "react-qr-code";
import { Grid, Typography } from "@mui/material";

const pubkey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsiLXlw2mFHH3FzRkMeGm
Q8jp658a/tolFpAsWYvrjmH2S8+tGIVRVWDBXhUK19Mm3ci09nyX5ACScZH88vGr
rPSWShkPrGdFgfj9Ktr6ZdpwM2magZtOC6pCGj/jSDQKudQ4AKfE6sE25DVSpvj0
AOHMfFdhyCc1i6mgC40QywsN97suoCof0i+FCOtrCsMf3iUoGxtStG3jYjJoG56F
H5A7d5N5EnzyMeOw+tAd3/zrvZD9hoBHt6kQFX8TsivgMbxwZMl5ZAqc888Hd09l
NIcYAcktnTa/Sxp1MWpFmJBEjkGb9DW+fcWb+xmxsjcDWgTzxWkJ4xLVY/olwN+M
pQIDAQAB
-----END PUBLIC KEY-----`;

const rsaInstance = new EncryptRsa();
const MERCHANT_ID = process.env.NEXT_PUBLIC_MERCHANT_ID;
const MERCHANT_WALLET = process.env.NEXT_PUBLIC_MERCHANT_WALLET;
const MERCHANT_VERSION = process.env.NEXT_PUBLIC_MERCHANT_VERSION;
const PAY_APP_HOST = process.env.NEXT_PUBLIC_PAY_APP_HOST;
const PAY_APP_ROUTE = process.env.NEXT_PUBLIC_PAY_APP_ROUTE;
const PAY_APP_PROTOCOL = process.env.NEXT_PUBLIC_PAY_APP_PROTOCOL;

interface QRDisplayProps {
  amount: number;
}

const QRDisplay = ({ amount }: QRDisplayProps) => {
  const APIString = React.useMemo(() => {
    const api = `${PAY_APP_PROTOCOL}://${PAY_APP_HOST}/${PAY_APP_ROUTE}/${MERCHANT_ID}`;
    const payload = JSON.stringify({
      amount: amount,
      wallet: MERCHANT_WALLET,
      version: MERCHANT_VERSION,
    });

    const encryptedString = rsaInstance.encryptStringWithRsaPublicKey({
      text: payload,
      publicKey: pubkey,
    });

    const b = Buffer.from(encryptedString);
    console.log(base64js.fromByteArray(b));
    return `${api}?payload=${base64js.fromByteArray(b)}`;
  }, [amount]);

  return (
    <Grid container>
      <Grid item>
        <QRCode size={512} value={APIString} />
      </Grid>
    </Grid>
  );
};

export default QRDisplay;
