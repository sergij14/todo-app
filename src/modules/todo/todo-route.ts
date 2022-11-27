import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { createTodoHandler, getAllTodosHandler } from "./todo-controller";
import { createTodoSchema } from "./todo-schema";

export function todoRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.post("/", { schema: createTodoSchema }, createTodoHandler);
  app.get("/", {}, getAllTodosHandler);

  done();
}

// request: --> route --> controller --> service --> database
