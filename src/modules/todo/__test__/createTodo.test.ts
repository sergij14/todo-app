import { nanoid } from "nanoid";
import { describe, it, vi, expect } from "vitest";
import { createServer } from "../../../utils/createServer";
import * as TodoService from "../todo-service";

describe('POST "/api/v1/todos" route', () => {
  it("should call the createTodo service", async () => {
    const todo = {
      _id: "mock id",
      title: "mock title",
      shortId: nanoid(),
      complete: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const createTodoSpy = vi.spyOn(TodoService, "createTodo");

    expect(createTodoSpy.getMockName()).toEqual("createTodo");

    createTodoSpy.mockResolvedValue(todo);

    const server = await createServer();

    await server.ready();

    const payload = {
      title: "A test todo",
    };

    const response = await server.inject({
      method: "POST",
      url: "/api/v1/todos",
      payload,
    });

    expect(response.json()).toEqual(todo);

    expect(createTodoSpy).toHaveBeenCalledWith(payload);
  });
});

describe('GET "/api/v1/todos" route', () => {
  it("should call the getAllTodos service", async () => {
    const todos = [
      {
        _id: "mock id",
        title: "mock title",
        shortId: nanoid(),
        complete: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    const getAllTodosSpy = vi.spyOn(TodoService, "getAllTodos");

    expect(getAllTodosSpy.getMockName()).toEqual("getAllTodos");

    getAllTodosSpy.mockResolvedValue(todos);

    const server = await createServer();

    await server.ready();

    const response = await server.inject({
      method: "GET",
      url: "/api/v1/todos",
    });

    expect(response.json()).toEqual(todos);

    expect(getAllTodosSpy).toHaveBeenCalledTimes(1);
  });
});
