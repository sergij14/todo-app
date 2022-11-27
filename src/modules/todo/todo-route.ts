import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { createTodoHandler } from "./todo-controller";

export function todoRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.post("/", {}, createTodoHandler);

  done();
}

// request: --> route --> controller --> service --> database