"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { ReduxProvider } from "@/store/Provider";
import { NotificationToast } from "@/components/ui/NotificationToast";
import "@/styles/globals.css";

// MUI Imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { baselightTheme } from "@/utils/theme/DefaultColors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <ThemeProvider theme={baselightTheme}>
            <CssBaseline />
            <NotificationToast />
            {children}
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
