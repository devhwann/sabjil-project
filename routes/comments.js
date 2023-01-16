const { Router } = require("express");
const { Comment } = require("../models");

const router = Router();

router.post("/", async (req, res, next) => {
  const { password, content } = req.body;

  try {
    if (!password || !content) {
      throw new Error("내용을 입력해 주세요");
    }

    const comment = await Comment.create({
      content,
      password,
    }); // 게시글 생성
    res.redirect(`/`);
  } catch (err) {
    next(err);
  }
});

router.delete("/:password", async (req, res, next) => {
  const { password } = req.params;

  await Comment.deleteOne({ password });
  res.send("OK");
});

module.exports = router;
