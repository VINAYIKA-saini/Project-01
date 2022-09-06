const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");


router.post("/authors",AuthorController.createAuthor);
router.post("/blog",blogController.createBlogs);
router.get("/getblog",blogController.getblogs);


router.post("/authors",AuthorController.createAuthor);
router.post("/blog",blogController.createBlogs)
router.get("/getblogs",blogController.createBlogs)
module.exports = router;