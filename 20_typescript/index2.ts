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
