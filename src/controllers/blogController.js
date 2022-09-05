const BlogModel= require("..models/blogModel")

   const createBlog= async function (res,req)
{ 
   let data = req.body
   let savedData=await BlogModel.create(data)
   res.send({msg:savedData})
}

   const getBlogdata= async function (req ,res)

{
    let allBlog=await BookModel.find({})
    res.send({msg:allBlog})
}

module.exports.createBlog=createBlog
module.exports.getBlogdata=getBlogdata