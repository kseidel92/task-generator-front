"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setOpenRouterApiKey } from "@/store/todo/todo.slice";
import { createSmartListAction } from "@/store/todo/actions/create-smart-list.action";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const SmartTodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { openRouterApiKey, isLoading } = useAppSelector((state) => state.todo);
  const [prompt, setPrompt] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);

  const handleGenerateClick = async () => {
    setLocalError(null);

    if (!openRouterApiKey) {
      setLocalError("Por favor, insira sua OpenRouter API Key.");
      return;
    }

    if (!prompt.trim()) {
      setLocalError("Por favor, descreva seu objetivo.");
      return;
    }

    // DISPATCH REATIVO: Sem await
    dispatch(createSmartListAction({ prompt, openRouterApiKey }));
    setPrompt("");
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Geração de Tarefas com IA
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Input
            label="OpenRouter API Key"
            type="password"
            placeholder="SUA_CHAVE_AQUI"
            value={openRouterApiKey}
            onChange={(e) => dispatch(setOpenRouterApiKey(e.target.value))}
            required
            fullWidth
            margin="normal"
          />
          <Input
            label="Objetivo de Alto Nível (Ex: 'Planejar uma viagem para a Europa')"
            type="text"
            placeholder="Descreva seu objetivo..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button onClick={handleGenerateClick} isLoading={isLoading} fullWidth sx={{ mt: 2 }}>
            {isLoading ? "Gerando Lista..." : "Gerar Lista Inteligente"}
          </Button>
        </Box>
        {localError && (
          <Box sx={{ mt: 2 }}>
            <Alert message={localError} />
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
