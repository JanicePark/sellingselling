var x = 10;


function setup() {
    var theCanvas = createCanvas(1090, 1170);
    frameRate(30);
    stroke(0);
}


function draw() {
    background(255, 50);
    x = x + 1;
    if (x < 0) {
        x = height;
    }


    line(x, 0, x, height);
    stroke((255), (0), (0));
    strokeWeight(8);
}
