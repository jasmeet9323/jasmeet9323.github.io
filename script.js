 // play audio
 var shortName = document.getElementById("myName"); 

 function playPetName() { 
  shortName.play(); 
}

var fullName1 = document.getElementById("myFullName1");
var fullName2 = document.getElementById("myFullName2");

function playFullName1() {
  fullName1.play();
}

function playFullName2() {
  fullName2.play();
}

// add class to element sidebar
function showSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.add("show");
}

function hideSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("show");
}
