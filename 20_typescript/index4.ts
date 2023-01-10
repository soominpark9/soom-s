//ES6 신 문법에서는 class 만들 때 타입스크립트로 타입 지정 가능

class Person1 {
  name: string;
  //typescript constructor() 는 필드값에 추가하려는 name의 속성을 적어줘야 this.어쩌구 가능
  //이게 자바스크립트랑 타입스크립트의 가장 큰 차이점
  constructor(a: string) {
    //constructor 파라미터 지정 가능
    //return 타입 지정은 할 필요 없 -> 복제되는게 항상 object인데 return 타입 지정할 이유 없음
    //당연히 함수와 관련된 모든 문법들  rest parameter ,default parameter등 가능
    this.name = a;
  }
  //프로토타입의 값이나 함수를 추가 하고 싶으면 여기에 추가해주면 된다
  //프로토타입 함수 지정해서 쓰면된다
  //return이 있길 원하면 return타입도 지정해주면 좋다
  함수(a: string) {
    console.log("안녕" + a);
  }
}

//new Person1(); //person1안에 있던 속성을 물려받은 object가 남음
let 사람1 = new Person1("kim"); //변수에다가 저장해서 써도됨 //파라미터자리에 kim넣으면 kim나옴
let 사람2 = new Person1("park"); //park 출력
사람1.함수("안녕"); //안녕을 a라는 파라미터에 넣어 함수를 실행해주세요 ->안녕안녕
console.log(사람1);
console.log(사람2);

class Person2 {
  data = 0; //필드 값 -> class 필드값 (=constructor 와 똑같은 역할을 한다)
}
new Person2(); //person2안에 있던 속성을 물려받은 object가 남음

let 사람3 = new Person2();
console.log(사람3.data);

//실습1  Car 클래스를 만들고 싶습니다.
/*1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다. 
3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.*/

class Car {
  model: string;
  price: number;
  constructor(a: string, b: number) {
    this.model = a;
    this.price = b;
  }
  tax(): number {
    return this.price * 0.1;
  }
}
let car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300


//실습2 class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
/* 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면 
2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고 
3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 말기 */

class Word{
  num;
  str;

  constructor(...param){
    let 숫자들 :number[] = [];
    let 문자들 :string[] = [];

    param.forEach((i)=>{
      if (typeof i ==='string') {
        문자들.push(i)
      } else {
        숫자들.push(i)
      }
    })

    this.num = 숫자들;
    this.str = 문자들;
  }
}


let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park'] 