const texteSerin = "Talia Serin, biologiste chevronnée, a mené des expéditions pionnières sur des planètes jadis considérées comme inhospitalières. Elle a découvert et classifié de nouvelles formes de vie extraterrestre, contribuant ainsi à élargir notre compréhension de la diversité biologique dans la galaxie. Ses travaux ont été publiés dans plusieurs revues scientifiques renommées, faisant d'elle une référence incontournable dans le domaine.";
const texteTurner = "Nicolas Turner, chimiste émérite, a dirigé des équipes de recherche novatrices travaillant sur la synthèse de composés chimiques spécifiques à l'espace. Ses contributions ont conduit au développement de matériaux révolutionnaires utilisés dans la fabrication de vaisseaux spatiaux et de systèmes de propulsion avancés. Son expertise a été sollicitée dans des missions interstellaires, élevant ainsi la chimie à de nouvelles hauteurs.";
const texteLewis = "Henry Lewis, ancien sénateur respecté, a joué un rôle crucial dans la négociation de traités intergalactiques visant à renforcer la coopération entre différentes civilisations. Ses talents diplomatiques ont contribué à apaiser des tensions potentielles et à favoriser des relations pacifiques entre les mondes. Il a été honoré par plusieurs distinctions pour son engagement en faveur de la paix et de la stabilité dans la République.";
const texteWright = "Andrew Wright, ingénieur de renom, a dirigé des équipes d'ingénierie ayant développé des technologies révolutionnaires, notamment des systèmes de propulsion à énergie renouvelable pour les voyages interstellaires. Ses innovations ont contribué à repousser les limites de l'exploration spatiale en rendant les voyages plus rapides et plus durables. Il a été lauréat de plusieurs prix pour ses contributions exceptionnelles à l'ingénierie.";
const texteVadersith = "Josh Vadersith, commandant expérimenté, a dirigé des opérations militaires cruciales pour la sécurité de la galaxie. Son leadership éclairé a permis de repousser de nombreuse menaces et de prévenir des conflits majeurs. Ses tactiques novatrices et son engagement envers la protection des citoyens ont fait de lui un héros militaire reconnu à travers la République.";

const professeursInformations = {
    serin : {
        nom : "Talia Serin",
        poste : "Biologiste", 
        description : texteSerin,
        image : "public/img/crew/talia-serin.png"
    },
    turner : {
        nom : "Nicolas Turner",
        poste : "Responsable Chimiste", 
        description : texteTurner,
        image : "public/img/crew/nicolas-turner.png"
    },
    lewis : {
        nom : "Henry Lewis",
        poste : "Senateur", 
        description : texteLewis,
        image : "public/img/crew/henry-lewis.png"
    },
    wright : {
        nom : "Andrew Wright",
        poste : "Ingenieur", 
        description : texteWright,
        image : "public/img/crew/andrew-wright.png"
    },
    vadersith : {
        nom : "Josh Vadersith",
        poste : "Commandant", 
        description : texteVadersith,
        image : "public/img/crew/josh-vadersith.png"
    }
}

const boule = document.querySelectorAll('.boule');
const posteConteneur = document.getElementById('poste-conteneur');
const nomConteneur = document.getElementById('nom-conteneur');
const descrConteneur = document.getElementById('description-conteneur');
const imgConteneur = document.getElementById('image-conteneur');

boule.forEach(boule => {
    boule.addEventListener('click', function(){
        var bouleHighlight = document.querySelector('.highlight');
        bouleHighlight.classList.toggle('highlight');
        this.classList.toggle('highlight');
        var prof = this.getAttribute('id')
        console.log(prof);
        console.log(professeursInformations[prof]);
        posteConteneur.textContent = professeursInformations[prof]['poste'];
        nomConteneur.textContent = professeursInformations[prof]['nom'];
        descrConteneur.textContent = professeursInformations[prof]['description'];
        imgConteneur.setAttribute('src',professeursInformations[prof]['image']);
    }); 
});