const mongoose = require(`mongoose`)

const authorSchema = mongoose.Schema(
    {
        fname :{
            type : string ,
            require : true
        },
        lname :{
            type : string ,
            require : true
        },
        title : {
            type : string ,
            enum : ["Mr" , "Mrs" , "Miss"] ,
            required : true
        },
        email : {
            type : string ,
            required : true ,
            unique : true ,
            lowercase : {require : true}
        },
        password : {
            type : string ,
            required : true
        }},{ timestamps : true}

    )
 module.exports = mongoose.model('author',authorSchema)