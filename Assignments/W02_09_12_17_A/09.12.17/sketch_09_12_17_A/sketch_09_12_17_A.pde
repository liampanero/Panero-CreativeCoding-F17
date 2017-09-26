//ASSIGNMENT 09.12.17

void setup(){
  size(600,600);
  noStroke();
  fill(255,255,255);
  
}
void draw(){
  rect(0,0,600,600);
  if(mouseX<=width/2 && mouseY <= 2*height/3){
    fill(0,0,255);
    rect(0,0,width/2,2*height/3);
    fill(255,255,255);
  }
  if(3*width/4 > mouseX && mouseX > width/2){
    fill(255,0,0);
    rect(width/2,0,width,height);
  }
  if((3*width/4)+1 == mouseX || mouseX == 3*width/4){
    fill(255,255,0);
    rect(0,0,600,600);
  }
  fill(255,255,255);
}

void mousePressed(){
  noStroke();
  fill(255,255,255);
  rect(0,0,600,600);
  fill(29,239,255);
  rect(0,2*height/3,width/2,height);
}

  