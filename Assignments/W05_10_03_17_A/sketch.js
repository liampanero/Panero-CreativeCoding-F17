
var strtCount;
var count;
var rot = [];
var transX = [];

function setup(){
    frameRate(30);
    createCanvas(600,600);
    background(220);
    strtCount = frameCount;
    for(var i = 0; i<2;i++){
        rot[i] = [];
        for(var o = 0; o<3;o++){
            rot[i][o] = .4; 
        }
    }
    for(var i = 0; i<3;i++){
        transX[i] = 200*i+100;
    }
}
    
function draw(){
    count = frameCount - strtCount;
 
    push(); 
        translate(100,100);
        rotate(rot[1][0]*0);
        rect(0,0,50,50);
    pop();
    
    push(); 
        translate(300,100);
        rotate(rot[1][2]*1);
        rect(0,0,50,50);
    pop();
    
    push(); 
        translate(500,100);
        rotate(rot[1][3]*2);
        rect(0,0,50,50);
    pop();
    
    for(var i=0;i<3;i++){
        push();
        translate(transX[i],400);
        
        if(rot[0][i] >= PI*2){
            rot[0][i] = rot[1][i];  
        }else if(count==1){
            background(220);
            rot[0][i] += (i/5)+.1;
        }
          
        rotate(rot[0][i]);
        rect(0,0,50,50);
        pop();
    } 
    if(count == 45){
        strtCount = frameCount;    
    }
    count++;
}
    