import { logger } from "./../../utils/logger";
import { FastifyReply, FastifyRequest } from "fastify";
import { createTodo } from "./todo-service";
import { CreateTodoBody } from "./todo-schema";

export async function createTodoHandler(
  req: FastifyRequest<{ Body: CreateTodoBody }>,
  reply: FastifyReply
) {
  try {
    const todo = await createTodo(req.body);
    return reply.code(201).send(todo);
  } catch (err) {
    logger.error(err, "createTodoHanlder: Error creating todo");
    return reply.code(400).send({ message: "Error creating todo" });
  }
}
