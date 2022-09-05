const authorModel = require("../models/authorModel")
//const count  = require("console")

const createAuthor = async function (req, res) {
    try {
        let data = req.body
        // let authorId = data.dauthor_id
        if (!data.fname) return res.send({ msg: 'fname is mandatory in the request' })
        if (!data.lname) return res.send({ msg: 'lname is mandatory in the request' })
        if(!data.title == "mr||mrs||miss") return res.send ({msg: `title is mandatory in the request`})
        if (!data.email) return res.send({ msg: 'email is mandatory in the request' })
        if (!data.password) return res.send({ msg: 'password is mandatory in the request' })
    
        let savedData = await authorModel.create(data)
        // res.send({ data: savedData })
        res.status(200).send({ data: savedData });
    } 
    catch (error) {
    console.log(error)
    res.status(500).send({ msg: error.message })
}}

module.exports.createAuthor = createAuthor






// if (!Validators.isValidRequestBody(requestBody))
            
//             return res.status(400).send({ status: false, message: 'Invalid request body. Please provide author details.' })
