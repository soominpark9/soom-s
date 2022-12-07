import { useRef, useState } from "react";

const ProbCopy = () => {
  const [inputWriter, setInputWriter] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  // const [selectWriter, setSelectWriter]= useState("");
  // const [selectTitle, setSelectTitle]= useState("");
  const [comments, setComments] = useState([
    { writer: "민수", title: "안뇽" },
    { writer: "지민", title: "하이하이" },
    { writer: "희수", title: "멋쟁이" },
  ]);
  const writerInputElem = useRef();
  const titleInputElem = useRef();

  const addComment = () => {
    console.log("함수 실행함!");
    console.log(inputWriter.trim().length);
    //trim() 양쪽 공백 제거한 길이 => 조건 충족안되면 각각 input에 포커즈 한다
    console.log(inputTitle.trim().length);

    if (inputWriter.trim().length < 1) {
      // input focus
      writerInputElem.current.focus();
      console.log("함수 종료함!");
      return; //다시 올라가서 함수 종료 됨
    }

    if (inputTitle.trim().length < 1) {
      // input focus
      titleInputElem.current.focus();
      console.log("함수 종료함!");
      return;
    }

    let newComment = { writer: inputWriter, title: inputTitle };
    setComments([...comments, newComment]);
    setInputWriter("");
    setInputTitle("");
  };

  // const searchBtn =() => {

  //   if (setSelectWriter || setComments) {

  //     return (
        
  //     )

  //   }
  // }

  return (
    <>
      <form>
        <label htmlFor="writer">22작성자: </label>
        <input
          ref={writerInputElem}
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목: </label>
        <input
          ref={titleInputElem}
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>
<br />
      {/* <div>
        <select name="list" >
          <option value="writerList" onChange={(e) =>setSelectWriter(e.target.value)}>작성자</option>
          <option value="titleList" onChange={(e) =>setSelectTitle(e.target.value)}>제목</option>
        </select>
        
        <input type="text" 
        placeholder="검색"
        id="search"
        
        />
        <button type="button" onClick={searchBtn}>검색</button>
        <button type="button" >전체</button>
      </div> */}

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
            // c = { writer: xxx, title: xxx }
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{c.title}</td>
                <td>{c.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProbCopy;
