// # setTimeout()
// setTimeout(code ,delay)
// : delay(단위 ms)동안 기다리다가 code 함수를 실행

// 출력 결과는 1->3->2
// console.log(1);
// setTimeout(function () {
//     console.log(2);
// }, 2000);
// console.log(3);

// #2 비동기 처리
// ex. 편의점에 들어가서 음료수를 사고 나오는 상황
// 마트가서 -> 고민하고 -> 픽하고 지불

// function goMart() {
//     console.log('마트에 가서 어떤 음료를 살지 고민한다.')

// }

// function pickDrink() {
//     //3초 고민하는 상황
//     setTimeout(function() {
//         console.log('고민 끝!')
//         product ='제로 콜라';
//         price =2000;
//     }, 3000)
// }

//고민을 했으면 이제 돈을지불할 차례
// function pay(product, price) {
//     console.log(`${product} 제품의 가격은 ${price}이다.`)
// }

// let product;
// let price;
// goMart();
// pickDrink();
// pay(product,price);

//  #3 콜백 함수
//  - 다른 함수의 실행이 끝난뒤에실행되는 함수
//  -js 에서는 어떤 함수의 "매개변수" 쓰일 수 있다
//   비동기 처리되는 작업을 동기 처리 할 수 있도록 만들어 준다

//  위 예시 코드에서 undefined 가 뜨지 않도록 해보자!!
//  즉, 비동기 방식으로 작성된 코드를 "동기 처리 "할 수 있도록 바꿔보자

// function goMart() {
//   console.log("마트에 가서 어떤 음료를 살지 고민한다.");
// }

// function pickDrink(callback) {
//   //여기서 callback이란 매개변수가될 콜백 함수 이작업이 끝난 후 고민 끝이나오고 2000원을 넣은다음에
//   //3초 고민하는 상황
//   setTimeout(function () {
//     console.log("고민 끝!");
//     product = "제로 콜라";
//     price = 2000;
//     callback(product, price); //여기에 넣어준다 얘가 pickdrink가 실행된다음에 callback함수를 넣어서 차례대로 실행 될 수 있게
//   }, 3000);
// }

// function pay(product, price) {
//   console.log(`${product} 제품의 가격은 ${price}이다.`);
// }

// let product;
// let price;
// goMart();
// pickDrink(pay);

// #4 콜백 지옥(callback hell)
// : 콜백 함수가 반복되어서 코드의 들여쓰기가 깊어지는 현상
// -> 가독성과 / 유지보수성이 하락한다
//  1초마다 배경색이 변경되는 코드를 예시로 들어보자
// red- orange -yellow -green -blue 순으로 해보자

// 1초 기다렸다가 body 배경색이 red로 변경 되는 것
// setTimeout (code,delay)

setTimeout(function () {
  document.body.style.backgroundColor = "red";
  setTimeout(function () {
    document.body.style.backgroundColor = "orange";
    setTimeout(function () {
      document.body.style.backgroundColor = "yellow";
      setTimeout(function () {
        document.body.style.backgroundColor = "green";
        setTimeout(function () {
          document.body.style.backgroundColor = "blue";
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


