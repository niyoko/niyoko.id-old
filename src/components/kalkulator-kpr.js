/** @jsx jsx */
import {jsx} from '@emotion/react';
import {TextField, InputAdornment} from '@mui/material';
import NumberFormat from 'react-number-format';

export default function KalkulatorKpr() {
  return (
    <NumberFormat
      customInput={TextField}
      label="Harga Rumah"
      variant="outlined"
      InputProps={{
        startAdornment: <InputAdornment position="start">Rp</InputAdornment>,
      }}
    />
  );
}
