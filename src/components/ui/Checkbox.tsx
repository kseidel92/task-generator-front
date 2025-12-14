// src/components/ui/Checkbox.tsx

import React from "react";
import MuiCheckbox, { CheckboxProps as MuiCheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, ...props }) => {
  const checkbox = <MuiCheckbox id={id} {...props} />;

  if (label) {
    return <FormControlLabel control={checkbox} label={label} />;
  }

  return checkbox;
};
