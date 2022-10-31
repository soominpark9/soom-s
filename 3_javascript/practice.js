


function day(){
    let result = 5 +7;
    return result;
}
console.log(day());

function day1 (c,d){
    let result1 = `오늘은 ${c} 이고 나의 휴무는 ${d}이다 `;
    return result1;
}
console.log(day1('월요일','수요일'));


function day2 (e,f) {
    console.log(`오늘은 주말인 ${e}이다 나의 업무시작은 ${f}부터이다`)
}
day2('금요일','수요일');


console.log((3>2) && (5>1));
console.log(((3+2)>(1+2)) || ((1+2)>(3+5)));


function winner(a){
    if (10%a===0);
    return 'even';
}
console.log(winner(10));


function looser(){
    if ( 5>3);
    return 'bigger'
}
console.log(looser());


let score =90;
function result5(){
    if (score>=90){
        return 'A'
    }else if (score >=80){
        return 'B'
    }else if (score >=70){
        return 'c'
    }else if (score >=60){
        return'D'
    }else {
        return'재수강'
    }
    
}   
console.log(result5());


// let whatday = day;
// function result10(n){
//     if(day ===0){
//         return'월요일'
//     }else if(day ===1){
//         return '화요일'
//     }else if (day ===2) {
//         return '수요일'
//     }else{
//         return'주말'
//     }
// }console.log(result10());



// 조건문 중첩
let usrId = 'user';
let usrPw = '1234';
let inputId = 'user';
let inputPw = '1234';

//아이디가 일치 해야
//  -> 비밀번호 일치 -> 인사
//  -> 비밀번호 부일치 -> 불일치
// 아이디가 불일치 하다면 -> 아이디 없음

function game(){
    if (usrId==inputId){
        if (usrPw == inputPw){
            return ' user님 하이'
        }else if (usrPw != inputPw){
            return ' 비밀번호 불일치'
        }
    }else {
        return '아이디 없음'
    }
}
console.log(game())


//위에는 함수식으로 풀었을 떄 

if (usrId == inputId){
    if(usrPw==inputPw){
        console.log(`${usrId}님 하이`)
    }else if (usrPw != inputPw){
        console.log(`${usrPw}님 비밀번호 불일치`)
    }
}else {
    console.log(`${usrId}없음`)
    
}

//여기는 그냥 중첩방식으로 풀었을 떄



//퀴즈 ) 1부터 10까지 짝수의 합 구하기
//for

let sum =0;

for ( i=0; i <10; i++){
    if ( i %2===0);{
        sum = sum+i
    }
}console.log(`짝수의 합은 ${sum}이다`)


//퀴즈)
//case2. 9부터 4까지 while문으로 반복

let j = 9;

while ( j>=4) {
    console.log(j);
    j--
}
console.log('반복문 끝')


//case. 1 부터 10까지 while문으로 반복
let apple = 1;

while ( apple <= 10) {
    console.log(apple);
    apple++
}
console.log('반복문 끝')

//case.1 부터 30까지 짝수만 while문으로 반복

let pp = 1;

while (pp<=30) {
    if ( pp%2===0) {
        console.log(`1~30까지의 짝수는 ${pp}입니다.`);
    }
    pp++
}
console.log('반복문 끝')