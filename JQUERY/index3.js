
console.log(document);  //js
console.log($(document));  //jquery


// 1/ Load Event 
$(document).ready(function () {
    console.log('ready - 문서의 dom트리가 완성되면 실행되는 이벤트이다')
});

//더 짧게 쓸 수도 있다 dom트리가 로드되자마자 경고를 보여줘야한다던지 안내메시지를 보여줘야한다던지 할떄ready를 사용
$(function () {
    console.log('안녕?')
});

// js
document.addEventListener('DOMContentLoaded', function() {  //dom콘텐츠가 완성이됬다면 다 불러졌다면
    console.log('domcontentloaded - 문서의 dom 트리가 완성되면 실행');
});

// 2. mouse event
$('.p-msg').click(function () { 
    $('.p-msg').css('color', 'red');
});



console.log($('.num')); //length : 4 jquery는 배열형식으로 가져와도 알아서 적용해준다
$('.num').click(function() {
    // $('.num').css('color','blue'); //모든 num
    $(this).css('color','blue'); //전체 num중에서 클릭이 발생한 해당 num만 적용된다 this=자기자신을 의미
    console.log($(this));  //클릭이 발생한 그 요소를 의미

});


// js

// const nums =document.querySelectorAll('.num');
// for (let i=0; i< nums.length; i++) {
//     nums[i].addEventListener('click', function () {
//         // console.log(nums[i]);
//         // nums[i].style.color ='blue';
//         this.style.color = 'blue';
//         console.log(this);
//     });
// }


//mouseover() : 요소에 마우스를 올렸을 떄 발생하는 event +올렸을 때만 설정 가능

$('.numbers').mouseover(function () {
    $(this).css('background-color', 'skyblue' );
    $(this).append('<div>mouseover() called!!!</div>' )   //마우스 올리면 배경색상이 계속 추가됨
});


//hover() : 마우스 올렸을때와 뗐을떄 둘다 설정 가능하다

$('.div-hover').hover(
    function () {  //마우스올렸을때 함수
        $(this).addClass('hover');
    },
    function () {  //마우스 뗐을때 함수 각각 적어줘야한다
        $(this).removeClass('hover');
    }
)

//scroll () : 스크롤 할 때
console.log(window); //js
console.log($(window)); //jquery

//window가 scorll했을 때 어떻게 보이는지
$(window).scroll(function () {
    console.log('scroll!!!!!!!!!!');   //html에 body에 padding 값을 500을 줘서 scroll이 생길 것이다
}) //스크롤 할떄마다 콘솔창에 스크롤한 횟수가 같이 찍힌다.



// 3. Key Event
$('.input-key').keydown(function (e) {
    console.log(e);
    
    if (e.code == 'ArrowUp') {
        console.log('up')
    } else if (e.code == 'ArrowDown') {
        console.log('down')
    } else {
        console.log('others');
    }
});

// 4. form event

$('#todo-form').submit(function (e) {
    e.preventDefault(); //기본동작 막기 (즉 여기선subit(새로고침)을 막기)
    // console.log('sumbit!!')

    const todo = $('input[name="todos"]').value(); //input에 값이 저장
    $('.todos').append(`<li>${todo}</li>`)   //ul에  li추가
    $('input[name="todo"]').val('');  //input이 초기화 된다
});



































