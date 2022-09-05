const { count } = require("console")
const authorModel = require("../models/authorModel")

const createAuthor = async function (req, res) {
    try {
        let data = req.body
        let authorId = data.dauthor_id
        if (!authorId) return res.send({ msg: 'AuthorId is mandatory in the request' })

        let savedData = await authorModel.create(data)
        res.send({ data: savedData })
        res.status(200).send({ msg: savedData });
    } 
    catch (error) {
    console.log(error)
    res.status(500).send({ msg: error.message })
}}

module.exports.createAuthor = createAuthor





// if (!Validators.isValidRequestBody(requestBody))
            
//             return res.status(400).send({ status: false, message: 'Invalid request body. Please provide author details.' })
