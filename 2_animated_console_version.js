var christmasTree=(function(){

  output = "Oh Christmas Tree \r\n";
  var hash="#";
  var output="";
  var limit=14; //Must be even number
  var middle=limit/2;
  var lightCount=0;

  for(i=0; i<middle; i++){
    for(j=0; j<limit; j++){
      var rnum = Math.floor(Math.random()*(j+1));
      if(j==middle){
          if(i==0){
            output +="*";
          }else{
            if(rnum==i || rnum==j){
              output+="o";
            }else{
              output+="#";
            }
          }
      }else{
        if(j>=(middle-i) && j<=(middle+i) ){
            if(rnum==i || rnum==j){
              output+="o";
            }else{
              output+="#";
            }
        }else{
            output+=" ";
        }
      }


    }
    console.log(output);
    output=""; //reset
  }
    console.log("  []  | |  []  ");
});

i=0;
christmasTree();
console.clear();
setInterval(() => {
  i = (i > 3) ? 0 : i;
  console.clear();
  christmasTree();
  i++;
}, 1500);
