var disp = document.getElementById('display');

var count=0;
var count1=0;

function toscreen(x){
  disp.value+=x;
  count=0;
  if(x==='c'){
    disp.value=' ';
    count=0;
    count1=0;
  }
  
  
}

function equ(){
  x=disp.value;
  x=eval(x);//evalTate the string expression such as eval(x+y)=some value
  count = 0;
  if(x===undefined || x===NaN || x===Infinity){
    disp.value="Sorry";
  }
  else
    disp.value=x;
  
}

function power(){
  x=disp.value;
  x=eval(x*x);
  disp.value=x
  
}

 function bacspace(){
   var number=disp.value;
   var len = number.length-1;
   var newNum = number.substring(0,len);
   disp.value = newNum;
   count = 0;
   //console.log(newNum);
 }


function toop(x)
{
  if(count==0) {
  disp.value+=x;
    count1=0;
   count++;
 }
  if(count > 1){
    console.log("dup");
  }

}

function todot(x){
  if(count1==0) {
  disp.value+=x;
   count1++;
 }
  if(count1 > 1){
    console.log("dup");
  }
}




