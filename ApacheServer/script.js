var gradi = 70;
var max = 80;
var min = 60;
var a = 0;
var setting = "COOL";

// setup some JSON to use
var settings = [{ "temperature":gradi, "setting":setting }];
      
window.onload = function() {
// setup the button click
  document.getElementById("theButton").onclick = function() { doWork() };
}
      
function doWork() {
 // ajax the JSON to the server
    $.post("receiver", settings, function(){});
      // stop link reloading the page
     event.preventDefault();
}


function changeSetting(){
  if(a==3){
    setting = "HEAT";
    $(".setting").text("" + setting)
  }
  else if(a==2){
    setting = "OFF";
    $(".setting").text("" + setting)
  }
  else if(a==0){
      setting = "COOL";
    $(".setting").text("" + setting)
  }
}

function updateGr(){
  $(".heat").text(""+ gradi);
  $(".ext").text("" + gradi);
  $(".number").css("transform", "translate(-50%, -50%) rotate("+ (-180 + (gradi-60) * 18)+"deg)");
  $(".shadow").css("transform", "translate(-50%, -50%) rotate("+ (-180 + (gradi-60) * 18)+"deg)");
  $(".fill").css("animation", "none");
  $(".shadow").css("animation", "none");
}

$(".changeup").mousedown(function(){
  a++;
  changeSetting();
});

$(".changedwn").mousedown(function(){
  a--;
  changeSetting();
});

$(".minus").mousedown(function(){ 
  if(gradi > min){
    gradi--;
    updateGr();
    if(gradi >= 70){
      $(".fill1").css("transform", "rotate("+ (gradi - 70) * 18 +"deg)").css("transition-delay", "0s");
    }else if(gradi == 69){
      $(".fill2").css("transform", "rotate("+ gradi * 18 +"deg)").css("transition-delay", "0.5s");
    }else{
      $(".fill2").css("transform", "rotate("+ gradi * 18  +"deg)").css("transition-delay", "0s");
    }
  }
});

$(".plus").mousedown(function(){
  if(gradi < max){
    gradi++;
    updateGr();
    if(gradi > 71){
      $(".fill1").css("transform", "rotate("+ (gradi - 70) * 18 +"deg)").css("transition-delay", "0s");
    }else if(gradi == 71){
      $(".fill1").css("transform", "rotate("+ (gradi - 70) * 18 +"deg)").css("transition-delay", "1s");
    }else{
      $(".fill2").css("transform", "rotate("+ gradi * 18 +"deg)").css("transition-delay", "0s");
    }
  }  
});
