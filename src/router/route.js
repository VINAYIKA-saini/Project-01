const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");


router.post("/authors",AuthorController.createAuthor);
router.post("/blog",blogController.createBlogs);
router.get("/getblog",blogController.getblogs);

router.put('/blogs/:blogId',blogController.updateBlog)
router.delete('/blogs/:blogId',blogController.deleteBlog)
router.delete('/blogs',blogController.deletebyquery)

module.exports = router;
