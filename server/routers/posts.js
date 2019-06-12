const express = require("express");
const router = express.Router();

require("../../src/db/mongoose");
const Post = require("../../src/models/post");

router.post("/post", async (req, res) => {
  const post = new Post(req.body);

  try {
    await post.save();
    res.status(201).send(post);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
