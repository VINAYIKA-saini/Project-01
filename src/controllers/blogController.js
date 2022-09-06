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

//update body

const updateBlog = async function (req, res) {
    
    let authorId = req.params.authorId;
    let author = await userModel.findById(authorId);
    
    if (!author) { return res.send("No such user exists"); }
  
    let authorData = req.body;
    let updatedBlog = await userModel.findOneAndUpdate({ _id: authorId }, authorData);
    res.send({ status: updatedauthor, data: updatedBlog });
  };



module.exports.createBlogs=createBlogs
module.exports.updateBlog=updateBlog
