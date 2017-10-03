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
    
    
    
}