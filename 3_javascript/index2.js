console.log('connected!')

// 변수
// - 변할 수 있는 수 , 정해진 값이 아닌 수 , variable
// - 데이터 보관함
// - 어떤 값을 저장하기 위해 메모리 공간을 "식별"하고자 붙인 이름

// 단계
// 1. 변수 선언
// 2. 값 할당 

// var 키워드
// var a;   // 선언
// console.log(a);  // undefined 값이 나옴 -> 값을 할당 하지 않은 경우 

a=2;  //할당
console.log(a); //2


var a = 3;   //선언+할당 동시에 재선언 까지 진행함 재선언 -> 바람직 하지 않은 코드이다.
console.log(a);
a=4;
// 이미 위에서 a를 변수로 지정해서 계속 a 를 사용 할 수 있ㄷ
console.log(a);
a=10;
console.log(a);

// var 키워드의 문제점
// - 변수 재선언이 허용 됨. ( 이부분에 있어서 오류를 일으키지 않는다 )
// - 변수를 선언하기 전에 값을 할당이 허용됨. ( 장점으로 보일수도 있는데 유지보수가 최악이다 )
// ( 어디서 에러가 났는데 무엇 때문에 꼬였는지 알기가 너무 어려움 )
// var 키워드를 사용 잘 안했으면 하신다, 특별한 경우 아니면은 사용x
// var aa; 를 선언 하지 않고 아래처럼 할당만 했을때
aa = 123;  //할당 
console.log(aa);  // <-- 를 사용할 수 있다

// 이러한 문제점들 때문에 새로 등장한게 아래의2가지
// let 키워드
// * var와 다르게 let키워드는 변수 중복선언 불가능 중복선언시 에러 뜸
// * 변수 중복선언은 안되지만 재할당은 가능한 키워드

let c; // 선언
console.log(c);  //undefined: 값 할당하지 않은 경우
c = 4; // 할당
console.log(c);
//let c = 4; 이렇게 한줄로 써도됨 ( 선언과 할당 동시에 )
c = 5; // 값을 재 할당하는 것은 가능 
console.log(c);


// const 키워드
// * 재선언, 재할당 불가능
// * 선언과 할당이 동시에 이루어져야 함
// * 언제 사용 ? 변하지 않은 값을 변수에 저장할 때 사용한다
// ex.  (const P1 = 3.1415922653)

// const b; <--선언만 하는 것은 것은 안된다 error
const b =3 ; //선언과 할당이 반드시 동시에 이뤄져야 한다
console.log(b);

// b = 5; error 재할당 불가능



/// [QUIZ] 변수
// Q1. 코드 실행시 q1 변수는 어떤 값이 될까?
let q1 = 3;
q1 - 2; //3이답 왜냐면 q1에서 2를 뺏지만 q1 변수에 재할당해 주지 않았기 때문에 답은3

// Q2. 다음 코드 실행시 q2 변수는 어떤 값이 될까?
let q2 = 10;
q2 = q2 + 5; // q2변수에 재할당해줌
console.log(q2);  //15  
q2 = q2 - 2;  // q2변수에 재할당해줌
console.log(q2);  //13


// Q3. 다음 코드 실행시 q3 변수는 어떤 값이 될까?
const q3 = 1;
// q3 = q3 + 1; //error q3값은 재할당 불가능 변수 
console.log(q3); 


/*
  정리
  - var: es6 (2015년에등장) 이전에 사용되던 변수 선언 키워드 -> 지양하는 추세
  - let: 변수 선언 키워드
       - 변수 선언 -> 값 할당
       - 변수 중복 선언 불가능
  - const: 상수 선언 키워드
       - 상수: 변하지 않는 값 (ex. 3.14159265359, 'How are you?')
       - 변수 선언과 값을 할당이 동시에
       - 재할당 불가능
 */


// (추가) 식별자
// : 이름을 붙일 때 사용하는 단어 (변수명, 함수명)
// -식별자 규칙-
// 1. 키워드 사용 불가능
// 키워드란 -> 특별한 역할을 이미 하고 있는 단어
// ex. comst var let void return for while if else..
// 2. 숫자로 시작 못함
// 3. 특수 문자: _  $ 기호만 허용된다
// 4. 공백 문자 허용 안된다 ( space bar )

// [QUIZ] 다음 중 식별자 가능한 것? 
// apple
// 1apple (X)
// let (X)
// $apple
// APPLE
// apple5
// _
// apple good  (x)
// _apple
// Apple


// 단어를 두개 이상 사용하고 싶을 때 사용하는 방법
// snake-case
// user-id

// camelCse
// userId <- 이방식을 더 많이 사용한다 / js 관례
// ex, redApple, isWater




console.log('---------------------------------------');
 
//js 자료형
// - 데이터의 종류 (deta type)
//1. 기본형 ( primitive )
//- string
//- number
//- boolean
//- null
//- undefined
//2. 객체 ( object )
//- 배열
//- 딕셔너리


//javascript는 다른 언어와 달리 인터프리티(해석기)가 알아서 변수의 타입을
// 파악한 후 저장하기 때문에 변수의 타입을 따로 작성해 주지 않아도 된다
// var, let, const 3가지 키워드를 이용해 변수를 "선언" 한다.

// 기본형 ( primitive )
// 1 string 
// -  텍스트 정보, 문자열
// -  따움표로 감싸야 함 ('',"" 둘다 가능)
// - 숫자, 특수 문자도 따움표 안에 있으면 문자열 ( 파이썬이랑 같군 )
// - 따움표 안에 따움표 주의 ( 사용법 )
// - ex. "그가 '안녕'이라고 말했다."

//지양 하는 var 이지만 필기를 위해 이번은 사용하도록

var text = "안녕하세요!";
var text2 = '하이!';
var gender = '남자';
var address = '서울';


console.log(text); // console.log('안녕하세요!')
console.log(text2);
console.log(gender);
console.log(address);

//문자열 합치기 연산자
console.log(text+text2);  //결과에 공백없
console.log(text+'저는 홍길동 입니다');
console.log(text+'저는 홍길 동 입니다. 저는' + gender +'이고,' + address + '에 거주하고 있습니다.');

// console.log에서 값 여러개 찍는 방법
console.log(text,text2);  //결과에 공백있


//173번처럼만들다간 + 빼먹는 등 단점이 있어서 템플릿 리터링 등장
// : string 내 변수와 상수를 간결하게 표현
// 백틱(``)기호와 $, {} 기호 사용
console.log(`${text} 저는 홍길동입니다. 저는 ${gender}이고, ${address}에 거주하고 있습니다.`)

// 2. number
// 숫자(정수, 소수)
// 연산이 가능하다
var num = 100; //정수
var num2 = 0.12; //실수

var result = 100 -2;
console.log(result);

var result = 'apple' -3;
console.log(result);  //nan : not a Number이 뜬다
// 숫자로 변환할 수 없는 것을 숫자로 바꾸려고 할 때 NaN 이 출력 된다.

// 3. boolean (불, 불리언)
// true, false 둘 중 하나의 값을 갖는 논리 요소
var isWater = true;  
var isWater = false;


// 4. null
// - 빈 값
// - null 타입으로 타입은 존재하지만 값이 없음을 의미한다
// - 주로 값이 없다는 것을 의도적으로 명시할 때 사용한다
var y = null;
console.log(y);

// 5. undefined
// - 값, 타입 모두 없음 ( 값도 없고, 타입도 지정되어 있지 않은 상태 )
var x;
console.log(x); //undefined


// type of(): 자료형 확인
console.log(typeof('문자')); //string
console.log(typeof(245)); // number
console.log(typeof(true)); // boolean
console.log(typeof(null)); //object 원래는 콘솔에 object가 뜨면안되는데 자바쪽 실수라고한다.
console.log(typeof '문자'); //이런식으로 괄호 없이 띄어쓰기로도 사용 가능 똑같다

//형변환
//1. ? -> 문자
var str1 = true; // boolean으로 변환이 되는지 확인된다
var str2 = 123; //number
var str3 = null; //null

//string()
console.log(typeof String(str1));
console.log(typeof String(str2));
console.log(typeof String(str3));

//tostring()
console.log(typeof str1.toString());  // string
console.log(typeof str2.toString()); // string으로 변환됨


// 2. ? -> 숫자
// parseInt (data, 10): data를 10진수로 변환 (한다는 뜻)
var n1 = true;  //boolean 
var n2 = false; //boolean
var n3 = 123;   //number
var n4 = '123';  //string
var n5 = '123456 아 공부하기 넘 어렵다 1235'
var n6 = '커피는 맛있따1234'
var n7 = '코딩은 23415 가끔재밌따'

//자료형확인 가능 
console.log(typeof Number(n1)); //number
console.log(typeof Number(n2)); //number
console.log(typeof Number(n3)); //number
console.log(typeof Number(n4)); //number
console.log(typeof parseInt(n3, 10)); //number
console.log(typeof parseInt(n4, 10)); //number

console.log( Number(n1)); //1
console.log(Number(n2)); //0
console.log(Number(n3)); //123
console.log(Number(n4)); //123
console.log(parseInt(n3,10)); //10
console.log(parseInt(n4,10)); //10
console.log(parseFloat(n5));
console.log(parseFloat(n6));
console.log(parseFloat(n7));


//연산자
//- 대입 : =
//- 산술 : +, -, *, /
//- 비교 : ==, !=. ===, !===, >, >=, <, <=
//- 논리 : !, &&, ||

// 대입 연산자
// = 
// 좌측 변수에 우측 값을 할당(저장, 대입)

// 산술 연산자
// +, -, *, /
//** 거듭 제곱 연산자
console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(1/2);
console.log(3**2); // 3^2 3의2승
console.log(10 % 4);  //2

//javascript 함수

























