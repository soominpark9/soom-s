console.log('connected');

//함수
// : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
// - 2단계 : 함수 정의(생성) -> 함수 호출(사용)

// 함수 정의 (생성)
/*
	function functionName() {
		// do something
	}
*/ 
// 함수 호출 (사용)
/*
	functionName();
*/ 

//정의
// 함수 선언식
function helloWorld() {
    console.log('helloworld!!');
}   

//호출
helloWorld();

// 함수 표현식
const helloWorld2 = function () {
    //정의 
    console.log('helloWorld!!22');
}
helloWorld2(); //호출

//return 키워드
// : 반환 값 -> 함수 내부 코드의 '최종 결과값'
// 함수 내부 코드의 최종 값을 저장하고 보관하려고 등장한 키워드
function helloWorld3 () {
    return "helloWorld!!3";
}
console.log(helloWorld3());


//함수 표현식으로 변경하면
//변수에 함수를 정의하고
const helloWorld4 = function () {
   return "helloWordl!!4"; //let생략해도 가능하다
}
console.log(helloWorld4());

// 다양한 함수 만들기
// case1. 매개변수(인자 1개 받는 함수 만들기) , 참고로 매개변수는 1개이상 사용가능
function hello1(text) { //text에 안녕이 들어가게 되고
    return text;  //return 값에도 당연히 안녕이 들어감
} 
// hello1("안녕!")
console.log(hello1("안녕!"));

// case2 . 매개 변수 (인자)2개
function hello2(text, name){
    // let result = text + name
    let result = `${text} 나는 ${name}이야`; //let result = "안녕? 나는 sean이야"
    return result; // return "안녕? 나는 sean이야"

}
console.log(hello2('안녕?','sean'));

// case3. return 없이 함수에서 바로 console.log{} 찍기
function hello3(text, name) {  //안녕???. Lilly
    console.log(`${text} 나는 ${name}이야`) //console.log("안녕??? 나는 Lilly이야")
}
hello3('안녕???','Lilly')


// case4. case2를 함수 표현식 hello4

const hello4= function(text, address){ // 학생!, 경기도
    let result = `나는 ${text} 이고 ${address}에 살아 `; //let result = 학생 나는 경기도에 살아
    return result; 
}
console.log(hello4('학생!','경기도'));

// case5. case3를 함수 표현식 hello5

const hello5 = function(text, address) {
    console.log(`나는 ${text} 이고 ${address}에 살아`)
}
hello5('학생!','경기도');

//*주의할 점*
//하나의 js 파일에서 동일한 함수의 이름을 정의하지 않기
// 항상 함수를 정의 한 후에 호출을 해야한다


// -------------------------------------------------------


function countNum() { // 함수 정의
	let count = 7; // 함수 안에서 변수 선언 + 할당 
	console.log('count 값1: ', count); // 7
}
countNum(); //함수 호출
// counsole.log('count 값2: ',count); // error

// 함수안에서만 쓰이는 변수를 <지역함수> 라고 한다 
//함수 안에서 선언한 변수는 함수안에서만 유효 하다 두번째 console을 바깥에서  작성했을때
//console창에 에러가 뜬 이유!!
// 지역변수는 함수의 body를 벗어나면 접근 할 수 없다.


// let count2 = 0;
// function countNum2() {
//     count2 = 77; //재할당으로 값 바꿈
//     console.log(count2); //77츌력
// }
// countNum2();


let count2 = 0;
console.log('count 값1: ',count2); //0

function countNum2() {  
    count2 = 77; //재할당으로 값 바꿈
    console.log('count 값2: ',count2); //77츌력
}
countNum2();
console.log('count 값3: ',count2); //77츌력

// --> 만약 함수 안에서 사용되는 지역변수가 함수 바깥에서도 
// 쓰인다면, "전역변수"를 활용


let color = 'red';
console.log(color); // red
function printColor(){
    let color ='green'; //여기서 let을 한번 더 썼기 때문에 위에 let과 다른 let이라는 것을 명시해준다 
    console.log(color); //green
}
printColor();
console.log(color); //red

// 지역변수와 전역변수의 이름이 동일한 상황,
// 함수 안에서는 지역변수를 사용


let animal = 'dog';
function who() {
    let animal = 'cat';
    console.log(animal); // cat
}
who();
console.log(animal); //dog

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//문자열 속성과 매서드(함수)
// : 자바스크립트에서 기본 제공하는
//문자열 (string) 에서 사용가능한 편리한 기능

console.log('----------')

//속성
//length : 문자열 길이

var song = "strawberry moon----  "
var song2 = "strawberry moon!!!"
console.log(song.length); //song 변수의 문자열 길이 출력된다 공백 특수문자 전부 카운트
console.log(song2.length); // song2 변수의 문자열 길이


// XX.method() 형태
// - toUpperCase()
// - toLowerCase()
// - trim()

var msg = 'Happy birthDay~';
var userId = '     user123   '

console.log(msg.toUpperCase()); // 대문자로 바꿔줌
console.log(msg.toLowerCase()); //소문자로 바꿔줌
console.log(userId.length);
console.log(userId.trim()); // 양끝에 있는 공백을 제거해 준다 
console.log(userId.trim().length); // 공백 제거후 길이를 보면 7이 나온다

//참고 !! 위에 애들은 연달아서 사용 가능 무슨말이냐? 아래 참고
var msg2 = ' hello world! !!       '
console.log(msg.trim().toUpperCase());
//msg2 변수의 양끝 공백 제거 후 대문자로 변경 ( 이런식으로 한줄에 한번에 사용 가능! )



//인덱싱 (indexing)
// : string에서 한 글자를 선택
// 변수명[위치값]
// 위치값 : 숫자 0부터 시작 
console.log(song); //strawberry mooon

console.log(song[0]); // 컴퓨터는 항상 0부터 숫자를 시작한다 s
console.log(song[1]); //t
console.log(song[2]); //r
console.log(typeof(song[2])); // string 자료형
console.log(song[0] + song [7]); //sr
console.log(song[0].length); //sr
console.log(song[0].toUpperCase()); //sr


//퀴즈 ) sonny 단어 만들기
console.log(song[0].toUpperCase() + song[12] + song[14] +song[14] +song[9]);



// XX.method(arg) 형태
// - indexOf(x) : string에서 x가 나타내는 인덱스 (위치값)를 변환
// x가 없다면 -1 을 반환해 준다
// 문자열 안에 글자 찾을 때 많이 쓴다 


// - slice(startIndex) : startIndex 부터 끝까지 문자열을 잘라내어 반환해 준다
// - replace(교체될 값, 교체되어 들어가는 값)
//          : 처음 발견한 값을 교체
// - replaceAll(교체될 값, 교체되어 들어가는 값) 
// 					: 발견한 값을 모두 찾아서 교체

var fruit = 'applemango'
var msg = 'Wow~ It is so amazing~~~~!!';

console.log(fruit.indexOf('a'));  //0값이 나옴 
console.log(fruit.indexOf('1')); //3
console.log(fruit.indexOf('mango')); //5
console.log(fruit.indexOf('x')); //-1

console.log(fruit.slice(5)); //mango
console.log(fruit.slice(-1)); //맨뒤에 있는 o를 가져온다, 인덱스 번호는 음수도 가능

console.log(msg.replace('Wow', 'hey')); //wow가 hey로 바뀐다
console.log(msg.replaceAll('a', 'A')); //모든 소문자a가 대문자A로 바뀐다



// 퀴즈1) 2022.9.26 -> 2022-9-26
// 퀴즈2) 2022.9.26 -> 22-9-26

let date = '2022.9.26';

console.log(date.replaceAll('.', '-'));
console.log(date.replaceAll('.', '-').slice(2));
//그래도 기본date는 원래의 기본 값을 가지지만
//2022-9-26으로 지금부터 계속 쓰고 싶다면
//data = date.replaceAll('.', '-') 재 할당을 해주면된다









