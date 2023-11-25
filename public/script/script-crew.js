const texteSerin = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et ex diam. Vestibulum condimentum elit eget feugiat auctor. Sed et purus mi. Fusce at tempor sapien, a luctus tortor. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In et tempus dui, in vestibulum purus. Vestibulum eleifend turpis justo, ut viverra felis pharetra vel. Vivamus faucibus in sapien eu fermentum. Donec mollis tempus efficitur. Quisque.";
const texteTurner = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis risus sit amet nisl euismod, at tincidunt turpis congue. Ut et imperdiet sem. Nullam placerat nunc at varius dapibus. Suspendisse vulputate, mi id hendrerit tristique, dolor enim vestibulum felis, nec aliquet quam odio at tellus. Aenean placerat consectetur feugiat. Nam augue sapien, elementum sed ullamcorper sed, molestie vitae ex. Praesent pharetra ornare lectus, blandit hendrerit neque pulvinar ut. Nulla id.";
const texteLewis = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam nunc, interdum a mollis vel, vulputate a eros. Proin porta fermentum justo, at dapibus quam placerat nec. Integer sed dapibus risus. Curabitur at odio purus. Curabitur fringilla sem et eleifend ultrices. Proin id lorem rutrum, consectetur purus id, congue mauris. Nulla in elementum purus. In neque sem, bibendum auctor tellus eget, ultrices posuere sapien. Class aptent taciti sociosqu ad litora.";
const texteWright = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor varius nisi at placerat. Morbi quis ligula quis neque porta fermentum. Nulla sed vehicula metus. Proin tortor augue, gravida malesuada pellentesque quis, dictum at turpis. Etiam et lorem orci. Cras vehicula magna id tortor accumsan, id consequat elit aliquam. Sed vulputate vel quam eu varius. Fusce auctor efficitur dolor non lacinia. In hac habitasse platea dictumst. Vivamus pulvinar a libero.";
const texteVadersith = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt nulla non efficitur elementum. Morbi placerat at odio at elementum. Aliquam ut magna nulla. Integer porttitor lorem vel metus imperdiet rutrum. Phasellus gravida imperdiet urna, nec pulvinar mi gravida et. Nulla lobortis et tortor id iaculis. Nullam nec lectus vel lectus tempus fermentum ut rutrum purus. Morbi suscipit suscipit purus quis scelerisque.";

const professeursInformations = {
    serin : {
        nom : "Talia Serin",
        poste : "Responsable Chimiste", 
        description : texteSerin,
        image : "public/img/crew/talia-serin.png"
    },
    turner : {
        nom : "Nicolas Turner",
        poste : "Biologist", 
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
        poste : "Chief Ingenier", 
        description : texteWright,
        image : "public/img/crew/andrew-wright.png"
    },
    vadersith : {
        nom : "Josh Vadersith",
        poste : "Commandant d'armée", 
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