//model은 data만 넣는곳!! (db이용할 곳)

exports.userInfo = () => {
  return {
    realId: "banana",
    realPw: "4321",
  };
};

exports.users = () => {
  return {
    realId: "apple",
    realPw: "1234",
    realName: "사과사과",

    realId: "banana",
    realPw: "4321",
    realName: "바나나나나",

    realId: "happy",
    realPw: "qwer1234",
    realName: "해피해피",
  };
};
