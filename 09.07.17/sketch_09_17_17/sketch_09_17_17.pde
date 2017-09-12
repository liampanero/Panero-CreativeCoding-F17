//LIAM PANERO - ASSIGNMENT 09.07.17: Self Portrait
size(700,850);

//NECK:

  //BASE:
    //styles:
      fill(255,255,255);
      stroke(0,0,0);
      strokeWeight(4);
    
    //b_neck:
      beginShape();
      vertex(240,560);
      vertex(240,590);
      vertex(230,640);
      vertex(200,660);
      vertex(260,780);
      vertex(360,850);
      vertex(470,800);
      vertex(520,740);
      vertex(480,730);
      vertex(480,640);
      endShape();
    
  //SHADOWS:
    //style
      fill(0,0,0);
      stroke(0,0,0);
      strokeWeight(2.7);
    
    //s_neck_l:
      triangle(240,590,240,670,230,640);
    
    //s_carotid_l:
      triangle(280,600,340,760,320,640);
    
    //s_carotid_r:
      triangle(440,690,420,760,470,670);
    
    //s_adminsApple:
      beginShape();
      vertex(370,730);
      vertex(380,780);
      vertex(410,730);
      vertex(390,740);
      endShape(CLOSE);
    
//HEAD:

  //BASE:
    //style:
      fill(255,255,255);
      stroke(0,0,0);
      strokeWeight(4);
      
    //b_head:
      beginShape();
      vertex(170,230);
      vertex(170,310);
      vertex(180,340);
      //start_ear
      vertex(170,320);
      vertex(140,330);
      vertex(130,370);
      vertex(170,460);
      vertex(190,480);
      vertex(210,470);
      vertex(210,450);
      //end_ear
      //start_jaw
      vertex(230,540);
      vertex(240,570);
      vertex(320,660);
      vertex(360,685);
      vertex(430,700);
      vertex(480,680);
      vertex(500,650);
      //end_jaw(visually is chin)
      //start_rightSide
      vertex(530,570);
      vertex(580,430);
      vertex(570,380);
      vertex(590,350);
      vertex(590,220);
      //end_rightSide
      vertex(380,200);
      endShape(CLOSE);
      
  //SHADOWS:
    //style:
      //fill still white
      stroke(0,0,0);
      strokeWeight(1.4);
      
    //s_ear:
      beginShape();
      vertex(150,340);
      vertex(140,365);
      vertex(150,390);
      vertex(150,360);
      vertex(160,350);
      vertex(160,340);
      endShape(CLOSE);
      
    //s_earlobe:
      triangle(180,445,180,455,190,462);
      
    //s_eye_l:
      beginShape();
      vertex(290,360);
      vertex(310,370);
      vertex(310,380);
      vertex(290,390);
      vertex(300,400);
      vertex(330,410);
      vertex(360,410);
      vertex(390,400);
      vertex(400,380);
      vertex(390,360);
      vertex(370,350);
      vertex(340,345);
      vertex(310,350);
      endShape(CLOSE);
      
    //s_eye_r:
      beginShape();
      vertex(457,380);
      vertex(480,400);
      vertex(500,410);
      vertex(540,410);
      vertex(560,400);
      vertex(540,380);
      vertex(550,380);
      vertex(570,360);
      vertex(540,350);
      vertex(500,350);
      vertex(475,360);
      endShape(CLOSE);
      
    //s_cheekbone_l:
      triangle(220,380,290,450,280,420);
      
    //s_cheek_l:
      beginShape();
      vertex(250,450);
      vertex(280,480);
      vertex(300,540);
      vertex(300,560);
      vertex(310,540);
      vertex(280,470);
      endShape(CLOSE);
      
    //s_nose:
      beginShape();
      vertex(420,390);
      vertex(400,460);
      vertex(390,490);
      vertex(360,520);
      vertex(400,500);
      vertex(410,460);
      endShape(CLOSE);
      
    //s_cheek_r:
    beginShape();
      vertex(540,480);
      vertex(520,550);
      vertex(550,480);
      vertex(560,460);
      endShape(CLOSE);
      
    //s_chin:
    beginShape();
      vertex(360,610);
      vertex(400,650);
      vertex(420,640);
      vertex(450,640);
      vertex(460,650);
      vertex(470,640);
      vertex(490,610);
      vertex(460,630);
      vertex(450,620);
      vertex(420,620);
      vertex(400,630);
      endShape(CLOSE);
      
  //SOLID ELLEMENTS:
    //style:
      fill(0,0,0);
      noStroke();
      
    //se_eyebrow_l:
      beginShape();
      vertex(260,340);
      vertex(320,330);
      vertex(360,330);
      vertex(385,335);
      vertex(400,320);
      vertex(380,310);
      vertex(320,315);
      endShape(CLOSE);
      
    //se_eyebrow_r:
      beginShape();
      vertex(470,320);
      vertex(480,335);
      vertex(500,330);
      vertex(540,330);
      vertex(591,350);
      vertex(591,340);
      vertex(540,315);
      endShape(CLOSE);
    
    //se_eye_l:
      beginShape();
      vertex(300,380);
      vertex(310,390);
      vertex(330,400);
      vertex(530,400);
      vertex(365,400);
      vertex(380,390);
      vertex(390,380);
      vertex(380,365);
      vertex(365,360);
      vertex(330,360);
      vertex(310,370);
      endShape(CLOSE);  
      
    //se_eye_r:
      beginShape();
      vertex(470,380);
      vertex(480,390);
      vertex(500,400);
      vertex(530,400);
      vertex(550,390);
      vertex(555,380);
      vertex(543,365);
      vertex(530,360);
      vertex(495,360);
      vertex(475,370);
      endShape(CLOSE);
      
    //se_nostril_l:
      beginShape();
      vertex(390,550);
      vertex(420,547);
      vertex(440,550);
      vertex(420,540);
      endShape(CLOSE);
      
    //se_nostril_r:
      beginShape();
      vertex(440,550);
      vertex(460,547);
      vertex(480,550);
      vertex(460,540);
      endShape(CLOSE);
      
  //HIGHLIGHTS:
    //style:
      fill(255,255,255);
      stroke(173,34,14);
      strokeWeight(2.4);      
    //h_ear:
      triangle(180,405,190,435,192,390);
      
    //h_temple_l:
      beginShape();
      vertex(210,300);
      vertex(230,330);
      vertex(240,310);
      vertex(290,280);
      endShape(CLOSE);
      
    //h_cheek_l:
      beginShape();
      vertex(320,440);
      vertex(340,480);
      vertex(390,420);
      vertex(350,440);
      endShape(CLOSE);
      
    //h_cheek_r:
      beginShape();
      vertex(460,400);
      vertex(460,420);
      vertex(470,490);
      vertex(490,500);
      vertex(505,530);
      vertex(520,475);
      vertex(550,455);
      vertex(500,440);
      vertex(475,420);
      endShape(CLOSE);
      
    //h_cheekbone_r:
      beginShape();
      vertex(500,420);
      vertex(550,440);
      vertex(570,430);
      vertex(565,410);
      vertex(540,420);
      endShape(CLOSE);
      
    //h_nose:
      triangle(441,380,443,515,453,500);
      
    //h_lowerLip:
      beginShape();
      vertex(370,590);
      vertex(390,600);
      vertex(430,610);
      vertex(450,610);
      vertex(475,600);
      vertex(490,590);
      endShape();
    
    //eliminating fill for lines
    noFill();
    
    //h_forehead_l:
      beginShape();
      vertex(385,300);
      vertex(410,305);
      vertex(415,320);
      endShape();
      
    //h_forhead_r:
      beginShape();
      vertex(450,310);
      vertex(460,300);
      vertex(510,290);
      endShape();
      
//PRIMARY FEATURES:
  //style:
    fill(255,255,255);
    stroke(0,0,0);
    strokeWeight(4);
    
  //pf_nose:
    beginShape();
    vertex(420,350);
    vertex(420,390);
    vertex(410,460);
    vertex(400,500);
    vertex(380,510);
    vertex(370,540);
    vertex(390,550);
    vertex(420,540);
    vertex(440,550);
    vertex(460,540);
    vertex(480,550);
    vertex(490,540);
    vertex(480,505);
    vertex(460,495);
    vertex(450,390);
    vertex(450,350);
    endShape();

  //pf_upperlip:
    beginShape();
    vertex(370,590);
    vertex(440,595);
    vertex(490,590);
    vertex(455,573);
    vertex(440,580);
    vertex(425,573);
    endShape(CLOSE);
    
//HAT
  //TOP
    //style:
      fill(173,34,14);
      stroke(0,0,0);
      //strokeWeight still 4
      
    //top_l:
      beginShape();
      vertex(170,320);
      vertex(200,270);
      vertex(200,160);
      vertex(180,200);
      vertex(170,230);
      endShape(CLOSE);
      
    //top_m:
      beginShape();
      vertex(200,260);
      vertex(230,205);
      vertex(260,175);
      vertex(300,150);
      vertex(275,85);
      vertex(200,160);
      endShape(CLOSE);
      
    //top_r:
      beginShape();
      vertex(275,85);
      vertex(300,150);
      vertex(400,120);
      vertex(500,125);
      vertex(560,150);
      vertex(540,90);
      vertex(480,060);
      vertex(400,050);
      vertex(335,060);
      endShape(CLOSE);
     
      
  //HIGHLIGHT(nose)
    //style:
      fill(255,255,255);
      stroke(173,34,14);
      strokeWeight(2.4);  
    //h_nose:
      triangle(441,380,443,515,453,500);
  
  //BRIM-FRONT:
    //style:
      fill(173,34,14);
      stroke(0,0,0);
      strokeWeight(4);
      
    //brim_front:
      beginShape();
      vertex(200,260);
      vertex(230,205);
      vertex(260,175);
      vertex(300,150);
      vertex(400,120);
      vertex(500,125);
      vertex(560,150);
      vertex(590,161);
      vertex(615,195);
      vertex(617,235);
      vertex(610,200);
      vertex(588,170);
      vertex(500,135);
      vertex(400,130);
      vertex(300,160);
      vertex(262,185);
      vertex(238,210);
      vertex(610,200);
      vertex(588,170);
      vertex(500,135);
      vertex(400,130);
      vertex(300,160);
      vertex(262,185);
      vertex(238,210);
      vertex(200,270);
      endShape(CLOSE);
      
  //BRIM-BOTTOM:
    //style:
      fill(0,0,0);
      //stroke still blk
      //strokeWeight still 4
      
    //brim_bottom:
      beginShape();
      vertex(200,270);
      vertex(265,240);
      vertex(305,230);
      vertex(400,215);
      vertex(470,225);
      vertex(545,245);
      vertex(590,267);
      vertex(618,240);
      vertex(610,200);
      vertex(588,170);
      vertex(500,135);
      vertex(400,130);
      vertex(300,160);
      vertex(262,185);
      vertex(238,210);
      endShape(CLOSE);
      
//END OF PORTRAIT
      
 
      
      