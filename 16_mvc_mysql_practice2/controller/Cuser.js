// TODO: 컨트롤러 코드

const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.postsignupUser = (req, res) => {
  //model(user.js)에 있는 db정보를 받아서 라우터로 넘겨주기 위한 명렁어
  User.signup(req.body, (result) => {
    console.log("Cuserrr.js", result);
    res.send({
      userid: req.body.userid,
      password: req.body.password,
      name: req.body.name,
    });
  });
};

exports.postsigninUser = (req, res) => {
  User.signin(req.body, (result) => {
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

exports.eachUser = (req, res) => {
  User.eachUser(req.body, (result) => {
    console.log("result!!!!: ", result);
    // console.log("data!!!:", data);
    console.log("reulst[0]:!!!!:", result[0]);

    if (result.length > 0) {
      //로그인 성공
      res.render("profile", { data: result[0] }); //[{}]
    }  //post/ USER/PROFILE
      //로그인에 성공 되어야만 수행하는 요청 ELSE절 추가 안해도됨 이미 EJS파일에 성공실패를 나눠서 실패하면 redirect가 되도록 만들어놨기 때문에 
  });
};

exports.posteditUser = (req, res) => {
  console.log(req.body);

  User.posteditUser(req.body, (result) => {
    console.log("Cuser.js", result);
    res.send("수정 성공!!");
  });
};

exports.deleteUser = (req, res) => {
  console.log(req.body);
  console.log(req.body.userid);

  User.deleteUser(req.body.userid, (result) => {
    //왜 선생님껀 result있고 난 없즤
    console.log("Cuser.js", result);
    res.redirect("/user/signin"); // res.redirect(주소): 리다이렉트할 주소와 함께 응답 보내기!!
  });
};
