menu_list_array = ["Veg Margherita Pizza", "Chicken Tandoori Pizza", "Veg Supreme Pizza", "Paneer Tikka Pizza", "Deluxe Veg Pizza", "Veg Extravaganza Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class=menu_list_array>"
menu_list_array.sort();
for(var i=0<menu_list_array;i++){
    htmldata=htmldata+ "<li>" + menu_list_array; + "</li>"
}
htmldata=htmldata="</ol>"
document.getElementById("diaplay_name").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.puch(item);
menu_list_array.sort();
htmldata=<section class="cards">
for(var i=0<menu_list_array;i++){
 htmldata=htmldata=<div class="card">
     <img src="pizza.Img.png"></img>
     menu_list_array[i]
    </div>
}
function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.puch(item);
    add_item();
}