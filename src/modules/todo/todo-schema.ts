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
    title: Type.String({
      default: "A default title",
    }),
  }),
  response: {
    201: todo,
  },
};

export const getAllTodosSchema = {
  tags: ["todo"],
  description: "Gets todos list",
  response: {
    201: todos,
  },
};

export type CreateTodoBody = Static<typeof createTodoSchema.body>;
