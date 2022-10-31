console.log('!');

function addNode() {
    // alert('버튼을 클릭하셨군요!')
    let div =document.getElementById('div1');
    // 요소 생성하기
    // createElement()
    let p = document.createElement('p'); //p태그 생성 //<p></p> 빈 p태그 만든것과 같은상황
    p.innerText = '버튼을 눌러 만들어진 p태그'; //<p> 버튼을 눌러 만들어진 p태그 </p>
    p.style.fontWeight = '700';
    p.classList.add('append-p');

    // div.appendChild(p);
    div.append('1번 추가')
    div.append(p, '2번추가'); //동작은 똑같이 일어난다  //노드 객체 or 텍스트 추가, 한 번에 여러개 가능

}
function removeNode() {
    //alert('삭제버튼 클릭!')
    let div = document.querySelector('#div1');
	let p = document.querySelector('#div1 > p');

    
    div.removeChild(p);  //자식을 지우는 거니까 자식요소p가와야한다
    // p.remove();
}

//노드 생성/추가/삭제
//1. 노드 생성
//createElemet()

//2. 노드 추가
//appendChild(): 노드 객체만 추가, 한번에 한 개
//append(): 노드 객체 or 텍스트 추가, 한 번에 여러개 가능

//3. 노드 삭제
// 부모 노드.removeChild(자식노드): 부모 요소의 자식노드를 삭제
// 노드. remove(): "선택한 요소"를 사용 -> 그냥 remove가 더 직관적이라 생각해서 이쪽을 많이 사용하신다함

//===================================================

let ul = document.querySelector('ul');
let li = document.createElement('li'); // <li></li>
li.innerText = '오렌지'; // <li>오렌지</li>

ul.append(li)     //li 태그를 ul태그안에 넣어줘야하기 때문에
//===================================================
let container = document.querySelector('.container');
let img = document.createElement('img'); // <img>
img.setAttribute('src', './beach1.jpg'); // <img src="./.jpg" >
img.setAttribute('alt', '해변'); // <img src="./image/puppy.jpg" alt="해변" >
let title = document.createElement('div'); // <div></div>
title.innerText = '해변입니다.'; // <div>해변입니다.</div>

container.append(img);
container.append(title);


