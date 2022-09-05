const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");
<<<<<<< HEAD
// const BlogController = require("../controllers/blogController");
=======
const blogController = require("../controllers/blogController");
>>>>>>> 8bffaa7408a2114165ed95e092d25baab34c4fd1

router.post("/authors",AuthorController.createAuthor);

module.exports = router;