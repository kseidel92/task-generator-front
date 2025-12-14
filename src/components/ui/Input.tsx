// src/components/ui/Input.tsx

import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

interface InputProps extends Omit<TextFieldProps, "variant"> {
  label?: string;
  // Omit variant to enforce a consistent look, or add it back if needed
}

export const Input: React.FC<InputProps> = ({ label, id, className = "", ...props }) => {
  const inputId = id || props.name;

  return (
    <TextField
      id={inputId}
      label={label}
      variant="outlined" // Usando 'outlined' como padrão para um visual moderno
      fullWidth
      margin="normal"
      {...props}
      // Passando className para o componente raiz do TextField
      className={className}
    />
  );
};
