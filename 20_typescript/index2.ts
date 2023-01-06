//타입도 변수에 담아 쓰자 type 키워드 써서 & readonly
//type 키워드로 변수만들기 -> type alias 라고 한다
//type 변수는 항상 대문자로 시작 그래야 다른 변수들이랑 차의점이 잘보인다

type Animal = string | number | undefined;

let 동물: Animal = 123;

// object readonly 속성
//let 동물1 : {name : string, age :number} = {name : 'kim', age:20}
//이렇게 하면 변수명이 너무 길어지기 때문에 첫번째 예시처럼 type 변수 사용하면 된다

type Animal1 = { name: string; age: number };
let 동물1: Animal1 = { name: "kim", age: 20 };

const 출생지역 = { region: "seoul" };
//위에 const안에 있는 object는 바꿀 수 있다 왜냐하면
//const는 재할당을 막는 변수지 object안에있는 내용의 수정을 막는 키워드는 아니기 때문이다

출생지역.region = "busan"; //변경됨

//그런데 !! typestript를 쓰면 object 자료 수정도 막을 수 있다
//readonly 쓰면 object 자료 수정도 막을 수 있다
//근데 여기서 이름을 남친.name = '죠슈아' 로 마지막에 실행을 시키면
//typescript에서는 name에 에러가 떴다고 (수정 불가능하다고) 밑줄경고가 생기는데
//typescript 에러는 에디터 & 터미널에서만 존재한다
//즉 js파일로 가보면 조슈아로 잘 바뀌어있는것을 확인가능 ㅎㅎ ..
//결국 타입스크립트는 js 파일까지 바꿔주는게 아니라 그냥 여기서 에러경고나 그런것을 확인 할 수 있는 정도?
type Boyfriend = {
  readonly name: string;
};

const 남친: Boyfriend = {
  name: "마이크",
};

/*type Boyfriend = {
    name? : string
}
? 표는 옵션이 맞긴 맞지만 string | undefined가 들어올수있다라는 뜻 
이렇게 하면 object 속성만들때 name은들어와도 되고 안들어와도 된다라는 뜻이됨*/

//type여러개 지정 가능 -> 당연히 union type으로 extend(합치기) 가능
type Name = string;
type Age = number;
type Person = Name | Age;

type PositiongX = { x: number };
type PositiongY = { y: number };
//위에 두개를 합쳐서  {x: number , y: number} 로 합치고 싶다면 & 연산자 이용!

type NewType = PositiongX & PositiongY; //{x: number , y: number} 나옴

//진짜로 되는지 확인하고 싶다면
let positiong: NewType = { x: 10, y: 20 }; //에러안뜨는거보니 object가 extend됬다

//type변수 쓸때 주의사항
//1. 같은 이름의 type 변수 재 정의 불가능 -> 엄격히 써야한다

//===============================간단실습===========================

/*
1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다. */

type Color = {
  color?: string;
  size: number;
  readonly position: number[];
};

let 테스트용변수: Color = {
  size: 123,
  position: [1, 2, 3],
};

/* 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. */

type Email = {
  name: string;
  phone: number;
  email: string | undefined;
};

let 테스트용변수2: Email = {
  name: "kim",
  phone: 123,
  email: "abc@naver.com",
};

/* 다음을 만족하는 type alias를 만들어보십시오.
1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다*/

type User = {
  name: string;
  phone: number;
  email?: string;
};

type Adult = { adult: boolean };

type NewUser = User & Adult;

let 회원가입정보: NewUser = {
  name: "kim",
  adult: false,
  phone: 1234,
};

//==========================================================================================
//Literal Types로 만드는 const 변수 유사품
//만드는법
//1. string,number 이런것만 타입이 될 수있는게 아니라
//일반 글자같은 것도 타입이 될 수 있다.
let john: "대머리";
let kim: "솔로";
//위에 만든 타입은 마음대로 변수나 함수에 할당 가능하다
//신기하게도 john이라는 변수는 이제 대머리라는 글자만 할당할 수 있고
//kim이라는 변수는 솔로라는 글자만 할당 할 수 있다
//*특정 글자나 숫자만 가질 수 있게 제한을 두는 타입을 literal type이라고 부른다* -> 더 엄격한 실드

//Literal Types의 장점 : 변수에 뭐가 들어올지 더 엄격하게 관리가능
//자동완성 힌트도 good

let me: "키큰" | "여자";
me = "키큰"; //키큰 혹은 여자만 변수로 가질 수 있다

function 함수(a: "hello"): 1 | 0 {
  return 1;
}
함수("hello");
//함수도 똑같다. 파라미터 타입선언을 할때 숫자를 집어넣으면 그 숫자만 파라미터로 넣을 수 있고
//return 타입선언할 때도 글자나 숫자를 집어넣으면 그 값만 return 할 수 있다.
//파라미터자리에 무조건 hello만 들어올수 있다 함수 파라미터 자리에 들어올 수 있는 자료가 몇개없다면
//literal type을 지정해놓는것이 더 편할듯

// 가위바위보 중 1개 입력
// 가위 바위 보 만 들어올 수 있는 array를 return 해야함

function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위", "보"];
}
가위바위보("가위");

//const 변수의 한계
//변수를 두개이상지정못하잖아 -> literal type 쓰면 두개이상 저장 가능
//literal type은 const 변수와 유사하게 사용 가능
//그래서 literal type은 const변수의 업그레이드 버전이라고 생각하면된다
const 변수 = "kim";
let 접니다: "park" | "패셔니스타";

//literal type의 문제점
var 자료 = {
  name: "kim",
};
자료.name; //console창에 kim나옴

function 내함수(a: "kim") {}
내함수("kim"); //literal type이용해서 파라미터로kim만 받을 수 있게 했다
//내함수(자료.name) --> 하면 에러가 난다 why ?????
//파라미트 a의 타입은 kim 인데 자료.name의 타입은 string이기 때문에
//해결법 1. object만들때 타입을 미리 지정해주던가 var 자료: kim = {}
//해결법 2. as 문법으로 타입을 가짜로 만들던가 (자주쓰는건 좋지 않다)
//해결법 3. as const 키워드 쓰던가

var 자료2 = {
  name: "kim",
} as const;
//as const의 object는 literal type 지정 알아서 해주세요 라는 뜻

//as const 효과
//1. name 위에 커서두고 속성 확인해보면 속성의 타입을 오른쪽에 있는 value로 변경시켜줌
//2. object 속성들에 모두 readonly를 자동으로 붙어져 있다고 생각하면 됨

//======================================================================================

//함수와 methods에 type alias 지정하는 법

//1.함수type전체를 alias를 가져다 쓸 수 있는 방법
type 함수타입 = (a: string) => number; //함수타입은 () => {} / number가 리턴타입
//2.함수 type alias 부착하려면 함수 선언식이아닌 표현식을 써야한다
let 함수3: 함수타입 = function () {
  return 10;
};

type NumOut = (x: number, y: number) => number;
let ABC: NumOut = function (x, y) {
  return x + y;
};

//methods 안에 타입 지정하기
//object 안에 함수 만들 수 있다
//여기서 plusOne이 함수다
//object 안의 함수 지정은 어떻게?
//함수에 파라미터가 있는데 타입지정안하면 혼남 즉 에러뜸
type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: "kim",
  age: 30,
  plusOne(a) {
    return a + 1;
  },
  changeName: () => {
    console.log("안녕");
  }, //얘도 만든 표현식 함수
};
회원정보.plusOne(1); //plusOne함수안에 있는 내용이 실행
회원정보.changeName();

//숙제를 위한 콜백 함수 개념
//함수안에 들어간 함수를 콜백 함수라고 한다

function 함수5(a) {
  a();
}
function 함수6() {}
함수5(함수6); //1.함수 5내부 코드 a()이 실행됨 2. 근데 파라미타를 a자리에 집어넣어 함수6() 실행됨
//함수에다가 함수 집어넣어 실행시키는 일종의 패턴이다

//실습
/*다음 함수2개를 만들어보고 타입까지 정의해보십시오.
- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
- 함수에 타입지정시 type alias를 꼭 써보도록 합시다.  */

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};
function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

/*함수에 함수를 집어넣고 싶습니다.

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 
이 함수는 어떻게 만들면 될까요?
둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다. */
function 만들함수(a, func1, func2){
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2)
  }
  만들함수('010-1111-2222', cutZero, removeDash) 