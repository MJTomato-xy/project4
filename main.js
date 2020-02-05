// nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
 //spider
 function spider() {
     var spider = document.querySelector("#spider");
     spider.style.animation = "appear 3s ease forwards";
     var spiderweb = document.querySelector(".spider-graph");
     spiderweb.style.animation = "emerge 2s ease forwards";
    }
function spidershow() {
    var spider = document.querySelector("#spider");
    spider.style.marginTop = "0px";
    var web = document.querySelector("#web");
    web.style.color = "#333";
}
//titleshow
function darktitle() {
  var title = document.querySelector("h1");
  var subtitle = document.querySelector(".h3");
  subtitle.style.color = "whitesmoke";
  title.style.webkitTextStroke = "2px whitesmoke";
}
//spiderTalk

var elmt1 = [`Hi, I'm Xinyi. Welcome to my <a id="scroll1" onclick="scrollWin()">WEBs</a>!`, "This is my very first web. It's hyperlinked!", "Inspired by 'Kiki's Backdoor' at RISD Museum, I made my second attempt!", "This web is for my Pokemon friends. Hover on pictures to find them!", "Oops, no more ...huh. We are already on the FINAL web!"]
var counter = -1;
function spiderTalk() {
  counter+=1;
  var popup = document.querySelector("#spiderTalk");
  popup.innerHTML = elmt1[counter];
  popup.classList.add("show");

  if(counter>elmt1.length-1){
    popup.classList.add("hide").remove("show");
  }
}
//Scroll to page 2
function scrollWin() {
  window.scrollBy(0, 858);
}
function rotate() {
  var ro = document.querySelector("#hugeWeb");
  ro.style.animation = "rotate 5s alternate forwards";
}
function rotate() {
  var ro = document.querySelector("#hugeWeb2");
  ro.style.animation = "rotate 5s alternate forwards";
}
//show codeEssay
$(document).ready(function(){
  $("#p1").mousedown(function(){
    $("#codeEssay").slideDown("slow");
  });
});

$(document).ready(function(){
  $("#circle").mouseover(function(){
    $("#c1").fadeIn("2000");
  });
});

$(document).ready(function(){
  $("#circle").mouseout(function(){
    $("#c1").fadeOut("2000");
  });
});

$(document).ready(function(){
  $("#circle2").mouseover(function(){
    $("#c2").fadeIn("2000");
  });
});
$(document).ready(function(){
  $("#circle2").mouseout(function(){
    $("#c2").fadeOut("2000");
  });
});
$(document).ready(function(){
  $("#circle3").mouseover(function(){
    $("#c3").fadeIn("2000");
  });
});

$(document).ready(function(){
  $("#circle3").mouseout(function(){
    $("#c3").fadeOut("2000");
  });
});
$(document).ready(function(){
  $("#p2").click(function(){
    $(".backDoor").slideDown("slow");
  });
});

$(document).ready(function(){
  $("#p2-2").click(function(){
    $("#poster").slideDown("slow");
  });
});

// scrollRight
function scrollRight() {
  var elmt = document.querySelector("#pageFour")
  elmt.style.animation = "moveLeft 2s forwards";
}

$(document).ready(function(){
  $("#scrollLeft").click(function(){
    $("#pageFour").slideToggle("slow");
  });
});

function pokeopen() {
  var cur = document.querySelector("#pageFour")
  cur.style.cursor = "url(assets/icons8-open-pokeball-80.png), help";
}
function pokeclose() {
  var sor = document.querySelector("#pageFour")
  sor.style.cursor = "url(assets/icons8-pokeball-80.png), help";
}

// function slide() {
//   var slide1 = document.querySelector("#slide1")
//   slide1.style.animation = "slide 1s";
//   var slide2 = document.querySelector("#slide2")
//   slide2.style.animation = "slide 1s";
//   var slide3 = document.querySelector("#slide3")
//   slide3.style.animation = "slide 1s";
//   var slide4 = document.querySelector("#slide4")
//   slide4.style.animation = "slide 1s";
// }
// function slidenone() {
//   var slide11 = document.querySelector("#slide1")
//   slide11.style.animation = "";
//   var slide22 = document.querySelector("#slide2")
//   slide22.style.animation = "";
//   var slide33 = document.querySelector("#slide3")
//   slide33.style.animation = "";
//   var slide44 = document.querySelector("#slide4")
//   slide44.style.animation = "";
// }

$(document).ready(function(){
  $(".slidecontainer").mouseover(function(){
    $("#slide1").slideUp();
    $("#slide2").slideUp("slow");
    $("#slide3").slideUp(1000);
    $("#slide4").slideUp(1200);
  });
});
//Mouse move
function mouseLog() {
  var x = event.pageX;
  var y = event.pageY;
  var cursor = document.querySelector("#move");
  var cursor1 = document.querySelector("#move1");
  var cursor2 = document.querySelector("#move2");
  var cursor3 = document.querySelector("#move3");
  var curcor4 = document.querySelector("#move4");
 
  cursor.style.backgroundColor = "rgb("+ y +", "+ x +", 150)";
  cursor.style.left = x - 25 + "px";
  cursor.style.top = y - 55 + "px";

  cursor1.style.backgroundColor = "rgb("+ y +", "+ x +", 150)";
  cursor1.style.left = x - 45 + "px";
  cursor1.style.top = y - 55 + "px";

  cursor2.style.backgroundColor = "rgb("+ y +", "+ x +", 150)";
  cursor2.style.left = x - 45 + "px";
  cursor2.style.top = y - 55 + "px";

  cursor3.style.backgroundColor = "rgb("+ y +", "+ x +", 150)";
  cursor3.style.left = x - 45 + "px";
  cursor3.style.top = y - 55 + "px";

  cursor4.style.backgroundColor = "rgb("+ y +", "+ x +", 150)";
  cursor4.style.left = x - 25 + "px";
  cursor4.style.top = y - 55 + "px";
}
function cursorImg() {
  var cur = document.querySelector("#move2");
  cur.style.opacity = "1";
}
function cursorImg1() {
  var cur = document.querySelector("#move2");
  cur.style.opacity = "0";
}
function cursorImg2() {
  var cur = document.querySelector("#move3");
  cur.style.opacity = "1";
}
function cursorImg3() {
  var cur = document.querySelector("#move3");
  cur.style.opacity = "0";
}
function cursorImg4() {
  var cur = document.querySelector("#move1");
  cur.style.opacity = "1";
}
function cursorImg5() {
  var cur = document.querySelector("#move1");
  cur.style.opacity = "0";
}
// function cursorImg6() {
//   var cur = document.querySelector("#move4");
//   cur.style.opacity = "1";
// }
// function cursorImg7() {
//   var cur = document.querySelector("#move4");
//   cur.style.opacity = "0";
// }