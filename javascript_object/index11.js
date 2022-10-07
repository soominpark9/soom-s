console.log('!');

const todoform = document.querySelector('#todo-form');
const ul = document.querySelector('.todos');

//이벤트 객체
//event
//이벤트가 발생을 하면 -: 브라우저는 발생한 이벤ㅌ에대한 정보를 담은 이벤트 객체 (event object)를 
//이벤트(변수) 리스너에게 전달 한다 여기선 function(event)의event ev라고쓰기도e라고쓰기도한다.
const clickme = document.querySelector('#clickme');
clickme.addEventListener('click', function (event) {
    console.log(event);
    //여기서event는 : 이벤트 객체에 대한 정보를 담고 있다.
})
todoform.addEventListener('submit', function(event) {
    
    //폼 이벤트: 폼이 제출되면 새로고침이 되는게 기본동작인데 
    //기본동작을 취소해주는 역할 즉 폼이 제출이되어도 끝나는게 아니라 나는 다시 html을 시작하겠다
    //라는 거지 그래서 preventDefault 넣고 여기서 function()이 비어잇었는데 event(변수) 를 여기도 넣어준다 
    //콘솔창 보면 submit해도 콘솔창에서 사라지는게아니라 정보가 찍히는것을 확인 할 수 있다


    //form의 submit이벤트는 제출되는 것이 기본 동작
    //제출 : 새로고침(우리입장에서보면?)
    // console.log('ADD 버튼 클릭');
    event.preventDefault();  // preventDefault : 브라우저에서 구현된 기본 동작 취소

    
	const todoInput = document.querySelector('input[name="todo"]'); //선택한 요소
	console.log(todoInput); //값을 확인 할 수 있다
	console.dir(todoInput); //객체를 트리 구조로 보여주는 명령어
    console.log(todoInput.value); //input값을 활용할 수 있음을 의미하는 코드 
    let todo = todoInput.value; //사용자가 input에 입력한 값이 된다




    // li 태그를 만들어서, li태그의 content로 input.value 값이 담기도록
	const newTodo = document.createElement('li'); // <li></li>
	newTodo.textContent = todo; // <li>사용자가 입력한 input 값</li>
	ul.append(newTodo); // <ul> <li>사용자가 입력한 input 값</li></ul>

    



   //input창 초기화
    todoInput.value = ' '; //input의 content를 빈 문자열로!설정해 초기화 시킨다
})

//=================================================================================
//블로그 창 처럼 미리보기 /실시간 보기할떄 사용되는 evnet
const chgInput = document.querySelector('#change-input');//선택
// console.log(chgInput); //출력확인

chgInput.addEventListener('input', function () {
     //input: 입력창에 변경이 일어나는 순간을 계속 감지
    const div = document.querySelector('.intro');
      //html의 div를 쓴 텍스트를 실시간으로 계속 보여주기 위해서 일단 여기div를 선택
    div.textContent = chgInput.value; //콘솔창으로보면 변경이벤트 공란에 타이핑 할때마다 실시간으로 밑에도찍히는것을 확인가능
});
//===============================================================================
//키보드 이벤트

const keyInput = document.querySelector('#key-input'); //선택
keyInput.addEventListener('keydown', function (event) {
    //keydown : 키를누르고 있을 때
    //event는 어떤 상황이벌어진것 -> 폼제출,클릭, 더블클릭 등 
    //클릭을당하거나 제출을 당한div같은애들을 이벤트객체라고한다
    // console.log(event);
    // console.log(event.code);
    
    //검색창같은경우에 화살표 말고도 엔터를 눌러도 전송이되잖슴 그럴때 이제 엔터를 눌렀을때 어떤 코드를
    //수행하겠다 이런일도 할 수 있다
    if (event.code === 'Arrowup') {  //event를 썻기 때문에 위에 함수의 event에 대한 
        //객체를 확인 할 수 있다.
        console.log('up!')
        //event코드가 위의 화살표를 눌렀다면~ 
    } else if (event.code === 'ArrowRight') {
		console.log('RIGHT!')
	} else if (event.code === 'ArrowLeft') {
		console.log('LEFT!')
	} else if (event.code === 'ArrowDown') {
		console.log('DOWNT!')
	} else {
    console.log('others');
	}
    console.dir(event);

});






