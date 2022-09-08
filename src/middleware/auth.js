const jwt = require("jsonwebtoken");
const authentication = async function (req, res, next) {
   
   
    //authentication
   try {
        let tokenkey = req.headers["x-api-key"];
        if (!tokenkey) {
            return res.status(400).send({ status: false, msg: "token not valid, provide the token to create a blog" })
        }
        console.log(tokenkey)

        let decodedToken = jwt.verify(tokenkey, "loginpagewithemailpasswordsecret-key")
        if (!decodedToken) {
            return res.status(403).send({ status: false, msg: "token  is invalid" });
        }
       req.recentToken = decodedToken
       next();
       }
        catch (crr) {
        return res.status(500).send({ status: false, msg: err.message })
        }
    }


    //authorisation


    const authorisation = async function (req, res, next) {
        try {
            let blog1 = req.params.blogId;
            let blog2 = await blogId.findOne({authorId:authorId});
            let decodedDetail = req.recentToken.authorId
            if (authorId != decodedDetail) {
                return res.status(403).send("Can't login with this user You have to modify the request user details.")
            }
         next() 
        
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    };



module.exports.authentication = authentication
module.exports.authorisation = authorisation