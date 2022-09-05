const express = require('express');
const app = express();
//const bodyParser = require('body-parser');
const route = require('./router/route.js');
const mongoose = require('mongoose');
app.use(express.json())



mongoose.connect("mongodb+srv://wasif_wasif:mongo_mongo@cluster0.xyph1rq.mongodb.net/blog",
{
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );



app.use('/',route);

app.listen(process.env.PORT || 3000, (err)=> {
    console.log("Connected to PORT 3000")
});