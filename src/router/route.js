const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");
// const BlogController = require("../controllers/blogController");

const blogController = require("../controllers/blogController");

router.post("/authors",AuthorController.createAuthor);
router.post("/blog",blogController.createBlogs);

module.exports = router;