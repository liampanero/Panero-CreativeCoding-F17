
//ASSIGNEMNT 10.05.17
//Array for Triangle Points
var tPoint = [];
var s=0;//variable to make 3rd Point mouseX,mouseY
//Array of distance from last 'tPoint's to Mouse Position
var pointDist = [];
//first Triangle of the program
var firstTri = true;
//Records i of the tPoint furthers from the mouse position;
var greatestDist;
//Records i of the tPoint closest to mouse position
var leastDist
//Last Drawn Point
var lastPt = [];

var triList = [];

var p;


function setup(){
    createCanvas(1200,600);
    noFill();
    //creating 2D ARRAYS
    for (var t=0; t<1; t++){
        tPoint[t]=[]
        for(var i =2; i>-1;i--){	//	for(var i =0; i<3;i++){
            tPoint[t][i]=[];
            // new code in for loop below
            for(var j =0; j<2;j++){
                if(j==0){
                    tPoint[t][i][j]= mouseX-((10*s)+5);
                }else{
                    tPoint[t][i][j]= mouseY-((10*s)+5);
                }
                s++;
            }
        }
    }
    s=0; //	new code line
    for(var i =0; i<3;i++){
            pointDist[i]=[];
    }

    console.log(tPoint);	// prints point array
}
function draw(){
   if(tPoint.length > 5){
       for(var i=0; i<5; i++){
           if (i < 4){
               
               scale((i*5)/25);
               triList[i];
               console.log("here");
           }else if (i=4){
               triList.shift();
           }
       }
    }
}

function createFirstTri(){
    //  FOR FIRST TRI
    for(var i=2; i>-1; i--){
        for(var j=0; j<2; j++){
            //  ~was forming a line bc slope was the same among three pts
            //  ~thus wasnt forming a triangle, so i changed it
            if(j==0){
                tPoint[tPoint.length-1][i][j]= mouseX-((20*s)+5);
            }else if(i==1){
                tPoint[tPoint.length-1][i][j]= mouseY+((10*s)+5);
            }else{
                tPoint[tPoint.length-1][i][j]= mouseY-((10*s)+5);
            }
        }
        s++;
    } 
    s=0;
    console.log("fTri");
    createTri();
    firstTri = false;
}

function createTri(x1,y1,x2,y2,x3,y3) {
    triangle(x1,y1,x2,y2,x3,y3);
    
    console.log("tri created");
}

function calcDist() {
    // if firstTri == false
    for(var i =0; i<3;i++){
        pointDist[i] = dist(tPoint[tPoint.length-1][i][0],tPoint[tPoint.length-1][i][1],mouseX,mouseY);
    }
    if(pointDist[0]>pointDist[1] && pointDist[0]>pointDist[2]){
        greatestDist = 0;
    }else if(pointDist[1]>pointDist[2]){
        greatestDist = 1;
    }else{
        greatestDist = 2;
    }
    return greatestDist;
}

function calcLeastDist() {
    for(var i =0; i<3;i++){
        pointDist[i] = dist(tPoint[tPoint.length-1][i][0],tPoint[tPoint.length-1][i][1],mouseX,mouseY);
    }
    if(pointDist[0]<pointDist[1] && pointDist[0]<pointDist[2]){
        leastDist = 0;
    }else if(pointDist[1]<pointDist[2]){
        leastDist = 1;
    }else{
        leastDist = 2;
    }
    return leastDist;
}

function addTotPoint(x,y,p){
    tPoint[tPoint.length]=[]
    
    for(var i =0; i<3;i++){	//	for(var i =0; i<3;i++){
        tPoint[tPoint.length-1][i]=[];
        // new code in for loop below
        for(var j =0; j<2;j++){
            if (i == p){
                if(j==0){
                    tPoint[tPoint.length-1][i][j]= x
                }else{
                    tPoint[tPoint.length-1][i][j]= y
                }
            }else{
                tPoint[tPoint.length-1][i][j]= tPoint[tPoint.length-2][i][j];
            }
        }
    }
    
    console.log("tPoint added to");
    
}

function createLines(gDistPoint) {
    // gets the point w greatest distance as parameter to determine which lines to draw
    // then resets points
    if (gDistPoint == 0) {
        addTotPoint(mouseX,mouseY,0);
        createTri();
    }
    else if (gDistPoint == 1) {
        addTotPoint(mouseX,mouseY,1);
        createTri();
    }
    else {
        addTotPoint(mouseX,mouseY,p);
        createTri();
    }
}

function mousePressed(){
    if(firstTri){
        //WILL ONLY EXECUTE ON FIRST PRESS ON PROGRAM, WILL NOT EXECUTE AFTER RELEASE
        createFirstTri();
    } else {	// ~calculates dist, draws lines, and updates tPoint array
    	var gdp = calcDist();
        createLines(gdp);
    } 
}

function mouseDragged() {
    // if first tri
    if(firstTri){
        //WILL ONLY EXECUTE ON FIRST PRESS ON PROGRAM
        createFirstTri();
    } else {
        //makes sure mouse is at least 50 away from all points
        var ld = calcLeastDist();
        if (dist(tPoint[tPoint.length-1][ld][0], tPoint[tPoint.length-1][ld][1], mouseX, mouseY) > 50) {
            //back to normal drawing functions
            var gdp = calcDist();
            createLines(gdp);
        }
        else {
            var ld = calcLeastDist();
        }
        
    }
}