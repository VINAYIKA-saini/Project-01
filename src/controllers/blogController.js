const blogsModel=require("../models/blogmodel")
const authorModel=require("../models/authorModel")

///========> ========> =========> ===========> ============> ===========> ===========> ============> ==========> =========> =========> =================> ==============>  ================> ===========>
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
///========> ========> =========> ===========> ============> ===========> ===========> ============> ==========> =========> =========> =================> ==============>  ================> ===========>
const getblogs = async function (req, res) {
    try {
     
  
      const check = await blogsModel.find({ ...req.query, isDeleted: false, isPublished: false });
      if (check.length == 0) return res.status(404).send({ status: false, msg: "No blogs found" })
  
      return res.status(200).send({ status: true, data: check });
    } catch (error) {
      res.status(500).send({ status: false, error: error.message });
    }
  }
  ///========> ========> =========> ===========> ============> ===========> ===========> ============> ==========> =========> =========> =================> ==============>  ================> ===========>
  const updateBlog = async function (req, res) {
    try { 
        let getId = req.params.blogId
        let data = req.body  
        let checkId = await blogsModel.findOne({ _id: getId })
        console.log(checkId)
        if (checkId) {
            if (checkId.isDeleted === false) {
                let check = await blogsModel.findByIdAndUpdate(getId, { $push: { tags: data.tags, subcategory: data.subcategory }, title: data.title, body: data.body, category: data.category }, { new: true })
                res.status(200).send({ status: true, msg: check })
            }
            else {
                res.send("CANT UPDATE , IT IS DELETED")
            }
        }
        else {
            res.status(401).send({ status: false, msg: "Please enter valid Blog id" })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}
///========> ========> =========> ===========> ============> ===========> ===========> ============> ==========> =========> =========> =================> ==============>  ================> ===========>
const deleteBlog = async function (req, res) {
    let blogId = req.params.blogId

    if (!blogId) { return res.status(404).send("KINDLY ADD BLOG ID") }
    let blog = await blogsModel.findById(blogId)

    if (!blog) { return res.status(404).send("NOT A VALID BLOG ID") }
    if (blog.isDeleted == false) {
        let save = await blogsModel.findOneAndUpdate({ _id: blogId }, { $set: { isDeleted: true, deletedAt: Date.now() } }, { new: true })

        return res.status(200).send({ msg: save })
    } else {
        res.status(404).send({ status: false, msg: "already deleted" })
    }
}
///========> ========> =========> ===========> ============> ===========> ===========> ============> ==========> =========> =========> =================> ==============>  ================> ===========>
const deletebyquery = async function (req, res) {
    data = req.query
    
    console.log(data)
    let find = await blogsModel.findOne(data)
    console.log(find)
    if (!find) { return res.status(404).send({ status: false, msg: "Blog is not created" }) }
    if(find.isDeleted==true){return res.status(400).send({status:false,msg:"THIS DOCUMENT Is deleted"})}
    let saved = await blogsModel.findOneAndUpdate( data ,{ $set: { isDeleted: true, deletedAt: Date.now() } }, { new: true })
    res.status(200).send({ status: true, msg: saved })
}
///========> ========> =========> ===========> ============> ===========> ===========> ============> ==========> =========> =========> =================> ==============>  ================> ===========>
module.exports.deletebyquery=deletebyquery
module.exports.deleteBlog=deleteBlog
module.exports.updateBlog=updateBlog
module.exports.createBlogs=createBlogs
module.exports.getblogs=getblogs
