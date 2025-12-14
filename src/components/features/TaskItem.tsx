import React from "react";
import ListItem from "@mui/material/ListItem";
import { Task } from "@/types/todo";
import { Checkbox } from "@/components/ui/Checkbox";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateTaskStatusAction } from "@/store/todo/actions/update-task-status.action";
import { deleteTaskAction } from "@/store/todo/actions/delete-task.action";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

interface TaskItemProps {
  listId: string;
  task: Task;
  taskIndex: number;
}

export const TaskItem: React.FC<TaskItemProps> = ({ listId, task, taskIndex }) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.todo);

  const handleToggle = () => {
    dispatch(updateTaskStatusAction({ listId, taskIndex, isCompleted: !task.isCompleted }));
  };

  const handleDelete = () => {
    dispatch(deleteTaskAction({ listId, taskIndex }));
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={handleDelete}
          disabled={isLoading}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
      sx={{
        textDecoration: task.isCompleted ? "line-through" : "none",
        opacity: task.isCompleted ? 0.6 : 1,
      }}
    >
      <ListItemIcon>
        <Checkbox checked={task.isCompleted} onChange={handleToggle} disabled={isLoading} />
      </ListItemIcon>
      <ListItemText primary={task.title} />
    </ListItem>
  );
};
