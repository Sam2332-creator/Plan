console.log(`Web serverni boshlash`);
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish codlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 2: Session codlari

// 3: Views codlari
app.set("wiews", "wiews");
app.set("wiew engine", "ejs");

// 4: Routing codlari
app.get("/hello", function (req, res) {
  res.end(`<h1 style="backgournd: red">Hello World<h1>`);
});
app.get("/gift", function (req, res) {
  res.end(`<h1 style="backgournd: red">Siz sovgalar bolimidasiz<h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`Server is running succesfuly on port: ${PORT}`);
});
