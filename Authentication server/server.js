const express=require('express');
const cors=require('cors');
const app=express();

const PORT=8080;
app.use(cors());
app.use(express.json());
var users=[];

app.post('/login',(req,res)=>{
          const {email,password}=req.body;
          let flag=false;
          users.forEach((user)=>{
                    if(user.email==email && user.password==password){
                              flag=true;
                    }
          })
          if(flag){
                    res.send("Login Successful");
          }
          else{
                    res.send("Invalid User");
          }
})
app.post('/register',(req,res)=>{
          const {name,email,password}=req.body;
          console.log(name);

          try{
                    users.push({name,email,password});
                    console.log(users);
                    res.send('Register Successful');
          }
          catch(err){
                    res.send(err);
          }

});

app.listen(PORT,()=>{
          console.log('Server Started at '+`http://localhost:${PORT}`)
});