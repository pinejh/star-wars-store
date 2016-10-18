function loadItems(items) {
 $('.shop').html('');
 var html = '', i, item;
 if(items[0].name == sabers[0].name) item = 0;
 else item = 1;
 html += '<tr class="row">';
 for (i = 0; i < items.length; i += 1) {
  if (i % 3 == 0&&i!=0) {
   html += '<tr>';
   html += '<tr class="row">';
  }
  html += '<td class="item" onclick="openItem('+i+', '+item+')"><img src="' + items[i].imgsrc + '"/><h3 class="name">' + items[i].name + '</h3><h4 class="price">$' + items[i].price + '</h4>';
 }
 html += '</tr>';
 $('.shop').html(html);
}

function setNav(tab) {
 switch (tab) {
 case 2:
  $('#nav').html('<li></li><li class="navitem" id="tab1"><h2>Lightsabers</h2></div></li><li class="navitem" id="tab2"><h2>Blasters</h2><div class="selected"></li><li></li>');
  loadItems(blasters);
  break;
 default:
  $('#nav').html('<li></li><li class="navitem" id="tab1"><h2>Lightsabers</h2><div class="selected"></div></li><li class="navitem" id="tab2"><h2>Blasters</h2></li><li></li>');
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

function openItem(i, item) {
 var product;
 if(item == 0) product = sabers[i];
 else product = blasters[i];
 $('#window').html('<div id="popup" onclick="exitItem()"><div id="item"><img src="'+product.imgsrc+'"/><div class="text"><h3 class="details">'+product.name+'</h3><h4 class="details">$'+product.price+'</h4></div></div></div>');
}

function exitItem() {
 $('#window').html('');
}

$(function () {
 setNav(1);
});