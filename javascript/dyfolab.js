var c=0;
function init(){
respond();  
active(0,0);
}
function respond(){
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
var isIE = /*@cc_on!@*/false || !!document.documentMode;
var isEdge = !isIE && !!window.StyleMedia;
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
var isBlink = (isChrome || isOpera) && !!window.CSS;
var res=document.querySelector("#res");
var btn=document.querySelector("#closebtn button");
var svg=document.querySelector("#svg");
var ctrl=document.querySelector("#ctrl");
if(isEdge==true||isOpera==true)
{
 var cur=document.getElementById("curtain3");
 cur.style.display="block";
 var cur1=document.getElementById("curtain4");
 cur1.style.display="block"; 
}
if(isSafari==true)
{ 
res.innerHTML="Your Browser doesn't support some Functionality. For Best Experience please use  Microsoft Edge ,Mozilla FireFox or Google Chrome";
btn.style.display="block";
}
if(isIE==true)
{
svg.style.width="980px";
svg.style.height="1350px";
svg.style.marginTop="-345px";
ctrl.style.marginTop="-50px";
res.innerHTML="Your Browser doesn't support some Functionality. For Best Experience please use Microsoft Edge, Mozilla FireFox or Google Chrome";
btn.style.display="block";
}
}
function closebtn(){
  var close=document.querySelector("#res");
  var btn=document.querySelector("#closebtn button");
  close.style.display="none";
  btn.style.display="none";

}
/**2D to 3D */
function roomThreeD(){
  var roomOff=document.getElementById("lvR");
  var roomOn=document.getElementById("livingRoom3d");
  var home=document.getElementById("hometab");
  if(roomOn.style.display=="none")
   {
     roomOn.style.display="block";
     roomOff.style.display="none";
     home.style.display="block";
   }
}
/**3D to 2D */
function backHome(){
  var roomOff=document.getElementById("lvR");
  var roomOn=document.getElementById("livingRoom3d");
  var home=document.getElementById("hometab");
  if(roomOn.style.display!=="none")
  {
    roomOn.style.display="none";
    roomOff.style.display="block";
    home.style.display="none";
  }
}
/**for AC */
 function OnAC(){
   var acOff=document.getElementById("acOff1");
   var acON=document.getElementById("ACOn");
   var air=document.getElementById("aircontrol");
   var off=document.querySelector("#acOff");
   var on=document.querySelector("#acOn");
   if(acON.style.display=="none")
    {
      collapseAll();
      acON.style.display="block";
      acOff.style.display="none";
      air.style.display="block";
     off.style.display="none";
     on.style.display="block";
     active(1,0);
    }
    else{
      acON.style.display="none";
      acOff.style.display="block";
      air.style.display="none";
      off.style.display="block";
      on.style.display="none";
    }
 }
 function ACOnOff(){
  var on=document.querySelector("#dyfoAC");
  var acOn=document.querySelector("#acOn");
  var air=document.querySelector("#image7");
  var value=Math.round(on.value);
   if(value==0)
   {
     acOn.style.display="block";
     air.style.opacity=0;
    } 
   if(value==1){
     acOn.style.display="block";
     air.style.opacity=0.35; 
   }
   if(value==2){
     acOn.style.display="block";
     air.style.opacity=0.4; 
   }
   if(value==3){
    acOn.style.display="block";
     air.style.opacity=0.45; 
   }
   if(value==4){
     acOn.style.display="block";
     air.style.opacity=0.5; 
   }
   if(value==5){
     acOn.style.display="block";
     air.style.opacity=0.55; 
   }
   if(value==6){
     acOn.style.display="block";
     air.style.opacity=0.6; 
   }
   if(value==7){
     acOn.style.display="block";
     air.style.opacity=0.65; 
   }
   if(value==8){
     acOn.style.display="block";
     air.style.opacity=0.7; 
   }
   if(value==9){
     acOn.style.display="block";
     air.style.opacity=0.75; 
   }
   if(value==10){
     acOn.style.display="block";
     air.style.opacity=0.8; 
   }
 }
 function ACOff()
 { var acOff=document.getElementById("acOff1");
 var acON=document.getElementById("ACOn");
 var air=document.querySelector("#aircontrol");
 var off=document.querySelector("#acOff");
 var on=document.querySelector("#acOn");
 if(acON.style.display=="block")
  {
    acON.style.display="none";
    acOff.style.display="block";
    air.style.display="none";
   off.style.display="block";
   on.style.display="none";
     active(0,1);
  }
}
 /**for TV */
 function OnTv(){
  var TVOff=document.getElementById("TVOff");
  var TVOn=document.getElementById("TVOn");
  var speaker1off=document.getElementById("speaker1");
  var spaeker2off=document.getElementById("speaker2");
  var speaker1on=document.getElementById("speakerOn1");
  var speaker2on=document.getElementById("speakerOn2");
  var btn=document.querySelector("video");
  var vol=document.querySelector("#volumecontrol");
  btn.volume=0;
  var value= Math.round(vol.value);
  if(TVOn.style.display!=="block")
   {
    collapseAll();
     TVOn.style.display="block";
     TVOff.style.display="none";
     speaker1on.style.display="block";
     speaker1off.style.display="none";
     speaker2on.style.display="block";
     spaeker2off.style.display="none";
     btn.style.display="block";
     btn.play();
     vol.style.display="block";
     active(3,0);
   }
   else {
    btn.style.display="none";
    check.style.display="none";
    value.style.display="none";
    btn.pause();  
  }
}
function setVolume(){
  var vol=document.querySelector("#volume");
  var value= Math.round(vol.value);
  var btn=document.querySelector("video");
  var one=document.querySelectorAll(".one");
  var two=document.querySelectorAll(".two");
  var three=document.querySelectorAll(".three");
  for(var i=0;i<=3;i++)
  {
  if(value==0){
      btn.volume=0.0;
    one[i].style.opacity=0;
    two[i].style.opacity=0;
    three[i].style.opacity=0;
  }
  if(value==1){
      btn.volume=0.1;
      one[i].style.opacity=0.1;
      two[i].style.opacity=0.1;
      three[i].style.opacity=0;
  }
  if(value==2){
      btn.volume=0.2;
      one[i].style.opacity=0.2;
      two[i].style.opacity=0.2;
      three[i].style.opacity=0;
  }
  if(value==3){
      btn.volume=0.3;
      one[i].style.opacity=0.3;
      two[i].style.opacity=0.3;
      three[i].style.opacity=0;
  }
  if(value==4){
      btn.volume=0.4;
      one[i].style.opacity=0.4;
      two[i].style.opacity=0.4;
      three[i].style.opacity=0;
  }
  if(value==5){
      btn.volume=0.5;
      one[i].style.opacity=0.5;
      two[i].style.opacity=0.5;
      three[i].style.opacity=0;
  }
  if(value==6){
      btn.volume=0.6;
      one[i].style.opacity=0.6;
      two[i].style.opacity=0.6;
      three[i].style.opacity=0.2;
  }
  if(value==7){
      btn.volume=0.7;
      one[i].style.opacity=0.7;
      two[i].style.opacity=0.7;
      three[i].style.opacity=0.4;
  }
  if(value==8){
      btn.volume=0.8;
      one[i].style.opacity=0.8;
      two[i].style.opacity=0.8;
      three[i].style.opacity=0.6;
  }
  if(value==9){
      btn.volume=0.9;
      one[i].style.opacity=0.9;
      two[i].style.opacity=0.9;
      three[i].style.opacity=0.8;
  }
  if(value==10){
      btn.volume=1.0;
      one[i].style.opacity=1;
      two[i].style.opacity=1;
      three[i].style.opacity=1;
  }
}
}
function offTV(){
  var TVOff=document.getElementById("TVOff");
  var TVOn=document.getElementById("TVOn");
  var speaker1off=document.getElementById("speaker1");
  var spaeker2off=document.getElementById("speaker2");
  var speaker1on=document.getElementById("speakerOn1");
  var speaker2on=document.getElementById("speakerOn2");
  var btn=document.querySelector("video");
  var vol=document.querySelector("#volumecontrol");
  var sound=document.getElementById("sound");
  if(TVOn.style.display=="block"){
    btn.pause();
    active(0,3);
    TVOn.style.display="none";
     TVOff.style.display="block";
     speaker1on.style.display="none";
     speaker1off.style.display="block";
     speaker2on.style.display="none";
     spaeker2off.style.display="block";
     btn.style.display="none";
     vol.style.display="none";
    btn.style.display="none";
   sound.style.opacity=0;
 }
}
/**for Curtain */
function curtainOff(){
  var curtainOff=document.getElementById("curtainOff");
  var curtainOn=document.getElementById("curtainOn");
  var curtains=document.querySelector("#dyfocurtain"); 
  if(curtainOn.style.display=="none")
   {
    collapseAll();
     curtainOn.style.display="block";
     curtainOff.style.display="none";
     curtains.style.display="block"; 
     active(1,0);
 }
   else{
    curtainOn.style.display="none";
    curtainOff.style.display="block";
    curtains.style.display="none";
  }
}
function curtainOn(){
  var curtainOff=document.getElementById("curtainOff");
  var curtainOn=document.getElementById("curtainOn");
  var curtains=document.querySelector("#dyfocurtain"); 
  var cur1up=document.querySelector("#cur1up");
  var cur2up=document.querySelector("#cur2up");
  var value=Math.round(cur1up.value);
  var value1=Math.round(cur2up.value);
  if(curtainOn.style.display=="block")
   {
     curtainOn.style.display="none";
     curtainOff.style.display="block";
     curtains.style.display="none"; 
    active(0,1); 
    }
}
function upDown1(){
  var cur1up=document.querySelector("#cur1up"); 
  var curtain1=document.querySelector("#curtain1"); 
  var curtain3=document.querySelector("#curtain3"); 
  var value=Math.round(cur1up.value);
  if(value==0)
  {
    curtain1.style.height="0px";
    curtain3.style.height="0px";
  }
  if(value==1)
  {
    curtain1.style.height="100px";
    curtain3.style.height="180px";
  }
  if(value==2)
  {
    curtain1.style.height="125px";
    curtain3.style.height="210px";
  }
  if(value==3)
  {
    curtain1.style.height="150px";
    curtain3.style.height="240px";
  }
  if(value==4)
  {
    curtain1.style.height="175px";
    curtain3.style.height="280px";
  }
  if(value==5)
  {
    curtain1.style.height="210px";
    curtain3.style.height="310px";
  }
  if(value==6)
  {
    curtain1.style.height="240px";
    curtain3.style.height="340px";
  }
  if(value==7)
  {
    curtain1.style.height="268px";
    curtain3.style.height="380px";
  }
  if(value==8)
  {
    curtain1.style.height="290px";
    curtain3.style.height="410px";
  }
  if(value==9)
  {
    curtain1.style.height="325px";
    curtain3.style.height="450px";
  }
  if(value==10)
  {
    curtain1.style.height="393px";
    curtain3.style.height="500px";
  }
 }
 function upDown2(){
  var cur2up=document.querySelector("#cur2up"); 
  var curtain2=document.querySelector("#curtain2"); 
  var curtain4=document.querySelector("#curtain4"); 
  var value=Math.round(cur2up.value);
  if(value==0)
  {
    curtain2.style.height="0px";
    curtain4.style.height="0px";
  }
  if(value==1)
  {
    curtain2.style.height="70px";
    curtain2.style.height="190px";
  }
  if(value==2)
  {
    curtain2.style.height="90px";
    curtain4.style.height="210px";
  }
  if(value==3)
  {
    curtain2.style.height="110px";
    curtain4.style.height="230px";
  }
  if(value==4)
  {
    curtain2.style.height="130px";
    curtain4.style.height="250px";
  }
  if(value==5)
  {
    curtain2.style.height="150px";
    curtain4.style.height="280px";
  }
  if(value==6)
  {
    curtain2.style.height="170px";
    curtain4.style.height="310px";
  }
  if(value==7)
  {
    curtain2.style.height="195px";
    curtain4.style.height="340px";
  }
  if(value==8)
  {
    curtain2.style.height="215px";
    curtain4.style.height="380px";
  }
  if(value==9)
  {
    curtain2.style.height="245px";
    curtain4.style.height="410px";
  }
  if(value==10)
  {
    curtain2.style.height="285px";
    curtain4.style.height="450px";
  }
}
/**for Ceiling Lights */
function ceilingON(){
  var ceilOff=document.getElementById("ceilOFF");
  var ceilOn=document.getElementById("ceilON");
  var dyfo=document.querySelector("#dyfolights");
  var stop1=document.getElementById("stop1");
  var stop2=document.getElementById("stop2");
  var dim1=document.querySelector("#dim1");
  var dim=document.querySelector("#dim");
  if(ceilOn.style.display=="none")
   {
    collapseAll();
     ceilOn.style.display="block";
     ceilOff.style.display="none";
     dyfo.style.display="block";
     dim1.style.display="block";
     dim.style.display="block";
     active(8,0);
   }
   else{
    {
      ceilOn.style.display="none";
      ceilOff.style.display="block";
      dyfo.style.display="none";
      stop1.style.stopOpacity= 0; 
      stop2.style.stopOpacity= 0;
      dim1.style.display="none";
      dim.style.display="none";
    }
   }
}
function ceilingOff(){
  var ceilOff=document.getElementById("ceilOFF");
  var ceilOn=document.getElementById("ceilON");
  var dyfo=document.querySelector("#dyfolights");
  var stop1=document.getElementById("stop1");
  var stop2=document.getElementById("stop2");
  var img=document.querySelectorAll(".img");
  var dim=document.querySelector("#dim");
  var dim1=document.getElementById("dim1");
   if(ceilOn.style.display=="block")
    {
      ceilOn.style.display="none";
      ceilOff.style.display="block";
      dyfo.style.display="none";
      stop1.style.stopOpacity= 0; 
      stop2.style.stopOpacity= 0;
      dim.value=0;
        for(i=0;i<=6;i++)
         {
        img[i].style.opacity=0;
            }
            dim1.value=0;
      active(0,8);

    }
   }
function setDim(){
  var dim=document.querySelector("#dim");
  var value= Math.round(dim.value);
  var stop1=document.getElementById("stop1");
  var stop2=document.getElementById("stop2");
  if(value==0)
  {
    stop1.style.stopOpacity= 0; 
    stop2.style.stopOpacity= 0;
  }
  if(value==1)
  {
    stop1.style.stopOpacity= 0; 
    stop2.style.stopOpacity= 0.1;
  }
  if(value==2)
  {
    stop1.style.stopOpacity= 0; 
    stop2.style.stopOpacity= 0.2;
  }
  if(value==3)
  {
    stop1.style.stopOpacity= 0; 
    stop2.style.stopOpacity= 0.3;
  }
  if(value==4)
  {
    stop1.style.stopOpacity= 0; 
    stop2.style.stopOpacity= 0.4;
  }
  if(value==5)
  {
    stop1.style.stopOpacity= 0; 
    stop2.style.stopOpacity= 0.5;
  }
  if(value==6)
  {
    stop1.style.stopOpacity= 0; 
    stop2.style.stopOpacity= 0.6;
  }
  if(value==7)
  {
    stop1.style.stopOpacity= 0.1; 
    stop2.style.stopOpacity= 0.7;
  }
  if(value==8)
  {
    stop1.style.stopOpacity= 0.2; 
    stop2.style.stopOpacity= 0.8;
  }
  if(value==9)
  {
    stop1.style.stopOpacity= 0.3; 
    stop2.style.stopOpacity= 0.9;
  }
  if(value==10)
  {
    stop1.style.stopOpacity= 0.4; 
    stop2.style.stopOpacity= 1;
  }
}
function setCeilDim(){
  var dim=document.getElementById("dim1");
  var img=document.querySelectorAll(".img");
  var value=Math.round(dim.value);
  for(i=0;i<=6;i++)
  {
    if(value==0){
    img[i].setAttribute("style","opacity:0");
  }
  if(value==1){
    img[i].setAttribute("style","opacity:1");
 }
 if(value==2){
   img[i].style.opacity=0.2;
 }
 if(value==3){
   img[i].style.opacity=0.3;
 }
 if(value==4){
   img[i].style.opacity=0.4;
 }
 if(value==5){
   img[i].style.opacity=0.5;
 }
 if(value==6){
   img[i].style.opacity=0.6;
 }
 if(value==7){
   img[i].style.opacity=0.7;
 }
 if(value==8){
   img[i].style.opacity=0.8;
 }
 if(value==9){
   img[i].style.opacity=0.9;
 }
 if(value==10){
   img[i].style.opacity=1;
 }
 }
}
/**Collapse Other */
function collapseAll(){
  var aircontrol=document.getElementById("aircontrol");
  var volumecontrol=document.getElementById("volumecontrol");
  var dyfocurtain=document.getElementById("dyfocurtain");
  var dyfolights=document.getElementById("dyfolights");
  if(aircontrol.style.display!=="none")
  {
    aircontrol.style.display="none";
  }
if(volumecontrol.style.display=="block"||aircontrol.style.display!=="blocK")
{
  aircontrol.style.display="none";
  volumecontrol.style.display="none";
}
if(dyfocurtain.style.display=="block"||aircontrol.style.display!=="blocK")
{
  aircontrol.style.display="none";
  dyfocurtain.style.display="none"; 
}
if(dyfolights.style.display=="block"||aircontrol.style.display!=="blocK")
{ 
  aircontrol.style.display="none";
  dyfolights.style.display="none";
}
}
function active( active,inactive){
  var div=document.getElementById("activeDiv");
  c=active+c;
  c=c-inactive;
  div.innerHTML= c+"/13";
}


