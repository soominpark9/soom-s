console.log('connected!');

//조건문
//어떤 조건에 따라 논리 구조를 분기(나눔)
// -> 조건에 따라 서로 다른 문장을 실행

// 연산자
// 동등 연산자: ==, !=, ===
console.log(1==1); //true
console.log(1==2); //flase
console.log(1!=1); //flase
console.log(1!=2); //true
console.log('1' ==1); // '1'은 string인데 true로 나오는 이유는 type(자료형)이 달라도 상관없다 오로지 값만 비교 한다!!

//===,!== : type(자료형)과 값 모두 비교 해 준다
console.log(1===1); 
console.log(1===2); 
console.log(1!==1); 
console.log(1!==2); 
console.log('1' ===1); //false 
console.log('2' !==1); //flase


//비교 연산자
//>, <, >=, <=

console.log('---------------')
console.log(2>1); //true
console.log(2<1); //flase
console.log(1>=1); //true
console.log(1<=1); //true


//논리 연산자
//&& :and ( 둘다 참이어야 참 )
//|| : or ( 둘 중 하나라도 참이면 참 )
//!  : not( 참 -> 거짓, 거짓 -> 참)

console.log('---------------')
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false
console.log(true || true);  //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false
console.log(!true); //false
console.log(!false); //true
console.log(!!false); // false //false가 아닌게 아니다 라고 나오기 때문에 !! 붙으면 결국 자기 자신 ( 사용할일 잘 없다 )-그냥알아두기


console.log('---------------')
console.log((2>1)&&(-2<1));  //첫번째 괄호는true 두번째 괄호도 true -> true and true 는 true값이 나온다 
console.log(!(2 > 1));  //false
console.log(((2 > 1) && (-2 < 1)) || (5 > 2)); // true

//=================================================================================

if (5>3) {
    console.log('bigger!');
}



//함수 안에서 조건문을 사용한다면?
function isBig() {
    if(5>3){
      return 'bigger!';
}
}
console.log(isBig()); 

// if-else
if (5 < 3) {
    console.log('bigger');
} else{
    console.log('smaller..');
}

// if - else if
// else if 키워드 : 여러개 가능
if ( 5 < 3) {
    console.log('smaller...')
} else if (5 > 3) {
    console.log('bigger!')
} else if ( 5 == 3 ) {
    console.log('same')
}


if ( 5 < 3) {
    console.log('smaller...')
} else if (5 > 3) {
    console.log('bigger!')
} else {
    console.log('same')
}


//퀴즈
let score = 80;
//90이상 A
//80이상 B
//70이상 C
//60이상 D
//50이상 F

function result(){
    if (score >=90){
        return'A'
    }else if (score >=80){
        return 'B'
    }else if (score >=70){
        return 'C'
    }else if (score >=60){
        return 'D'
    }else {
        return 'F'
    }
}
console.log(result());


// 퀴즈
// let score = 80;
// 90이상 A
// 80이상 B
// 70이상 C
// 60이상 D
// 60미만 F

// if (score >= 90) {
// 	console.log('A')
// } else if (score >= 80) {
// 	console.log('B')
// } else if (score >= 70) {
// 	console.log('C')
// } else if (score >= 60) {
// 	console.log('D')
// } else {
// 	console.log('F')
// }



// 조건문 중첩
let usrId = 'user';
let usrPw = '1234';
let inputId = 'user';
let inputPw = '1234';

//아이디가 일치 해야
//  -> 비밀번호 일치 -> 인사
//  -> 비밀번호 부일치 -> 불일치
// 아이디가 불일치 하다면 -> 아이디 없음

if ( usrId == inputId) {
    //조건문 중첩
    if (usrPw == inputPw) {
        console.log(`${usrId}님 하이`)
    } else {
        console.log('비밀번호 틀림')
    }
} else {
    console.log('아이디 없음');
}




// step1. (조건문) 홀짝을 구별하는 조건문 생성
// - n 변수를 선언하고 6을 할당
// - num이 짝수라면 콘솔창에 "짝수" 출력
// - num이 홀수라면 콘솔창에 "홀수" 출력
// - 힌트) 짝수는 2로 나누어 떨어지는 수이다. 즉, 짝수는 2로 나눈 나머지가 0과 같다.

let n =6;

if (n%2 == 0) {
    console.log('짝수')
}  else if (n%2 ==1) {
    console.log('홀수')
}


// step2. (함수 + if-esle 조건문) 짝수인지 판별하는 함수 isEven() 정의하고 호출하기
// - isEven() 함수는 매개변수 x 를 가짐
// - 매개변수 x의 값이 짝수라면, true 반환
// - 매개변수 x의 값이 홀수라면, false 반환

function isEven(x) {
    if (x % 2 ==0){
        return 'true';
    } else if (x % 2 ==1){
        return 'false'
    }
	// 함수 완성하기
}
console.log(isEven(8));
console.log(isEven(7));
// console.log(isEven(8)); // true
// console.log(isEven(7)); // false


// ======================================
// Q. (함수 + if-else if-else 조건문) 색상을 얻는 getColor() 함수 정의하고 호출하기
// - getColor() 함수는 매개변수 sign을 가짐
// - 매개변수 sign의 값이 'go'이면, 'green'을 반환
// - 매개변수 sign의 값이 'slow'이면, 'yellow'를 반환
// - 매개변수 sign의 값이 'stop'이면, 'red'를 반환
function getColor(sign) {

    if(sign == 'go'){
        return 'green';
    } else if (sign == 'slow'){
        return 'yellow';
    } else if (sign == 'stop'){
        return 'red';
    }
}
    console.log(getColor('go')); 
    console.log(getColor('slow')); 
    console.log(getColor('stop'))
    // 함수 내부 채워주세요
  
  // console.log(getColor('go')); // green
  // console.log(getColor('slow')); // yellow
  // console.log(getColor('stop')); // red
  
  
  // ======================================
  // (중첩 조건문)
  // Q.
  // - isValidate 함수는 비밀번호를 의미하는 pw1, pw2 두 개의 매개변수를 가짐
  // - pw1은 길이가 5 이상이라면,
  //      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
  //      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
  // - pw1의 길이가 5 미만이라면, '비밀번호는 5자리 이상!!!' 반환
  
function isValidate(pw1,pw2) {
    if (pw1.length >=5 ){
        if (pw1 == pw2) {
            return '비밀번호 일치~'
        }
        else if (pw1 != pw2) {
            return '비밀번호 불일치..'
        }
    } else {
        return '비밀번호는 5자리 이상!!!'  //들여 쓰기 잘해야 한다 들여쓰기가 누구랑 누가 연결 되있고 속해있는지를 나타내기 때문에 if if 다음에 나와있는 else if도
        //else로 쓸 수 있다. 엥 왜??else는 조건문 에서 한번만 쓸 수 있지만 마지막else는 첫번째 if에 속해있고 3번쨰 else if는 두번째 if에속해있기에 속해 있는 곳이
        //서로 달라서 3번쨰 else if도 else로 쓸 수 있다
    }
}   
    console.log(isValidate('1234', '1234')); 
    console.log(isValidate('12345', '12345')); 
    console.log(isValidate('12345', '12345!!'));
    // 함수 내부 채워주세요 
  
  
  // 브라우저 콘솔창 확인 결과
  // isValidate('1234', '1234'); // '비밀번호는 5자리 이상!!!'
  // isValidate('12345', '12345'); // '비밀번호 일치~'
  // isValidate('12345', '12345!!'); // '비밀번호 불일치..'
  
  
  // ======================================
  // Q. 바로 위에 문제에서 조건 추가!!
  // 비밀번호 확인 조건이 추가되었습니다.
  // - pw1은 길이가 5 이상이고 8이 이하라면,
  //      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
  //      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
  // - pw1의 길이가 5 미만이거나 8 초과라면, '비밀번호는 5자리 이상 8자리 이하!!!' 반환
  function isValidate2(pw1,pw2) {
    if ((pw1.length>=5) && (pw1.length<=8) ){
        if (pw1 == pw2) {
            return '비밀번호 일치~'
        }
        else if (pw1 != pw2) {
            return '비밀번호 불일치..'
        }
    } else {
        return '비밀번호는 5자리 이상 8자리 이하!!!'  //들여 쓰기 잘해야 한다 들여쓰기가 누구랑 누가 연결 되있고 속해있는지를 나타내기 때문에
    }

}
  console.log(isValidate2('1234', '1234')); // '비밀번호는 5~8자리만 가능!!!'
  console.log(isValidate2('123456789', '123456789')); // '비밀번호는 5~8자리만 가능!!!'
  console.log(isValidate2('12345', '12345')); // '비밀번호 일치~'
  console.log(isValidate2('12345', '12345!!'));
  
  // 브라우저 콘솔창 확인 결과
  // isValidate2('1234', '1234'); // '비밀번호는 5~8자리만 가능!!!'
  // isValidate2('123456789', '123456789'); // '비밀번호는 5~8자리만 가능!!!'
  // isValidate2('12345', '12345'); // '비밀번호 일치~'
//   isValidate2('12345', '12345!!'); //비밀번호 불일치




//===================================================================================================================
//switch 문
// -하나 이상의 case 문으로 구성
// - default 문이 있는데 필수는 아님 -> 작성 권장
// - break 키워드: 블록 (중괄호, {})을 빠져나갈 떄 사용하는 키워드

/* 
switch 문의 기본 구조

switch (x변수값) {
    case 값 : // 조건문으로 했을 때 얘는 if (x ===값) --> 즉 여기선 x과 값과 같을 때 실행할 문장 작성
    //break를 통해서 x과 값과 같을 때 문장을 실행 후 블록을 빠져나옴 break 필수 작성
    case 값2 : if (X== 값2)와 같았을때를 의미 
    // x가 값2와 같을때 실행할 문장을 작성 후 break를 이용해서 x가 값2와 같을 때 문장을 실행 후 블록을 빠져나온다
    defaul : // else
    //x가 case에 있는 어떤 것과도 일치하지 않을때 실행할 문장 
    break 작성 필수 ( 블록을 빠져나옴 )
} 

*/


let a = 2+2;  //tyopof -> number

switch(a) {
    case 6 :
        console.log('비교하려는 값과 큽니다')
        break;
    case 5 :
        console.log('비교하려는 값보다 큽니다')
        break;
    case 10 :
        console.log('비교하는 값 중에 가장 큽니다')
        break
    default:
        console.log('어떤 값인지 파악 안됨')
        break;
}


if (a === 3) {
    console.log('비교하려는 값보다 작습니다');
} else if ( a ===4 ){
    console.log('비교하려는 값과 일치 합니다');
} else if ( a ===5) {
    console.log('비교하려는 값보다 큽니다')
} else{
    console.log('어떤 값인지 파악 안됨')
}



var grade ='A';
/* A 학점 A
B학점 B
C학점C
D학점D
F학점F
나머지 : 오류 발생 */

switch(grade){
    case 'A':
        console.log('비교하려는 성적과 일치 합니다')
        break;
    case 'B':
        console.log('비교하려는 성적보다 낮습니다')
        break;
    case 'C':
        console.log('비교하려는 성적보다 낮습니다')
        break;
    case'D' :
        console.log('비교하려는 성적 중 가장 낮습니다')
        break;
    default:
        console.log('오류발생')
        break;
}

//여러개 case 문을 묶을 수 있다
//switch문은 이래서 잘안쓰임?
//수식쓰려면 if문을 써야 한다
a= 6;
switch(2) {
    case 1:
	case 2:
	case 3:
		console.log('비교하려는 값과 일치합니다.');	
		break;
	case 4:
		console.log('비교하려는 값과 일치합니다.');	
		break;
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	default: 
		console.log('어떤 값인지 파악 안됨');
		break;
}

//==========================================================
//삼항 연산자
//- 3개의 피연산자를 필요로 함
// 조건식? (참일 때 실행할 코드) : (거짓일 때 실행할 코드)

//짝 홀 구별
var num =3;
if ( num % 2 ===0) {
    console.log('짝수')
} else {
    console.log('홀수')
}

//짝홀 구별 ( ver. 삼항 연산자)

let result = (num % 2 ==0) ? '짝수' : '홀수';
console.log(result);
// console.log(num%2 ==0 ? '짝수' : '홀수'); 위에 두줄과 다르게 한줄로 결과값이 바로 출력되는 방법
console.log( 3>1 ? 'bigger' : 'smaller');



// let hour = 10
// console.log(hour<13 ? '오전입니다':'오후입니다');  -> 결과값 바로 출력하기


// let hour = 10;
// console.log(hour<13 ? '오전입니다':'오후입니다');
// console.log(now);  ->변수로 담은 방법


//==================================================================


