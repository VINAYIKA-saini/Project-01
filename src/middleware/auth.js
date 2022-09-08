const jwt = require("jsonwebtoken");

const authenticate = async function (req, res, next) {
    try {
      let token = req.headers["x-api-key"]
      if (!token) {
        //404- not found
        return res.status(404).send({ status: false, msg: "token must be present" });
      }
      next()
    } catch (err) {
      return res.status(500).send({ status: false, msg: err.message });
    }
  };
  
    module.exports.authenticate = authenticate
    //authorisation


    // const authorisation = async function (req, res, next) {
    //     try {
    //         let blog1 = req.params.blogId;
    //         let blog2 = await blogId.findOne({authorId:authorId});
    //         let decodedDetail = req.recentToken.authorId
    //         if (authorId != decodedDetail) {
    //             return res.status(403).send("Can't login with this user You have to modify the request user details.")
    //         }
    //      next() 
        
    //     } catch (error) {
    //         res.status(500).send({ error: error.message })
    //     }
    // };




// module.exports.authorisation = authorisation

// const jwt = require('jsonwebtoken')

// const auth = async function(req, res, next) {
//     try {
//         const token = req.headers['x-api-key']
//         if (!token)     return res.status(401).send({status: false, msg: "Please provide token" })
//         const validToken = jwt.verify(token, "jatin kumar")

//         // Passing the decoded token inside req to acces it in controllers for authorisation.

//         req.validToken = validToken
//         next()
//     } catch (error) {

//         // Handling errors related to jwt token.

//         if(error.message == "jwt malformed")    return res.status(401).send({status: false, msg: "Token is Incorrect" })
//         if(error.message == "invalid token")    return res.status(401).send({status: false, msg: "Token is Incorrect" })
//         return res.status(500).send ({status: false, msg: error.message });
//     }
// }

// module.exports.auth = auth;