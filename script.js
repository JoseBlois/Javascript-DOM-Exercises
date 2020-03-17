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