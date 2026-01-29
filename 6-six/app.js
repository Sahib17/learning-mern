const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(cookieParser());

app.get("/", function (req, res) {
  let token = jwt.sign({ email: "sahib@gmail.com" }, "secret");
  res.cookie("token", token);
  res.send("done");
});

app.get("/read", function (req, res) {
  console.log(req.cookies.token);
  res.send(req.cookies.token);
  const data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
});

app.get("/encrypt", function (req, res) {
  res.send("working");
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("password", salt, function (err, hash) {
      console.log(hash);
    });
  });
});

app.get("/check", function (req, res) {
  // res.send('checking');
  bcrypt.compare(
    "password",
    "$2b$10$rRSlPbe1qDibCX/kUEkE/.9bbciqJaTlXs8opblWaXR2tx1Gz2iJq",
    function (err, result) {
      if (result == true) {
        res.send("correct");
      } else {
        res.send("not correct");
      }
    },
  );
});

app.listen(3000);

//
