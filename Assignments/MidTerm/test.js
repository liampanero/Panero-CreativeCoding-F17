var mJArray = [];
var mLArray = [];
var stageCount = 0;
var stageCountMax = 60;

var p=0;
var s=0;

var route = 2;

var pMax;
var sMax;







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
            mJArray[s][0]=(new importImg(mJIncoming,s,0));
            mJIncoming = "";
            
        }else{
            for (var p = 0; p<4; p++){
                if(s<4 || p==0){
                    mLIncoming = String(mLFileRoot+s+p+".png");
                    mLArray[s][p]=(new importImg(mLIncoming,s,p));
                    mLIncoming = "";    
                }
                mJIncoming = String(mJFileRoot+s+p+".png");
                mJArray[s][p]=(new importImg(mJIncoming,s,p));
                mJIncoming = "";
            }
        }
    }
}

function importImg(string,s,p){
    this.name = String("mJ"+s+p)
    this.img = loadImage(string);
    this.show = function(){
        image(this.img,0,0);
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
    
    s=0;
    p=0;
}

function draw(){
    background(250);
    noStroke();
    
    
    if (route == 2){
        pMax=5;
        sMax=4;
        
        if(p==0){
            stageCountMax = 100;
        }else{
            stageCountMax = 60;
        }

        
        if(stageCount <= stageCountMax-40){ 
            translate(width/2,300);
            mJArray[s][p].show();
            pop();

            stageCount ++; 
            
        }else if(stageCount > stageCountMax-40 && stageCount < stageCountMax){
        
            var alphaFadeOut = map(stageCount, stageCountMax-40, stageCountMax, 255, 0); 
            
            push();
            translate(width/2,300);

            if(p==3){
                mJArray[s+1][0].show();
            }else if(s !=5){
                mJArray[s][p+1].show();
            }

            tint(255,alphaFadeOut);
            mJArray[s][p].show();

            pop();
            stageCount ++;
            
        }else if (stageCount == stageCountMax){
            if (p==3){
                s++;
                p = 0;

            }else if (s==5){
                route ++;
            }else{
                p++;
            }

            stageCount = 0;
            push();
            translate(width/2,300);
            mJArray[s][p].show();
            pop();

        }
    }
}
