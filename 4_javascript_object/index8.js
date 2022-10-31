
console.log('!');

// document 객체
// 속성

console.log(document.documentElement); // html태그 반환
console.log(document.head);
console.log(document.body);

console.log(document.URL);  //웹페이지 전체 url반환
console.log(document.domain);  //웹페이지 url에서 도메인을 반한해준다

//url과 domian의 차이란? url은 무언가를 검색했을때 주소 domain은 url의 앞부분  url > domain


// html 요소 선택하는 방법
// = dom 요소 선택하기 (DOM API)

// 노드 객체 가져오기
//getElementById(아이디명): 아이디 이름으로 요소 가져오기
//Id는 유일하므로 속도가 가장 빠름
console.log(document.getElementById('first'));
console.log(document.getElementById('second'));
console.log(document.getElementById('third'));
console.log(document.getElementById('fourth'));
console.log(document.getElementById('fifth'));

// 2. getElementsByClassName(클래스명): 클래스 이름으로 요소를 가지고 올 수 있다
console.log(document.getElementsByClassName('korean'));
console.log(document.getElementsByClassName('bunsik'));
console.log(document.getElementsByClassName('dessert'));
console.log(document.getElementsByClassName('korean')[0]);   //인덱스 번호로 요소에접근 할 수 있다


// 3. getElementsByTagName(태그명) : 태그 이름으로 요소를 가져옴
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h2'));
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByTagName('li')[2]);

//4. getElementsByName (name 속성값):
console.log(document.getElementsByName('userid'));
console.log(document.getElementsByName('userid')[0]);
console.log(document.getElementsByName('userid')[0].value);

// "css 선택자"를 이용해 노드 객체 가져오는 방법
// querySlector
// 이름만 넣으면 안되고 클래스 앞에 점을 찍어줘야한다
// 제일 처음 발견한 첫번째 것만 가져온다 korea클래스가 두개여도 두개다 가져오지 않고
// 일치하는 첫번쨰 요소를 가져온다 
// querySelector(css 셀렉터) : 일치하는 첫번쨰 요소를 가져옴
console.log(document.querySelector('.korean'));
console.log(document.querySelector('.bunsik'));
console.log(document.querySelector('.dessert'));
console.log(document.querySelector('input[name="userid"]')); //name속성으로 가지고 오는 방법

// querySelectorAll(css셀렉터) : 일치하는 "모든 요소"를 (배열)로 가져옴
console.log(document.querySelectorAll('.korean'));
console.log(document.querySelectorAll('.bunsik'));
console.log(document.querySelectorAll('.dessert')); 
console.log(document.querySelectorAll('.korean')[0]); //인덱싱 사용가능[0]

console.log(document.querySelectorAll('.launch-list #third')); //hover을 css에 해줬다면 마지막에 :hover도 넣을 수 있따




