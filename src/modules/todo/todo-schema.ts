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

const todoSchema = {
  tags: ["todo"],
  params: Type.Object({
    id: Type.String(),
  }),
};

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

export const updateTodoSchema = {
  tags: ["todo"],
  description: "Updates todo item",
  body: Type.Object({
    title: Type.String(),
    complete: Type.Boolean(),
  }),
  params: Type.Object({
    id: Type.String(),
  }),
  response: {
    200: todo,
  },
};

export const getTodoSchema = {
  ...todoSchema,
  description: "Returns todo item",
  response: {
    201: todo,
  },
};

export const deleteTodoSchema = {
  ...todoSchema,
  description: "Deletes todo item",
  response: {
    204: {},
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
export type UpdateTodoBody = Static<typeof updateTodoSchema.body>;
export type TodoParams = Static<typeof todoSchema.params>;
