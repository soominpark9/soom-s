//MVC 패턴으로 바꿔보기

const express = require("express");
const app = express();
const PORT = 8010;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "views"));
app.use("/static", express.static(__dirname + "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//mvc 패턴 적용
const indexRouter = require("./routes/index"); //  ./routes/index : index일 경우만 색량 가능 (why? index자체가 대표파일이름이라서 알아서 처리해줌)
app.use("/", indexRouter); //app.use는 무슨 뜻이냐? localhost:PORT/ -> 이 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작한다

// ./routes/user.js
const userRouter = require('./routes/user');
//locathost:PORT/user 경로글 기본으로 ./routes/user.js파일에 선언한 대로 동작

app.use("/user", userRouter);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
