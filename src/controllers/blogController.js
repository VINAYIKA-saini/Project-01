const blogsModel=require("../models/blogmodel")
const authorModel=require("../models/authorModel")


const createBlogs=async function(req,res){
    try {
        let data =req.body
        let authorId=req.body.authorId
        if(!authorId)return res.status(400).send({status:false,msg:"please provide authorId"})
        if(Object.keys(data).length !=0){
        let authorId=await authorModel.findOne({_id:data.authorId})
        if(!authorId) return res.status(400).send({status:false,msg:"please provide invalid auhtor id "})
        let savedData=await blogsModel.create(data)
          return  res.status(201).send({status:true,data:savedData})
    }else{
        return  res.status(400).send({status:false,msg:"body is empty"})
    }
    } catch (error) {
      return  res.status(500).send({status:false,msg:error.message})
    }
}

const getblogs = async function (req, res) {
    try {
     
  
      const check = await blogsModel.find({ ...req.query, isDeleted: false, isPublished: false });
      if (check.length == 0) return res.status(404).send({ status: false, msg: "No blogs found" })
  
      return res.status(200).send({ status: true, data: check });
    } catch (error) {
      res.status(500).send({ status: false, error: error.message });
    }
  }




  const updateblogs = async function (req, res) {
    try {
        let id = req.params.blogId;
        let list = await BlogModel.findOneAndUpdate({ _id: id, isDeleted: false }, {
            $addToSet: { tags: { $each: blogData.tags }, subcategory: { $each: blogData.subcategory } },
            title: blogData.title,
            body: blogData.body,
            publishedAt: new Date(),
        },

  
module.exports.createBlogs=createBlogs
module.exports.getblogs=getblogs
