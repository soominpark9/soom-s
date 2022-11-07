const express = require("express");
const router = express.Router(); //경로만 알려주면됨
const controller = require("../controller/Cmain");
//컨트롤러에 있는 파일 사용 할 수 있다 왜? exports키워드 사용해서 controlloer로 가지고 오면
//controller의 main을 사용할 수 잇게 된다.

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

//*경로만 설정해주면됨
//경로설정 = 라우팅
//기본경로 : localhost:PORT
// GET / => localhost:PORT/
router.get("/", controller.main);

// GET /comments => localhost:PORT/comments
router.get("/comments", controller.comments);

// GET /comment/:id => localhost:PORT/comment/:id
router.get("/comment/:id", controller.comment);

// module.exports 를 통해서 router을 등록해줘야 그래야 다른 파일에서도 사용이 가능해진다
module.exports = router;
// express불러오고 n=mldule.exports 쓴거 외에는 그전 app js에서 불러온 내용들


