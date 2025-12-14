"use client";

import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { clearNotification } from "@/store/notification/notification.slice";

export const NotificationToast: React.FC = () => {
  const dispatch = useAppDispatch();
  const { message, type, open } = useAppSelector((state) => state.notification);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clearNotification());
  };

  if (!message) return null;

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity={type} variant="filled" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
