const express = require('express');
const router = express.Router();
const AuthorController = require("../controllers/authorController");
const blogController = require("../controllers/blogController");


router.put("/Id",blogController.updateBlog);

// router.put("/:Id",(req,res)=> {
//     console.log(req.params.id);
//     blogSchema.findOneAndUpdate({_id:req.param.id},{
//         $set:{
//     title :  req.body.title,
//     authorId : req.body.authorId,
//     tags : req.body.tags,
//     category : req.body.category, 
//     subcategory : req.body.category,
//     isPublished :  req.body.isPublished,
//     publishedAt : req.body.publishedAt,  
//     isDeleted : req.body.isDeleted,
//     deletedAt : req.body.deletedAt
//         }
//     })






router.post("/authors",AuthorController.createAuthor);
router.post("/blog",blogController.createBlogs);
router.get("/getblog",blogController.getblogs);
//router.put("/putblog",blogController.updateBlog)



module.exports = router;