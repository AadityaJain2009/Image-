img= "";
stat = "";
objects = [];
objectDetector = "";

function back(){
    window.location = "index.html" ; 
}

function preload(){
    img = loadImage("tv ac.jpg");
}

function setup(){
    canvas = createCanvas(450 , 400);
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status_b").innerHTML = "Status - Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    stat = true;
    objectDetector.detect(img , gotResult);

}



function draw(){

    if(stat != undefined){

        image(img ,0, 0 ,450 , 400);
        for(i = 0 ; i<objects.length ; i++){
        document.getElementById("status_b").innerHTML = "Status - Object Detected";

        fill("lightslategray");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%" , objects[i].x+15 , objects[i].y+15);
        noFill()
        stroke("lightslategray")
        rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}



function gotResult(error , results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}