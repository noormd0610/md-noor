let express=require("express");
let app=express();
let port=3000;
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.listen(port,()=>{
    console.log("listining...");
})
app.get("/register",(req,res)=>{
    let {username,pass}=req.query;
    res.send(`you  get reqq details is username is: ${username} and password is:${pass}`);
})
app.post("/register",(req,res)=>{
    let {username,pass}=req.body;
    res.send(`you  post reqq details is username is: ${username} and password is:${pass}`);
})