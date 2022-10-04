function call(){
    var range=document.querySelector("#range").value;
    if(range=="true"){
        document.querySelector("#display").style.display="block";
    }
}
 function createTable(){
     var container=document.querySelector("#table");
     var tr=container.insertRow(-1);
     var cell1=tr.insertCell(0);
     var cell2=tr.insertCell(1);
     var cell3=tr.insertCell(2);
     var cell4=tr.insertCell(3);
    cell1.innerHTML=document.querySelector('#room').value;
    cell2.innerHTML= document.querySelector('#device').value;
    cell3.innerHTML= document.querySelector('#min').value;
    cell4.innerHTML= document.querySelector('#max').value; 

 }
 function showTable(){
     var show=document.querySelector("#show");
     show.style.display="block";
 }