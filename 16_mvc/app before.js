const express = require("express");
const app = express();
const PORT = 8010;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "views"));
app.use("/static", express.static(__dirname + "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//(임시) DB로 부터 댓글 목록을 받아옴
//배열 : 전체댓글
//각 객체 : 댓글 하나
const comments = [
  {
    id: 1,
    iserid: "helloworld",
    date: "2022-10-31",
    comment: "안녕하세요 ^~^",
  },
  {
    id: 2,
    iserid: "baseball",
    date: "2022-11-05",
    comment: "야구 좋아합니다",
  },
  {
    id: 3,
    iserid: "ssglanders",
    date: "2022-11-02",
    comment: "ssg 팬 입니다",
  },
  {
    id: 4,
    iserid: "koreanseries",
    date: "2022-10-15",
    comment: "한국시리즈 우승기원",
  },
];

//함수 선언
//1) 명시적 함수선언
//function func_name () {...}
//2) 함수 표현식
//const var_name = function () {...}

//2 변형) 화살표 함수
// : 함수 표션식을 더 단순하게 작성해보자!
//const f = () => {...}

//GET / - [댓글 목록 보기] 이동 링크 걸려있음 -> index.js에서 만들자
app.get("/", (req, res) => {
  res.render("index");
});

//GET /comments - 댓글 전체 목록 확인 할 수 있음
//comments 주소에서 get요청 첨으로는 서버측에 comments 댓글 목록을 보여주고
//그 담에 comments ejs를 render로 브라우저로 넘어준다 commentsInfos라는 변수로 넘기고 그 변수에는 comments(댓글 목록)이 담겨있을 것이다
app.get("/comments", (req, res) => {
  //comments url로get요청이 오면 서버측에 comments댓글목록을 보여준다는
  console.log(comments); //댓글목록 확인용
  res.render("comments", { commentsInfos: comments }); //commets뒤에 .ejs가 생략된것
});

//GET /comment/:id - 각 댓글을 자세히 볼 수 있음

//1 get요청을 보낸다 //comment에 id가 들어왔을 때 함수를 실행한다 ->render을 할거다
//comment를 보여줄거다 (근데 정보 하나만!) 그래서 commentInfor라고 씀
//id가 여기서 변수 처럼 쓰였다.
//id자리에 원래 주소가 계속 쓰였는데 :id가 쓰이므로 무슨 숫자가 들어가도 상관없이
// /commet로 이동하는 변수가 됬다
// get요청은 query post body였든 url에서 쓰이는 변수는 아래의 params에 정보가 저장되어있다
//http://localhost:8010/comment/2 를 쓰면 서버창에 id:2라고 찍히고 20을쓰면 id:20이라 찍히고 안녕이라 쓰면 id:안녕이라고 나온다.
//순서는 서버에 찍고 나서 render을 해준다
//여기서 id는 댓글의 고유 아이디로 쓰기 위해서 id라는 이름으로 사용했다.
app.get("/comment/:id", (req, res) => {
  console.log(req.params); // 라우트 매개변수에 대한 정보가 담겨있다. 여기서 매개변수란id를 의미
  console.log(req.params.id); //id 값 추출 (위에 hello라고 썻으면 여기도 hello를 넣어야한다)
  //comment id라는 변수에 저장해 준다 comment에 id값으로 접근했을 때 comment인덱스 로 접근한다?
  const commentId = req.params.id; //댓글 id:url로 들어온 매개변수
  //comments =[{},{},{},{}]
  console.log(comments[commentId - 1]); //-1을 해줘야 배열의 0번으로 접근이 된다 -> 댓글 목록에서 특정 댓글 정보 추출

  //1. :id -존재 하지 않는 댓글 id x (0,음수,댓글배열길이 보다 큰 값)
  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }
  //2. :id - 숫자가 아닌 것이 들어오면 x
  if (isNaN(commentId)) { // 5>3 ===true / true==true 어차피 결과가 트루면 쓸데없는 연산을 하고 있는거니까 바로 트루로 끝내도 되니까 commentId ===true를 쓰지 x도 된다는 뜻
    //true
    return res.render('404');
    // res.send("잘못된 접근입니다!!");
  }


  res.render("comment", { commentInfo: comments[commentId - 1] });
});

//[404 Error]
//맨 마지막 라우트로선언
//그렇지 않으면 나머지 코드 무시됨
//* :all
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});




