const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8090;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(cookieParser()); // req.cookies 가능해짐
const cookieConfig = {
  httpOnly: true, //웹 서버를 통해서만 쿠키 접근 가능 (js에서 접근 불가능)
  maxAge: 10* 1000
//   maxAge: 24 * 60 * 60 * 1000, // 24h유효기간 (단위: 밀리초)
};

app.get("/", (req, res) => {
  res.render("index", { popup: req.cookies.popup });//요청의 쿠키의 팝업으로 넘겨주는 것
  //req.cookies.popup
  //쿠키 설정시; hide
  //쿠키 미설정시; ''
});

app.post("/setCookie", (req, res) => { //post setcookie 설정 하고
  //쿠키 설정
  //popup 쿠키의 값을 설정해서 보내줘야 한다
  //res.send는 한번만 보내라 그랬는데 여기선 왜 두번보내지? 이유는
  //여기서 res.cookie는 응답을 보내는게 아니라 cookie를 설정한다
  res.cookie("popup", "hide", cookieConfig); //여기서 응답을 날린다

  //응답 : 쿠키 설정 성공! 메시지 응답으로 보냄
  res.send("쿠키설정 완료~");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
