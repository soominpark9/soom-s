import { useState } from "react";

const Prob52 = () => {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  //여기서 만드는 상태는 comment List state이다 comment가 반복되어야 하기 떄문에
  //아래의 배열의 원소는 객체이다.
  //백에있는 데이터를 가져왔따고 임의로 생각해줘도 된다
  //add 버튼을 누를때마다 comments가 추가되도록 할 것이다 tbody에 내용이 반복되어야 하므로 거기에 comment를 map으로 돌려준다
  const [comments, setComments] = useState([
    { writer: "민수", title: "안뇽" },
    { writer: "지민", title: "Hi" },
    { writer: "희수", title: "넘 춥다" },
  ]);

  const addComment = () => {
    console.log("btnClick");
    //add 눌렀을 때 새로운 정보가 등록되기 위해선??
    //1. comments State에 원소 추가 {writer: xxx, title:xxx}
    let newComment = { writer: inputWriter, title: inputTitle };
    console.log(newComment);
    // {writer: writer의 value값이 들어가야하고, title: title의 value 값이 들어가야한다}

    //2. 원소를 comment state에 추가하가 => state 변경
    setComments([...comments, newComment]); // 기존 comments에 새로운 newComment를 추가함

    //push를 써도 되지만 현재는 comments를 상태로 관리하고 있기 때문에 setComments를 써야한다
    //...comments: 기존 state 배열의 모든 원소
    // newComment: 새로 추가된 state 배열의 원소
    // ([...comments, newComment]) : 변경된  state 배열
    console.log([...comments, newComment]); //찍어보면 암
    //3. input 초기화
    setInputTitle("");
    setInputWriter("");
  };
  return (
    <>
      <form>
        <label htmlFor="writer">작성자</label>
        <input
          type="text"
          id="wirter"
          value={inputWriter} //변수
          onChange={(e) => setInputWriter(e.target.value)} //이벤트리스너
        />
        <label htmlFor="title">제목:</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
        {/* 중괄호를 쓰는이유는자바스크립트 형식을 jsx에서 쓰려면 {}필수 */}
      </form>

      <table border={1} style={{ marginTop: "30px", width: "500px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>

        <tbody>
          {comments.map((c, idx) => {
            {
              /* comments를 map(반복해준다) c는 객체를 지징하는 가상의 변수를 만들어 넣음
        즉 c = {writer: xxx, title:xxx} */
            }

            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                {/* 번호 */}
                <td>{c.title}</td>
                {/* 제목 */}
                <td>{c.writer}</td>
                {/* 이름 */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Prob52;
