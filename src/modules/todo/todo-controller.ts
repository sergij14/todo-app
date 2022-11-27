import { logger } from "./../../utils/logger";
import { FastifyReply, FastifyRequest } from "fastify";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from "./todo-service";
import { CreateTodoBody, TodoParams, UpdateTodoBody } from "./todo-schema";

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

export async function getTodoHandler(
  req: FastifyRequest<{ Params: TodoParams }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const todo = await getTodo({ id });
    return reply.code(201).send(todo);
  } catch (err) {
    logger.error(err, "getTodoHandler: Error getting todo");
    return reply.code(400).send({ message: "Error getting todo" });
  }
}

export async function deleteTodoHandler(
  req: FastifyRequest<{ Params: TodoParams }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    await deleteTodo({ id });
    return reply.code(204).send(null);
  } catch (err) {
    logger.error(err, "deleteTodoHandler: Error getting todo");
    return reply.code(400).send({ message: "Error getting todo" });
  }
}

export async function updateTodoHandler(
  req: FastifyRequest<{ Body: UpdateTodoBody; Params: TodoParams }>,
  reply: FastifyReply
) {
  try {
    const { id } = req.params;
    const todo = await updateTodo({ id }, { ...req.body });
    return reply.code(200).send(todo);
  } catch (err) {
    logger.error(err, "updateTodoHandler: Error updating todo");
    return reply.code(400).send({ message: "Error updating todo" });
  }
}
