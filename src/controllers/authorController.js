const authorModel = require("../models/authorModel");
const jwt = require("jsonwebtoken");

const createAuthor = async function (req, res) {
    try {
  
        const body = req.body;
    
        const fnameData = body.fname;
        if (!fnameData)
          return res.status(400).send({ status: false, msg: "Provide first name🌈✖️" });
    
        const lnameData = body.lname;
        if (!lnameData)
          return res.status(400).send({ status: false, msg: "Provide last name🌈✖️" });
    
        const passwordData = body.password;
        if (!passwordData)
          return res.status(400).send({ status: false, msg: "Provide password🌈✖️" });
    
        const emailData = body.email;
        if (!emailData)
          return res.status(400).send({ status: false, msg: "Provide email🌈✖️" });
    
        const titleData = body.title; 
          if (titleData == "Mr" || titleData == "Mrs" || titleData == "Miss") {
    
            const authorCreation = await authorModel.create(body);
            return res.status(201).send({ status: true, data: authorCreation });
          }
          else
            return res.status(400).send({ status: false, msg: "Please choose title from Mr👨🏻‍🦱, Mrs👩🏻‍🦰 and Miss " });
        
      }

    catch (err) {
    return res.status(500).send({ status: false, msg: err.message })
}
}


const loginAuthor = async function (req, res) {
  try {
      let email = req.body.email;
      let pass = req.body.password;

      // if (Object.keys(req.body).length == 0)  
      
      // return res.status(400).send({status : false, msg : "💥❎🌷No information passed❎🌷💥"})
      
      if (!(email && pass)) 
      
      return res.status(400).send({ status: false, msg: "💥❎🌷Email-Id and Password must be provided...!❎🌷💥" });
      
      if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
      
      return res.status(400).send({ status: false, msg: "💥❎🌷Wrong Email format❎🌷💥" })

      
      let author = await authorModel.findOne({ email: email, password: pass });
      
      if (!author) return res.status(401).send({ status: false, msg: "💥❎🌷Email or Password is wrong❎🌷💥" });

      //=====> ======> =======> ========>

      let token = jwt.sign(
          {
              authorId: author._id.toString()
          },
      "jatin kumar"
          );

      return res.status(200).send({ status: true, data: {token : token} });
  }
  catch (err) {
      return res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports.loginAuthor= loginAuthor;
module.exports.createAuthor=createAuthor