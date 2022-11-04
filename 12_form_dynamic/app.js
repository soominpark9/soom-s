const e = require("express");
const express = require("express");
const app = express();
const PORT = 8005;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routing 경로설정
app.get("/", function (req, res) {
  res.render("dynamic", { title: "동적 폼을 배워보자!!" });
});

//1. axios
// GET /axios
app.get("/axios", function (req, res) {
  console.log(req.query); //터미널에 보여줌
  res.send(req.query); //띄워준다
});

// POST /axious
app.post("/axious", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

// 1. ajax
// GET /ajax
app.get("/ajax", function (req, res) {
  console.log(req.query);
  res.send(req.query);
  //render을 쓰지 않은 이유 : 페이지가 그려지는 것이 아니라 그냥 정보를 던져주기만 하면 되서 send를 쓴다
});

//POST/ ajax
app.post("/ajax", function (req, res) {
  console.log(req.body);
  //서버 코드라 터미널에 찍힌다
  res.send(req.body);
});

// //2. axios
// // GET /axios
// app.get("/axios", function (req, res) {
//   console.log(req.query); //터미널에 보여줌
//   res.send(req.query); //띄워준다
// });

// // POST /axious
// app.post("/axious", function (req, res) {
//   console.log(req.body);
//   res.send(req.body);
// });

// 3. fetch에 대한 주소
// GET /fetch
app.get("/fetch", function (req, res) {
  console.log(req.query);
  res.send(req.query);
});

// POST /fetch
app.post("/fetch", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
