const mongoose = require("mongoose");

const CommentSchema = require("./schemas/comment");

exports.Comment = mongoose.model("Comment", CommentSchema);
