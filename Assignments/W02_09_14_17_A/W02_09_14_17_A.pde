//ASIGNMENT W02 09.14.17 - V.1 RETENTION GAME

//DOT POSITION:
  //CENTER POINTS:
int DPosX = 300;
int DPosY = 300;
  //PIXELS WILL MOVE:
int PosChng = 100;

// MOVE RECORDING:
  //RANDOM MOVE INSTRUCTION:
  //1=UP, 2=DOWN, 3=LEFT, 4=RIGHT
int moveDirect = int(random(1,4));
  // 1 & 2 MOVES BACK:
int move1Bk = 0;
int move2Bk = 0;
  // T OR F - WAS A MOVE MADE?:
boolean moved = false;
  //ARRAYS :
    //X
int[] PosX;
    //Y
int[] PosY;
    //MOVE DIRECTIONS:
int[] movesMade;

//COUNTS:
  //ROUND:
int countRnd = 1;
  //DOTs (CORRESPOND TO # IN ARRAY):
int countDot = 0;
int lmtDotC = 4;

//TIMERS:
  //START RELATIVE TO FRAMECOUNT:
int timeStart = 0;
  //TIME PASSED RELATIVE TO START OF THE ROUND S/G:
int timeRnd = frameCount - timeStart;
  //TIME A DOT HAS APPEARED:
int timeAppr = 0;
    //S=Show G=ForGame:
int lmtApprS = 25;
int lmtApprG = 60;
  //TIME A BETWEEN DOTS APPERAING:
int timeRest = 0;
int lmtRest = 10;

//PLAYER VARIABLES:
int pMove = 0;
int pScore = 0;

//SHOW SQUENCE OR GAME?:
//FALE=SHOW, TRUE=GAME
boolean sG = false;

void setup(){
  size(600,600);
  frameRate(30);
  fill (30, 150, 255);
  //CREATING X ARRAY:
  PosX = new int[1];
  PosX[0] = DPosX;
  //CREATING Y ARRAY:
  PosY = new int[1];
  PosY[0] = DPosY;
  //CREATING MOVE TRACKING:
  movesMade = new int[0];
}

void draw(){
  background(30);
  int timeRnd = frameCount - timeStart;
  
  //FEEDBACK:
  //SHOW
  if(timeRnd == 1 && !sG){  
    println("ROUND", countRnd, "WATCH");   
  //PLAYING THE GAME
  }else if(timeRnd == 1 && sG){    
    println("ROUND", countRnd, "PLAY!");
  }
  
  //SHOWING SEQUENCE:
  //"<=" INORDER TO SHOW LAST DOT IN SQUENCE:
  if(countRnd == 1){
    if(countDot <= lmtDotC && !sG){
      
      //DOT APPEARING:
      if (timeAppr < lmtApprS){      
        ellipse(DPosX,DPosY,100,100);
        timeAppr ++;    
        
      //RESTING + CHANGING POSITION : 
      }else if (timeAppr == lmtApprS){   
        
        //RESTING
        if (timeRest <= lmtRest){
          timeRest++; 
          
        //CHANGING POSITION:
        }else if(countDot < lmtDotC){
          
          //STOPS EITHER TWO PRVIOUS DIRECTIONS GETTING CHOSEN:
          if (moveDirect == move1Bk || moveDirect == move2Bk){
            moveDirect = int(random(1,4));
          
          //CHAGNE OPTIONS: 
          }else if (moveDirect == 1){
            //MOVE UP
            println("UP");
            movesMade = append(movesMade,1);
            DPosY -= PosChng;
            move2Bk = move1Bk;
            move1Bk = 1;
            moved = true;
          }else if(moveDirect == 2){
            //MOVE DOWN
            println("DOWN");
            movesMade = append(movesMade,2);
            DPosY += PosChng;
            move2Bk = move1Bk;
            move1Bk = 2;
            moved = true;
          }else if(moveDirect == 3){
            //MOVE LEFT 
            println("LEFT");
            movesMade = append(movesMade,3);
            DPosX -= PosChng;
            move2Bk = move1Bk;
            move1Bk = 3; 
            moved = true; 
          }else if(moveDirect == 4){
            println("RIGHT");
            movesMade = append(movesMade,4);
            DPosX += PosChng;
            move2Bk = move1Bk;
            move1Bk = 4;
            moved = true;
          }
          
          //RECORDING + RESETING FOR NEXT DOT:
          if (moved){ 
          countDot ++;
          //RECORDING THE NEXT DOT X,Y IN ARRAYS:
          PosX = append(PosX,DPosX);
          PosY = append(PosY,DPosY);
          //RESETS:
          timeAppr = 0;
          timeRest = 0;
          moved = false;
          }
        
        //COMPLETING A SEQUENCE SHOW:
        }else if(countDot == lmtDotC){
          //FEEDBACK
          println("SEQUENCE DONE");
          //SWITCH TO "GAME":
          sG = true;
          //RESETS:
          move1Bk = 0;
          move2Bk = 0;
          timeAppr = 0;
          timeRest = 0;
          countDot = 0;
          timeStart = frameCount;
        }
      }
      
    //PLAYING GAME  
    }else if (sG){
      if (countDot == lmtDotC){
        timeAppr=0;
        sG = false;
        countDot =0;
        countRnd ++;
        timeStart = frameCount;
      //DOT APPEARS:                   
      }else if (timeAppr < lmtApprG && !keyPressed){      
        ellipse(PosX[countDot],PosY[countDot],100,100);
        timeAppr ++;
      }else if (countDot < lmtDotC && keyPressed){
        if (pMove == 1){
          pScore ++;
          countDot++;
          timeAppr = 0;
          pMove=0;
          println("GOOD GUESS: +1");
          println("Player", pScore);
        }else if(pMove == 2){
          pScore --;
          countDot++;
          timeAppr = 0;
          pMove=0;
          println("BAD GUESS: -1");
          println("Player:",pScore);
        }
      }else if (timeAppr == lmtApprG){
        pScore -= 2;
        countDot ++;
        timeAppr = 0;
        println("NO GUESS: -2");
        println("Player:",pScore);
      }
    }//CLOSE OF GAME LOOP
} 
}

void keyPressed(){
  if (keyCode == UP && movesMade[countDot] == 1){
    pMove = 1;
  }else if (keyCode == DOWN && movesMade[countDot] == 2){
    pMove = 1;
  }else if (keyCode == LEFT && movesMade[countDot] == 3){
    pMove = 1;
  }else if (keyCode == RIGHT && movesMade[countDot] == 4){
    pMove = 1;
  }else{
    pMove = 2;
  }
}

  