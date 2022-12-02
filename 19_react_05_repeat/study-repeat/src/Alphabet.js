import { useState } from "react";

const Alphabet = () => {
  const [alphabets, setAlphabets] = useState([
    // ["k", "d", "t", "3", "r", "d"] 배열에 문자 하나씩 원소가 될 경우

    // 밑에는 객체가 배열 원소가 될경우
    // 배열 (state)에 고유 id를갖도록 설정
    // 이렇게 쓸 경우 밑에 {alphabets.map((alphabet, idx) => { return <li key={idx}>{alphabet}</li>;
    // 대신 {alphabets.map((alphabet) => { return <li key={alphabet.id}>{alphabet.alpha}</li>; 로 쓰면된다

    { id: 1, alpha: "K" },
    { id: 2, alpha: "d" },
    { id: 3, alpha: "t" },
    { id: 4, alpha: "3" },
    { id: 5, alpha: "r" },
    { id: 6, alpha: "d" },
  ]);
  console.log(alphabets);

  const [inputAlpha, setInputAlpha] = useState("");
  const [nextId, setNextId] = useState(7); //<--새로운 항목 추가를 위한 next id 값이다
  const addAlpha = () => {
    // 기존의 alphabets state에 새로 입력된 input 값 추가
    const newAlpha = alphabets.concat({
      id: nextId,
      alpha: inputAlpha,
    });
    setNextId(nextId + 1); //다음 항목 id를 위해 1증가
    setAlphabets(newAlpha); //alphabets라는 state에 newAlpha(객체)를 추가 한 것
    setInputAlpha(""); //input초기화
  };

  const deleteAlpha = (id) => {
    // console.log(">>>", id);
    const result = alphabets.filter((alphabet) => alphabet.id !== id);
    setAlphabets(result);
  };
  return (
    <div>
      <input
        type="text"
        value={inputAlpha}
        onChange={(e) => setInputAlpha(e.target.value)}
      />
      <button onClick={addAlpha}>ADD</button>
      <ul>
        {alphabets.map((alphabet) => {
          return (
            <li
              key={alphabet.id}
              onDoubleClick={() => {
                deleteAlpha(alphabet.id);
              }}
            >
              {alphabet.alpha}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Alphabet;
