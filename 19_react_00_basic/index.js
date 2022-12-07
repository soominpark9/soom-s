// 구조 분해 할댕

// 1. 배열 구조 분해
// -순서가 중요
// -변수의 순서와 요소의 순서가 일치해야 함 여기서 peach없애면 undefinde가 뜬다
// -즉 없는 값은 undefined가 뜬다
// -기본 값 설정 가능
const lists = ["apple", "grape"];
[item1, item2, item3 = "peach"] = lists;

console.log("item1", item1);
console.log("item2", item2);
console.log("item3", item3);

const listss = ["apple", "grape", [1, 2, 3]];
[item1, item2, item3] = listss;

console.log("item1", item1);
console.log("item2", item2);
console.log("item3", item3);
console.log("item3", item3[1]);

//swqp -> (변수의 값을 교환하는 것)

let x = 1,
y = 2;
[x, y] = [y, x];
console.log("x:", x);
console.log("y:", y);

// 2. 객체 구조 분해
// -키 값과 변수명이 일치해야 함
// - 없는 키값을 변수명으로 받으면 undefined
const obj = {
  key1: "one",
  key2: "two",
};

const { key1, newKey1, key2, key3 = "three" } = obj;
console.log(key1); //one
console.log(newKey1); //undefined 가 뜸 왜냐하면 객체에서는 키 값과 변수명이 일치해야 한다 그냥 순서로 나오는게 아니기 때문에
console.log(key2); //two
console.log(key3); //ㅌthree

const { a, b } = { a: 10, b: 20 }; //{선언}  {할당} -> 순서가 아니라 각각 키값에 매치가됨  꼭기억
console.log(a); //10
console.log(b); //20

//===========================================================================================================

//여기부터 파일이 바뀐다...? js인데 쓰는거대로나오는 파일 뭐지..

//구조 분해 할당 배열에서의 사용 방법

const arr = ["a", "b", "c"];
// [before]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// [after]
const [one, tow, three] = arr;
console.log(one);
console.log(tow);
console.log(three);

// [after]  꼭기억
const [one2, tow2, three2, four2 = "hello"] = arr;
console.log(one2);
console.log(tow2);
console.log(three2);
console.log(four2);

//======================================================
const tv = {
  name: "samsung tv",
  price: 300,
  size: "76inch",
  store: "samsung",
};

//[before]
// ver1. 점 연산자
console.log(tv.name);
console.log(tv.price);
console.log(tv.size);
console.log(tv.namstore);

//ver2. 대괄호 표기법
console.log(tv["name"]);
console.log(tv["price"]);
console.log(tv["size"]);
console.log(tv["store"]);

//[after]  꼭기억
// 순서가 아닌 키값으로 받는다 -> 객체
//배열일 경우 순서가중요하다  위에 처럼
// key : 변수명 -> 새로운 변수명을 "키"로 사용
let { name, price, size, store, owner = "soom" } = tv;
console.log(name);
console.log(price);
console.log(size);
console.log(store);
console.log(owner);
console.log(price); // 위에 price대신 price:pricePrice, 넣었을 경우 price os not defined가 뜬다

//spread 연산자
// : 값을 펼치는 연산자

//object
// const chocoIcecrema = {
//     flavor: 'choco',
//     price: 2000,
//     store: 'ceo'
// }

// const strawberryIcecrema = {
//     flavor: 'strawberry',
//     price: 2000,
//     store: 'ceo'
// }

// const mangoIcecrema = {
//     flavor: 'mango',
//     price: 2000,
//     store: 'ceo'
// }

// //console을 보면 겹치는 정보가 너무 많다 이럴때 const defaultInfo로 같은 값을 묶어줬다.
// console.log(chocoIcecrema)
// console.log(strawberryIcecrema)
// console.log(mangoIcecrema)

const defaulInfo = {
  price: 2000,
  store: "ceo",
};

const chocoIcecrema = {
  ...defaulInfo,
  flavor: "choco",
};

const strawberryIcecrema = {
  ...defaulInfo,
  flavor: "strawberry",
};

const mangoIcecrema = {
  ...defaulInfo,
  flavor: "mango",
};

console.log(chocoIcecrema);
console.log(strawberryIcecrema);
console.log(mangoIcecrema);
//이렇게 하면 깔끔 object spread에서 사용하는 방법

//array (배열에서 spread연산)

const nums1 = ["one", "tow", "three"];
const nums2 = ["four", "five", "six"];

const nums = [...nums1, "seven", ...nums2];
//그러면 nums1펼친 값이 아래에 들어간다
console.log(nums);


