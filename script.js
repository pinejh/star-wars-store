var sabers = [{"name": "Anakin's Lightsaber", "price": 3.99, "imgsrc": "images/lightsabers/anakin.png"}, {"name": "Count Dooku's Lightsaber", "price": 4.99, "imgsrc": "images/lightsabers/dooku.png"}, {"name": "Luke's Lightsaber", "price": 4.69, "imgsrc": "images/lightsabers/luke.png"}, {"name": "Obi-Wan's Lightsaber", "price": 3.39, "imgsrc": "images/lightsabers/obiwan.png"}, {"name": "Kylo Ren's Lightsaber", "price": 6.99, "imgsrc": "images/lightsabers/ren.png"}, {"name": "Darth Vader's Lightsaber", "price": 3.99, "imgsrc": "images/lightsabers/vader.png"}, {"name": "Mace Windu's Lightsaber", "price": 4.99, "imgsrc": "images/lightsabers/windu.png"}];

function loadItems(items) {
 $('.shop').html('');
 var html = '', i;
 alert(items.length);
 html += '<tr class="row">';
 for (i = 0; i < items.length; i += 1) {
  if (i % 3 == 0&&i!=0) {
   html += '<tr>';
   html += '<tr class="row">';
  }
  html += '<td class="item"><img src="' + items[i].imgsrc + '"/><h3 class="name">' + items[i].name + '</h3><h4 class="price">' + items[i].price + '</h4>';
 }
 html += '</tr>';
 alert(html);
 $('.shop').html(html);
}

function setNav(tab) {
 switch (tab) {
 case 2:
  $('#nav').html('<li></li><li class="navitem" id="tab1"><h2>Lightsabers</h2></div></li><li class="navitem" id="tab2"><h2>Blasters</h2><div class="selected"></li><li class="navitem" id="tab3"><h2>Other Weapons</h2></li><li></li>');
  break;
 case 3:
  $('#nav').html('<li></li><li class="navitem" id="tab1"><h2>Lightsabers</h2></li><li class="navitem" id="tab2"><h2>Blasters</h2></li><li class="navitem" id="tab3"><h2>Other Weapons</h2><div class="selected"></li><li></li>');
  break;
 default:
  $('#nav').html('<li></li><li class="navitem" id="tab1"><h2>Lightsabers</h2><div class="selected"></div></li><li class="navitem" id="tab2"><h2>Blasters</h2></li><li class="navitem" id="tab3"><h2>Other Weapons</h2></li><li></li>');
  loadItems(sabers);
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
 setNav(1);
});