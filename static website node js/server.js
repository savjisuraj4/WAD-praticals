var express=require('express');
var app=express();

app.use(express.static('Public'))
app.get('/',(req,res)=>{
          res.sendFile('Public\index.html',{root:__dirname});
})


app.listen(8080,()=>{
          console.log(`http://localhost:8080`)
})