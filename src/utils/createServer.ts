import fastify from "fastify";
import swagger from "@fastify/swagger";
import { todoRoute } from "../modules/todo/todo-route";
import { version } from "../../package.json";

export async function createServer() {
  const app = fastify();

  app.register(swagger, {
    routePrefix: "/docs",
    swagger: {
      tags: [
        {
          name: "todo",
        },
      ],
      info: {
        title: "Todo",
        description: " simple todo app",
        version,
      },
    },
    staticCSP: true,
    exposeRoute: true,
  });
  app.register(todoRoute, { prefix: "/api/v1/todos" });

  return app;
}
