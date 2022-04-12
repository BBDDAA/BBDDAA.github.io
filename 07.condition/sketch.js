// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   print(mouseIsPressed == true);
//   if(mouseIsPressed == true)
//   {
//     fill(0);
//   }
//   else
//   {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }


// let x = 0, velocity = 5;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   ellipse(x, height/2, 30, 30);
//   x += velocity;
//   // if (x < 0 || x > width)
//   // {
//   //   velocity *= -1;
//   // }
//   if (x > width)
//   {
//     velocity *= -1;
//   }
//   if (x < 0)
//   {
//     velocity *= -1;
//   }

// }

// let x = 0, velocity = 5;
// let y = 0
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   ellipse(x, height/2, 30, 30);
//   x += velocity;
//   if (x < 0 || x > width)
//   {
//     velocity *= -1;
//   }

//   ellipse(width/2, y, 30, 30);
//   y += velocity;
//   if (y < 0 || y > width)
//   {
//     velocity *= -1;
//   }

// }


// let x = 0, y = 0, velocity1 = 5, velocity2 = -4;
// function setup() {
//   createCanvas(300, 300);
//   background(0);
// }

// function draw() {
  
//   // strokeWeight(random(5));
//   // stroke(random(255),random(255),random(255));
//   // noFill();

//   ellipse(x, y, 30, 30);
//   x += velocity1;
//   if (x < 0 || x > width)
//   {
//     velocity1 *= -1;
//     fill(255,0,0);
//   }

//   y += velocity2;
//   if (y < 0 || y > height)
//   {
//     velocity2 *= -1
//     fill(0,255,0);
//   }

// }

// let x = 0, velocity = 1;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   stroke(255);
//   line(x, 0, x, height);
//   x += velocity;
//   if (x < 0 || x > width) {
//     velocity *= -1;
//   }
//   if (x < 100 || x> 200) {
//     ellipse(width/2, height/2, 100, 100);
//   }

// }


// let x, y, d, r = 50.0, tx = 0.0, ty = 0.5;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   x = mouseX; //noise(tx) * width;
//   y = mouseY; //noise(ty) * height;
//   print(noise(tx), noise(ty));
//   d = dist(width/2, height/2, x, y);
//   if (d < r) {
//     fill(random(255), random(255), random(255), 200);
//   }
//   ellipse(x, y, r, r);
//   ellipse(width/2, height/2, r, r);
//   // ellipse(x, y, r, r);
//   // tx += 0.01;
//   // ty += 0.01;

// }


// let interval = 0, current_time = 0, previous_time = 0;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   current_time = millis();
//   interval = current_time - previous_time;
//   if (interval > 1000) {
//     previous_time = millis();
//     fill(random(255), random(255), random(255));
//   }
//   ellipse(width/2, height/2, 200, 200);

// }

// let x = 150;
// function setup() {
//   createCanvas(300, 300);
  
// }

// function draw() {
//   background(0);
//   stroke(255);
//   line(mouseX, 0, mouseX, height);
//   ellipse(x, height/2, 50, 50);
//   if (mouseX > x) {
//     x++;
//   }
//   else {
//     x--;
//   }

// }

// let y = 150;
// function setup() {
//   createCanvas(300, 300);
  
// }

// function draw() {
//   background(0);
//   stroke(255);
//   line(0, mouseY, width, mouseY);
//   ellipse(width/2, y, 50, 50);
//   if (mouseY > y) {
//     y++;
//   }
//   else {
//     y--;
//   }

// }


// let y = 150, x = 150;
// function setup() {
//   createCanvas(300, 300);
  
// }

// function draw() {
//   background(0);
//   stroke(255);
//   line(0, mouseY, width, mouseY);
//   line(mouseX, 0, mouseX, height);
//   ellipse(x, y, 50, 50);
//   if (mouseY > y) {
//     y++;
//   }
//   else {
//     y--;
//   }

//   if (mouseX > x) {
//     x++;
//   }
//    else {
//     x--;
//   }

// }



// function setup() {
//   createCanvas(300, 300);
  
// }

// function draw() {
//   background(0);
//   fill(255, 255, 0);
//   if (mouseY < height/3) {
//     rect(0, 0, width, height/3);
//   } else if (mouseY < height*2/3) {
//     rect(0, height/3, width, height/3);
//   } else {
//     rect(0, height*2/3, width, height/3);
//   }

// }

// function setup() {
//   createCanvas(300, 300);
  
// }



// function draw() {
//   background(0);
//   if (mouseX < width/2 && mouseY < height/2) {
//     rect(width/2, height/2, -width/2, -height/2);
//     fill(255, 255, 255);
//   } else if (mouseX > width/2 && mouseY < height/2) {
//     rect(width/2, height/2, width/2, -height/2);
//     fill(255, 0, 0);
//   } else if (mouseX < width/2 && mouseY > height/2) {
//     rect(width/2, height/2, -width/2, height/2);
//     fill(0, 255, 0);
//   } else {
//     rect(width/2, height/2, width/2, height/2);
//     fill(0, 0, 255);
//   }

// }


//9분할
// function setup() {
//   createCanvas(300, 300);
  
// }

// function draw() {
//   background(0);
//   fill(255, 255, 0);
//   if (mouseX < width/3 && mouseY < height/3) {
//     rect(0, 0, width/3, height/3);
//   } else if (mouseX < width*2/3 && mouseY < height/3){
//     rect(width/3, 0, width/3, height/3);
//   } else if (mouseX < width && mouseY < height/3){
//     rect(width*2/3, 0, width/3, height/3);
//   } else if (mouseX < width/3 && mouseY < height*2/3) {
//     rect(0, height/3, width/3, height/3);
//   } else if (mouseX < width*2/3 && mouseY < height*2/3) {
//     rect(width/3, height/3, width/3, height/3);
//   } else if (mouseX < width && mouseY < height*2/3) {
//     rect(width*2/3, height/3, width/3, height/3);
//   } else if (mouseX < width/3 && mouseY < height) {
//     rect(0, height*2/3, width/3, height/3);
//   } else if (mouseX < width*2/3 && mouseY < height) {
//     rect(width/3, height*2/3, width/3, height/3);
//   } else {
//     rect(width*2/3, height*2/3, width/3, height/3);
//   }

// }


//색바꾼다 내가

// let checkPrev = 0;
// let check = 0;

// function setup() {
//   createCanvas(300, 300);
//   fill(255, 255, 0);
// }

// function draw() {
//  background(0);

//  display(mouseX, mouseY); //사각형 어쩌고 저쩌고
//  print(mul(5,8));

// }

// function mul(x, y) {
//  return x*y;
// }

// function display(x, y) {
//  // 1) x 작고, y 작고
//  if (x < width/2 && y < height/2)
//  {
//    rect(0, 0, width/2, height/2);
//    check = 1;
//  }
//  // 2) x 크고, y 작고
//  else if (x > width/2 && y < height/2)
//  {
//    rect(width/2, 0, width, height/2);
//    check = 2;
//  }
//  // 3) x 작고, y 크고
//  else if (x < width/2 && y > height/2)
//  {
//    rect(0, height/2, width/2, height/2);
//    check = 3;
//  }
//  else
//  {
//    rect(width/2, height/2, width, height);
//    check = 4;
//  }

//  if (checkPrev!=check) {
//    print("yes");
//    fill(random(255), random(255), random(255));
//    checkPrev = check;
//  }

// }


// function setup() {
//   createCanvas(300, 300);
// }
// function draw() {
//   background(0);
//   if (mouseIsPressed && (mouseButton === LEFT))
//   {
//     fill(255, 0, 0);
//   }
//   else if (mouseIsPressed && (mouseButton === RIGHT))
//   {
//     fill(0, 255, 0);
//   }
//   else{
//     fill(0, 0, 255);
//   }
//   ellipse(width/2, height/2, 200, 200);
// }



// function setup() {
//   createCanvas(300, 300);
// }
// function draw() {
//   background(0);
//   if (mouseIsPressed)
//   {
//     if(mouseButton === LEFT)
//     {
//       fill(255, 0, 0);
//     }
//     else if (mouseButton === RIGHT)
//     {
//       fill(0, 255, 0);
//     }
//   }
//   else{
//     fill(0, 0, 255);
//   }
//   ellipse(width/2, height/2, 200, 200);
// }

// function setup() {
//   createCanvas(300, 300);
// }
// function draw() {
//   background(0);
//   ellipse(width/2, height/2, 200, 200);
  
// }
// function mousePressed(){
//   if(mouseButton === LEFT)
//   {
//     fill(255, 0, 0);
//   }
//   else if(mouseButton === RIGHT)
//   {
//     fill(0, 0, 255);
//   }
// }


// let checkPrev = 0;
// let check = 0;

// function setup() {
//   createCanvas(300, 300);
//   fill(255, 255, 0);
// }

// function draw() {
//   background(0);
//   if (mouseX < width/3 && mouseY < height/3) {
//     rect(0, 0, width/3, height/3);
//     check = 1;
//   } else if (mouseX < width*2/3 && mouseY < height/3){
//     rect(width/3, 0, width/3, height/3);
//     check = 2;
//   } else if (mouseX < width && mouseY < height/3){
//     rect(width*2/3, 0, width/3, height/3);
//     check = 3;
//   } else if (mouseX < width/3 && mouseY < height*2/3) {
//     rect(0, height/3, width/3, height/3);
//     check = 4;
//   } else if (mouseX < width*2/3 && mouseY < height*2/3) {
//     rect(width/3, height/3, width/3, height/3);
//     check = 5;
//   } else if (mouseX < width && mouseY < height*2/3) {
//     rect(width*2/3, height/3, width/3, height/3);
//     check = 6;
//   } else if (mouseX < width/3 && mouseY < height) {
//     rect(0, height*2/3, width/3, height/3);
//     check = 7;
//   } else if (mouseX < width*2/3 && mouseY < height) {
//     rect(width/3, height*2/3, width/3, height/3);
//     check = 8;
//   } else if (mouseX < width && mouseY < height) {
//     rect(width*2/3, height*2/3, width/3, height/3);
//     check = 9;
//   }

//   if (checkPrev!=check) {
//    print("yes");
//    fill(random(255), random(255), random(255));
//    checkPrev = check;
//  }

 
// }


// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   //키는 문자열로
//   if (keyIsPressed && (key === '1')) {
//     fill(255, 0, 0);
//   } else if (keyIsPressed && (key === '2')) {
//     fill(0, 255, 0);
//   } else {
//     fill(0, 0, 255);
//   }
//   ellipse(width/2, height/2, 200, 200);
// }


// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   // background(0);
//   //키는 문자열로
//   if (keyIsPressed && (key == 'a')) {
//     fill(255, 0, 0);
//   } else if (keyIsPressed && ((key == 'd') || (ket == '0'))) {
//     fill(0, 255, 0);
//   } else {
//     fill(0, 0, 255);
//   }
//   // ellipse(width/2, height/2, 200, 200);
// }

// function mouseReLeased() {
//   background(0);
// }


// let degree = 90;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   if (keyIsPressed) {
//     if ((key >= '0') && (key <= '9')) {
//       degree = map(key, '0', '9', 0, 360);
//     }
//   }arc(width/2, height/2, 200, 200, 0, radians(degree));
// }

// let x = 150, y = 150;
// function setup() {
//   createCanvas(300, 300);
// }

// function draw() {
//   background(0);
//   if (keyIsPressed) {
//     if (key === 'a' || keyCode == LEFT_ARROW) {
//       x=x-5;
//     } else if (key === 'd' || keyCode == RIGHT_ARROW) {
//       x=x+5;
//     } else if (key === 'w' || keyCode == UP_ARROW) {
//       y=y-5;
//     } else if (key === 's' || keyCode == DOWN_ARROW) {
//       y=y+5;
//     }
//   }
//   ellipse(x, y, 100, 100);
// }

// let x = 150, y = 150;
// function setup() {
//   createCanvas(300, 300);
//   textSize(100);
//   textAlign(CENTER);
// }

// function draw() {
//   background(0);
//   fill(255);
//   if (key === 'a') {
//     text('a', width/2, height/2);
//   } else if (key === 'b') {
//     text('b', width/2, height/2); 
//   } else if (key === 'c') {
//     text('c', width/2, height/2); 
//   } else {
//     text('None', width/2, height/2);
//   }
// }

// let x = 150, y = 150;
// function setup() {
//   createCanvas(300, 300);
//   textSize(100);
//   textAlign(CENTER);
// }

// function draw() {
//   background(0);
//   fill(255);
//   switch(key) {
//     case 'a':
//       text('a', width/2, height/2);
//       break;
//     case 'b':
//       text('b', width/2, height/2);
//       break;
//     case 'c':
//       text('c', width/2, height/2);
//       break;
//     default:
//       text('None', width/2, height/2);
//       break;
//   }
// }

// let x = 150, y = 150;
// function setup() {
//   createCanvas(300, 300);
//   textSize(100);
//   textAlign(CENTER);
// }

// function draw() {
//   background(0);
//   fill(255);
//   switch(key) {
//     case 'a':
//     case 'b':
//       text('b', width/2, height/2);
//       break;
//     case 'c':
//       text('c', width/2, height/2);
//       break;
//     default:
//       text('None', width/2, height/2);
//       break;
//   }
// }

let x = 20, y = 80, w = 460, h = 50;
let size = 100, slider = 20;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  if (mouseIsPressed) {
    if ((x <= mouseX && mouseX <= x+w) && (y <= mouseY && mouseY <= y+h)) {
      slider = mouseX;
      size = map(slider, x, x+w, 100, width);
    }
  }
  fill(0, 0, 255);
  ellipse(width/2, height/2, size, size);
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text('Size: ' + int(size), width/2, 50);
  rect(x, y, w, h);
  fill(255, 0, 0);
  rect(slider, y, 10, h);
}