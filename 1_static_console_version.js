console.log("Christmas Tree:");
var hash="#";
var output="";
var limit=14; //Must be even number
var middle=limit/2;
for(i=0; i<middle; i++){
  for(j=0; j<limit; j++){
    if(j==middle){
		if(i==0){
			output +="*";
		}else{
			output +="#";
		}
    }else{
      if(j>=(middle-i) && j<=(middle+i) ){
          output +="#";
      }else{
          output +=" ";
      }
    }


  }
  console.log(output);
  output=""; //reset
}

for(i=0;i<limit; i++){
  if(i==(middle-1)){
    output +="| |";
  }else{
    if(i==2){
    	output +="[]";
    }else if(i==3){
       output +="";
    }else{
    	output +=" ";
    }
  }
  if(i==(middle+1)){
  	output +="[]";
  }

}
console.log(output);
