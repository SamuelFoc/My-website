const express = require("express");
const { create } = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");


const app = express();
const port = 3000;

//Static folder
app.use(express.static("public"));

//Set the EJS view engine
app.set("view engine", "ejs");

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Requests
app.get("/", (req, res) => {
    res.render("main");
    res.statusCode = 200;
});

app.post("/send", (req, res) => {
    const output = `
        <p> You have a new contact request </p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>E-mail: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "sipikal.portfolio@gmail.com",
            pass: "SamuelPortfolioXbT23#"
        },
        tls:{
            rejectUnauthorized: false
        }
      });
      
      var mailOptions = {
        from: req.body.email,
        to: 'sipikal.portfolio@gmail.com',
        subject: 'Portfolio contact request',
        text: 'Mail sended',
        html: output
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          console.log("Message sent: %s", info.messageId);
          console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        }
      });

      res.render("main", {msg:"Email has been sent"})
      
      document.getElementById("contacts").scrollIntoView({behavior: "smooth"});
});

//Start server on localhost - port 3000
app.listen(port, () => {
    console.log("listening on port:" + port);
});
