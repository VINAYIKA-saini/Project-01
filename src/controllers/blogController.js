const { count } = require("console")
const blogModel = require("../models/blogModel")

<<<<<<< HEAD
   const createBlog= async function (res,req)
{ 
   let data = req.body
   let savedData=await BlogModel.create(data)
   res.send({msg:savedData})
}

   const getBlogdata= async function (req ,res)
=======

const createblog = async function (req, res) 
>>>>>>> 8bffaa7408a2114165ed95e092d25baab34c4fd1
{
    try 
    {
        let data = req.body
        console.log(data)
        if ( Object.keys(data).length != 0) {
            let savedData = await blogModel.create(data)
            res.status(201).send({ msg: savedData })
        }
        else res.status(400).send({ msg: "BAD REQUEST"})
    }
    catch (err) 
    {
        console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }
}

const getblogData = async function (req, res) 
{
    let allblog = await blogModel.find({ authorName: "" })
    console.log(allblog)
    if (allblog.length > 0) res.send({ msg: allblog, condition: true })
    else res.send({ msg: "No blogs found", condition: false })
}


const updateblog = async function (req, res) 
{
    let data = req.body 
    
    let allblog = await blogModel.findOneAndUpdate(
        { authorName: "ABC" }, 
        { $set: data }, 
        { new: true, upsert: true } ,
    )

    res.send({msg: allblog})
}





module.exports.createblog = createblog
module.exports.getblogData = getblogData
module.exports.updateblog = updateblog