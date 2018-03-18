
var obj =


{
    "first_name": "VARDAN",
    "last_name": "Hovsepikyan",
    "age": 13,
    "tumo_student": true
}
var myJSON = JSON.stringify(obj);
var fs = require('fs');

function main(){
   fs.writeFile("obj.json", myJSON, function(err){
       console.log("fs.writeFile ended");
   });
   console.log("fs.writeFile");
}
main();

