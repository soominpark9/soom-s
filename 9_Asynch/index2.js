//  #1 프로미스 (promise)
// - 비동기 함수를 동기처리 하기 위해 만든 객체
// -성공, 실패를 분리해서 반환시켜준다
// 성공이든 실패든 무언가의 최종 결과를 반환시켜준다
//- fullfilled (resolve) : 성공
//- rejected (reject) : 실패

// function promise1(flag) {
//   return new Promise(function (resolve, reject) {
//     if (flag === true) {
//       resolve(
//         `promise 상태는 fulfilled! then()으로 연결됩니다. \n 이때 flag가 ${flag} 입니다.`
//       ); // true (성공)
//       //resolve -> then 으로 연결
//     } else {
//       reject(
//         `promise 상태는 rejected! catch()으로 연결됩니다. \n 이때 flag가 ${flag} 입니다.`
//       ); // false (실패)
//       //reject -> catch 로 연결
//     }
//   });
// }

// promise1(true)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// promise1(false)
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// promise1(5 > 3) //true
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// promise1(5 < 3) //false
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// #@ promise 사용법
// index.js 에서 "콜백함수"를 이용해 동기처리 한 것을
// "promise"를 이용해 동기처리를 해보자!!

function goMart() {
  console.log("마트에 가서 어떤 음료를 살지 고민한다.");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("고민 끝!");
      product = "제로 콜라";
      price = 2000;
      resolve();
    });
  });
}

function pay() {
  console.log(`${product} 제품의 가격은 ${price}이다.`);
}

let product;
let price;
goMart();
pickDrink().then(pay);

// #3 Promis 체이닝
// ex. 함수를 이용해 (4 +3) *2 -1 = 13연산을 해보자!
// 더하기 곱하기 빼기 순

// step1 call back함수 사용
// function add(n1, n2, callback) {
//   setTimeout(function () {
//     let result = n1 + n2;
//     callback(result);
//   }, 1000);
// }

// function mul(n, callback) {
//   setTimeout(function () {
//     let result = n * 2;  //14
//     callback(result); //callback(14)
//   }, 700);
// }

// function sub(n, callback) {
//   setTimeout(function () {
//     let result = n - 1;
//     callback(result);
//   }, 500);
// }

// add (2,3, function (x) { //7  add 함수의 callback(result)
//     console.log('1:', x)
//     mul(x, function (y) { // mul 함수정의부( 함수를 만든 곳들 )의 callback(result)를 의미한다
//         console.log('2:', y) //14
//         Sub(y,function (z) { //sub 함수 정의부의 callback(result)
//             console.log('3:', z); //13이 찍힌다 0.5초 기다렸다가
//         });
//     });
// });

// step2. promise 사용

function add(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n1 + n2;
      resolve(result);
    }, 1000);
  });
}

function mul(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n * 2;
      resolve(result);
    }, 700);
  });
}

function sub(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = n - 1;
      resolve(result);
      
    }, 500);
  });
}

add(4, 3) // add(4, 3) -> resolve(7) - then(7)
  .then(function (result) {
    console.log("1: ", result); // 7
    return mul(result); // return mul(7) - resolve(14) -> then(14)
  })
  .then(function (result) {
    console.log("2: ", result); // 14
    return sub(result); // return sub(14) -> resolve(13) -> then(13)
  })
  .then(function (result) {
    console.log("3: ", result); // 13
  });


