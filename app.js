console.log(`Web serverni boshlash`);
const express = require("express");
const res = require("express/lib/response");
const app = express();

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDB chaqirish
const db = require("./server").db();

// 1: Kirish codlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2: Session codlari

// 3: Views codlari
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing codlari

app.post("/create-item", (req, res) => {
  console.log("user entered /create-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.send("something went wrong!");
    } else {
      res.send("succesfully added!");
    }
  });
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("something went wrong!");
      } else {
        res.render("reja", { items: data });
      }
    });
});

app.get(`/author`, (req, res) => {
  res.render("author", { user: user });
});

app.get("/", function (req, res) {
  res.render(`reja`);
});

module.exports = app;
