import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

// Use em todo o seu aplicativo em vez de `useDispatch` e `useSelector` simples
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
