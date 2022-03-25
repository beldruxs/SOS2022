const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/api",(req,res)=>{
    res.send({result:true});
});





app.listen(port, () =>{
    console.log(`server TRULY ready at the port ${port}`);
});




