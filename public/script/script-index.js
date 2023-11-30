cardsIndex = document.querySelectorAll(".menu-defilant__card-conteneur__card");
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