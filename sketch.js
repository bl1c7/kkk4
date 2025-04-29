let x;
let y;


function setup() {
  createCanvas(800, 800);
x = random(800);
x = int(x);
y = random(800);
y = int(y);
}

function draw() {
  background(220);
  let distanciaX;
  distancia = dist(mouseX,mouseY,x,y)
  circle(mouseX,mouseY,distancia);
  fill("black")
//circle(x , y, 30);
  if (distancia < 3) {  
  text("Me encontrou!", 400, 400);
 noLoop();
} 
}
