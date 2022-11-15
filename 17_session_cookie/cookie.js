const express = require("express");
const cookieParser = require("cookie-parser");
//cookie-parser
//요청의 쿠키를 해석해서 req.cookie 객체로 만듦
//ex. name=hello 라는 쿠키를 보내면, req.cookies -> (name : 'hello')
//유효기간이 지난 쿠키는 알아서 삭제된다.
const app = express();
const PORT = 8070;

const cookieConfig = {
  //옵션 속성들 소개
  httpOnly: true, //웹 서버를 통해서만 쿠키 접근 가능 (js에서 접근 불가능)
  maxAge: 60 * 1000, // 1min: 유효시간을 설정 (단위:밀리초)
  //expire : 만료 날짜 설정 가능
  //secure: https 에서만 쿠키 접근이 가능
  //signed : 쿠키암호화 설정 가능
};
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser()); //이 코드한줄로 쿠키파슬을 이용하겠다 하고 등록이 된 것 req.cookies 가능해짐

// res.cookieParser(키, 값, 옵션)
// : 쿠키를 설정하는 method 이다
// res.clearCookie(키, 값, 옵션)
// : 쿠키를 "삭제" 하는 method 가 된다

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/setCookie", (req, res) => {
  res.cookie("myKey1", "myValue1", cookieConfig); // 쿠키 설정
  res.send("set cookie"); // 응답을 보냄
});

app.get("/getCookie", (req, res) => {
  res.send(req.cookies); // 쿠키 해석 (읽기)
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("myKey1", "myValue1", cookieConfig); // 쿠키 삭제
  res.send('clear cookie!!!') // 응답을 보냄
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
