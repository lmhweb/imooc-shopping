/**
 * Created by admin on 2018/1/26.
 */
let http=require("http");
let url=require("url");
let util= require("util");
let fs = require("fs");
let server=http.createServer((req,res)=>{
 // res.statusCode=200;
  //res.setHeader("Content-Type","text/plain ; charset=utf-8");
  let pathName=url.parse(req.url).pathname;
  console.log(pathName.substring(1));
  fs.readFile(pathName.substring(1),function (err,data) {
    if(err){
      console.log("err");
      res.writeHead(404,{
        "Content-Type":"text/html"
      });
    }else{
      console.log(data);
      res.writeHead(200,{
        "Content-type":"text/html"
      })
      res.write(data.toString());
    }
    res.end();
  })

})
server.listen(3000,"127.0.0.1",()=>{
  console.log("服务器已运行")
});
