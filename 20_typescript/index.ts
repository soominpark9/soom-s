//타입스크립트란 자바스크립트의 타입부분을 조금더 업그레이드 해서 쓸 수 있는 언어

let 이름: string = "kim";
// :는 이 변수에는 string(문자)type 만 들어올 수도 있다 라는 뜻
// 앞으로 무조건 문자만 들어 올 수 있다
// string말고 들어갈 수 있는 type은 대표적으로 string number boolean null
// undefined bigint [] {} 등 이 있다

// 배열
let 이름2: string[] = ["김", "박"];
// :string[] 이 변수엔 string담긴 array만 들어올 수 있다

// object
let 이름3: { name: string } = { name: "kim" };
// 여기서 name은 속성이다 근데 만약 { name? : string } 이라 하면 name에 string이 들어올수도 있고 아닐 수도 있어요 란 뜻
// 그럼 뒤에 {} 이 와도 에러가 안난다 왜냐면 앞에서 아니여도 에러내지말아주세요의  ?를 썼기 때문에

let names: string | number = "kim";
let namess: string[] | number = 123;
var 오브젝트: { data: number | string } = { data: "123" };

//array
var 어레이: (number | string)[] = [1, "2", 3];

// 다양한 타입이들어 오게 하는 방법 (Union type)
// 타입 지정하는게 굉장히 긴데 이걸 변수에 담아서 사용할 수 도 있다
type 내타입 = string | number;
let 타입쓰기: 내타입 = 123;
// 이렇게 가져다 쓸 수 있다
// 타입은 작명할때 대문자로 쓰는게 일반적!! 왜냐하면 그래야 변수명이랑 차별이 있어 눈에 잘 들어옴

// any 타입
// 아무자료나 집어 넣을 수 있는 타입 (쉽게 말하면 실드 해제) ->기본 타입지정이 해제됨
// any 타입을 막 쓸수 없는 이유는 타입관련 버그가 생길 경우 왜 그런지 추적하기가 어려우니까
// 그리고 타입실드를 안씌우면 타입스크립트를 쓸 이유가 없다
// 즉 비상시 쓰는 변수 타입체크 해제 기능 이런 용도로만 쓰자!!!
let Something: any = "kim";
Something = 123;
Something = undefined;
Something = [];

// unknown 타입
// 요즘 타입스크립트는 unknown 타입을 사용한다 any와 똑같이 모든 타입을 집어 넣을 수 있다
let Somethings: any = "kim";
Something = 123;
Something = undefined;
Something = [];
// 역시 에러나지 않는다. 아직 어떤 타입이 들어올지 모를 경우, 다양한 타입을 집어넣어야 할 경우 이걸 사용하도록 해봦
// *중요한 특징은*
// 1.unknown 타입엔 모든 자료 다 집어넣을 수 있다
// 2.자료 집어넣어도 타입은 그대로 unknown 이다.

// let Someone: unknown;
// let 변수1:string = Someone;
// let 변수2:string = Someone;
// let 변수3:string = Someone;
// 당연히 unknwon 타입을 다른 곳에 집어넣으려고 하면 그쪽 실드가 발동해서 에러가 난다 (any는 안그럼)

// let Someones: unknown;
// Someones[0];
// Someones -1;
// Someones.data;
// 이래도 에러난다 (any는 안그럼)

// **** 여기서 왜 이렇게 에러가 나냐!!!
// 왜냐면 타입스크립트는 정확하고 확실한걸 좋아한다
// 확실하지 않는 타입에 뺄셈을 할수도 없고
// 타입스크립트에선 뺄셈은 number 류의타입만 할 수 있고
// .name 이런건  object 류의 타입만 할 수 있다라고 정의되어 있기 때문

// ---> 결론 아직 뭘 집어넣을지 모르는데 약간의 안정성을 갖고 싶을 때 unknown타입을 써본다
// 하지만 코드짜다가 any나 unknown을 부여할 경우는 별로 없다

// let 나이 : string|number;
// 나이 +1;   -->자바에선 괜찮은데 여기선 에러뜸
// 왜 에러?? string타입 +1 (허용) number타입 +1(허용) string|number(안돼)(유니온타입에서 안돼) 유니온 타입이란 두가지의 타입을 섞어서 만든 새로운 타입

// let 나이: unknown = 1;
// 나이 + 1;
// 같은 이유의 에러 나이가 여기서 unknwon타입으로 지정되있어서 에러가 뜬다 typescript는 엄격하다!

// 함수안에 파라미터안에도 타입 지정할 수 있다
function 함수(x: number): number {
  return x * 2;
}
// 여기서 (x :number) :number 두번쨰 :number 은 return으로 어떤 type이 return될지도 쓸 수 있다.

// 이 자리에는 무조건 number가 들어와야 한다 라고도 지정가능
// array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let john: Member = [123, true];

// object 타입지정해야할 속성이 너무 많으면  [key: string]: string; 해주면
// 글자로된 모든 pbject 속성 타입은 : string 이라는 의미가 된다
type Members = {
  [key: string]: string;
};
let park: Members = { name: "park", age: "123" };

//class 문법 타입 지정
//변수를 미리지정해서 type 지정을 해야 한다

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

// 사실 타입지정은 자동으로 된다 온갖 곳에 타입을 다 지정할 필요가 없다.
// 쉴드가 되서 타입지정 문법 생략 가능 let 회원들 = 'park' 만 해도 회원들 위에
// 커서를 올리면 type 이 string으로 뜬다

//================================================================================

//학교라는 변수에 타입지정해보기

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];

// 함수에 타입지정해서 쓰는 법
// 첫번째 number는 파라미터 값 지정 두번쨰 number는 return 값 타입 지정
function 함수2(x: number): number {
  return x * 2;
}
함수2(6);

// 함수에서만 쓸 수 있는 특수한 타입 -> void 타입
// return 하는 값을 설정하기 싫을 때 그냥 1+1 만 하고싶은데요 이럴때 즉 return이 없을 때
// 아무것도 return 하기 싫고return안되게 엄격히 관리 하고 싶을때
// return이 혹시라도 생기면 그것도 오류로 알려주세요 라 할만큼 엄격하게 관리하고 싶을 때
// 그럴 때 return 값 타입 지정장소에 void 를 넣으면 된다
// 그러면 실수로 뭔가 return 하는 걸 사전에 막을 수 있다
function 함수3(x: number): void {
  1 + 1;
}
함수3(2);

//--->>여기서 자바스크립트와 다른점
// 타입 지정된 파라미터는 필수임!! 함수3(2) 이런식으로 output 함수 () 안에 파라미터꼭 써줘야 한다

//--->>만약 자바스크립트 처럼 파라미터를 넣든 안넣든 동작하게 만들고 싶어요 즉 파라미터가 옵션이되게 하고 싶을 경우엔
// 파라미터값 x옆에 물음표?를 넣어주면 된다
// 오브젝트의 경우에도 key 값 옆에 {age?:number} 이렇게 물음표 넣어주면 이거랑 똑같은 상황이 된다
function 함수4(x?: number): void {}
함수(0);

// 물음표의 뜻이란 변수: number | undefined와 똑같은 의미

//======================================================================================================
//실습1
//이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
//아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.

function 이름5(x?: string) {
  if (x) {
    console.log("안녕하세요" + x);
  } else {
    console.log("왜 입력안함");
  }
}

//실습2
//함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
//예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
//숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다. 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

function 숫자(x: string | number): number {
  return x.toString().length;
}
//실습3
//(숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
//1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
//2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
//3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
//(예시) 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
//결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.
function 결혼(money: number, house: boolean, charm: string): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500;
  }
  if (charm === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(700, false, "중");
console.log(100, true, "상");
