var getExpress = require("express");
var app = getExpress();
require("dotenv").config();//get the dorEnv 
var port = process.env.PORT || 3030;
var allstudentLoginRoute = require("./route/loginRout.js")
var rateLimit = require("express-rate-limit");//get the rate limit middleware

var myRateLimit = rateLimit({
    windowMs: 0.2*60*1000,
    max: 5,
    message: "Limit exceeded try again later"
})

app.listen(port, ()=>{console.log(`server is running on ${port}`)})//server is running on this port

app.use(myRateLimit)//rate limit middleware use here

app.get("/", (req,res)=>{
    res.send("This is a rout file")
})//root route

app.use(allstudentLoginRoute)//student login rout

app.get("*", (req, res)=>{
    res.send("<h1>404 Page not found</h1>")
})//default rout
