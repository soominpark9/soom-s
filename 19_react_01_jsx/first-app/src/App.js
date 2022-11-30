import "./App.css";

function App() {
  const name = "soom";
  let flag = true;
  let txt = "";
  const petName = "코코";
  const animal = "강아지";
  const a = 10;
  const b = 5;

  if (flag) {
    txt = "True 입니다";
  } else {
    txt = "False 입니다";
  }

  const styles = {
    h2: {
      backgroundColor: "pink",
      fontSize: "40px",
      color: "white",
      width: "80%",
      margin: "10px auto",
    },
    p: {
      backgroundColor: "red",
      fontSize: "40px",
      color: "white",
    },

    hh: {
      float: "left",
      underline: "",
    },
  };
  // JSX 문법
  //컴포넌트에 여러 요소가 있으면 반드시 부모 요소 하나로 감싸야 함!
  // 꼭 div가 아니여도 되지만 부모요소가 하나여야 한다 <> 이런 빈태그도 부모요소로 쓸 수 있음
  return (
    <div className="App">
      {/*2. {} 중괄호로 감싸면 자바스크립트 표현식 사용 가능하다 아래처럼 변수를 넣은 표현식 사용가능 */}
      {/*3. style 속성
      - dom 요소에 스타일 적용시 문자열 x -> "객체 사용
      - 스타일 이름 중 하이픈(-) 포함시 camelcase 작성해야함 
      */}
      <h2 style={styles.h2}>안녕 {name}</h2>
      <h2 style={styles.p}>안녕 {name}</h2>
      <h2>{name === "soom" ? "반가워" : "누구...?"}</h2>
      <h2
        style={{
          backgroundColor: "pink",
          fontSize: "40px",
          color: "white",
          width: "80%",
          margin: "10px auto",
        }}
      >
        안뇽~~~~
      </h2>
      <p>반가워~~~</p>
      <p>{txt}</p>
      <p>{flag ? <h3>true임</h3> : <h3>false임</h3>}</p>
      {/* 4. className 사용
      - class 속성이 아닌 className 속성을 사용
      */}
      <h3 className="hello" onClick {...() => alert("안녕안녕")}>
        hello~~~~~~~
      </h3>
      {/* 5. 종료 태그가 없는 태그의 사용
      - 기존 html 태그가 없더라도 종료태그를 작성해야 함
      - or self-closing
      - 잘못된 예) <input>, <br>
      - 올바른 예) <input></input>, <br />
       */}
      {/* 6. 주석
       -// : jsx 외부주석
       -jsx 내부주석은 현재 쓰고 있는 중괄호로 쓰고 있는 주석이다  
       */}
      <div>이것은 div입니다.</div>
      <h3>이것은 div 안에 있는 h3 태그입니다.</h3>

      <h2> 제 반려 동물의 이름은{petName} 입니다.</h2>
      <h2>
        {petName}는 {animal} 입니다.
      </h2>

      {3 + 5 === 8 ? <h2>정답입니다.</h2> : <h2>오답입니다.</h2>}

      {a > b && <h2>a가 b보다 큽니다.</h2>}

      <div className="test">Hello World</div>
      <br />
      <label htmlFor="id">아이디 : </label>
      <input type="id" />
      <br />
      <br />
      <label htmlFor="password">비밀번호 : </label>
      <input type="password" />
      <br />
      <br />
      <div className="all">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="a"></div>
      <div className="b"></div>
      <div className="c"></div>
      <div className="d"></div>
      <div className="e"></div>
      <div className="f"></div>
      <div className="g"></div>
     
    </div>
  );
}

export default App;
