// ASSIGNMENT 09.26.17

var cSt = [];
var clrLst = [];
test = true;
var bclr = color(0);

function setup(){
    createCanvas(700,500);
    var bclr = color(207,205,209);
    background(bclr);
    
    for (var i = 0; i < 2; i++) {
        cSt[i]= new Array();
        for (var j=0; j < 6 ; j++){
            //x coordinates = [0][x]
            if (i==0){
                if (j==0 || j==3){
                    cSt[i][j] = 40;
                }else{
                    cSt[i][j] = cSt[i][j-1] + 220;
                } 
            //y coordinates = [1][y]    
            }else{
                if (j<3){
                    cSt[i][j] = 40;
                }else{
                    cSt[i][j] = 260;
                }
            }       
        }
    }
    
    for (var i = 0; i < 2; i++){
        clrLst[i]= new Array();
    }
        //Canvas Base Colors
    clrLst[0][0] = color(0,47,13);
    clrLst[0][1] = color(231,183,25);
    clrLst[0][2] = color(19,19,31);
    clrLst[0][3] = color(0,41,86);
    clrLst[0][4] = color(205,66,46);
    clrLst[0][5] = color(162,15,30);
    
    //Canvase Detail Colors
    clrLst[1][0] = color(162,147,136);
    clrLst[1][1] = color(191,179,149);
    clrLst[1][2] = color(170,151,129);
    clrLst[1][3] = color(215,187,161);
    clrLst[1][4] = color(198,183,161);
    clrLst[1][5] = color(186,174,161);   

    for(var cCount = 0; cCount <6; cCount++){
        var cEndX = cSt[0][cCount]+200;
        var cEndY = cSt[1][cCount]+200;
        var cStartX = cSt[0][cCount];
        var cStartY = cSt[1][cCount]
        
        fill(clrLst[0][cCount]); 
        noStroke();
        rect(cSt[0][cCount],cSt[1][cCount],200,200);
        //Detailing
        strokeWeight(2);
        stroke(clrLst[1][cCount]);
        if (cCount == 0){
            noFill();
            var detailX = cStartX+11.8;
            var detailY = cStartY+11.8;
            var detaildim = 200-23.6;
            for (var i = 0; i<8; i++){
                rect(detailX,detailY,detaildim, detaildim)
                detailX += 11.8;
                detailY += 11.8;
                detaildim -= 23.6;
            }
        }else if(cCount == 1){
            var detailY = cStartY+12;
            for(var i=0; i<16; i++){
                line(cStartX,detailY,cEndX,detailY);
                detailY+=11.8;
            }
        }else if(cCount == 2){
            var detailX = cStartX+16.75;
            var detailY = cStartY+16.75;
            for (var i = 0; i<23; i++){
                if(i<11){
                    line(cStartX,detailY,detailX,cStartY);
                    detailX += 16.75;
                    detailY += 16.75;
                }else if (i==11){
                    line(cStartX,cEndY,cEndX,cStartY);
                    detailX = cStartX+16;
                    detailY = cStartY+16;  
                }else if(i>11){
                    line(detailX,cEndY,cEndX,detailY);
                    detailX += 16.75;
                    detailY += 16.75;  
                }
            }
        }else if(cCount == 3){
            noFill();
            var detailY = cStartY+11.8;
            var detaildim = 200-10.8;
            for (var i = 0; i<16; i++){
                rect(cStartX-1,detailY,detaildim, detaildim)
                detailY += 11.8;
                detaildim -= 11.8;
            }
        }else if(cCount == 4){
            var detailX = cEndX - 11.8;
            var detailX2 = cStartX + 11.8;
            var detailY = cStartY;
            var detailY2 = cEndY - 11.8;
            
            for (var i = 0; i<8;i++){
                if (i<6){
                    line(detailX,detailY,detailX,detailY2);
                    detailY +=12.8;
                    line(detailX,detailY2,detailX2,detailY2);
                    detailX -=12.8;
                    line(detailX2,detailY2,detailX2, detailY);
                    line(detailX2,detailY,detailX, detailY);
                    detailX2+=12.8;
                    detailY2-=12.8;
                    
                    
                }else if(i==7){
                    line(detailX,detailY,detailX,detailY2);
                    detailY +=12.8;
                    line(detailX,detailY2,detailX2,detailY2);
                    detailX -=12.8;
                    line(detailX2,detailY2,detailX2, detailY);
                    line(detailX2,detailY,detailX, detailY);
                    detailX2+=12.8;
                    detailY2-=12.8;
                    line(detailX,detailY,detailX,detailY2);
                }
            }         
        }else if(cCount == 5){
            
            line(cStartX+100,cStartY,cStartX+100,cEndY);
            line(cStartX,cStartY+100,cEndX,cStartY+100);
            
            noFill();
            
            
            for (var i = 0; i<4; i++){
                var detaildim = 88.2;
                if(i==0){
                    var detailX = cStartX-1;
                    var detailY = cStartY-1;
                }else if (i==1){
                    var detailX = cStartX-1;
                    var detailY = cStartY+112.8;
                }else if (i==2){
                    var detailX = cStartX+112.8;
                    var detailY = cStartY-1;
                }else if (i==3){
                    var detailX = cStartX+112.8;
                    var detailY = cStartY+112.8;
                }
                for (var j = 0; j<7; j++){
                    if (i==0){
                        rect(detailX,detailY,detaildim, detaildim)
                        detaildim -= 11.8;
                    }else if (i==1){
                        rect(detailX,detailY,detaildim, detaildim)
                        detailY+=11.8;
                        detaildim -= 11.8;
                    }else if (i==2){
                        rect(detailX,detailY,detaildim, detaildim)
                        detailX+=11.8;
                        detaildim -= 11.8;
                    }else if (i==3){
                        rect(detailX,detailY,detaildim, detaildim)
                        detailX+=11.8;
                        detailY+=11.8;
                        detaildim -= 11.8;
                    }
                }
            }
            
        }
        
        //Invisable border around objects
        noFill();
        stroke(bclr);
        strokeWeight(2);
        rect(cSt[0][cCount]-1,cSt[1][cCount]-1,202,202);
        
        
    }
    
}