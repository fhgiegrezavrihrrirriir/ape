//խոտի կլասը
class Grass {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.multiply = 0;

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        if (this.multiply == 3) {
            var emptyCord = this.getDirections(0);

            var cord = random(emptyCord);
            if (cord) {
                var x = cord[0];
                var y = cord[1];

                var norXot = new Grass(x, y, this.index);
                xotArr.push(norXot);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }



}


//խոտակերի կլասը
class Eatgrass {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 3;

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }



    eat() {

        var emptyCord = this.getDirections(1);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
                //this.energy = 10;
            }
        }
    }

    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norXotaker = new Eatgrass(x, y, this.index);
            eatArr.push(norXotaker);

            matrix[y][x] = 1;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }

}
//gishatich klass
class Gishatich {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.multiply = 0;

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
        getDirections(t) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
       move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }
      eat() {

        var emptyCord = this.getDirections(2);

        var cord = random(emptyCord);

        if (cord) {
            
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }
            if (this.multiply == 2) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 1) {
                this.die();
                //this.energy = 10;
            }
        }
    }
    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var norgishatich = new Gishatich(x, y, this.index);
            gishatichArr.push(norgishatich);

            matrix[y][x] = 2;
            this.multiply = 0;
        }
    }
        die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }
    }

}
//*pat
class Pat {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
       
        

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }






    eat() {
        this.newDirections();
        this.directions
        for (var i = 0; i<this.directions.length ; i++){
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                matrix[y][x] = 0;

                
                for (var j in gishatichArr) {
                   if (x == gishatichArr[j].x && y == gishatichArr[j].y) {
                        gishatichArr.splice(j, 1);
                        break;
                    }
                }
                   for (var j in xotArr) {
                   if (x == xotArr[j].x && y == xotArr[j].y) {
                        xotArr.splice(j, 1);
                        break;
                    }
                }
                   for (var j in eatArr) {
                   if (x == eatArr[j].x && y == eatArr[j].y) {
                        eatArr.splice(j, 1);
                        break;
                    }
                }
                 for (var j in mardArr) {
                   if (x == mardArr[j].x && y == mardArr[j].y) {
                        mardArr.splice(j, 1);
                        break;
                    }
                }
                



        }


         
    }


}
//* mard
class Mard {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.energy = 50;
        this.multiply = 0;

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
        getDirections(t) {
        this.newDirections();
        var found = [];

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    
    move() {
        var emptyCord = this.getDirections(0);
        var cord = random(emptyCord);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }

     eat() {

        var emptyCord = this.getDirections(3);

        var cord = random(emptyCord);

        if (cord) {
            
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in gishatichArr) {
                if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }
            if (this.multiply == 4) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 20) {
                this.die();
                //this.energy = 10;
            }
        }
    }

   

    mul() {
        var emptyCord = this.getDirections(0);

        var cord = random(emptyCord);
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;

            var normard = new Mard(x, y, this.index);
            mardArr.push(normard);

            matrix[y][x] = 5;
            this.multiply = 0;
        }
    }
        die() {
        matrix[this.y][this.x] = 0;
        for (var i in mardArr) {
            if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                mardArr.splice(i, 1);
            }
        }
    }
      
}