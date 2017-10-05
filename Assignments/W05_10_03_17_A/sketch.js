
var series2 = [];
var j = 0;
var strtCount;
var count;
var rotRate = [];
function setup(){
    frameRate(30);
    createCanvas(600,600);
    background(220);
    strtCount = frameCount;
    for(var i = 0; i<2;i++){
        rotRate[i] = [];
        for(var o = 0; o<3;o++){
            rotRate[i][o] = .4; 
        }
    }
    
}
    
function draw(){
    
    count = frameCount - strtCount;
    push();
    while(j == 0){
            for(var i=0;i<3;i++){
                push();
                if(i == 0){
                    translate(100,100);
                }else{
                    translate(i*200,100);
                }  
                rotate(rotRate[1][i]);
                rect(0,0,50,50);
                pop();
            } 
            j++;
        }
        j=0;
    push();
    while(j == 0){
        for(var i=0;i<3;i++){
            push();
            if(i == 0){
                translate(100,400);
            }else{
                translate(i*200,400);
            }

            if(rotRate[0][i] >= PI*2){
                rotRate[0][i] = rotRate[1][i];
            }else if(count==1){
                background(220);
                rotRate[0][i] += (i/5)+.1;
            }
            console.log(rotRate);   
            rotate(rotRate[0][i]);
            rect(0,0,50,50);
            pop();
        } 
        j++;
        if(count == 45){
            strtCount = frameCount;    
        }
    }
    j=0;
    count++;
}
    