const mysql = require("mysql");

//DB 연결 정보

const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "1234aa",
  database: "kdt",
});

// sql연결
// query (SQL, callback)

exports.getVisitors = (callback) => {
  conn.query("SELECT * FROM visitors", (err, rows) => {
    if (err) {
      throw err;
    }
    console.log(rows); //rows ->> [{},{},{},{}] 배열형태로 찍히게한다
    callback(rows);
  });
};

// exports.postVisitor = (data, callback) => {
//   //한번에 하나만 등록되기 때문에 복수형이 아닌 단수형을 썼다.
//   conn.query(
//     `INSERT INTO visitors (name,comment) VALUES ('${data.name}', '${data.comment}')`,
//     (err, rows) => {
//       if (err) {
//         throw err;
//       }

//       console.log("Visitor.js", rows);
//       callback(rows.insertId);
//     }
//   );
// };

exports.postVisitor = (data, callback) => {
  // data: 사용자가 폼에 입력한 정보
  // { name: '빅파이', comment: '맛있다' }

  conn.query(
    `INSERT INTO visitors (name, comment) VALUES('${data.name}', '${data.comment}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }

      console.log('Visitor.js', rows);
      callback(rows.insertId); // pk (id)
    }
  );
};

exports.deleteVisitor = (id, callback) => {
  // id: 사용자가 삭제버튼을 클릭한 그 행의 id 값
  console.log('id: ', id);
  conn.query(`DELETE FROM visitors WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    console.log('Visitor.js: ', rows);
    callback(true); // true : 삭제 성공을 의미
  });
};





















// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가 왔다." },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };
