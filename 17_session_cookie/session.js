const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

//session ({세션모듈_옵션})
//-secret : 세션 발급시 사용되는 키
//-resave : 매 요청마다 세션을 다시 저장할 것인지
//-saveUninitialized : 초기값이 지정되지 않은 상태에서도 처음부터 다시 세션을 실행할지
//-secure : true 설정시 https에서만 세션을 주고받을 수 있음
//-name : 세션 쿠키 명 ( connet.sid 이지만 다른 이름 줄 수도 있음)

app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);

//세션 미들웨어 설정
//req.session 키= 값

//세션 쿠키 사용
//req.session.키

//세션 삭제
//req.session.destroy(콜백함수)
//여기서 말하는 콜백함수는 -> 세션 삭제할때 호출할 콜백함수를 의미한다.

app.get("/", (req, res) => {
  //세션 설정
  req.session.name = "홍길동";
  //응답 보냄
  res.send("세션 설정 완료!!");
});

app.get("/name", (req, res) => {
  res.send(req.session.name);
});

// app.get("/sid", (req, res) => {
//   res.send(req.sessionID);
// });

app.get("/destroy", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      throw err;
    }
// 1. GET / name 세션 결정
// 2. GET / name : name 값 확인
// 3. GET /destory : 세션 사가제
// 4. GET ('세션 삭제 완료')
    res.send("세션 삭제 완료!");
    
  });
});

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
