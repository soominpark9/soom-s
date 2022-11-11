const models = require("../models");

exports.main = (req, res) => {
  res.render("index");
};
exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.postsignupUser = (req, res) => {
  console.log("&&&&&&&&& ", req.body);
  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  }).then((result) => {
    console.log("create >> ", result);
    res.send(result);
  });
};

exports.postsigninUser = (req, res) => {
  //프론트에서 찍은 값이 내 백에 있는지 확인하는것
  models.User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    res.send(result);
  });
};

exports.eachUser = (req, res) => {
  models.User.findOne({
    where: { userid: req.body.userid },
  }).then((result) => {
    console.log("findOne >> ", result);
    res.render("profile", { data: result }); //백에서 프론트로
  });
};

exports.posteditUser = (req, res) => {
  models.User.update(
    {
      name: req.body.name,
      password: req.body.password,
    },
    {
      where: {
        userid: req.body.userid,
      },
    }
  ).then((result) => {
    console.log("update >> ", result);
    res.send("수정 성공!!!");
  });
};

exports.deleteUser = (req, res) => {
  console.log("*******", req.body);

  models.User.destroy({
    where: { userid: req.body.id },
  }).then((result) => {
    console.log("destroy >> ", result);
    res.send("삭제 성공!!!!");
  });
};
