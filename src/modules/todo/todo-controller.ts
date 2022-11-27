import { logger } from "./../../utils/logger";
import { FastifyReply, FastifyRequest } from "fastify";
import { createTodo, getAllTodos } from "./todo-service";
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

export async function getAllTodosHandler(
    req: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      const todos = await getAllTodos();
      return reply.code(201).send(todos);
    } catch (err) {
      logger.error(err, "getAllTodosHandler: Error getting todos");
      return reply.code(400).send({ message: "Error getting todos" });
    }
  }
  
