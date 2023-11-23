const body = document.body;
let cardsIndex = document.querySelectorAll(".menu-defilant__card-conteneur__card");
//querySelectorAll car il faut un tableau pour utliser la méthode forEach
//getElementsByClassName renvoie une collection HTML

cardsIndex.forEach((card) => {
    card.addEventListener("click", function () {
        let bigCard = document.querySelector(".card-devellope");
        bigCard.classList.remove("card-devellope");
        bigCard.classList.add('card-petite');
        console.log(bigCard);
        this.classList.add("card-devellope");
        this.classList.remove("card-petite");
    });
});

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

deplieBtn.forEach((btn) =>{
    btn.addEventListener('click',function(){
        let cardContainer = btn.closest('.formations-conteneur__card');
        let moreInfo = cardContainer.querySelector('.formations-conteneur__card__more-informations');
        this.classList.toggle('inactif');
        moreInfo.classList.toggle('inactif');
        console.log(moreInfo);
        console.log('click');
    });
});

replieBtn.forEach((btn) =>{
    btn.addEventListener('click',function(){
        let cardContainer = btn.closest('.formations-conteneur__card');
        let moreInfo = cardContainer.querySelector('.formations-conteneur__card__more-informations');
        moreInfo.classList.toggle('inactif');
        let deplieBtnLocal = cardContainer.querySelector('.deplie-btn');
        deplieBtnLocal.classList.toggle('inactif');
    });
});

epreuveBtn.forEach((btn) => {
    btn.addEventListener('click', function(){
        btn.closest('.epreuves-containeurs__epreuves').querySelector('.epreuves-containeurs__epreuves__informations').classList.toggle('inactif');
    });
});