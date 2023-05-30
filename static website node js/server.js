var express=require('express');
var app=express();

app.get('/',(req,res)=>{
          res.sendFile('index.html',{root:__dirname});
})


app.listen(8080,()=>{
          console.log(`http://localhost:8080`)
})

//or 

// using http
// const http=require('http');
// const fs=require('fs');
// const path=require('path');

// http.createServer(function(req,res){
//           fs.readFile('./index.html','UTF-8',function(err,html){
//                     res.writeHead(200,{'Content-Type':'text/html'})
//                     res.end(html);
//           });
// }).listen(8080,()=>{
//           console.log(`http://localhost:8080`)
// })