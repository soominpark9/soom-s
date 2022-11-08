const User = require("../model/login");
const userInfo = User.userInfo();

//조건or명령에대한 함수를 넣는다
exports.main = (req, res) => {
  res.render("index", { title: " 실습" });
};

// POST /practice30
exports.practice30 = (req, res) => {
  console.log(req.body);
  //db로 받아온 id pw랑 사용자가 폼에 입력한 id,pw
  if (
    userInfo.realId === req.body.userId &&
    userInfo.realPw === req.body.userPw
  ) {
    res.send({ userInfo: req.body, isLogin: true });
  } else {
    res.send({ isLogin: false });
  }

  // res.render("");
  // render가 필요할때는 다른 페이지로 넘어가서 다른 내용을 보여줘야 할 때
  // 이때는 res.send만 이용해서 페이지 이동없이 로그인 패스워드 클릭했을 때 바로 아래에 결과만 보여줄때
};
