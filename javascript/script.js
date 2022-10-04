function call(){
    var div=document.querySelector("#mypara");
    var h1=document.createElement("input");
    var  p1= div.appendChild(h1);
    p1.setAttribute("type","range");
    p1.setAttribute("min","20");
    p1.setAttribute("max","50");
    p1.setAttribute("step","5");
    p1.setAttribute("id","range");
   }
  function addList(){ 
   var li=document.createElement("li");
   var ul=document.querySelector("#mydiv");
   var val=document.querySelector("#list").value;
   var par=document.createTextNode(val); 
  li.appendChild(par); 
  ul.appendChild(li);
  console.log(ul);
   }