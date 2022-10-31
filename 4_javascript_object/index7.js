console.log('!');

// JS 표준 내장 객체
// 기본적으로 (이미) 가지고 있는 객체
// String, Number, Array, Date, Math, ....

// ===============================================================================================

// Date 객체
// 시간, 날짜에 대한 정보를 얻기 위함

let now = new Date();
console.log(now);

// ms (밀리초값) 으로 나옴
console.log(new Date(0));  // 1970 - 01-01  09:00:00를 기준
//위에를 기준으로 8만 초가 지났을 때 날짜를 보여준다
console.log(new Date(80000)); // Thu Jan 01 1970 09:01:20 GMT+0900 (한국 표준시) 가 나옴 --> 이런게 있다 

//new Date(y, m, d, h, m, s, ms)
//year : 4자리
//month : 0(1월) ~11(12월)  -> 헷갈리지 않게 주의!!!
//date : 1 ~ 31 -> 생략하시면, 기본값 1일로 처리
// hour, minutes, seconds, ms
console.log(new Date(2018, 2, 2)); // Fri Mar 02 2018 00:00:00 GMT+0900 (한국 표준시)
console.log(new Date(2018, 2, 2, 18, 20, 30)); // Fri Mar 02 2018 18:20:30 GMT+0900 (한국 표준시)

console.log(new Date(2022, 8, 30, 10, 53))  // Fri Sep 30 2022 10:53:00 GMT+0900 (한국 표준시)으로 나온다 --> 이렇게 쓰일수 있구나 정도

// *중요
// Date 객체 매서드 (인스타 업로드 같은 거 만들 때 날짜확인을 위해서)
// 외우는것보다 일하다 필요할때 인터넷에서 찾아서 쓰는것을 추천하심
// 매서드를 이용해서 년,월,일 등의 값을 얻기
console.log(now);

console.log(now.getFullYear());;  //0(1월) ~ 11(12월)
console.log(now.getMonth())
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay());  //요일 : 0(일) ~ 6(토)




// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고,
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자
// if 문

// let day = new Date()

// function whatday (){
//     if (day ===0) {
//         return '주말'
//     } else if (day ===1) {
//         return '평일'
//     } else if (day===2) {
//         return '평일'
//     } else if (day===3) {
//         return '평일'
//     } else if (day===4) {
//         return '평일'
//     } else if (day===5) {
//         return '평일'
//     } else {
//         return '주말'
//     }
// }
// console.log(now.getDay());

//if문


console.log(now);
console.log(now.getDay());

if (now.getDay() ===0 || now.getDay() ===6 ) {
    console.log('주말');
} else { // 1~5]
    console.log('평일');
}
  

//switch
//switch 케이스를 작성할 때는 default를 항상 작성해주는 것이 좋다

switch (now.getDay()) {
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		console.log('평일');
		break;
	case 0:
	case 6:
		console.log('주말');
		break;
	default:
		console.log('알수 없음');
		break;
}


//Math 객체
//수학적인 상수와 함수를 위한 속성과 매서드

//속성
console.log(Math.E); // 자연로그 밑
console.log(Math.PI); // 파이
console.log(Math.SQRT2); // 2의제곱근  //필요할때 검색하면됨  //MDN사이트검색

//매서드 ( 속성과의 차이점은 괄호가 있냐 없냐 )
console.log(Math.min(100,200,30,7));  //가장 최소 값인 7을 반환해 준다
console.log(Math.max(100,200,30,7));  //가장 최대 값인 200을 반환해 준다
console.log(Math.round(6.5)); //반올림 ->7
console.log(Math.round(6.3)); //반올림 ->6
console.log(Math.floor(6.5)); //내림 -> 6
console.log(Math.floor(6.3)); //내림->6
console.log(Math.ceil(6.5)); //올림 -> 7
console.log(Math.ceil(6.3)); //올림 -> 7

//매서드 안에 매서드도 사용 할 수 있다
//매서드를 매서드로 감싸기 셋다 정답은 7로 같다
console.log(Math.floor(Math.max(1.1, 2.2, 3.3, 7.7)));  
console.log(Math.floor(7.7));
console.log(7)


//가장 많이 쓰게될 매서드
console.log(Math.random()); // 뱉어내는 범위는 0보다 크고 1보다 작다 / 0 <= x < 1 범위의 난수

// 0 <= 10x < 10 를 매서드 랜덤을 이용해보기
console.log(Math.random() * 10);  // 0<=x <10에서  0 <= x < 10 로 만들기
console.log(Math.floor(Math.random() * 10));  //소수점 없애기


// 퀴즈) Returns a random integer from 1 to 10:
console.log(Math.ceil(Math.random() * 10))
console.log(Math.floor(Math.random() * 10) + 1); 

// 퀴즈) Returns a random integer from 1 to 100:
console.log(Math.ceil(Math.random() * 100));
// 1 <= Math.random() * 100 +1 < 101
console.log(Math.floor(Math.random() * 100) + 1); 


// 퀴즈) Returns a random integer from 20 to 22:
console.log(Math.floor(Math.random() * 3)+20);



