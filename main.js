function preload(){

}
function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color  = "";
}
function draw(){
    image(video,0,0,640,480);
    

fill(255,0,0);
stroke (255, 0, 0)
circle(50,50,50)
circle(600,50,50)
circle(600,450,50)
circle(50,450,50)
circle(200,69,49)
circle(400,69,49)
rect(400,69,49)
rect(150,69,49)
}

