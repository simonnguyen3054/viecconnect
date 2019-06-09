const express = require("express");
const router = express.Router();

require("../../src/db/mongoose");
const Job = require("../../src/models/job");

router.get("/posts", (req, res) => {
  res.json({
    name: "Nail",
    avatar: "image"
  });
});

router.post("/posts", (req, res) => {
  const job = new Job(req.body);

  job
    .save()
    .then(() => {
      res.send(job);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

module.exports = router;
