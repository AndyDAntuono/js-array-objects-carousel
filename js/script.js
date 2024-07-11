const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//recupero l'lelemento del dom che contiene le immagini
let container = document.getElementById('carousel-container')

//utilizzando un ciclo for each, ciclo l'array images per creare gli espositori delle immagini
images.forEach((elem) => {
    container.innerHTML += `
    <div class="card d-none">
                    <img id="largeImage" src="${elem.image}" alt="">
                    <h5 class="card-title">${elem.title}</h5>
                    <p class="card-text">${elem.text}</p>
                </div>`
})

//definisco, l'indice dell'elemento che voglio rendere invisibie
let activeCard = 0;

//recupero tutti gli elementi che hanno la classe .card
const cards = document.querySelectorAll('.card');

//prendo il primo elemento dell'array cards e gli tolgo la classe d-none
cards[activeCard].classList.remove('d-none')