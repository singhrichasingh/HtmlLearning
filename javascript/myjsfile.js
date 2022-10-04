function init(){
var button=document.querySelector("button");
button.addEventListener("click",call);
}
function call(){
  var div=document.querySelectorAll(".myclass");
  for(var i=0;i<div.length;i++){
    var h1=document.createElement("input");
    h1.setAttribute("type","range");
    var minimum=setMin();
    h1.setAttribute("min",minimum);
    var maximum=setMax();
    h1.setAttribute("max",maximum);
    h1.setAttribute("step","5");
    var range= "div-"+i;
    h1.setAttribute("id",range);
   div[i].appendChild(h1);
   getId(range);
   }
  }
function setMin(){
  var m=document.querySelector("#min").value;
  return m;
}
function setMax(){
  var M=document.querySelector("#max").value;
 return M; 
}
function getId(id){
  var id= id;
console.log(id);
}
