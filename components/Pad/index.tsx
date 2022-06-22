import React from "react";
import ReactDOM from "react-dom";
// import "./styles.css";
import Backspace from "@mui/icons-material/Backspace";
import Phone from "@mui/icons-material/Phone";
import CallEnd from "@mui/icons-material/CallEnd";
import { Button, Grid } from "@mui/material";

export type numbers = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface PadProps {
  onChange?: (a: numbers) => void;
  onClear?: () => void;
}

const Pad = ({ onChange = () => {}, onClear = () => {} }: PadProps) => {
  return (
    <Grid container direction="column">
      <Grid container item direction="row">
        <Grid item xs>
          <Button
            sx={{ minHeight: "64px" }}
            fullWidth
            onClick={() => onChange(1)}
          >
            1
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            sx={{ minHeight: "64px" }}
            fullWidth
            onClick={() => onChange(2)}
          >
            2
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            sx={{ minHeight: "64px" }}
            fullWidth
            onClick={() => onChange(3)}
          >
            3
          </Button>
        </Grid>
      </Grid>
      <Grid container item direction="row">
        <Grid item xs>
          <Button
            sx={{ minHeight: "64px" }}
            fullWidth
            onClick={() => onChange(4)}
          >
            4
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            sx={{ minHeight: "64px" }}
            fullWidth
            onClick={() => onChange(5)}
          >
            5
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            sx={{ minHeight: "64px" }}
            fullWidth
            onClick={() => onChange(6)}
          >
            6
          </Button>
        </Grid>
      </Grid>
      <Grid container item direction="row">
        <Grid item xs>
          <Button
            sx={{ minHeight: "64px" }}
            fullWidth
            onClick={() => onChange(7)}
          >
            7
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            sx={{ minHeight: "64px" }}
            fullWidth
            onClick={() => onChange(8)}
          >
            8
          </Button>
        </Grid>
        <Grid item xs>
          <Button
            sx={{ minHeight: "64px" }}
            fullWidth
            onClick={() => onChange(9)}
          >
            9
          </Button>
        </Grid>
      </Grid>
      <Grid container item direction="row">
        <Grid item xs />
        <Grid item xs>
          <Button
            sx={{ minHeight: "64px" }}
            fullWidth
            onClick={() => onChange(0)}
          >
            0
          </Button>
        </Grid>
        <Grid item xs>
          <Button sx={{ minHeight: "64px" }} fullWidth onClick={onClear}>
            <Backspace />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pad;
