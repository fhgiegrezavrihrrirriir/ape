//*pat
class Pat extends LivingCreature  {

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