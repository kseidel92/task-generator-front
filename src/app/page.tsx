"use client";
import { HomeContent } from "@/components/features/HomeContent";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default", py: 4 }}>
      <HomeContent />
    </Box>
  );
}
