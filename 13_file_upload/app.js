const express = require("express");
const { METHODS } = require("http");
const app = express();
const PORT = 8050;

//multer설정
const multer = require("multer");
const path = require("path"); //path 모듈을 적어줘야 실행됨 아래의 const path가 (깔지 않아도 기본으로 깔려 있는 모듈)
const upload = multer({
  dest: "uploads/",
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      //req : 요청에 대한 정보
      //file : 파일에 대한 정보
      //done(에러, 저장경로) : 함수
      done(null, "uploads/"); //경로설정
    },
    filename(req, file, done) {
      //req : 요청에 대한 정보
      // file : 파일에 대한 정보
      // done : 함수
      const ext = path.extname(file.originalname); // file.originalname에서"확장자" 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      //console.log(path.basename(file.originalname,ext))  --> 파일의 이름만 나온다 예를들어 peach.jpg 면 peach만 나온다
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //용량제한
});

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/uploads', express.static(__dirname + '/uploads')); 
app.use('/uploads', express.static(__dirname + '/uploads')); // upload 폴더 접근 가능하게끔

app.get("/", function (req, res) {
  res.render("index", { title: "파일 업로드를 배워보자" });
});

// 1. single(): 하나의 파일 업로드 할때
// single()의 인자 : input 태그의 name값을 넣어줘야한다
// single() -> req.file (파일은 req의 객체에 담겨 있다)
// app.post("/upload", upload.single("userfile"), function (req, res) {
app.post("/upload", uploadDetail.single("userfile"), function (req, res) {
  //req.file : 파일 업로드 성공 결과 (파일 정보)n
  console.log(req.file);

  //fieldname :'username' , 폼에 정의된 name
  //originalname : apple.jpg //원본파일명

  //req.body: title 데이터 정보 확인 가능 (여기선 글씨 정도지만 사실상 이미지 말고 나머지정보는 있다면 다 여기에 찍힌다 )
  console.log(req.body);
  res.send("Uploads!");
});

// 2. array() : 여러 파일을 하나의 input에 업로드 할 때
// array() -> req.files객체에 파일 정보
app.post("/upload/array", uploadDetail.array("userfiles"), function (req, res) {
  console.log(req.files); // [ {}, {}, {}, {}] 형식으로 파일 정보 확인
  console.log(req.body); //object 파일
  res.send("upload multifiles!!");
});

// 3. fields() : 여러 파일을 각각의input에 업로드 할 때
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  function (req, res) {
    console.log(req.files);
    console.log(req.boy);
    res.send("upload mutiple each!!!");
  }
);


// 4. 동적 파일 업로드

app.post(
  '/dynamicFile',
  uploadDetail.single('dynamicFile'),
  function (req, res) {
    console.log(req.file);
    res.send(req.file);
  }
);



app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});




