import { Router } from "express";
import {
  deleteById,
  getAllTodos,
  getTodosById,
  patchById,
  postTodos,
  putById,
} from "./todo.controllers.js";

const router = Router();

router.get("/todos", getAllTodos);
router.get("/todos/:id", getTodosById);
router.post("/todos", postTodos);
router.put("/todos/:id", putById);
router.patch("/todos/:id", patchById);
router.delete("/todos/:id", deleteById);

export default router;
