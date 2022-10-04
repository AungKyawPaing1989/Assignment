const express = require ("express");
const path = require ("path");
const app = express();

app.get("/page1",(req,res)=>{
  
  res.sendfile(path.join(_dirname+ "/page1.html"))
})

app.get("/page2",(req,res)=>{
  
  res.sendfile(path.join(_dirname+ "/page2.html"))
})

app.get("/page3",(req,res)=>{
  
  res.sendfile(path.join(_dirname+ "/page3.html"))
})

app.get("/page4",(req,res)=>{
  
  res.sendfile(path.join(_dirname+ "/page4.html"))
})

app.listen(3000,()=>{
  
 
   console.log('Server starting up:port:3000:);
 })
