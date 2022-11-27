import { CreateTodoBody, TodoParams } from "./todo-schema";
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

export async function getTodo(params: TodoParams): Promise<Todo | null> {
  return TodoModel.findOne({ _id: params.id });
}

export async function deleteTodo(params: TodoParams): Promise<null> {
  return TodoModel.findOneAndDelete({ _id: params.id });
}
