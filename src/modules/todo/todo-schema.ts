import { Static, Type } from "@sinclair/typebox";

const todo = Type.Object({
  title: Type.String(),
  _id: Type.String(),
  shortId: Type.String(),
  complete: Type.Boolean(),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});

const todos = Type.Array(todo);

export const createTodoSchema = {
  tags: ["todo"],
  description: "Creates a todo resource",
  body: Type.Object({
    title: Type.String(),
  }),
  response: {
    201: todo,
  },
};

export const getTodoSchema = {
  tags: ["todo"],
  description: "Returns todo item",
  params: Type.Object({
    id: Type.String(),
  }),
  response: {
    201: todo,
  },
};

export const getAllTodosSchema = {
  tags: ["todo"],
  description: "Returns all todos list",
  response: {
    201: todos,
  },
};

export type CreateTodoBody = Static<typeof createTodoSchema.body>;
export type GetTodoParams = Static<typeof getTodoSchema.params>;
