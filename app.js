const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const dbConnect = require("./db/dbConnect");
const User = require("./db/userModel");

dbConnect();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (request, response) => {
  const user = new User({
    email: request.body.email,
    password: request.body.password,
  });

  // save the new user
  user
    .save()

    .then((result) => {
      response.status(201).send({
        message: "User Created Successfully",
        result,
      });
    })
    .catch((error) => {
      response.status(500).send({
        message: "Error creating user",
        error,
      });
    });
});

app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })
    // if email exists
    .then((user) => {
      // check password
      if (request.body.password === user.password) {
        //   create JWT token
        const token = jwt.sign(
          {
            userEmail: user.email,
          },
          "RANDOM-TOKEN",
          { expiresIn: "24h" }
        );

        //   return success response
        response.status(200).send({
          message: "Login Successful",
          email: user.email,
          token,
        });
      }
    });
});

module.exports = app;
