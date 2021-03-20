var getExpress = require("express");//get the express
var route = getExpress.Router();
var studentLoginController = require("../controller/studentLoginController")//get the student login controller
var sudeloginMiddleWare = require("../middleware/stdLogin")//get the middlerWare file here

route.get("/student/login/:userName/:password",[sudeloginMiddleWare],studentLoginController)//student login route


module.exports = route;//export the rout file 