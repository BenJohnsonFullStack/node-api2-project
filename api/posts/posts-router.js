// implement your posts router here
const express = require("express");
const Posts = require("./posts-model");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    throw new Error("test");
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
});

module.exports = router;
