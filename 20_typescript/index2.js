//타입도 변수에 담아 쓰자 type 키워드 써서 & readonly
//type 키워드로 변수만들기 -> type alias 라고 한다
//type 변수는 항상 대문자로 시작 그래야 다른 변수들이랑 차의점이 잘보인다
var 동물 = 123;
var 동물1 = { name: "kim", age: 20 };
var 출생지역 = { region: "seoul" };
//위에 const안에 있는 object는 바꿀 수 있다 왜냐하면
//const는 재할당을 막는 변수지 object안에있는 내용의 수정을 막는 키워드는 아니기 때문이다
출생지역.region = "busan"; //변경됨
var 남친 = {
    name: "마이크"
};
//진짜로 되는지 확인하고 싶다면
var positiong = { x: 10, y: 20 }; //에러안뜨는거보니 object가 extend됬다
var 테스트용변수 = {
    size: 123,
    position: [1, 2, 3]
};
var 테스트용변수2 = {
    name: "kim",
    phone: 123,
    email: "abc@naver.com"
};
var 회원가입정보 = {
    name: "kim",
    adult: false,
    phone: 1234
};
//==========================================================================================
//Literal Types로 만드는 const 변수 유사품
//만드는법
//1. string,number 이런것만 타입이 될 수있는게 아니라
//일반 글자같은 것도 타입이 될 수 있다.
var choi;
var kim;
//위에 만든 타입은 마음대로 변수나 함수에 할당 가능하다
//신기하게도 john이라는 변수는 이제 대머리라는 글자만 할당할 수 있고
//kim이라는 변수는 솔로라는 글자만 할당 할 수 있다
//*특정 글자나 숫자만 가질 수 있게 제한을 두는 타입을 literal type이라고 부른다* -> 더 엄격한 실드
//Literal Types의 장점 : 변수에 뭐가 들어올지 더 엄격하게 관리가능
//자동완성 힌트도 good
var me;
me = "키큰"; //키큰 혹은 여자만 변수로 가질 수 있다
function 함수(a) {
    return 1;
}
함수("hello");
//함수도 똑같다. 파라미터 타입선언을 할때 숫자를 집어넣으면 그 숫자만 파라미터로 넣을 수 있고
//return 타입선언할 때도 글자나 숫자를 집어넣으면 그 값만 return 할 수 있다.
//파라미터자리에 무조건 hello만 들어올수 있다 함수 파라미터 자리에 들어올 수 있는 자료가 몇개없다면
//literal type을 지정해놓는것이 더 편할듯
// 가위바위보 중 1개 입력
// 가위 바위 보 만 들어올 수 있는 array를 return 해야함
function 가위바위보(a) {
    return ["가위", "보"];
}
가위바위보("가위");
//const 변수의 한계
//변수를 두개이상지정못하잖아 -> literal type 쓰면 두개이상 저장 가능
//literal type은 const 변수와 유사하게 사용 가능
//그래서 literal type은 const변수의 업그레이드 버전이라고 생각하면된다
var 변수 = "kim";
var 접니다;
//literal type의 문제점
var 자료 = {
    name: "kim"
};
자료.name; //console창에 kim나옴
function 내함수(a) { }
내함수("kim"); //literal type이용해서 파라미터로kim만 받을 수 있게 했다
//내함수(자료.name) --> 하면 에러가 난다 why ?????
//파라미트 a의 타입은 kim 인데 자료.name의 타입은 string이기 때문에
//해결법 1. object만들때 타입을 미리 지정해주던가 var 자료: kim = {}
//해결법 2. as 문법으로 타입을 가짜로 만들던가 (자주쓰는건 좋지 않다)
//해결법 3. as const 키워드 쓰던가
var 자료2 = {
    name: "kim"
};
//2.함수 type alias 부착하려면 함수 선언식이아닌 표현식을 써야한다
var 함수10 = function () {
    return 10;
};
var ABC = function (x, y) {
    return x + y;
};
var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("안녕");
    }
};
회원정보.plusOne(1); //plusOne함수안에 있는 내용이 실행
회원정보.changeName();
//숙제를 위한 콜백 함수 개념
//함수안에 들어간 함수를 콜백 함수라고 한다
function 함수5(a) {
    a();
}
function 함수6() { }
함수5(함수6); //1.함수 5내부 코드 a()이 실행됨 2. 근데 파라미타를 a자리에 집어넣어 함수6() 실행됨
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
}
/*함수에 함수를 집어넣고 싶습니다.

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다.
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면
1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다.
이 함수는 어떻게 만들면 될까요?
둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다. */
function 만들함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
만들함수('010-1111-2222', cutZero, removeDash);
