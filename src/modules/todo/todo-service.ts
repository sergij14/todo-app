import { nanoid } from "nanoid";
import { Todo, TodoModel } from "./todo-model";

export async function createTodo(input: any): Promise<Todo> {
  return TodoModel.create({
    ...input,
    shortId: `todo_${nanoid()}`,
  });
}
