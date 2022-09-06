const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");

const blogController = require("../controllers/blogController");

router.post("/authors",AuthorController.createAuthor);
router.post("/blog",blogController.createBlogs);
//router.put("/Id",blogController.updateBlog);

// router.put("/:Id",(req,res)=> {
//     console.log(req.params.id);
//     blogSchema.findOneAndUpdate({})

// }


module.exports = router;