//LIAM PANERO MIDTERM

var mJArray = [];
var mLArray = [];

var obj;

var modeCount = 2;

var modeTimer;
var modeTimerStart = 0;

var tIn = false;
var tOut = false;
var toLogo = false;

var stageCount = 0;
var stageCountMax = 60;

var storyRoute;

var p= 0;
var s = 0;

var reffJX;
var reffJY;

var reffLX;
var reffLX;

var shakeLR;
var shakeRange;
var reffShakeRange;

var moved = false;


function preload() {
    var mJFileRoot = "assets/mJ/mJ";
    var mJIncoming; 
        
    var mLFileRoot = "assets/mL/mL";
    var mLIncoming;
        
    for (var s = 0; s<6; s++){
        mJArray[s] = [];
        mLArray[s] = [];
        
        if(s==5){
            mJIncoming = String(mJFileRoot+s+0+".png");
            mJArray[s][0]=(new importImg(mJIncoming,75*(-1)));
            mJIncoming = "";
            
        }else{
            for (var p = 0; p<4; p++){
                if(s<4 || p==0){
                    mLIncoming = String(mLFileRoot+s+p+".png");
                    mLArray[s][p]=(new importImg(mLIncoming,75));
                    mLIncoming = "";    
                }
                mJIncoming = String(mJFileRoot+s+p+".png");
                mJArray[s][p]=(new importImg(mJIncoming,75*(-1)));
                mJIncoming = "";
            }
        }
    }
}

function importImg(string,startY){
    this.x = 0;
    this.y = startY;
    this.img = loadImage(string);
    this.show = function(){
        image(this.img,this.x,this.y);
    }
    this.moveY = function(reffY,dist,count,maxCount){
        var curY = map(count,1,maxCount,reffY,reffY+dist);
        this.y = curY;
        if(curY== reffY+dist){
            moved = true;
        }
    }
    this.moveX = function(reffX,dist,count,maxCount){
        var curX = map(count,1,maxCount,reffX,reffX+dist);
        this.x = curX;
    }
}


function setup(){
    createCanvas(800,800);
    background(250);
        
    fill(0);
    strokeWeight(3);
    
    //Refferenceing center of objecs:
    ellipseMode(CENTER);
    imageMode(CENTER);
    
    obj = (new objL());
    shakeLR = "L";
}

function draw(){ 
    background(250);
    modeTimer = frameCount - modeTimerStart;
    
    if (modeCount == 1){   
    }else if (modeCount == 2){      
        if (tOut){
            stageCountMax = 60;
            if (stageCount <= stageCountMax){
            
            obj.shrink(reffShakeRange,stageCount,stageCountMax);
            
            obj.shake(shakeRange);
                        
            push();
            translate(width/2,300)
            obj.display();
            pop();
                
            stageCount ++;
            
            }else if(stageCount > stageCountMax){
                push();
                translate(width/2,300)
                obj.display();
                pop();
                
                tIn=true
                tOut=false
                stageCount=0;
                modeCount=3;
            }
            
        }else{
            shakeRange = shakeIntens();
            reffShakeRange = shakeRange;

            obj.shake(shakeRange);
            
            push();  
            translate(width/2,300);
            obj.display();
            pop();
        
        }   
                
    }else if (modeCount == 3){
        if (tIn){
            if(stageCount < stageCountMax){
                var alphaIn = map(stageCount, 20, stageCountMax, 0, 255, true);
                var alphaOut = map(stageCount, 10, stageCountMax, 255, 0, true);

                push();
                translate(width/2,300);
                tint(255,alphaIn);
                mJArray[0][0].show();
                mLArray[0][0].show();
                
                
                fill(0,0,0,alphaOut);
                noStroke();
                obj.display();
                
                pop();

                stageCount ++;
            }else{
                stageCount = 0;
                tIn = false;
                
                push();
                translate(width/2,300);
                mJArray[0][0].show();
                mLArray[0][0].show();
                pop();
            }
        }else if (tOut){
            if(!toLogo){
                stageCountMax = 120;
                if (stageCount <= stageCountMax){
                    shakeIntens();
                    
                    var exitShake = obj.grow(reffShakeRange,stageCount,stageCountMax);
                    
                    obj.shake(exitShake);

                    push();
                    translate(width/2,300)
                    obj.display();
                    pop();

                    stageCount ++;

                }else if(stageCount > stageCountMax){
                    shakeRange = shakeIntens();
                    push(shakeRange);
                    translate(width/2,300)
                    
                    obj.display();
                    pop();

                    tIn=false
                    tOut=false
                    stageCount=0;
                    modeCount=2;

                }
            }
            
        }else{
            story(storyRoute);
        }
        
    }
}


function objL(){
    this.x=0
    this.y=0 
    this.diameterX = 200;
    this.diameterY = 200;
    this.shake = function(shakeRange){
        if (shakeLR == "L"){
            this.x = random(-shakeRange,0);
            LR = "R";
        } else if (shakeLR == "R"){
            this.x = random(0,shakeRange);
            LR = "L";
        }  
    }
    this.display = function(){
        ellipse(this.x, this.y, this.diameterX, this.diameterY);
    } 
    this.shrink = function(shakeReff,count,maxCount){
        var slowerShake = map(count,1,maxCount,shakeReff,0);
        var yOut = map(count,0,maxCount,0,75);
        var xDim = map(count,0,maxCount,200,52);
        var yDim = map(count,0,maxCount,200,52);
        
        shakeRange = slowerShake;
        this.y = yOut;
        this.diameterX = xDim;
        this.diameterY = yDim; 
    }
    this.grow = function(shakeIntens,count,maxCount){
        
        var returnShake = map(count,1,maxCount,0,shakeIntens);
        var yOut = map(count,0,maxCount,75,0);
        var xDim = map(count,0,maxCount,52,200);
        var yDim = map(count,0,maxCount,52,200);
        
        this.y = yOut;
        this.diameterX = xDim;
        this.diameterY = yDim; 
        
        return returnShake;
    }
}

function shakeIntens(){
    
    var min = width - 175;
    var max = 100;
    var input = constrain(mouseX, max, min);
    
    var intensity = map(input,max,min,20,1);
    
    return intensity;
}
    
function statusDisplay(){
    textSize(16);
    textAlign(CENTER);
    
    if (mouseX <= (width/3)+50){
        text("Violent",width/2,20);
    }else if(mouseX > width/3 && mouseX <= (2*width)/3){
        text("Mild",width/2,20);
    }else if(mouseX >((2*width)/3)-50){
        text("calm",width/2,20);
    }
    
} 

var moveCount = 1;

function story(route){
    
    
    if (route == 2){
        pMax=5;
        sMax=3;
        
        if(p==0){
            stageCountMax = 100;
        }else{
            stageCountMax = 60;
        }
        
//        if(!moved){
//            if (s==2 && p==2){
//                mLArray[2][2].moveY(75,15*(-1),stageCount,stageCountMax);
//            }else if (s==2 && p==3){
//                mLArray[2][3].moveY(50,15*(-1),stageCount,stageCountMax);
//            }else if (s==3 && moveCount < 3){
//                mLArray[3][0].moveY(35-(10*mouveCount),10*(-1),stageCount,stageCountMax);
//            }else moved = false;
//        }
        
        
        if(stageCount <= stageCountMax-40){ 
            translate(width/2,300);
            
            if(s>=4){
                mLArray[s-1][p].show();

            }else if(s==3){
                mLArray[s][0].show();
            }else{
                mLArray[s][p].show();
            }
            mJArray[s][p].show();
            pop();

            stageCount ++; 
            
        }else if(stageCount > stageCountMax-40 && stageCount < stageCountMax){
            if(s==5){
                stageCountMax == 140;
            }
            var alphaFadeOut = map(stageCount, stageCountMax-50, stageCountMax, 255, 0); 
            
            push();
            translate(width/2,300);
            
            
            if(p==3){
                mJArray[s+1][0].show();
                if(s<3){
                    mLArray[s+1][0].show();
                }else if(s>=3){
                    mLArray[s][0].show();
                }
                
            }else if(s !=5){
                mJArray[s][p+1].show();
                if(s==4){
                    mLArray[s-1][p+1].show();

                }else if(s==3){
                    mLArray[s][0].show();
                }else{
                    mLArray[s][p+1].show();
                }
            }

            tint(255,alphaFadeOut);
            mJArray[s][p].show();
            if(s>=4){
                tint(255,alphaFadeOut);
                mLArray[s-1][p].show();
                
            }else if(s==3){
                mLArray[s][0].show();
            }else{
                tint(255,alphaFadeOut);
                mLArray[s][p].show();
            }
            
            pop();
            stageCount ++;
            
        }else if (stageCount == stageCountMax){
            if (p==3){
                s++;
                p = 0;

            }else if (s==5){
                push();
                translate(width/2,300);
                obj.display();
                pop();
                tOut= true;
                stageCount = 0; 
                s=0;
                p=0;
            }else{
                p++;
            }
            stageCount = 0;
            
            push();
            translate(width/2,300);
            mJArray[s][p].show();
            if(s>=4){
                mLArray[s-1][p].show();
            }else if(s==3){
                mLArray[s][0].show();
            }else{
                mLArray[s][p].show();
            }        
            pop();   
        }
    }
}

function mousePressed(){
    if (modeCount == 2){
        if (mouseX <= (width/3)+50){
            storyRoute = 1;
            tOut = true;
        } else if(mouseX > width/3 && mouseX <= (2*width)/3){
            storyRoute = 2;
            tOut = true;
        } else if(mouseX >((2*width)/3)-50){
            storyRoute = 3;
            tOut = true;
        }
    }
    
    storyRoute = 2;
}



