//ASIGNMENT W02 09.14.17 - V.1 RETENTION GAME
int i = 0;

//DOT POSITION:
  //Starting Point:
int SPosX = 300;
int SPosY = 300; 
  //CENTER POINTS:
int DPosX = SPosX;
int DPosY = SPosY;
  //PIXELS WILL MOVE:
int PosChng = 100;
  //POS TRACKING:
    //X
int[] PosX;
    //Y
int[] PosY;

// MOVES:
  //RANDOM MOVE INSTRUCTION:
  //1=UP, 2=DOWN, 3=LEFT, 4=RIGHT
int moveDirect = int(random(1,4));
  // 1 & 2 MOVES BACK:
int move1Bk = 0;
int move2Bk = 0;
  // T OR F - WAS A MOVE MADE?:
boolean moved = false;
  //MOVE TRACKING:
int[] movesMade;

//COUNTS:
  //ROUND:
int countRnd = 1;
int countLmtRnd = 1;
boolean setCountLmtRnd = false;
  //DOTs (CORRESPOND TO # IN ARRAY):
int countDot = 0;
int lmtDotC = 4;
  // # of Good, Bad, & No Move.
  //Pre-Round:
int moveG = 0;
int moveB = 0;
int moveN = 0;
  //Total
int moveGT = 0;
int moveBT = 0;
int moveNT = 0;

int countSecRest = 0;

//TIMERS (Rell FRAMECOUNT):
  //RND:
int timeRndStart = 0;
int timeRnd = frameCount - timeRndStart;
int lmtRndRest = 271;
int lmtSToGRest = 271;
int lmtEndFeedback = 271;

int timeAppr = 0;
    //S=Show G=ForGame:
int lmtApprS = 25;
int lmtApprG = 45;
  //TIME A BETWEEN DOTS APPERAING:
int timeRest = 0;
int lmtRest = 10;

//PLAYER VARIABLES:
int pMove = 0;
int pScore = 0;

//SHOW SQUENCE OR GAME?:
//FALE=SHOW, TRUE=GAME
boolean sG = false;
int inputG = 0;


void setup(){
  size(600,600);
  frameRate(30);
  fill (30, 150, 255);
  //CREATING X ARRAY:
  PosX = new int[1];
  PosX[0] = DPosY;
  
  //CREATING Y ARRAY:
  PosY = new int[1];
  PosY[0] = DPosY;

  //CREATING MOVE TRACKING:
  movesMade = new int[0];

}

void draw(){
  background(30);
  
  if(!setCountLmtRnd){
    int timeRnd = frameCount - timeRndStart;
    if(timeRnd == 1){
      println("Set the number of rounds you would like play UP & DOWN arrow keys.");
      println("Then press 'ENTER' to continue");
      println();
      println("2 is recommended for first time players, 5 is the limit");
      println();
      println();
      println(countLmtRnd, "Round(s)?");     
    }
    if(inputG == 2){
      println("To confirm", countLmtRnd, "round(s) press 'ENTER' again.");
      inputG --;
    }else if(inputG == 3){
      println("Great!");
      println("Get Ready for,", countLmtRnd, "round(s)");
      timeRndStart = frameCount;
      inputG = 0;
      setCountLmtRnd = true;
    }
    
  }else if(setCountLmtRnd && countRnd <= countLmtRnd){
    int timeRnd = frameCount - timeRndStart;
  
    ///PRE SHOW/GAME FEEDBACK:
    if(timeRnd < lmtRndRest && !sG){
      //PRE SHOW FEEDBACK:
      if(countRnd > 1){
        lmtRndRest = 391;
        if (timeRnd % 30 == 0){
          countSecRest ++;
          if (countSecRest == 2){
            println("YOUR SCORE IS:");
            println(pScore);
          }else if(countSecRest == 4){
            println("You made:");
            println(moveG, ": Correct moves");
            println(moveB, ": Incorrect moves");
            println(moveN, ": No moves");
          }else if(countSecRest == 8){
            println(".");
            println("ROUND", countRnd, "NEXT, WATCH!");
          }else if(countSecRest == 9){
            println(3);
          }else if(countSecRest == 10){
            println(2);
          }else if(countSecRest == 11){
            println(1);
          }else if(countSecRest == 12){
            println("GO!");
          }else{
          println(".");
          }
         }
      }else{
        if (timeRnd % 30 == 0){
          countSecRest ++;
          if (countSecRest == 3){
            println(".");
            println("ROUND", countRnd, "WATCH");
          }else if(countSecRest == 5){
            println(3);
          }else if(countSecRest == 6){
            println(2);
          }else if(countSecRest == 7){
            println(1);
          }else if(countSecRest == 8){
            println("GO!");
          }else{
          println(".");
          }
         }
      }   
    }else if(timeRnd == lmtRndRest && !sG){
      countSecRest = 0;
      moveG = 0;
      moveB = 0;
      moveN = 0;
      
      //ADDING DIFFICULTY
      if (countRnd == 3){
        lmtDotC ++;
      }else if (countRnd > 3){
        lmtApprS -= 3;
        lmtApprG -= 3;
        lmtRest -= 3;
        lmtDotC ++;
      }
    //PRE GAME FEEDBACK:
    }else if(timeRnd < lmtSToGRest && sG){
      if (timeRnd % 30 == 0){
          countSecRest ++;
          if (countSecRest == 3){
            println(".");
            println("GET READY TO PLAY:");
          }else if(countSecRest == 5){
            println(3);
          }else if(countSecRest == 6){
            println(2);
          }else if(countSecRest == 7){
            println(1);
          }else if(countSecRest == 8){
            println("GO!");
            println("-");
          }else{
          println(".");
          }
         }
    }else if(timeRnd == lmtSToGRest && sG){    
      countSecRest = 0;
    }
    
    //SHOWING SEQUENCE:
    if(timeRnd > lmtRndRest && !sG){
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
              movesMade = append(movesMade,1);
              DPosY -= PosChng;
              move2Bk = move1Bk;
              move1Bk = 1;
              moved = true;
            }else if(moveDirect == 2){
              //MOVE DOWN
              movesMade = append(movesMade,2);
              DPosY += PosChng;
              move2Bk = move1Bk;
              move1Bk = 2;
              moved = true;
            }else if(moveDirect == 3){
              //MOVE LEFT 
              movesMade = append(movesMade,3);
              DPosX -= PosChng;
              move2Bk = move1Bk;
              move1Bk = 3; 
              moved = true; 
            }else if(moveDirect == 4){
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
            timeRndStart = frameCount;
          }
        }
        
        
      }
      
    //PLAYING GAME
    }else if (timeRnd > lmtSToGRest && sG){
        //ClOSING ROUND
        if (countDot == lmtDotC){
          //FEEDBACK:
          println("END of ROUND", countRnd);
          
          //RESETS:
          for (i = lmtDotC; i > 0; i --){
            PosX = shorten(PosX);
            PosY = shorten(PosY);
            movesMade = shorten(movesMade);
          }
          DPosX = SPosX;
          DPosY = SPosY;
          timeAppr=0;
          countDot =0;
          countRnd ++;
          timeRndStart = frameCount;
          sG = false;
          
        //DOT APPEARS:                   
        }else if (timeAppr < lmtApprG && !keyPressed){      
          ellipse(PosX[countDot],PosY[countDot],100,100);
          timeAppr ++;
        }else if (countDot < lmtDotC && keyPressed){
          if (pMove == 1){
            moveG ++;
            moveGT ++;
            pScore ++;
            countDot++;
            timeAppr = 0;
            pMove=0;
            println("GOOD GUESS: +1");
          }else if(pMove == 2){
            moveB ++;
            moveBT ++;
            pScore --;
            countDot++;
            timeAppr = 0;
            pMove=0;
            println("BAD GUESS: -1");
          }
        }else if (timeAppr == lmtApprG){
          moveN ++;
          moveNT ++;
          pScore -= 2;
          countDot ++;
          timeAppr = 0;
          println("NO GUESS: -2");
        }
      }//CLOSE OF GAME LOOP
  }else if (countRnd > countLmtRnd){
    int timeRnd = frameCount - timeRndStart;
    if(timeRnd < lmtEndFeedback && !sG){
      //PRE SHOW FEEDBACK:
      if (timeRnd % 30 == 0){
        countSecRest ++;
        if (countSecRest == 2){
          println("--GAME OVER--");
        }else if (countSecRest == 4){
          println("YOUR SCORE IS:");
          println(pScore);
        }else if(countSecRest == 6){
          println("You made a Total of:");
          println(moveG, ": Correct moves");
          println(moveB, ": Incorrect moves");
          println(moveN, ": No moves");
        }else if(countSecRest == 8){
          println("Thank You for Playing!");
        }else{
          println(".");
        }
      }
    }
    
    
    
  }
  
} 


void keyPressed(){
  if (!setCountLmtRnd){
    if (keyCode == UP){
      if (countLmtRnd == 5){
        println("Sorry only 5 Rounds is the Max");
        println("Either decrease the number of rounds or press 'ENTER'to continue.");
      }else{
      countLmtRnd ++;
      inputG = 0;
      println(countLmtRnd, "ROUNDS?");
      }
    }else if (keyCode == DOWN){
      if (countLmtRnd == 1){
        println("'0' rounds??");
        println("You must have pressed 'DOWN' arrow by accident");
        println("Press the 'UP' arrow key to start choosing how many rounds you want to play.");
        println("Then press 'ENTER' to continue");
      }else{
        countLmtRnd --;
        inputG = 0;
        println(countLmtRnd, "ROUNDS?");
      }
    }else if (keyCode == ENTER){
      inputG +=2;
    }else{
      println("Sorry you must use the arrow keys to change");
      println("the number of rounds or press 'ENTER' to continue");
      println("-");
      println("Please try Again");
      println("-");
    }
  }
  if (setCountLmtRnd){
    if (sG && countDot != lmtDotC){
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
  }
}

  