import React from "react";
import { TodoList } from "@/types/todo";
import { TaskItem } from "./TaskItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Box from "@mui/material/Box";

interface TodoListCardProps {
  list: TodoList;
}

export const TodoListCard: React.FC<TodoListCardProps> = ({ list }) => {
  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {list.prompt}
        </Typography>
        <List>
          {list.tasks.length > 0 ? (
            list.tasks.map((task, index) => (
              <TaskItem
                key={task.index + "_" + index}
                listId={list.id}
                task={task}
                taskIndex={task.index}
              />
            ))
          ) : (
            <Box sx={{ padding: 2 }}>
              <Typography color="text.secondary">Nenhuma tarefa nesta lista.</Typography>
            </Box>
          )}
        </List>
      </CardContent>
    </Card>
  );
};
