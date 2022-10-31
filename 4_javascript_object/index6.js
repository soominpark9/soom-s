console.log('!!');

/*
  자료형
  - 기본형 (primitive)
  - 객체 (object)
    -배열
    -객체 리터럴(객체)
*/

// 1. 배열
const arr1 = ['red','orange','yellow',1,2,3];  //배열 생성 방법1
const arr2 = new Array ('red','orange','yellow',1,2,3); //배열 생성 방법2
console.log(arr1);
console.log(typeof arr1); 
console.log(arr2);
console.log(typeof(arr2));

// 배열 원소(요소) 읽기
// 인덱스 : 배열 원소 위치 값
// 숫자는 0부터 시작 주의
let str ='Green'
console.log(str[0]);
console.log(arr1[0]);
console.log(arr1[5]);

// 배열 원소값 변경하는방법
console.log(arr1);
arr1[2] ='따란';
console.log(arr1);
console.log(arr1);
arr1[4]=100;
console.log(arr1);


// 원소 추가
arr1[6] ='추가';
console.log(arr1);
arr1[7] ='추추가';
console.log(arr1);


// 이럴경우 인덱스8,9가없어서 console에 빈 x2라고 (인덱스10의)얍 전에 뜬다 
// 즉 동떨어진 인덱스 번호로 원소값을 추가하면 ; 그 사이는 빈값으로 나온다
arr1[10] = '얍';
console.log(arr1)

console.log(arr1[8]);  // undefined라고 나온다
console.log(arr1[9]);  // undefined라고 나온다


// 배열에서 자주 사용되는 속성과 매서드
// 1. lenght : 배열 길이 = 요소 개수 (속성)
console.log(arr2);
console.log(arr2.lenght);

console.log(arr2[arr2.lenght -1]); //몇번쨰 인지 모르지만 맨마지막 요소를 가져 오고 싶을 때 쓰는 방식
// 원소 개수 6 = 배열길이 6
// 인덱스 번호 = 0 1 2 3 4 5 
// 배열에서 마지막 인덱스 번호는 = 배열 길이 보다 1나 작다 즉 배열 길이 -1 이다


// 2. push(x) : 매개변수를 넣어준  x를 맨 뒤에 추가해 준다
arr2.push(4);
arr2.push(5); //push함수는 항상 맨마지막에 추가
arr2.push(6);
arr2.push(7,8,9); //여러개 추가도 가능
console.log(arr2);  //맨뒤에 알아서4를 추가되어있는다


// 3. pop(): 맨 뒤 요소를 제거
arr2.pop();
console.log(arr2); // 맨 뒤 요소가 제거 되어 나옴
arr2.pop();
arr2.pop(); //마지막 요소가 계속 제거 됨 


// 4. unshift (x): 맨 앞에 x를 추가해준다
arr2.unshift('hi');
console.log(arr2);
arr2.unshift('a', 'b'); //여러 개 추가 가능 a,b순서로 
console.log(arr2);


// 5. shift(): 맨 앞 요소를 제거 해 준다
arr2.shift();
console.log(arr2);
arr2.shift();
console.log(arr2);

// 6. indexOf(x): 배열 원소에 x가 있는지 찾아 준다
console.log(arr2.indexOf('orange')); //2 -->2 번째 원소라고 나온다
console.log(arr2.indexOf('xxx')) //없는 값을 찾으면 -1 을 반환해 준다


// 응용 -> 배열안에 배열을 여러개 넣을 수 있다
// 2차원배열
const korean =[
    ['가','나','다'],
    ['라','마','바'],
    ['사','아','자'],
];

console.log(korean); 
console.log(korean[0]);  //[가,나,다] 가 나온다
console.log(korean[1]);  
console.log(korean[2]);  
console.log(korean[0][0]);  //가  나온다
console.log(korean[0][0]);  
console.log(korean[0][0]);  
//다차원 배열에서 원소를 찝어낼 수 있는 연습을 많이 하면 좋음



// 퀴즈) 아래 배열에서 아이스크림 출력하기
const letters = [
    ['사', '스', '자', '크'],
    ['진', '안', '리', '이'],
    ['가', '수', '림', '나'],
    ['아', '으', '차', '운'],
  ];


  console.log(letters[3][0]); //아
  console.log(letters[1][3]); //이
  console.log(letters[0][1]); //스
  console.log(letters[0][3]); //크
  console.log(letters[2][2]); //림


// 3차원 배열
const nums = [
    [
        [1,2,3],
        [4,5,6],
    ],
    [
        [7,8,9],
        [10,11,12]
    ],
];

console.log(nums);

// 8뽑기

console.log(nums[1][0][1]); //8


// =======================================================================
// 2. 객체 리터럴, 딕셔너리 (object)
// 배열: 순서가 있음
// 객체: 키-값 형태로 저장되어 순서가 없다
// {} 을 이용해 생성
// { key1 : value1, key2 : value2, key3 : value3, ...}

const cat = {
    name : '나비',   
    age : 1,
    mew : function() {
        return '냐옹'
    },
};

console.log(cat);   //키 값에 대한 알파벳 순서로 나온다 그래서 console창에 보면 내가쓴 순서와 다르게 순서가 나온다

// 객체 접근하기
// 1. 점 표기법
console.log(cat.name);  // name 찾기
console.log(cat.age);  // age 찾기
console.log(cat.mew()); //야옹을 출력한다

//접  표기법으로 value 값을 변경하기
cat.age = 3;
console.log(cat);

//key-value 값 추가하기
cat.gender = 'f';
console.log(cat);

//2. 대괄호 표기법
console.log(cat['name']);  //name이 key값
console.log(cat['gender']);  //f
console.log(cat['mew']);  //야옹

//value 변경하기 [대괄호]사용
cat['age'] = 5;
console.log(cat);

//key-value 추가하기
cat['weight'] = 5;
console.log(cat);
//2가지 방법중 점표기법을 더 많이 사용함 간단하기 때문에


// value값 : boolean, array, number, string, object ...
const dog = {
    name : 'Coco',
    isPoodle : true,
    age: 3,
    sibling : ['Max', 'Lucky','Bella'],
};

console.log(dog);


console.log(dog.name);
console.log(dog.isPoodle);
console.log(dog.age);
console.log(dog.sibling);
console.log(dog.sibling[0]);
console.log(dog.sibling[1]);
console.log(dog.sibling[2]);

//객체 타입 확인하기
console.log(typeof dog);
console.log(typeof(dog)); // 객체는 object



