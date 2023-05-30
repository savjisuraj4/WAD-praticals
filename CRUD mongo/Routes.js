const express=require('express');
const route=express.Router();
const userDataModel=require('./userDataModel');

route.get('/get/',async(req,res)=>{
          await userDataModel.find({})
          .then((result) => {
                    res.send(result);
          }).catch((err) => {
                    res.send(err.message)
          });
})
route.post('/post/',async(req,res)=>{
          const { name,email,password} =req.body
          const newUser=new userDataModel({
                    name,email,password
          })
          await newUser.save()
          .then(()=>{
                    res.send("User Added Successfully");
          })
          .catch((error)=>{
                    res.send(error);
          })
})
route.patch('/update/',async(req,res)=>{
          const { name,email,password} =req.body
          await userDataModel.updateOne({name,email,password})
          .then(()=>{
                    res.send("User Updated Successfully");
          })
          .catch((error)=>{
                    res.send(error);
          })
})
route.delete('/delete/',async(req,res)=>{
          const {email} =req.body;
          await userDataModel.deleteOne({email})
          .then(()=>{
                    res.send("User Deleted Successfully")
          })
          .catch((error)=>{
                    res.send(error);
          })
})


module.exports=route;