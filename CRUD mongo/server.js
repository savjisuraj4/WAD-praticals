const express=require('express');
require('dotenv').config()
const route=require('./Routes.js')

const mongoose=require('mongoose');

const PORT=8080;
const app=express();

app.use(express.json());
app.use(route)
mongoose.connect(process.env.MONGO_URL)
.then((response)=>{
          console.log("Database connected Successfully");
})
.catch((error)=>{
          console.log(error);
})


app.listen(PORT,()=>{
          console.log(`http://localhost:${PORT}`)
})