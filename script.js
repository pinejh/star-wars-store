var sabers;

function setNav(tab) {
 switch(tab) {
 case 2:
  $('#nav').html('<li></li><li class="navitem" id="tab1"><h2>Lightsabers</h2></div></li><li class="navitem" id="tab2"><h2>Blasters</h2><div class="selected"></li><li class="navitem" id="tab3"><h2>Other Weapons</h2></li><li></li>');
  break;
 case 3:
  $('#nav').html('<li></li><li class="navitem" id="tab1"><h2>Lightsabers</h2></li><li class="navitem" id="tab2"><h2>Blasters</h2></li><li class="navitem" id="tab3"><h2>Other Weapons</h2><div class="selected"></li><li></li>');
  break;
 default:
  $('#nav').html('<li></li><li class="navitem" id="tab1"><h2>Lightsabers</h2><div class="selected"></div></li><li class="navitem" id="tab2"><h2>Blasters</h2></li><li class="navitem" id="tab3"><h2>Other Weapons</h2></li><li></li>');
 }
}

$("body").on("click", "#tab1", function () {
 setNav(1);
});
$("body").on("click", "#tab2", function () {
 setNav(2);
});
$("body").on("click", "#tab3", function () {
 setNav(3);
});

$(function () {
 alert(sabers);
 sabers = $.getJSON('sabers.json');
 alert(JSON.stringify(sabers));
 
});