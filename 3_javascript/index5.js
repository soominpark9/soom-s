console.log('!!');

//반복문
// - for 문
// - while 문

// for 문


/* for 문의 기본 구조

for ( 초기값  ; 조건식  ; 증감값  ) {
    //반복할 코드 작성
}

*/

//i++  --> i = i +1
//i--   --> i=i-1

//case1. 0~4출력

for ( let i = 0; i < 5; i++ ) {
    console.log(i);
}
console.log('반복문 끝')


//case2. 1~5출력

for ( let i = 1; i < 6; i++ ) {
    console.log(i);
}
console.log('반복문 끝')

for ( let i = 0 ; i < 5; i++) {
    console.log(i +1);
}
console.log('반복문 끝')

for ( let i = 1; i < 6; i++ ) {
    console.log(i);
}
console.log('반복문 끝')

for ( let i = 1; i <= 5; i++ ) {
    console.log(i);
}
console.log('반복문 끝')



// case3. 5부터 1까지 출력

for (let i=5; i>0; i--) {
    console.log(i);
}
console.log('반복문 끝')

//case4. 1부터 10까지 출력 ( 단 짝수만 )
//반복 1부터 10까지 + 2로 나눈 나머지가 0 일때만 출력
//반복문 + 조건문 

for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}
console.log('반복문 끝');


//ver2. 증감값 변경
for( let i =2; i<=10; i=i+2) {
    console.log(i);
}
console.log('반복문 끝');


//퀴즈 ) 1 부터 10까지 합 구하기
// let sum =0; //합을 저장할 변수 생성

// for (let i =1; i<=10; i++){
//     sum = sum+i //재할당
// }

// console.log(`1~10까지 모두 더한 값: ${sum}`); //55

//퀴즈 ) 1부터 10까지 짝수의 합 구하기
// ver1
let sum = 0;

for(let i =1; i<=10; i++){
    if ( i % 2 === 0){
        sum=sum+i 
    } 
}
console.log(`1~10까지 짝수의 모두 더한 값: ${sum}`);

// ver2
// let sum = 0; 
// for (let i = 2; i <= 10; i = i + 2) { // i: 2, 4, 6, 8, 10
// 	sum = sum + i 
// }
// console.log(`1~10까지 모두 더한 값: ${sum}`); // 30



//==============================================================

//while문
/*
while (조건식) {
    //반복할 코드
}
--> 조건식을 만족; 블럭({}) 내부 코드 실행
--> 내부 코드 실행 완료 -> 조건식으로 돌아가서 다시 반복 여부 결정
   -if문; 조건식 true; 블럭 내부 코드1번 실행
   -while문; 조건식이 true; "계속" 반복
--> 조건식 false; 블럭을 빠져나옴 (=반복종료)

*/

//case1. 1~5 반복
var n =1;//반복 변수 초기값 설정
while ( n <=5 ) { //조건식
    console.log(n);
    n++;  //n=n+1
}
console.log('반복문 끝');

//퀴즈)
//case2. 9부터 4까지 while문으로 반복

var n=9;
while ( n>=4 ) {
    console.log(n)
    n--
}
console.log('반복문 끝')



//case3. 1부터 10까지 짝수 출력
n = 1; 
while (n <= 10) { // n: 1 2 3
	if (n % 2 == 0) {
		console.log(n); // 2 // 4 
	}
	n = n + 1; 
    // n = 1 + 1 = 2 // 3 // 4
}
console.log('반복문 끝');

// ver2
n = 2;
while (n <= 10) { // n: 2, 4, 6, 8, 10
	console.log(n);
	n = n + 2;
}
console.log('반복문 끝');




//case4. 1부터 10까지 홀수 출력

// n=1
// while ( n <=10 ){
//     if(n%2===1){
//

// }
// 
// console.log('홀수출력 끝')

// n=1;
// while ( n<=10){
//     n=n+2
// }
// console.log('홀수출력 끝')



// Case4. 10부터 1까지 홀수 출력
// ver1
n = 10;
while (n >= 1) { // n: 10 ~ 1
	if (n % 2 === 1) {  // 9 7 5 3 1
		console.log(n);
	}
	n = n - 1;
}
console.log('반복문 끝');

// ver2
n = 9;
while (n >= 1) { // n: 9 7 5 3 1
	console.log(n);
	n = n - 2;
}
console.log('반복문 끝');

//==================================================
//무한 루프
//: 반복문에서 조건식의 결과가 항상 참이되어 반복문을 탈출하지 못하는 상태를 말한다.
// : 이를 활용해 의도적으로 무한루프를 만들어서
// : 특정 조건에 만족될 때까지 반복하여서 코드를 작성하기도 함

/* while(true){
    ----
    //탈출 조건 만들기
} */

//조건문 등을 이용해 탈출 조건을 만들어 주고
//break 키워드 -> 블록 ({}) 을 빠져나옴

let go =confirm ('계속 진행할까요?');
console.log(go);  //확인 누르면 true 값이 찍히고 취소를 누르면 false값이 콘솔창에 찍힌다.

var count = 0;
while (true) {//무한루프
    if (confirm ("계속 진행하시겠습니까?")=== true){
        alert(`${count}번째 반복입니다!!`);
        count = count +1;
    } else { //취소 false 반환
        break
    }
}
console.log('무한루프 탈출 성공!')





//실습 
//정수 n이 있을 때 2또는 3의 배수의 총 합을 구하시오 (단 n은 0 <n <100)

n = 1
let sum1=0;
while (n<100){
    if(n%3==0 || n%2==0) {
        sum1=sum1+n
    }
    n++
}     
console.log(`2또는 3의 배수의 합은 총${sum1}입니다!!`)



