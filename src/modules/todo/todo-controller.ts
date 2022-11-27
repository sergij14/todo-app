import { logger } from "./../../utils/logger";
import { FastifyReply, FastifyRequest } from "fastify";
import { createTodo } from "./todo-service";

export async function createTodoHandler(
  req: FastifyRequest,
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
