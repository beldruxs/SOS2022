const cool = require("cool-ascii-faces");
const { response } = require("express");
const express = require("express");

const app = express();
const port = 8080;

app.get("/",(req,res)=>{
    console.log("Requested / route");
    res.send("<html><body>"+cool()+"</body></html>")
});

app.listen(port, () =>{
    console.log(`server TRULY ready at the port ${port}`);
});




