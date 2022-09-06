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

const getblogs = async (req, res) => {
    try {
       let combination = req.query
       let dataBlog =await blogsModel.find({$and:[{isDeleted:false,isPublished:true},combination]})
   if (dataBlog==0){
       return res.status(404).send({error:" DATA NOT FOUND "})
   }else 
       return res.status(201).send({ data: dataBlog })
   } catch (err) {
       res.status(500).send({ status: false, error: err.message })
   }
}
module.exports.createBlogs=createBlogs
module.exports.getblogs=getblogs
