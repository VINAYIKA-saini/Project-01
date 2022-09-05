const BlogModel= require("..models/BlogModel")

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

module.export.createBlog
module.exoport.getBlogData=getBlogData