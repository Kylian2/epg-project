var map = L.map('map').setView([ 48.700001, 2.05], 13);
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

const informationsPratiques = {
    campus1 : {
        adresse: "Rue des Ecoles 25048 Saint-Etienne",
        tel : "+33 (0)4 76 93 00 00",
        mail : "campus1@formation-pro.fr",
        responsable : "Mme Marie Poulain",
        x : 48.700001, 
        y : 2.05
    },
    campus2 : {
        adresse: "Rue du Commerce 25048 Saint-Etienne",
        tel : "+33 (0)6 76 20 11 00",
        mail : "campus2@formation-pro.fr",
        responsable : "Mr Jean Pierre Dupont", 
        x : 68.720441, 
        y : -29.86084
    },
    campus3 : {
        adresse: "Rue des Marché 25048 Saint-Etienne",
        tel : "+33 (0)6 76 20 11 00",
        mail : "campus3@formation-pro.fr",
        responsable : "Mlle Sophie Martin", 
        x : 35.15753, 
        y : -115.116806
    }
}
campusBtn.forEach((btn) =>{
    btn.addEventListener('click',function(){
        var btnSelection = document.querySelector('.selectionne');
        btnSelection.classList.toggle('selectionne');
        this.classList.toggle('selectionne');
        var campus = this.getAttribute('value');
        adresse.textContent = informationsPratiques[campus]["adresse"];
        tel.textContent = informationsPratiques[campus]["tel"];
        mail.textContent = informationsPratiques[campus]["mail"];
        responsable.textContent = informationsPratiques[campus]["responsable"];
        var mapCoord = [];
        mapCoord.push(informationsPratiques[campus]["x"]);
        mapCoord.push(informationsPratiques[campus]["y"]);
        latitude.textContent = mapCoord[0];
        longitude.textContent = mapCoord[1];
        map.setView(mapCoord, 8);
        L.marker(mapCoord).addTo(map);
        console.log(campus);
    });
});