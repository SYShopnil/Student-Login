var studentData = require("../data/studentData") //get the student data from local data base

var studentLogin = (req , res) => {
    var {userName} = req.params; //get the param data from url
    var data = studentData; //store the local database student details data here
    var expectedData = data.filter(val => val.userName == userName)//find the expected data
    var searchData
    expectedData.map(val => {
            searchData = `<h1>Hello ${val.name}!!!</h1>
                <h2>Other's Info:</h2> 
                <h5>ID: ${val.id}</h5> 
                <h5>Department: ${val.dept}</h5> 
                <h5>Sesson: ${val.season}</h5> 
                <h5>Graduation year: ${val.expectedGraduationYeas}</h5> ` //store the search data here 
    })//print the data
    res.send(searchData)//send the data 

}//student login controller

module.exports = studentLogin;//export all login controller