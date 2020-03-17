// Exercise number 1
var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[0]);
// Exercise number 2
var nav_bar = document.getElementById('nav-bar');
console.log(nav_bar);
// Exercise number 3
var blacked = document.getElementsByClassName('black');
for (let i = 0; i < blacked.length; i++) {
    element = blacked[i];
    element.style.display = 'inline-block';
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.background = '#00FF00';
}
// Exercise number 4
var footer = document.getElementById('footer');
var black1 = footer.getElementsByClassName('black');
for (let i = 0; i < black1.length; i++) {
    element = black1[i];
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.background = '#00AA00';
}
// Exercise number 5
var Showids = function(array){
    for (let i = 0; i < array.length; i++) {
        var element = array[i];
        console.log(element.id);
    }
}
var divs = document.getElementsByTagName('div');
Showids(divs);
// Exercise number 6
var Showsrc = function(array){
    for (let i = 0; i < array.length; i++) {
        var element = array[i];
        console.log(element.src);
    }
}
var img_containers = document.getElementsByClassName('images');
console.log(img_containers);
for (let idx = 0; idx < img_containers.length; idx++) {
    var container = img_containers[idx];
    var elements = container.getElementsByTagName('img');
    Showsrc(elements);
}
// Exercise number 7
 for (let index = 0; index < divs.length; index++) {
    var div = divs[index] ;
    if (div.className === 'images'){
        var $imgs = div.getElementsByTagName('img');
        Showsrc($imgs);
    }
 }
 // Exercide number 8
 var $paragraphs = document.getElementsByTagName('p');
 console.table($paragraphs);
 for (let _idx = 0; _idx < $paragraphs.length; _idx++) {
    var button = document.createElement('button');
    var content = document.createTextNode('button '+(_idx+1));
    button.appendChild(content);
     var aux = $paragraphs[_idx];
     aux.appendChild(button);
 }