const body = document.body;

const hamburgers = document.querySelectorAll('.hamburger');
const menu = document.getElementById('hamburger-navigation');

hamburgers.forEach((hamburger) => {
    hamburger.addEventListener("click", function () {
        menu.classList.toggle('inactif');
        body.classList.toggle("stop");
        console.log('click');
    });
});
// Javascript pour les pages des formations

deplieBtn = document.querySelectorAll('.deplie-btn');
replieBtn = document.querySelectorAll('.replie-btn');

epreuveBtn = document.querySelectorAll('.more');

moi = document.querySelectorAll('.moi');

var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
document.documentElement.style.setProperty('--main-bg-color', randomColor);

moi.forEach((btn) => {
    btn.addEventListener('mouseover', function(){
        var randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
        document.documentElement.style.setProperty('--main-bg-color', randomColor);
    });
});