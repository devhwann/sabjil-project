const { Schema } = require("mongoose");
const shortId = require("./types/short-id");

const CommentSchema = new Schema(
  {
    shortId,
    content: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: "작성자",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = CommentSchema;
