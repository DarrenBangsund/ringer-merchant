import React, { useEffect } from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
import Backspace from "@mui/icons-material/Backspace";
import Phone from "@mui/icons-material/Phone";
import CallEnd from "@mui/icons-material/CallEnd";
import { Button, Grid, Input, TextField } from "@mui/material";
import Pad, { numbers, PadProps } from "../Pad";
import { number } from "prop-types";

export interface CurrencyPadProps extends PadProps {
  onInput: (valueCents: number) => void;
}

const CurrencyPad = ({ onInput, ...padProps }: CurrencyPadProps) => {
  const [numStack, setNumStack] = React.useState<numbers[]>([]);

  useEffect(() => {
    onInput(Number.parseInt(numStack.join("") || "0", 10));
  }, [numStack, onInput]);

  const handleOnChange = React.useCallback(
    (value: numbers) => {
      const stack = [...numStack];
      stack.push(value);
      setNumStack(stack);
    },
    [numStack]
  );

  const handleOnClear = React.useCallback(() => {
    const stack = [...numStack];
    stack.pop();
    setNumStack(stack);
  }, [numStack]);

  const value = React.useMemo(() => {
    const zeros = [0, 0, 0].splice(0, 3 - Math.min(3, numStack.length));

    const displayArray = [...zeros, ...numStack];

    return [
      "$",
      ...displayArray.slice(0, displayArray.length - 2),
      ".",
      ...displayArray.slice(displayArray.length - 2, displayArray.length),
    ].join("");
  }, [numStack]);

  return (
    <Grid container direction="column">
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        maxRows={4}
        value={value}
        disabled
        // onChange={handleChange}
      />
      <Pad onChange={handleOnChange} onClear={handleOnClear} {...padProps} />
    </Grid>
  );
};

export default CurrencyPad;
