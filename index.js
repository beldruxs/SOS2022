const express = require("express");
const backend = require("./src/back");

const app = express();
const port = process.env.PORT || 8080;

backend(app);

app.listen(port, () =>{
    console.log(`server TRULY ready at the port ${port}`);
});




