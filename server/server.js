const path = require("path");
console.log(__dirname + "/../public");
const publicPath = path.join(__dirname, "/../public");
const express = require("express");
const app = express();
const port = process.env.port || 3000
app.use(express.static("publicPath"));
app.get("/", function(req,res){
    res.sendFile(publicPath + "/index.html");
})
app.listen(port, function(){
    console.log(`This app is connected at port ${port}`);
})
