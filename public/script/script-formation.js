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