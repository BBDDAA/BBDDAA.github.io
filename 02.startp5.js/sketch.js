
let myNum = 30;
console.log(myNum);
console.log(myNum+50);
console.log(myNum);
myNum = myNum+30; //재선언
console.log(myNum);
// let myNum = 20; error

// == < 같다  = < 선언
/* let 변수선언 변수==변하는 수 (ax+b에서 x)
고정된 값(상수) ==const 1번선언 변경x*/

const yourNum = 20;
console.log(yourNum);
console.log(yourNum-1);
console.log(yourNum-2);
const PI = 3.14;
console.log(PI*4);

const HP = 100;
console.log(HP);

let Hp = 200;
console.log(Hp);
Hp = Hp-10;
console.log(Hp);

const enemy = 10;


// yourNum = 40; error
// console.log(yourNum);

function setup() {
  console.log("Hello, world!");
  createCanvas(300, 300);
  console.log("3");
  console.log("4");
  console.log("hello");
  console.log("hel)lo");
  //console.log("hel")lo");
  console.log('helloOoooOOOooO'); //되도록 큰 따옴표로
  console.log("hello"+5);
  console.log("score : " + myNum);
  console.log("score : " + "30");
  console.log("score : " + myNum+50);
  console.log("score : " + "myNum+50");
  console.log(myNum+50);
  //string 문자열 string+숫자==문자열
  
}

function draw() {
  background(0);
  ellipse(50,50,100,100);
  //console.log("1");
  //console.log("hello");
  
  // ellipse(150,150,300,300); < command 한줄
  /* <여러줄
  ellipse(150,150,300,300);
  ellipse(150,150,300,300);
  ellipse(150,150,300,300);
  */
}
