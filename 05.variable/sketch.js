// let x = 75;
// let y = 50;
// let d1 = 80;
// let d2 = 80;

// function setup() {
//   createCanvas(300, 300);
  
// }

// function draw() {
//   background(200);
//   ellipse(x, y, d1, d2);
//   x = x+100;
//   ellipse(x, y, d1, d2);
//   x = x+100;
//   ellipse(x, y, d1, d2);
// }

// let x1 = 50; //line x1
// let x2 = 250; //line x2
// let y = 30; // height of line


// function setup() {
//   createCanvas(300, 300);
  
// }

// function draw() {
//   background(200);
//   line(x1, y, x2, y);
//   line(x1, y*2, x2, y*2);
//   line(x1, y*3, x2, y*3);
//   line(x1, y*4, x2, y*4);
//   print(y);
//   y=y+5;
//   print(y);
//   y = y % 300;
//   console.log();
//   print("\n"+y);
//}

// let x = 10; //line 1
// let y = 10;
// let d = 10;
// let c = 0;
// let r = 0
// let g = 255
// let b = 50

// function setup() {
//   createCanvas(300, 300);
  
// }

// function draw() {
//   background(200);
//   fill(r,g,b);
//   ellipse(x, y, d, d);
//   d++;
//   b=b+5;
//   d %=300;
//   b %=255;
//   x++; // x = x+1;
//   y++;
//   x %=300; // x + x%300;
//   y %=300; // y + x%300;

// }


let x = 300, y = 200, c = 0, d = 100;
let c2=20, c3=40;
let cR=300;
let theta = 0.0;


function setup() {
  createCanvas(700, 400);
  frameRate(60);
}

function draw() {
  background(0,50);

  let x = map(sin(theta), -1, 1, 0, 700);
  //let y = map(sin(theta), -1, 1, 0, 700);
  //let d = map(sin(theta), -1, 1, 0, 700);

  push();
  strokeWeight(2);
  stroke(255);
  fill(255);
  textSize(40);
  text("distance : "+x,40,10,500,100);
  textSize(30);
  text("R : "+c,cR+50,25,500,100);
  text("G : "+c2,cR+160,25,500,100);
  text("B : "+c3,cR+270,25,500,100);
  pop();

  textSize(30);

  stroke(255, 255, 0);
  strokeWeight(5);
  line(0, y+d/2, 700, y+d/2);

  fill(c, c2, c3);
  ellipse(x, y, d, d);
  ellipse(x+d, y, d, d);



  noFill();
  triangle(x, y, x+d/2, y-d, x+d, y);

  push();
  stroke(c+20,c2+10,c3-30);
  text("사람",x,y-d-10);
  pop();

  push();
  strokeWeight(2);
  fill("#000000")
  stroke("#FFFFFF");
  ellipse(x-50,y-50,d*2,d-20);
  text("Hello, world",x-130,y-40)
  pop();

  line(x-30, y-d-3, x+130, y-d-3);
  line(x+100, y-d-3, x+100, y-d-25);
  line(x+90, y-d-25, x+110, y-d-25);

  x++;
  c=c+60;
  c2=c2+50;
  c3=c3+40;
  x %=700;
  c %=255;
  c2 %=255;
  c3 %=255;

  print("네모토끼 \"안녕\" \n \"살려\"")

  theta += 0.1;

  // \n 개행  \\ 경로
  
}