const express = require("express")

const app = express();
const port = 3000;



//Start server on localhost - port 3000
app.listen(port, () => {
    console.log("listening on port:" + port);
})

//Set the EJS view engine
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("main");
    res.statusCode = 200;
})

//Middleware for including images to HTML
app.use(express.static("public"));