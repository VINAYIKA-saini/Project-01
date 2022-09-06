const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");

<<<<<<< HEAD
=======
router.post("/authors",AuthorController.createAuthor);
router.post("/blog",blogController.createBlogs);
>>>>>>> 9bbe5aa9ee06d2d12a90786a0184849994555cd7


router.post("/authors",AuthorController.createAuthor);
router.post("/blog",blogController.createBlogs)
router.get("/getblogs",blogController.createBlogs)
module.exports = router;