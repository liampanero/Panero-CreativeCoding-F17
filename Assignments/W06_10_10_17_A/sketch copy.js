var triArray = []
var s =0;
var x1;
var y1;

var x2;
var y2;

var x3;
var y3;

function setup(){
    
}


function createTri() {
    
    if (firstTri){
        this.x0 = mouseX;
        this.y0 = mouseY;
        this.x1 = mouseX-25;
        this.y1 = mouseY-25;
        this.x2 = mouseX-45;
        this.y2 = mouseY-45;
        console.log("fTri");
        firstTri = false;
        
    }else if(gDistPoint == 0) {
        this.x0 = mouseX;
        this.y0 = mouseY;
        this.y0 = 
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
    
    
    
}