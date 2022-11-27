import fastify from "fastify";
import { todoRoute } from "../modules/todo/todo-route";

export async function createServer() {
  const app = fastify();

  app.register(todoRoute, { prefix: "/api/v1/todos" });

  return app;
}
