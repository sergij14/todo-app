import { CreateTodoBody } from "./todo-schema";
import { nanoid } from "nanoid";
import { Todo, TodoModel } from "./todo-model";

export async function createTodo(input: CreateTodoBody): Promise<Todo> {
  return TodoModel.create({
    ...input,
    shortId: `todo_${nanoid()}`,
  });
}

export async function getAllTodos(): Promise<Todo[]> {
  return TodoModel.find({});
}
