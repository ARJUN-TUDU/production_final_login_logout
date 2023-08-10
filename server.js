const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require("path")
dotenv.config();
const connectDb = require('./config/connectDb');


connectDb()

//middlware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json());


//routes 
app.use('/api/v1/users',require('./routes/userRoute'));


//static file
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

//port 
const PORT = 8080 || process.env.PORT


//Listen
app.listen(PORT,()=>{
    
    console.log('server on running',PORT);

})
