const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./router/route.js');
const mongoose = require('mongoose');
app.use(express.json())



mongoose.connect("mongodb+srv://raj_3028:kWaM507ps0Icsdg0@cluster0.pw23ckf.mongodb.net/project1",
{
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );



app.use('/',route);

// app.listen(process.env.PORT || 3001, ()=> {
//     console.log("Connected to PORT 3000")
// });

app.listen(3500, ()=> console.log("done"));