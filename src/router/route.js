const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");
const auth  = require('../middleware/auth');


router.post("/createauthors",AuthorController.createAuthor);

router.post("/loginAuthor",AuthorController.loginAuthor);

router.post("/createblog",blogController.createBlogs);

router.get("/getblog",auth.authenticate,blogController.getblogs);

// router.put('/blogs/:blogId',auth.Authenticate,blogController.updateBlog);

// router.delete('/blogs/:blogId',auth.Authenticate, blogController.deletebyParam);

// router.delete('/blogs',auth.Authenticate, blogController.deletebyquery);

module.exports = router;




