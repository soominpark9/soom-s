// (임시) DB로부터 댓글 목록을 받아옴
// 배열: 전체 댓글
// 각 객체: 댓글 하나

const Comment = require('../model/Comment'); //상위폴더로 이동해서 model파일의 comment파일까지 이동

 //exports ->바로내보내기
exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  console.log(Comment.commentsInfos()); // 댓글 목록 확인용
  // { commentInfos: [ {}, {}, {}, {} ]}
  res.render("comments", { commentsInfos: Comment.commentsInfos() }); 
};

exports.comment = (req, res) => {
  console.log(req.params); // 라우트 매개변수(:id)에 대한 정보 담겨있음
  console.log(req.params.id); // id 값 추출

  const comments = Comment.commentsInfos(); //댓글 목록 확인용 : [{},{},{},{}]
  const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
  console.log(comments[commentId - 1]); // 댓글 목록에서 특정 댓글 정보 추출

  if (commentId < 1 || commentId > comments.length) {
    return res.render("404");
  }

  if (isNaN(commentId)) {
    return res.render("404");
  }

  res.render("comment", { commentInfo: comments[commentId - 1] });
};
