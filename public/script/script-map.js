var map = L.map('map').setView([ 48.700001, 2.05], 8);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker([ 48.700001, 2.05]).addTo(map);

var campusBtn = document.querySelectorAll('.map-conteneur__header li');

var adresse = document.getElementById('adresse-conteneur');
var tel = document.getElementById('tel-conteneur');
var mail = document.getElementById('mail-conteneur');
var responsable = document.getElementById('responsable-conteneur');
var latitude = document.getElementById('latitude-conteneur');
var longitude = document.getElementById('longitude-conteneur');
var horaire = document.getElementById('horaire-conteneur');
var fuseau = document.getElementById('fuseau-conteneur');

const informationsPratiques = {
    dassault : {
        adresse: "Avenue Armstrong, 123, Lune",
        tel: "+123 646 355",
        mail: "contact.dassault@epg.edu",
        responsable: "Dr. Marx Klombo",
        horaire: "Lundi au vendredi, 8h00 - 17h00",
        fuseau: "CUT -1:00 (Coordinated Universal Time)",
        x : 35.15753, 
        y : -115.116806
    },
    copernic : {
        adresse: "Cratère Nebula, 456, Mars",
        tel: "+987 654 321",
        mail: "contact.copernic@epg.edu",
        responsable: "Mme Stella Luminara",
        horaire: "Lundi au vendredi, 9h00 - 18h00",
        fuseau: "CUT +12:00 (Coordinated Universal Time)",
        x : 68.720441, 
        y : -29.86084
    },
    darwin : {
        adresse: "Vallée Colomb, 789, Terre",
        tel: "+345 678 901",
        mail: "contact.darwin@epg.edu",
        responsable: "Mr Josh Dupuis",
        horaire: "Lundi au vendredi, 8h00 - 20h00",
        fuseau: "CUT +3:00 (Coordinated Universal Time)", 
        x : 48.700001, 
        y : 2.05
    }
}
campusBtn.forEach((btn) =>{
    btn.addEventListener('click',function(){
        var btnSelection = document.querySelector('.selectionne');
        btnSelection.classList.toggle('selectionne');
        this.classList.toggle('selectionne');
        var campus = this.getAttribute('id');
        adresse.textContent = informationsPratiques[campus]["adresse"];
        tel.textContent = informationsPratiques[campus]["tel"];
        mail.textContent = informationsPratiques[campus]["mail"];
        responsable.textContent = informationsPratiques[campus]["responsable"];
        horaire.textContent = informationsPratiques[campus]["horaire"];
        fuseau.textContent = informationsPratiques[campus]["fuseau"];
        var mapCoord = [];
        mapCoord.push(informationsPratiques[campus]["x"]);
        mapCoord.push(informationsPratiques[campus]["y"]);
        latitude.textContent = mapCoord[0];
        longitude.textContent = mapCoord[1];
        map.setView(mapCoord, 8);
        L.marker(mapCoord).addTo(map);
    });
});