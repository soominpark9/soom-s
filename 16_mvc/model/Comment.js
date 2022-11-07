// (임시) DB로부터 댓글 목록을 받아옴
// 배열: 전체 댓글
// 각 객체: 댓글 하나
// (임시) DB로부터 댓글 목록을 받아옴
// 배열: 전체 댓글
// 각 객체: 댓글 하나
//app js를 컨트롤러 Cmain 라우트로 나눈 거니까 각각의 파일에 내보내기인 exports를 써줘야한다

exports.commentsInfos = () => {
  return [
    {
      id: 1,
      userid: "helloworld",
      date: "2022-10-31",
      comment: "안녕하세요^~^",
    },
    {
      id: 2,
      userid: "baseball",
      date: "2022-11-05",
      comment: "야구 좋아합니다",
    },
    {
      id: 3,
      userid: "ssglanders",
      date: "2022-11-02",
      comment: "ssg 팬 입니다",
    },
    {
      id: 4,
      userid: "koreanseries",
      date: "2022-10-15",
      comment: "한국시리즈 우승기원",
    },
  ];
};
