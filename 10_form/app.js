const express = require("express");
const app = express();
const PORT = 8000;

//  views 설정
app.set("view engine", "ejs");
// Middleware (미들웨어) 설정 :
// :요청(req) 과 응답(res)의 중간에서 작업
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // json형태로 데이터를 전달 받을 수 있게 해줌 //백과 프론트가 서로 정보를 교환 할 수 있게 됨 이 2줄로

// routing 설정 (경로설정)
// req(request) : 요청 (클라이언트 -> 서버)
// res(respnse) : 응답 (서버->클라이언트)
app.get("/", function (req, res) {
  //get / (http://localhost:PORT)
  res.render("index", { title: "폼 전송을 배워보자", desc: "여기는 설명" }); // views/index.ejs 파일을 찾아서 클라이언트에게 "응답"
});

app.get("/getForm", function (req, res) {
  //GET요청은 req.query 객체에 폼 정보가 전달
  console.log(req.query);
  //   res.send("get 요청 응답 성공");
  res.render("result", { title: "GET 요청 성공", userInfo: req.query });
});

app.post("/postForm", function (req, res) {
  //POST요청은 req.body 객체에 폼 정보가 전달
  console.log(req.body);
  //   res.send("post 요청 응답 성공");
  res.render("result", { title: "POST 요청 성공", userInfo: req.body });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
