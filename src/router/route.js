const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");
const auth  = require('../middleware/auth');


router.post("/authors",AuthorController.createAuthor);

router.post("/blog", auth.authToken,blogController.createBlogs);

router.get("/getblog",auth.authToken ,blogController.getblogs);

router.put('/blogs/:blogId',auth.authToken,blogController.updateBlog);

router.delete('/blogs/:blogId',auth.authToken, blogController.deleteBlog);
router.delete('/blogs',auth.authToken, blogController.deletebyquery);


module.exports = router;




