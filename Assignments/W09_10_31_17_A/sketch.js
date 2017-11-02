// W09 CLASS 10.31.17

//OBJECTS
//
//    STRUCTURE
//        - function MyClass|convention to name with caps|(){
//            //declare variable inside a class
//            //this. create variable SPECIFIC to this class
//            this.x=30;
//            this.y=100;
//            
//            
//            this.display= function(){
//                 call a fucniton specific to the class. 
//            }
//        }; <-ending in semicollon 
        

var balls = [];


function setup(){
    createCanvas(600,600);
    background(250);
    
}

function draw(){
    background(250);
    
    for (var i = 0; i < balls.length ;i++){
        balls[i].animate();
        balls[i].display();   
    }
    
}

function mousePressed(){
    balls.push(new Ball());
    
} 

function Ball(){
    this.x = random(200,300);
    this.y = 300;
    
    this.yVel = random(1,5);
    this.xVel = random(1,5);
    
    this.animate = function(){
        
        
        if (this.y <= 0 || this.y >= height){
            this.yVel *= -1;
        }
        
        if (this.x <= 0 || this.x >= width){
            this.xVel *= -1;
        }
        
        
        this.x += this.xVel;
        this.y += this.yVel;
    }
 
    this.display = function(){
        fill(173,34,40);
        ellipse(this.x, this.y, 40, 40);
    }
    
};
