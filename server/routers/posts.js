const express = require("express");
const router = express.Router();

router.get("/posts", (req, res) => {
  res.json({
    name: "Nail",
    avatar: "image"
  });
});

module.exports = router;
