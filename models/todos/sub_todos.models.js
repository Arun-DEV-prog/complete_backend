import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema(
  {
    conten: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const subTodo = mongoose.model("subtodo", subTodoSchema);
