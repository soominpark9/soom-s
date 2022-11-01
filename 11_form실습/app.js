const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 8001;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index", { title: "실습 풀이" });
});

app.get("/practice26", function (req, res) {
  res.render("practice26");
});

app.get("/practice27", function (req, res) {
  res.render("practice27");
});

// app.get("/result26", function (req, res) {
//   console.log(req.query);
//   res.render("result", {
//     success: "실습26 폼 전송 완료!",
//     userInfo: req.query,
//   });
// });

app.post("/result27", function (req, res) {
  console.log(req.body);
  res.render("result", {
    success: "실습27 폼 전송 완료!",
    userInfo: req.body,
  });
});

app.get("/axios", function (req, res) {
  res.send(req.query);
});

app.post("/axios", function (req, res) {
  //req.body : 유저가 프론트에서 입력한 아이디/비번
  //진짜 아이디, 비번 변수로 저장되어
  //유저가 입력한 아이디와 비번을 비교하는 로직
  //....
  console.log(req.body); // { userId: 'ggg', userPw: 'gggg' }

  const userId = "apple";
  const userPw = "1234";
  if (userId == req.body.userId && userPw == req.body.userPw) {
    res.send({ userInfo: req.body, msg: "로그인 성공", isLogin: true });
  } else {
    res.send({ userInfo: req.body, msg: "로그인 실패", isLogin: false });
  }
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
