// src/components/ui/Alert.tsx

import React from "react";
import MuiAlert, { AlertProps as MuiAlertProps } from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

interface AlertProps {
  message: string;
  type?: "error" | "info" | "success" | "warning";
}

export const Alert: React.FC<AlertProps> = ({ message, type = "error" }) => {
  if (!message) return null;

  // Mapeia o tipo para a severity do MUI
  const severity: MuiAlertProps["severity"] =
    type === "error"
      ? "error"
      : type === "info"
        ? "info"
        : type === "success"
          ? "success"
          : "warning";

  return (
    <Stack sx={{ width: "100%", marginY: 2 }} spacing={2}>
      <MuiAlert severity={severity} variant="filled">
        {message}
      </MuiAlert>
    </Stack>
  );
};
