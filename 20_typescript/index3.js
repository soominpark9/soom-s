//타입스크립트로 HTML 변경과 조작할 때 주의점
//narrowing으로 글자 바꾸기
//select로 찾은 변수는 null일 수도있기 때문에 null인지 아닌지 확인 할 필요가 있다
var 제목 = document.querySelector("#title");
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
//HTML 조작시 narrowing 하는 방법5개
//2. instance of 연산자 (자주 쓰임)
var 제목2 = document.querySelector("#title");
if (제목2 instanceof Element) {
    제목2.innerHTML = "반가워요";
}
//3. as키워드 사용하기
//왼쪽에 있는 요소의 타입을 Element로 간주해주세요 라는 뜻
var 제목3 = document.querySelector("#title");
제목3.innerHTML = "반가워요";
//4. object에 붙이는 물음표?  (optional chaining 이라는 신문법)
//제목에 innerHTML이 있으면 출력해주고
//없으면 undefined가 뜨게 해달라는 뜻
var 제목4 = document.querySelector("#title");
if ((제목4 === null || 제목4 === void 0 ? void 0 : 제목4.innerHTML) != undefined) {
    제목4.innerHTML = "반가워요";
}
//5. 조금 무식한 해결책
//tsconfig 파일에서 strictNullChecks 를 true 에서 false로 바꿔주는 것
//그럼 자유롭게 html narrowing없이 수정을 할 수 있다
//HTMLAnchorElement 타입
//이타입은 href style class 이런거 쓸 수 있다
//img 태그는 HTMLImageElement
//button 태그면 HTMLButtonElement
//h1 태그는 HTMLHeadingElement
//등등 태그마다 다 정해져 있다 이런 정확한 타입을 narrowing해줘야 html속성 수정을 제대로 할 수 있다
//전부 외울 필요는 없고 자동완성이 잘 될거다
/*HTMLAnchorElement 이건 조금 상세한 타입입니다.
이 타입은 "href, style, class, id 이런 속성을 가질 수 있다~" 라고 타입이 정의되어있다.
그래서 a태그에게 어울리는 타입인 HTMLAnchorElement 라는 타입을 쓸 수 있는지 instanceof 키워드로 확인해야한다.
확인하는 과정을 narrowing으로 인정해줌 */
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
//신문법에선 ?.연산자 이용가능 즉 object에서 자료 뽑을 때 object.어쩌구 이렇게 자료를 뽑는데
//object?.어쩌구 라고도 뽑을 수 있다는 것
//이걸 쓰면 어쩌구라는 자료가 object에 존재하면 그거 뽑아주시고 존재하지않으면 undefined남겨주세요 라는 뜻
//그래서 narrowing할때 && 연산자로 undefined체크하기 귀찮을때 간혹 사용된다고 한다
//addEventListener 함수 붙일 때 물음표도 붙이는 것인데 이게 무슨 뜻이냐면
//혹여나 버튼이라는 변수가 없을 경우 그자리에 undefined를 내보내고 HTMLElement로 잘 있으면
//addEventListener() 잘 부착해주기 때문에 이것도 일종의 narrowing이라고 봐서 에러를 안내고 넘어간다
var 버튼 = document.querySelector(".button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () {
    console.log("안녕");
});
//실습1
//버튼을 누르면 이미지를 바꿔봅시다.
var 사진 = document.querySelector("#image");
if (사진 instanceof HTMLImageElement) {
    사진.src = "change.jpg";
}
//실습2
//3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꿔라
var 링크2 = document.querySelectorAll(".naver");
for (var i = 0; i < 3; i++) {
    var a = 링크[i];
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
}
