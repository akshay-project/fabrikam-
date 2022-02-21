//Code Of Akshay Deepak Pawar            Roll :- 219015


//Get Express
var express =require("express");  
var app=express();  



var humanResourse=function(req, res){
    res.send("<h1>This is the Human Resouce Page</h1>");
};

var accounting=function(req, res){
    res.send("<h1>This is the Accouitng Page</h1>");
};

var projectManagement=function(req, res){
    res.send("<h1>This is the Project Management Page</h1>");
};


var onDefault=function(req, res){
    res.send("<h1>Fabrikam</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Human Resourse</li>"+
                    " <li>Accouting</li>"+
                    " <li>Project Management</li>"+
                    " <li>Corporate Training</li>"+
             "</ol>"+
             "<p>Created By : Akshay Pawar 219015</p>");
};



app.get("/",onDefault);  


app.get("/humanresourse",humanResourse);  
app.get("/accounting",accounting);  
app.get("/project",projectManagement);  

var server=app.listen(8081);
console.log("Server is running on port 8081");
