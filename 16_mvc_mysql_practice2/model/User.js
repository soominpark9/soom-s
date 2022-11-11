// TODO: DB(mysql) 연결
// TODO: 모델 코드

const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234aa",
  database: "kdt",
});

exports.signup = (data, cb) => {
  conn.query(
    `INSERT INTO user (userid, name, pw) VALUES ('${data.userid}','${data.name}','${data.pw}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("Cuser.js ", rows);
      console.log("Cuser.js ", rows.insertId);
      cb(rows.insertId); //실행이 됬으면 실행이 됬기 떄문에 회원가입 성공이라는 true 값믄 넘겨줬기때문에
      //Cuser(controller)의  User.signup의 result에 여기 내용이 넘어간다
      //cb는 결국 결과 값을 넘겨주기위해 ()안에 rows.insertId를 넣은거고, delete나 edit처럼 수행 하고 나서
      //결과 값을 넘겨줄 필요가 없을 땐 cb() 로 적어둔다
    }
  );
};

exports.signin = (data, cb) => {
  console.log(data.userid);
  console.log(data.pw);
  conn.query(
    `SELECT * FROM user WHERE userid ='${data.userid}' and pw ='${data.pw}' LIMIT 1`,
    //원래는 디비설정했을떄 유니크 설정되어있으면 중복 값을 모두 가져오지 않는다 근데 우린 아직 그거까지 하지 않아서
    //LIMIT을 써놓은것, limmit을 1 로 해두면 중복값이 여러개있어도하나만 가져오면되서 편한데 우리는 그래서 중복값을 피하기 위해서 limit을 저긍넣어서 중복값이 있을때 하나만 가져와준다
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("Cuser.js", rows);
      cb(rows);
    }
  );
};

exports.eachUser = (data, cb) => {
  conn.query(
    `SELECT * FROM user WHERE userid ='${data.userid}'`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("Cuser.js", rows);

      cb(rows);
    }
  );
};

exports.posteditUser = (data, cb) => {
  conn.query(
    `UPDATE user SET userid='${data.userid}',pw='${data.pw}',name='${data.name}' WHERE id=${data.id}`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log("Cuser.js", rows);
      cb();
    }
  );
};

exports.deleteUser = (userid, cb) => {
  conn.query(`DELETE FROM user WHERE userid='${userid}'`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log("Cuser.js", rows);
    cb();
  });
};





