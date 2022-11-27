import { nanoid } from "nanoid";
import { TodoModel } from "./todo-model";

export async function createTodo(input: any) {
  return TodoModel.create({
    ...input,
    shortId: `todo_${nanoid()}`,
  });
}
