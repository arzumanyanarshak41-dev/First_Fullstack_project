const { Schema, model } = require("mongoose");

const todoSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      unique: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    isDone: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
module.exports = model("todo", todoSchema);
