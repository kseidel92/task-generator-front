// src/components/ui/Button.tsx

import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface ButtonProps extends Omit<MuiButtonProps, "variant" | "color" | "size"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger" | "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
}

const mapVariantToColor = (variant: ButtonProps["variant"]): MuiButtonProps["color"] => {
  switch (variant) {
    case "primary":
    case "contained":
      return "primary";
    case "secondary":
    case "outlined":
      return "secondary";
    case "danger":
      return "error";
    case "text":
      return "inherit";
    default:
      return "primary";
  }
};

const mapVariantToMuiVariant = (variant: ButtonProps["variant"]): MuiButtonProps["variant"] => {
  switch (variant) {
    case "primary":
    case "danger":
      return "contained";
    case "secondary":
      return "outlined";
    case "text":
      return "text";
    case "contained":
      return "contained";
    case "outlined":
      return "outlined";
    default:
      return "contained";
  }
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  isLoading = false,
  ...props
}) => {
  const muiColor = mapVariantToColor(variant);
  const muiVariant = mapVariantToMuiVariant(variant);

  return (
    <MuiButton
      variant={muiVariant}
      color={muiColor}
      size={size}
      disabled={props.disabled || isLoading}
      {...props}
    >
      {isLoading ? <CircularProgress size={24} color="inherit" /> : children}
    </MuiButton>
  );
};
