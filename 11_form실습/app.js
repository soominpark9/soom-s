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

// app.post("/axios", function (req, res) {
//   //req.body : 유저가 프론트에서 입력한 아이디/비번
//   //진짜 아이디, 비번 변수로 저장되어
//   //유저가 입력한 아이디와 비번을 비교하는 로직
//   //....
//   console.log(req.body); // { userId: 'ggg', userPw: 'gggg' }

//   const userId = "apple";
//   const userPw = "1234";
//   if (userId == req.body.userId && userPw == req.body.userPw) {
//     res.send({ userInfo: req.body, msg: "로그인 성공", isLogin: true });
//   } else {
//     res.send({ msg: "로그인 실패",
//       isLogin : false});
//   }
// });

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});


// const express = require('express');
// const app = express();
// const PORT = 8000;

// app.set('view engine', 'ejs');
// app.use('/views', express.static(__dirname + '/views'));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Routing (경로 설정)
// app.get('/', function (req, res) {
//   res.render('dynamic', { title: '동적 폼 실습' });
// });

// app.get('/practice29', function (req, res) {
//   console.log(req.query); // { username: 'aa' }
//   res.send(req.query); // res.send({ username: 'aa' });
// });

// // db에서 가져왔다고 가정
// const realId = 'banana';
// const realPw = '4321';

app.post('/axios', function (req, res) {
  console.log(req.body); // { userId: 'aa', userPw: '1234' }
  console.log(req.body.userId); // 'aa'
  console.log(req.body.userPw); // '1234'

  // &&: AND 연산자 -> 둘 다 참이어야 참
  // ||: OR 연산자 -> 둘 중에 하나라도 참이면 참
  // !: NOT 연산자 -> 부정 (참이면 거짓, 거짓이면 참)
  if (realId === req.body.userId && realPw === req.body.userPw) {
    console.log('로그인 성공');
    res.send({ userInfo: req.body, isLogin: true });
  } else {
    console.log('로그인 실패');
    res.send({ isLogin: false });
  }

  // 진짜 아이디/비번 vs. 사용자가 입력한 아이디/비번
  // res.send(req.body);
});

// 실습 30번 힌트
// app.post('/seanPost', (req, res) => {
//   console.log(req.body);
//   // req.body: 유저가 프론트에서 입력한 아이디/비번
//   // 진짜 아이디/비번 변수로 저장되어
//   // 유저가 입력한 아이디와 비번을 비교하는 로직
//   //....
//   res.send({ userInfo: req.body, msg: '오옹' });
// });

// app.listen(PORT, function () {
//   console.log(`http://localhost:${PORT}`);
// });