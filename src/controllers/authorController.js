const authorModel = require("../models/authorModel");

const jwt = require("jsonwebtoken");

//createAuthor

const createAuthor = async function (req, res) {
    try {
        const data = req.body;
        
        const fnameData = data.fname;
        if (!fnameData)return res.status(400).send({ msg: "fname is mandatory in the request" }); 

        const lnameData = data.lname;
        if (!lnameData) return res.status(400).send({ msg: "lname is mandatory in the request" }); 

        const  titleData = data.title;
        if (!titleData == "mr||mrs||miss") return res.status(400).send({ msg: `title is mandatory in the request` }); 
         
        const emailData = data.email;
        if (!emailData == (/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/))  // Regex
        return res.send({ msg: "email is mandatory in the request" }); 
        
        const passwordData = data.password;
        if (!passwordData == (/(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/))  // Regex
        
        return res.send({ msg: "password is mandatory in the request with alphanumerical,higher-lower case values" }); 

        let savedData = await authorModel.create(data);
       res.status(200).send({ data: savedData });
    } catch (error) {
        console.log(error);res.status(500).send({ msg: error.message });
    }
}




//loginAuthor


const loginAuthor = async function (req, res) {
    try {
        let email = req.body.email;
        let password = req.body.password;
         if (!(email &&  password))
            return res.status(400).send({status: false, msg: "please provide emailid and password",})

            if (!email.match(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/)) // Regex
            return res.status(400).send({ status: false, msg: "Wrong Email format" })

            if (!password.match(/(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/))  // Regex
            return res.status(400).send({ status: false, msg: "Wrong Email format" })

            let author = await authorModel.findOne({ email: email, password: password });
            if (!author)
            return res.status(400).send({status: false,msg: "username or the password is not corerct",});
          
            const token = jwt.sign ({             /// create token useing by jwt sign
                authorId: author._id.toString(),   ///     object ko string me kr deya
                email: author.email,                     /// information dede hai aab token banao 
            },
            "70-group-secretkey",   // signature hai secretkey
            {
                expiresIn:"24h"    /// date of end 
            }
             );
            res.setHeader("x-api-key", token);    /// result me show hoga token 
            res.status(200).send({ status: true, token: token });   // then token result gives 
          } catch (error) {
            res.status(500).send({ error: error.message })
          }
        };
                   

        module.exports.createAuthor = createAuthor;
        module.exports.loginAuthor= loginAuthor;