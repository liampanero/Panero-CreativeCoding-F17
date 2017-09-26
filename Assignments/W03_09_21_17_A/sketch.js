//IN JAVA VARIABLES DONT NEED DECLARED DATATYPRE
//ALSO void IS REPLACED WITH funciton

function setup() {
    //size is now "createCanvas"
    createCanvas(600, 500);
    background(250);
    noStroke();
}

function draw(){
    background(250);
    if(mouseIsPressed){
        background(250);
        fill(0,128,129);
        rect(0,height/3,width/2,height);
    }else if(mouseX <= width/2 && mouseY <= height/3){
        fill(0,0,255);
        rect(0,0,width/2,height/3);
    }else if(mouseX > width/2){
        if(mouseX == 500){
            fill(255,255,0);
            rect(0,0,width,height);
        }else{
        fill(255,0,0);
        rect(width/2,0,width,height);
        }
    }    
}