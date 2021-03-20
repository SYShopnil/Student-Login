//get the student data
var studentData = require("../data/studentData")

var studentLogin = (req,res,next) => {
    var {userName,password} = req.params; //get the param data from url
    var  myData = studentData; //get the data from my local database
    myData.map(val => {
        if(val.userName == userName && val.password == password){
            next() 
        }
    })
    next("404 Please Try again")
}

module.exports = studentLogin