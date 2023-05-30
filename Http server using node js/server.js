const http=require('http');
const PORT=8080;
http.createServer(function(req,res){
          res.write("Server Started at: "+`http://localhost:8080`);
          res.end();
}).listen(PORT);