const jwt = require("jsonwebtoken");

const authToken =async function (req,res)
{
    try
    {
        let token = req.headers["x-api-key"];
           if (!token)
           {
            return res.status(400).send({status:false,msg:"token not valid or provide the token to create a blog"})
           }
    console.log(token)

    let decodedToken=jwt.verify(token," 70-group-secretKey")
           if (!decodeToken)
           {
           return res.status(400).send({status:false,msg:"token is is invalid"});
           }
    
//<authorization>>
      
            req.authorId=decodedToken.authorId
    
            next();
    }
             catch(crr)
             {
                 return res.status(500).send({status:false,msg:err.message})
             }



}

module.exports.authToken=authToken