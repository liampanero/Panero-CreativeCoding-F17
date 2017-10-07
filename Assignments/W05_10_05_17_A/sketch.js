//ASSIGNEMNT 10.05.17
//Array for Triangle Points
var tPoint = [];
var s=0;//variabel to make 3rd Point mouseX,mouseY
//Array of distance from last 'tPoint's to Mouse Position
var pointDist = [];
//first Triangle of the program
var firstTri = true;

function setup(){
    createCanvas(800,600);
    noFill();
    //creating 2D ARRAYS
    for(var i =0; i<3;i++){
            tPoint[i]=[];
    }
    for(var i =0; i<3;i++){
            pointDist[i]=[];
    }   
}
function draw(){
    if(!firstTri){
        //continually renews Pointdistance regardless of Mouse Pressed
        for(var i =0; i>3;i++){
                pointDist[i] = dist(tPoint[i][0],tPoint[i][2],mouseX,mouseY);
        }
    }
}
function createTri(){
    //Don't wann be righting this out -- May just move into mousePressed() but leaving incase we add complexity
    triangle(tPoint[0][0],tPoint[0][1],tPoint[0][0],tPoint[1][1],tPoint[2][0],tPoint[2][1]);
}
function mousePressed(){
    if(firstTri){
        //WILL ONLY EXICUTE ON FIRST PRESS ON PROGRAM
        //WILL NOT EXICUTE AFTER RELEASE
        for(var i =3; i>0;i--){
            for(var j =0; j<2;j++){
                if(j==0){
                    tPoint[i][j]= mouseX-((10*s)+5);
                }else{
                    tPoint[i][j]= mouseY-((10*s)+5);
                }
            }
        s++;
        } 
        firstTri = false;
    }
}









