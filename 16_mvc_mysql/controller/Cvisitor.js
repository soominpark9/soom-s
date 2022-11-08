const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  //before
  // console.log(Visitor.getVisitors());
  // res.render('visitor', { data: Visitor.getVisitors() });

  //after
  Visitor.getVisitors((result) => {
    //model에서 가져옴
    console.log("Cvisitors.js", result);
    res.render("visitor", { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body);

  // Visitor.postVisitor(req.body); //req.body가 model파일의 (data,callback) 중에 req.body가 data에 들어 갈 수 있도록

  Visitor.postVisitor(req.body, (result) => {
    //callback이 result부터 바디 끝까지가 된다 callback에 들어간 (rows.inserId)->가 여기서 callback값 즉 insert된 id값,이름값,내용값을 프론트로 넘겨준다
    console.log("Cvisitor.js", result);
    res.send({
      id: result,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};


exports.deleteVisitor = (req, res) => {
  console.log(req.body); // { id: '1' }
  console.log(req.body.id); // 1

  Visitor.deleteVisitor(req.body.id, (result) => {
    console.log('Cvisitor.js: ', result);
    res.send('삭제 성공!!!');
  });
};
