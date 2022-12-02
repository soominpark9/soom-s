//map () 반복

const list = ["a", "b", "c", "d", "e"];

for (let i = 0; i < list.lenght; i++) {
  console.log(list[i]);
}

list.map((txt, idx, arr) => {
  console.log(txt, idx, arr);
});

// txt : 원소값
// idx : 인덱스 위치
// arr : 현재 반복을 돌고 있는 배열 (배열전체)

// filter() <-자바스크립트의 배열내장 함수
// 새로운 배열을 반환해 준다
// -리턴할때 true 이면 요소를 반환하고 flase가 나오면 요소를 버리고 => 새로운 배열

const words = ["dog", "cat", "rabbit", "apple", "wow"];
// 글자수 3개 초과 필터링
let results = words.filter((word) => word.length > 3);
// let results = words. filter((word) => {
//    return word.lenght >3; 랑 식이 같음
// });
console.log(results);

//글자에 a 포함 필터링
let results2 = words.filter((word) => {
  return word.includes("a");
});

console.log(results2);

// console.log("abc".includes("a")); //true
// console.log("abc".includes("x")); //false

//==========================================================================================
console.log("-------------");
const nums = [1, 2, 3, 4, 5];
const newNums = nums.map((num) => num * 3);
console.log(newNums); //[3,6,9,12,15]

console.log(newNums.includes(3)); //true
console.log(newNums.includes(4)); //false
console.log(newNums.includes(3)); //true
console.log(newNums.indexOf(9)); //indexOf : 원소의 위치값(인덱스) //2 -> 2번쨰 원소 위치에 존재한다는 뜻

const arr1 = [
  { name: "a", id: 1 },
  { name: "b", id: 2 },
  { name: "c", id: 3 },
];

const arr2 = [
  { name: "d", id: 4 },
  { name: "e", id: 5 },
  { name: "f", id: 6 },
];

//concat()을 활용하면 배열을 합칠 수 있다
console.log(arr1.concat(arr2));

/*
[
  { name: 'a', id: 1 },
  { name: 'b', id: 2 },
  { name: 'c', id: 3 },
  { name: 'd', id: 4 },
  { name: 'e', id: 5 },
  { name: 'f', id: 6 }
] 
*/

