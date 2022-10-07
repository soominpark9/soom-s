console.log('!');

// document 요소 다루기 (읽고 쓰기)

//1. HTML 요소 내용(content) 읽고 쓰기.  읽기= 가져오겠다 / 쓰기 = 값을 바꾸겠다 의미

let div1 = document.getElementById('div1');
console.log(div1);

// innerHTML 속성
// : 요소 안의 '코드' 를 가져오거나 수정 한다
// -> 입력된 문자열을 HTML 형식으로!
// 읽기: 요소.innerHTML
// 쓰기: 요소.innerHTML=수정하려는 태그
console.log(div1.innerHTML); //읽기'
div1.innerHTML = '여기는 <b>첫번째</b> 태그 입니다.&hearts;'

// innerText 속성
// :요소 안의 " 텍스트 "를 그대로 가져오거나 수정
// => 입력된 문자열을 그대로!!
// => 읽기: 요소.innerText
// => 쓰기 : 요소.innerTEXT = 수정하려는 텍스트
console.log(div1.innerText);  //html은 태그까지 가지고오고 text는 태그빼고 문자열만 그대로 가져온다는 차이점
div1.innertext = '여기는 <b>첫번째</b> 태그 입니다.&hearts;' //쓰기 (문자그대로만 인식)
div1.innerText = '안녕하세요 !!' //사실 text를 올바르게 쓰려면 이렇게 써야 한다고 한다 //쓰기

// textContent 속성
// : innerText와 마찬가지로 텍스트 정보를 표시
//IE9 이전 버전에서는 사용 불가능
console.log(div1.textContent);   //읽기
div1.textContent ='안녕하세요11111~~~~~';
console.log(div1.textContent);

// 2. 속성에 접근 하는 방법
// 요소. 속성명 
let beach =document.getElementById('beach');
console.log(beach.id); // beach
console.log(beach.src); // 이미지
console.log(beach.width); // 200
console.log(beach.alt); // beach


let google = document.getElementById('google');
console.log(google);
console.log(google.href);

// getAttribute(): 속성값 가져오기
// setAttribute(): 속성값 설정하기
console.log(google.getAttribute('href'));
google.setAttribute('href', 'https://www.naver.com');  //값을 출력하려고 한게 아니라서 console안붙임 //이미지 클릭시 네이버로 넘어감 
google.innerText ='Naver'; //alt태그도 google에서 naver로 바뀜
console.log(google);

// (연습)
// 이미지 요소
// 이미지 바꾸기
// width/ height 변경

// console.log(beach.getAttribute('src'));
beach.setAttribute('src','./beach2.jpg');
beach.setAttribute('width','300');

//=======================================
//3. 스타일(css) 제어
// : javascript로 css설정가능!

let h1 = document.querySelector('h1');

//3-1 인라인 스타일 방법으로 제어 할 수 있는 첫번째 방법 -->요소.style.color이런식으로
//사용하면 인라인 요소로 들어가는 것을console창에서 확인가능
// console.log(h1);
// console.log(h1.style);
// console.log(h1.style.fontSize); //camel case로 작성

// h1.style.color = 'limegreen';
// h1.style.backgroundColor='skyblue';
// h1.style.border = '4px solid brown';
// h1.style.textShadow = '2px 2px 10px #f005'

let lis = document.querySelectorAll('li'); //배열로 가지고 올때 배열 변수 이름에s를 붙여주신다고 한다
// console.log(lis);

// for(let i =0; i<lis.length; i++) {   //밑에꺼랑 차이점은 숫자같은 거를 조작할수있느데 즉 뽑아서 넣을 수 있는데 밑에 for of 반복문은 배열에서만 사용한다는 근데 쌤이 익숙해지면 밑에께 더 쉬울수 도 있따함
//     console.log(lis[i]);
//     lis[i].style.color = 'rgb(0,100,200)';
//     lis[i].style.fontSize ='20px';
//     lis[i].style.backgroundColor = '#ddd';
// }

// for ... of 반복문
// for (let 반복변수 of 배열) {} //길이를 지정 하지 않아도 알아서 순서대로 출력해준다
// const mylists = ['a','b','c','d'];
// for (let list of mylists) {
//     console.log(list);
// }
// //인라인 방법
// for (let li of lis) {  //lis태그를 모두 가져옴
//     console.log(li);
//     li.style.color = 'rgb(0,100,200)';
//     li.style.fontSize ='30px';
//     li.style.backgroundColor = '#ddd';
//     li.style.padding= '20px';
//     li.style.margin='30px';
//     li.style.fontWeight='bold';
//     li.style.fontStyle='italic';
//     li.style.textShadow='2px 2px 5px black';
//     li.style.borderRadius='50px 50px';

// }


//3-2. 클래스 제어 방식 ( 좀 더 많이 사용하는 방식 )
// 요소를 가지고 와서 넣고 빼고 제거하고 더하고 하는 것
// classlist 속성이 쓰인다
// - add(클래스명) : 클래스 추가
// - remove(클래스명) : 클래스 삭제
// - toggle(클래스명) : 클래스 있으면 제거, 없으면 추가
// - contains(클래스명) : 해당 클래스가 있는지 boolean 값으로 반환해 준다 ->true or fales가 나오겠죠


console.log(h1);
h1.classList.add('header-color');
console.log(h1.classList);

// lis에 저장되어 있는 각각li 요소에 접근해 .li 클래스 추가하기
// 반복문 사용하기~

// for ... of 반복문
// lis: li 모두 가져우는 배열
for (let li of lis) {
    li.classList.add('list-style')
    console.log(li.classList);
}

for (let i =0; i< lis.length; i++) {
    lis[i].classList.add('list-style')
    console.log(lis[i].classList);
}


//remove()
console.log(h1.classList); //삭제전
h1.classList.remove('title');
console.log(h1.classList); //삭제후

//toggle()
h1.classList.toggle('happy'); //없어서 추가됨
// h1.classList.toggle('happt'); //있어서 제거

//contains() -조건문에서 어떤 클래스가 어떤 요소를 가지고 있을 때 얘가 있으면 무슨일을 하고 없으면 무슨일을 해라 이런식으로 사용가능
console.log(h1.classList.contains('header-color')); //true
console.log(h1.classList.contains('lucky')); // false

//===============
console.log(document.querySelector('li'));  //li태그들중 첫번째 하나 선택(사과)
const apple = document.querySelector('li');
const fruits = document.querySelector('ul');
//계층이동
//부모,자식,(조상),(자손),형제 이렇게 이루어져있는 트리 형식

//1. 부모 노드 찾기 
//직속 부모는 하나
console.log(apple.parentElement);; //apple. 점을 한 이유는 위에서 apple이 이미 지정되있어서? //apple.parentElement.parentElement -->body태그가 나옴 

//2. 자식노드 찾기
console.log(fruits.children); //자식 요소는 여러개 나올 수 있다
console.log(fruits.children[0]); //0번째 자식 요소
console.log(fruits.children[1]); //1번째 자식 요소
console.log(fruits.children[2]); //2번째 자식 요소
console.log(fruits.children[3]); //3번째 자식 요소

// 부모->자식->부모
console.log(fruits.children[0].parentElement);

//3. 형제 노드
const lists = document.querySelectorAll('#fruits > li');
console.log(lists); //li*4   //인덱싱과정이 필요?
const listOrange = lists[2];  //const listOrange = document.querySelectorAll('li')[2]  이 코드와 동일하다
console.log(listOrange);
console.log(listOrange.previousElementSibling);  //키위
console.log(listOrange.nextElementSibling);  //수박


const numbers =document.querySelector('ol')
const one = document.querySelector('li')
console.log(numbers.children);
console.log(numbers.children[1]);

console.log(one.parentElement.parentElement);
console.log(numbers.children[2].parentElement);


// const lists = document.querySelectorAll('#fruits > li');형제노드를가져온다고 SelectorAll 에 li를 가져오면
//html에 있는 모든 li를 가져온다 근데 나는 다 가져오기 싫고 fruits에만있는거 가져올거다 하면 #fruits > li로 적어서 가져오기
