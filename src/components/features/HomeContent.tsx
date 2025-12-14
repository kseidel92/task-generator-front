"use client";

import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { fetchListsAction } from "@/store/todo/actions/fetch-lists.action";
import { SmartTodoForm } from "./SmartTodoForm";
import { TodoListCard } from "./TodoListCard";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const HomeContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { lists, isLoading } = useAppSelector((state) => state.todo);

  // Efeito para carregar as listas ao montar o componente
  useEffect(() => {
    dispatch(fetchListsAction());
  }, [dispatch]);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Smart To-Do List
      </Typography>

      <Box sx={{ mb: 4 }}>
        <SmartTodoForm />
      </Box>

      {isLoading && (
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <Typography variant="body1" color="text.secondary" sx={{ ml: 2 }}>
            Carregando listas...
          </Typography>
        </Box>
      )}

      <Box>
        {lists.length > 0
          ? lists.map((list) => (
            <Box key={list.id} sx={{ mb: 3 }}>
              <TodoListCard list={list} />
            </Box>
          ))
          : !isLoading && (
            <Typography align="center" color="text.secondary" variant="h6" sx={{ mt: 4 }}>
              Nenhuma lista de tarefas encontrada. Use o formulário acima para gerar uma lista
              inteligente!
            </Typography>
          )}
      </Box>
    </Container>
  );
};
