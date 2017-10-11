var triArray = []
var pointDist = [];
var leastDist;
var greatestDist;
var gdp;
var ld;
var s =0;
var firstTri = true;
var scaleRange = 10;

function setup(){
    createCanvas(1200,600);
    noFill();
    background(255);
}

function draw(){
    background(255);
    for(var i=0; i<triArray.length;i++){
        if(i < scaleRange){
            push();
            scale(0.1*i);
            triArray[i].display();
            pop();
        }else{
            triArray[i].display();
        }
    }
    
    if(frameCount%20 == 0 && triArray.length>20){
        triArray.shift();
    }
}

function triSetup (gdp){
    if(firstTri){
        this.xp = mouseX;
        this.yp = mouseY;
        this.xs = mouseX+25;
        this.ys = mouseY+15;
        this.xt = mouseX+15;
        this.yt = mouseY+25;
    }else if(gdp == 0){
        this.xp = mouseX;
        this.yp = mouseY;
        this.xs = triArray[triArray.length-1].xs;
        this.ys = triArray[triArray.length-1].ys;
        this.xt = triArray[triArray.length-1].xt;
        this.yt = triArray[triArray.length-1].yt;    
    }else if(gdp == 1){
        this.xp = triArray[triArray.length-1].xp;
        this.yp = triArray[triArray.length-1].yp;
        this.xs = mouseX;
        this.ys = mouseY;
        this.xt = triArray[triArray.length-1].xt;
        this.yt = triArray[triArray.length-1].yt;  
    }else{
        this.xp = triArray[triArray.length-1].xp;
        this.yp = triArray[triArray.length-1].yp;
        this.xs = triArray[triArray.length-1].xs;
        this.ys = triArray[triArray.length-1].ys;
        this.xt = mouseX;
        this.yt = mouseY;
    }
    
    this.display = function() {
        triangle(this.xp,this.yp,this.xs,this.ys,this.xt,this.yt);
    };
}

function calcLeastDist() {
    for(var i =0; i<3;i++){
        if (i==0){
            pointDist[i] = dist(triArray[triArray.length-1].xp,triArray[triArray.length-1].yp, mouseX, mouseY);
        }else if (i==1){
            pointDist[i] = dist(triArray[triArray.length-1].xs,triArray[triArray.length-1].ys, mouseX, mouseY);
        }else{
            pointDist[i] = dist(triArray[triArray.length-1].xp,triArray[triArray.length-1].yp, mouseX, mouseY);
        }
    }
    if(pointDist[0]<pointDist[1] && pointDist[0]<pointDist[2]){
        leastDist = 0;
    }else if(pointDist[1]<pointDist[2]){
        leastDist = 1;
    }else{
        leastDist = 2;
    }
    return pointDist[leastDist];
}
    
function calcGreatestDist() {
    // if firstTri == false
    for(var i =0; i<3;i++){
    if (i==0){
            pointDist[i] = dist(triArray[triArray.length-1].xp,triArray[triArray.length-1].yp, mouseX, mouseY);
        }else if (i==1){
            pointDist[i] = dist(triArray[triArray.length-1].xs,triArray[triArray.length-1].ys, mouseX, mouseY);
        }else{
            pointDist[i] = dist(triArray[triArray.length-1].xt,triArray[triArray.length-1].yt, mouseX, mouseY);
        }
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

function mousePressed(){
    if(firstTri){
        triArray.push(new triSetup());
        firstTri = false;
    }else{
    	gdp = calcGreatestDist();
    } 
}

function mouseDragged() {
    //makes sure mouse is at least 50 away from all points
    ld = calcLeastDist();
    if (ld > 50){
        gdp = calcGreatestDist();
        //back to normal drawing functions
        console.log(triArray.length);
        triArray.push(new triSetup(gdp));
    }
    else{
        ld = calcLeastDist();
    }
}
   
function mouseReleased(){
    firstTri = true;
}