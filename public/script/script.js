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

deplieBtn = document.querySelectorAll('.deplie-btn');
replieBtn = document.querySelectorAll('.replie-btn');

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
        console.log(moreInfo);
        console.log('click');
    });
});

//Code pour la page de contact, le composant qui permet de changer les coordonées

var campusBtn = document.querySelectorAll('.map-conteneur__header li');

var adresse = document.getElementById('adresse-conteneur');
var tel = document.getElementById('tel-conteneur');
var mail = document.getElementById('mail-conteneur');
var responsable = document.getElementById('responsable-conteneur');

const informationsPratiques = {
    campus1 : {
        adresse: "Rue des Ecoles 25048 Saint-Etienne",
        tel : "+33 (0)4 76 93 00 00",
        mail : "campus1@formation-pro.fr",
        responsable : "Mme Marie Poulain"
    },
    campus2 : {
        adresse: "Rue du Commerce 25048 Saint-Etienne",
        tel : "+33 (0)6 76 20 11 00",
        mail : "campus2@formation-pro.fr",
        responsable : "Mr Jean Pierre Dupont"
    },
    campus3 : {
        adresse: "Rue des Marché 25048 Saint-Etienne",
        tel : "+33 (0)6 76 20 11 00",
        mail : "campus3@formation-pro.fr",
        responsable : "Mlle Sophie Martin"
    }
}
campusBtn.forEach((btn) =>{
    btn.addEventListener('click',function(){
        var btnSelection = document.querySelector('.selectionne');
        btnSelection.classList.toggle('selectionne');
        this.classList.toggle('selectionne');
        adresse.textContent = informationsPratiques[this.getAttribute('value')]["adresse"];
        tel.textContent = informationsPratiques[this.getAttribute('value')]["tel"];
        mail.textContent = informationsPratiques[this.getAttribute('value')]["mail"];
        responsable.textContent = informationsPratiques[this.getAttribute('value')]["responsable"];
    });
});
