var matrix = []
var side = 5;
var xotArr = [];
var eatArr = [];
var mardArr = [];
var erk = 100;
var bar = 100;
var xotCount = 800;
var eatCount = 400;
var gishCount = 600;
var patCount = 5;
var mardCount = 500;
var patArr = [];
var gishatichArr = [];
/*
var matrix = [
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 3, 0, 0, 0, 1, 0, 0, 2, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 2, 1, 3, 1, 1],
    [0, 1, 2, 0, 0, 5, 3, 0, 1, 5, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 4, 0, 1, 0, 0, 1, 0, 0, 1, 2, 1, 3, 3, 1],
    [0, 3, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 2, 2, 3, 3, 3, 3, 0, 1, 0, 0, 2, 2, 1, 3, 1, 1],
    [0, 2, 0, 3, 4, 3, 0, 0, 4, 0, 3, 1, 1, 1, 1, 1, 1],
    [0, 0, 3, 3, 3, 3, 0, 0, 1, 0, 0, 1, 4, 3, 2, 3, 1],
    [2, 0, 0, 0, 5, 2, 0, 0, 5, 1, 1, 1, 5, 2, 1, 1, 1],
    [2, 0, 0, 2, 2, 1, 0, 2, 1, 2, 2, 1, 1, 1, 1, 3, 1],
    [1, 1, 1, 1, 0, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
]

*/
function setup() {

    for (var i = 0; i < bar; i++) {
        matrix.push([]);
        for (var j = 0; j <erk; j++) {
            matrix[i][j] = 0;
        }
    }


    var c = 0;
    while (c < xotCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
            c++;
        }
    }
   var q = 0;
    while (q < eatCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
            q++;
        }
    }
    var w = 0;
    while (w < gishCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
            w++;
        }
    }
   var r = 0;
    while (r < patCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
            r++;
        }
    }
   var t = 0;
    while (t < mardCount) {
        var x = Math.floor(random(0, erk));
        var y = Math.floor(random(0, bar));
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
            t++;
        }
    }


        noStroke()
        frameRate(60);
        createCanvas(matrix[0].length * side, matrix.length * side);
        background('#acacac');



        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 2) {
                    var eatgrass = new Eatgrass(j, i, 2);
                    eatArr.push(eatgrass);
                } else if (matrix[i][j] == 1) {
                    var grass = new Grass(j, i, 1);
                    xotArr.push(grass);
                } else if (matrix[i][j] == 3) {
                    var gishatich = new Gishatich(j, i, 1);
                    gishatichArr.push(gishatich);
                } else if (matrix[i][j] == 4) {
                    var pat = new Pat(j, i, 1);
                    patArr.push(pat);
                } else if (matrix[i][j] == 5) {
                    var mard = new Mard(j, i, 1);
                    mardArr.push(mard);
                }
            }

        }
    }


    function draw() {
        background('#acacac');
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill("green");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("orange");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill(250, 0, 0);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill(25, 155, 255);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill("black");
                    rect(j * side, i * side, side, side);
                }
            }
        }



        for (var i in xotArr) {
            xotArr[i].mul();
        }

        for (var i in eatArr) {
            eatArr[i].eat();
        }


        for (var i in gishatichArr) {

            gishatichArr[i].eat();
        }

        for (var i in patArr) {

            patArr[i].eat();
        }
        for (var i in mardArr) {

            mardArr[i].eat();
        }
    }
