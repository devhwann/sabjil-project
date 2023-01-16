const { Comment } = require("../models");
const { Router } = require("express");

const router = Router();

router.get("/", async (req, res, next) => {
  if (req.query.write) {
    res.render("post/edit");
    return;
  }

  const comments = await Comment.find({}); // 게시글 목록

  res.render("index", { comments });
});

router.post("/", async (req, res, next) => {
  const { content } = req.body;

  try {
    if (!content) {
      throw new Error("내용을 입력해 주세요");
    }

    const comment = await Comment.create({
      content,
    }); // 게시글 생성
  } catch (err) {
    next(err);
  }
});

module.exports = router;
