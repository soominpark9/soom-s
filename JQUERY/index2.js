
//val()
// input value 가져오기/설정하기

function getVaule() {
    let value =$('.input1').val();
    alert(value);

}

function setValue() {
    $('.input1').val('설정 완료!');
    //input1요소에 val에 쓴 글씨가 설정이된다 > 값을 가져온다
}


// css()

function changeCssJs() {
    let span  = document.querySelector('.span1');
    span.style ='font-siza:20px; color:red';
}

function changeCssJquery() {
    $('span').css('font-size', '40px');
    $('span').css('color', 'blue');
    // 복합설정을 할 경우
    // $('span').css({
    //     'font-size': '40px'
    //      'color': 'blue'
    // });
    
}


function getCssJquery() {
    console.log($('.span1').css('color'));
}


//attr()
function chageAttrJs() {
    let a =document.querySelector('a');
    a.setAttribute('hrdf', 'https://naver.com');
}


function changeAttrJquery() {
    $('a').attr('href', 'https://www.daum.net');
}  //버튼을 누를떄 마다 이미지가 바뀌는 속성을 넣고 싶을 때 사용하면 된다


//text()
function chageTextJs() {
    let p= document.querySelector('.p-text');
    p.textContent = 'js로 바꿨습니다'; 
}


function chageTextJquery() {
    $('.p-text').text('jquery로 바꿨습니다');
}



//html()

function chageHtmlJs() {
    let p= document.querySelector('.p-html');
    p.innerHTML = '<h1>js로 바꿨습니다</h1>'; 
}


function chageHtmlJquery() {
    $('.p-html').html('<h3>jquery로 바꿨습니다</h3>');
}


// 요소 추가하기
// append() -->마지막요소로 추가
function appendJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');  // <li></li> 값 생성
    li.innerText = '마지막 자식으로 추가된 js';

    ul.append(li)

}
function appendJquery() {
    $('.colors').append('<li>마지막 자식으로 추가된 jquery</li>'); //이렇게 하면 바로 추가가된다
}

// prepend() -->선택된 요소에 맨 처음에 추가
function prependJs() {
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');  // <li></li> 값 생성
    li.innerText = '첫번째 자식으로 추가된 js';

    ul.prepend(li)

}
function prependJquery() {
    //선택자가 자꾸 반복된다? --> 변수에 담을 수 있다
    //let ul =$('.colors');
    $('.colors').prepend('<li>첫번째 자식으로 추가된 jquery</li>');
}


// beford()

function beforeJs() {
    let green = document.querySelector('.green');
    let li = document.createElement('li');  // <li></li> 값 생성
    li.innerText = '이전 형제 요소로 추가된 js';

    green.befor(li)

}
function beforequery() {
    $('.green').before('<li>이전 형제 요소로 추가된 jquery</li>');
} //green태그 앞에 글이 자꾸추가되는것을 확인

// after()


function afterJs() {
    let green = document.querySelector('.green');
    let li = document.createElement('li');  // <li></li> 값 생성
    li.innerText = '다음 형제 요소로 추가된 js';

    green.after(li)

}
function afterquery() {
    $('.green').after('<li>다음 형제 요소로 추가된 jquery</li>');
}


// 요소 삭제하기
// remove()
function removeJs() {
    document.querySelector('#li2').remove();

}

function removeJquery() {
    $('#li2').remove();
}

// empty()

function emptyJs() {
    // document.querySelector('ul.nums').empty(); --> 자바는 이대로면 에러가 뜸 empty()가 존재 하지 않기 때문에 innerHTML속성을 사용 해야함
    document.querySelector('ul.nums').innerHTML='';

}  

function emptyJquery() {
    $('ul.nums').empty();
}


//요소 탐색하기
function findParnet() {
    console.log($('.child2').parent());
}

function findParnets() {
    console.log($('.child2').parent());
}

function findNext() {
    console.log($('.child2').parent());
}

function findPrev() {
    console.log($('.child2').parent());
}

function findChildren() {
    console.log($('.parent').parent()); //child2가 자식이없어 parnet 로 찾아보기
}

// 클래스 조작하기
function addClass() {
    $('#hi').addClass('fs-50');
}

function removeClass() {
    $('#hi').removeClass('fs-50');
}

function hasClass() {
    console.log($('#hi').hasClass('fs-50'));
}

function toggleClass() {
    $('#hi').toggleClass('bg-pink');
}













































