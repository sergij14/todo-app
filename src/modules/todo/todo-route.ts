import { FastifyInstance, FastifyPluginOptions } from "fastify";

export function todoRoute(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.get("/", () => "hello");

  done();
}
