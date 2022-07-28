stat="";
function setup(){
canvas = createCanvas(300,300);
canvas.position(490,150);
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("stat").innerHTML = "Status: Detecting Objects";    
}

function modalLoaded(){
console.log("Modale Loaded bruhhhhhhhhhhhhhhh");
stat = true;    
}

function draw(){
image(video, 0, 0, 300, 300)    
}