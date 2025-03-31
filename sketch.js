let o1_NB;
let o2_AB;
let o3_Pd;
let o4_GNB;
let o5_Ai;
let o6_Gr;
let state=0;

function preload(){
  o1_NB=loadImage('01_NavBar.png');
  o2_AB=loadImage('02_AdBanner.png');
  o3_Pd=loadImage('03_Product.png');
  o4_GNB=loadImage('04_GNB.png');
  o5_Ai=loadImage('05_ai_icon.png');
  o6_Gr=loadImage('06_green.png');
}

function setup() {
  createCanvas(393,852);
}

function draw() {
  background(225);
  if(state==0){
    image(o1_NB,0,0,393,128);
    image(o2_AB,0,128,393,284);
    image(o3_Pd,0,412,393,440);
    image(o4_GNB,0,764,393,88);
    image(o5_Ai,320,688,60,60);
  }else if(state==1){
    image(o1_NB,0,0,393,128);
    image(o2_AB,0,128,393,284);
    image(o3_Pd,0,412,393,440);
    image(o4_GNB,0,764,393,88);
    image(o5_Ai,320,688,60,60);
    image(o6_Gr,0,612,393,152);
  }
  
}

function mouseClicked(){
  if(mouseX>=320&&mouseX<=380){
    if(mouseY>=688&&mouseY<=748){
      if(state==0){
        state=1;
      }else if(state==1){
        state=0;
      }
    }
  }
}