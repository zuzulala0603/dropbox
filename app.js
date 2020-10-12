const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const Swal = require('sweetalert2')
app = express();
//
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.use("/static", express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname, "public", "img", "favicon.ico")));

//
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/test", (req, res) => {
  res.render("test");
});
//
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server on!");
});
