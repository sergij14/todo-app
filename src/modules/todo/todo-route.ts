import { FastifyInstance, FastifyPluginOptions } from "fastify";
import {
  createTodoHandler,
  deleteTodoHandler,
  getAllTodosHandler,
  getTodoHandler,
  updateTodoHandler,
} from "./todo-controller";
import {
  createTodoSchema,
  deleteTodoSchema,
  getAllTodosSchema,
  getTodoSchema,
  updateTodoSchema,
} from "./todo-schema";

export function todoRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.post("/", { schema: createTodoSchema }, createTodoHandler);
  app.get("/", { schema: getAllTodosSchema }, getAllTodosHandler);
  app.get("/:id", { schema: getTodoSchema }, getTodoHandler);
  app.delete("/:id", { schema: deleteTodoSchema }, deleteTodoHandler);
  app.patch("/:id", { schema: updateTodoSchema }, updateTodoHandler);

  done();
}

// request: --> route --> controller --> service --> database
