var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs[0]);
var nav_bar = document.getElementById('nav-bar');
console.log(nav_bar);
var blacked = document.getElementsByClassName('black');
for (let i = 0; i < blacked.length; i++) {
    element = blacked[i];
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.background = '#00FF00';
}
var footer = document.getElementById('footer');
var black1 = footer.getElementsByClassName('black');
for (let i = 0; i < black1.length; i++) {
    element = black1[i];
    element.style.width = '100px';
    element.style.height = '100px';
    element.style.background = '#00AA00';
}
var Showids = function(array){
    for (let i = 0; i < array.length; i++) {
        var element = array[i];
        console.log(element.id);
    }
}
var divs = document.getElementsByTagName('div');
Showids(divs);
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