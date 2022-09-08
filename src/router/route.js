const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");
const auth  = require('../middleware/auth');


router.post("/authors",AuthorController.createAuthor);
router.post('/login',AuthorController.loginAuthor)
router.post("/blog", blogController.createBlogs);
router.get("/getblog",auth.authentication,blogController.getblogs);
router.put('/blogs/:blogId',auth.authentication,auth.authorisation,blogController.updateBlog);
router.delete('/blogs/:blogId',auth.authentication,auth.authorisation, blogController.deleteBlog);
router.delete('/blogs',auth.authentication, auth.authorisation,blogController.deletebyquery);


module.exports = router;




