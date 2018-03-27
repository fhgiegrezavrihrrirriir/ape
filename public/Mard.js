//* mard
var tvik = 5;
class Mard extends LivingCreature {
   
    
    

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
                    break;
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
           if(frameCount < 40 && frameCount > 20){
      
        }
        else{
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
    }
        die() {
        matrix[this.y][this.x] = 0;
        for (var i in mardArr) {
            if (this.x == mardArr[i].x && this.y == mardArr[i].y) {
                mardArr.splice(i, 1);
                break;
            }
        }
    }
      
}