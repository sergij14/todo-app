import { getModelForClass, prop } from "@typegoose/typegoose";

export class Todo {
  @prop({
    required: true,
    type: String,
  })
  title: string;

  @prop({
    required: true,
    type: String,
  })
  shortId: string;

  @prop({
    type: Boolean,
    default: false,
  })
  complete: boolean;
}

export const TodoModel = getModelForClass(Todo, {
  schemaOptions: {
    timestamps: true,
  },
});
