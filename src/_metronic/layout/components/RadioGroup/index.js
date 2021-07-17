import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from "@material-ui/core";

const CustomRadioGroup = ({ value, onChange, name, label, row, radios }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row={row} name={name} value={value} onChange={onChange}>
        {radios.map(radio => (
          <FormControlLabel
            key={radio.label}
            value={radio.value}
            control={<Radio />}
            label={radio.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default CustomRadioGroup;
