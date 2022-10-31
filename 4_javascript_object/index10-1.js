console.log('!');


// 이벤트 (Event)
// : 사용자들의 행동에 반응하는 작업
// ex. 클릭, 더블클릭,폼 제출 등...

// 이벤트 리스터 (Event Listener)
// : 이벤트가 발생했을때 실행할 함수
// 1. 인라인 방식 onXX
// 2. onXX 속성 방식
// 3. addEventListener() 매소드 방식


//1.인라인 방식
// <button onclick="showAlert();">버튼1</button>
function showAlert() {
    alert('버튼1 클릭!!!')
}
//이렇게 해도 첫밴째 버튼이랑 같은 효과가 나온다


//2.속성(프로퍼티) 방식
//<button id="btn2">버튼2</button> 의 경;우
let btn2 = document.querySelector('#btn2'); // <botton>
btn2.onclick = function () {
    alert('버튼2 클릭!!!');
}

//1,2째 방법은 클릭이던 더블이던 마우스오버이던앞에 꼭on이 들어가야한다

//3. addEventListener() 매서드 방식 )(가장많이사용)
//<button id="btn3">버튼3</button>의 경우
//addEventListener(type,listener)
// ㄴ type :이벤트 종류 (클릭, 더블클릭,...)
// ㄴ listener : 이벤트 발생시 처리할 함수
let btn3 = document.querySelector('#btn3'); // <botton>
btn3.addEventListener('click', function () {
  alert('버튼3 클릭!!!');
  })  //(이벤트타입,함수) ->('click',함수) -> ('click', function () {} )
//클릭했을 때 나타난 효과를 작성

// let span1 = document.querySelector('#span1');
// span1.style.color= 'blue';
// span1.onclick = function() {
//     alert('첫번째 span을 선택 하셨습니다')
// }

// let span2 = document.querySelector('#span2');
// span2.style.backgroundColor ='limegreen';
// span2.addEventListener('dblclick',function () {
//     alert('두번째 span을 더블 클릭 하셨습니다');
// })


// let span3 = document.querySelector('#span3');

// span3.onmouseover=function() {
//     alert('마지막 span을 선택 하셨습니다')
// }


//mouseover이벤트

// function mouseoverSpan1() {
// 	let span1 = document.querySelector('#span1');
// 	span1.style.color = 'blue';
// }

// let span2 = document.querySelector('#span2');
// span2.onmouseover = function () {
// 	span2.style.backgroundColor = 'limegreen';
// }

// let span3 = document.querySelector('#span3');
// span3.addEventListener('mouseover', function () {
// 	alert('span3 클릭!!!!!');
// })


//dblclick 이벤트

function dblclickspan1() {
	let span1 = document.querySelector('#span1');
	span1.style.color = 'blue';
}

let span2 = document.querySelector('#span2');
span2.ondblclick = function () {
	span2.style.backgroundColor = 'limegreen';
}

let span3 = document.querySelector('#span3');
span3.addEventListener('dblclick', function () {
	alert('span3 클릭!!!!!');
})



// function showAlert2() {
// 	alert('더블 클릭!!!!!');
// }
// span3.addEventListener('dblclick', showAlert2);
// span4.addEventListener('dblclick', showAlert2);
// span5.addEventListener('dblclick', showAlert2); 이런거는 여러개가 같은 움직임값일때 짧게 처리할수잇는방법


