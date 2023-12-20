const collection = [
    {
        priceShow : "11 €",
        price: 11 ,
        name: "Pizza 4 Fromages",
        img: "img/pqf.jpg",
        genre: "pizza",
        desc: "La pizza ai quattro formaggi est garnie d'une combinaison de quatre sortes de fromages, généralement fondus ensemble, avec ou sans sauce tomate.",
    },
    {
        priceShow : "12 €",
        price: 12,
        name: "Pizza Jambon",
        img: "img/pj.jpg",
        genre: "pizza",
        desc: "C'est un classique des menus des pizzerias, sur une base jambon-fromage-champignons.",
    },
    {
        priceShow : "8 €",
        price: 8,
        name: "Pâtes Bolognaise",
        img: "img/ptbolo.jpg",
        genre: "pates",
        desc: "Pâtes al dente accompagnées d'une sauce à la viande mijotée avec tomates, oignons et herbes.",
    },    
    {
        priceShow : "8 €",
        price: 8,
        name: "Pâtes Carbonara",
        img: "img/ptcar.jpg",
        genre: "pates",
        desc: "Pâtes cuites avec une sauce crémeuse à base de pancetta, d'œufs, de fromage pecorino et de poivre noir.",
    },    
    {
        priceShow : "11 €",
        price: 11,
        name: "Pizza Napolitaine",
        img: "img/pnap.jpg",
        genre: "pizza",
        desc: "Une délicieuse pizza à croûte fine, garnie de tomates San Marzano, de mozzarella de bufflonne, d'huile d'olive, de basilic frais.",
    },    
    {
        priceShow : "14 €",
        price: 14,
        name: "Lasagne Bolognaise",
        img: "img/lsbol.jpg",
        genre: "specialite de la maison",
        desc: "Fines feuilles de pâtes avec une sauce bolognaise à base de viande hachée, de tomates, d'oignons, d'ail, de béchamel et de fromage.",
    },    
    {
        priceShow : "15 €",
        price: 15,
        name: "Veau à l'italienne",
        img: "img/vit.webp",
        genre: "specialite de la maison",
        desc: "Un plat mettant en valeur des morceaux de veau tendres, des tomates, des herbes aromatiques et de l'ail.",
    },    
    {
        priceShow : "14 €",
        price: 14,
        name: "Canneloni Bolognaise",
        img: "img/canbol.jpg",
        genre: "specialite de la maison",
        desc: "Des tubes de pâtes remplis d'une délicieuse farce à la viande, souvent préparée avec une sauce bolognaise, du fromage ricotta ou béchamel.",
    },    
    {
        priceShow : "15 €",
        price: 15,
        name: "Arancini",
        img: "img/acini.jpg",
        genre: "entree",
        desc: "Des boules de riz cuites, généralement farcies avec du risotto, de la viande hachée, des petits pois, de la mozzarella, puis panées et frites.",
    },    
    {
        priceShow : "7 €",
        price: 7,
        name: "Bruschetta",
        img: "img/bruschetta.jpg",
        genre: "entree",
        desc: "La bruschetta à l'italienne est composée de tranches de pain grillé frottées à l'ail, garnies de tomates fraîches avec d'huile d'olive extra vierge.",
    }
];

    
let section1 = document.querySelector('.box1');
console.log(section1);
let section2 = document.querySelector('.box2');
console.log(section2);

function createCard (parent, elementType, className, textContent, src, alt){
    let element = document.createElement(elementType);

    if (className){
        element.classList.add(className)
    }
    if (textContent){
        element.textContent = textContent
    }
    if (src){
        element.setAttribute('src', src)
    }
    if (alt){
        element.setAttribute('alt', alt)
    }
    parent.appendChild(element)
    
}

collection.forEach(function(object, index) {
    let section = document.createElement('section');
    section.classList.add('card');

    createCard(section, 'img', 'card__img', null, object.img, 'Image du plat');
    createCard(section, 'div', 'card__genre', object.genre);
    createCard(section, 'div', 'card__name', object.name);
    createCard(section, 'div', 'card__priceShow', object.priceShow);
    createCard(section, 'div', 'card__desc', object.desc);
    createCard(section, 'button', 'card__button', "Ajouter à la commande");

    section.setAttribute('data-genre', object.genre);

    section1.appendChild(section);
});

// -------------------Filtre---------------------


const filterButtons = document.querySelectorAll('button[id^="filter"]');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        const selectedGenre = button.id.replace('filter', '').toLowerCase();
        filterPlats(selectedGenre);
    });
});

function filterPlats(genre) {
    const allCards = document.querySelectorAll('.card');
    
    allCards.forEach(card => {
        const cardGenres = card.getAttribute('data-genre');
        
        if (cardGenres.includes(genre) || genre === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

const filterAllButton = document.getElementById('filterAll');

filterAllButton.addEventListener('click', function () {
    filterPlats('all');
});

// -------------------Panier---------------------
let panier = [];

let cartButton = document.querySelector("#cart-button");
let cardButtons = document.querySelectorAll(".card__button");

cardButtons.forEach(function(cardButton, index) {
    cardButton.addEventListener("click", function() {
        addCart(collection[index]);
        openCart();
    });
});

function addCart(item) {
    panier.push({ name: item.name, priceShow: item.priceShow, price: item.price });
}

function openCart() {
    let cartContent = document.querySelector(".contentCart");
    cartContent.innerHTML = ""; // Efface le contenu existant

    let total = calculateTotal();

    let header = document.createElement("h1");
    header.textContent = "Articles dans votre panier:";
    cartContent.appendChild(header);

    panier.forEach(item => {
        let paragraph = document.createElement("p");
        paragraph.textContent = `${item.name} - ${item.priceShow}`;
        cartContent.appendChild(paragraph);
    });

    let totalParagraph = document.createElement("p");
    totalParagraph.textContent = `Total : ${total} €`;
    cartContent.appendChild(totalParagraph);
}

function resetCart() {
    panier = [];
    openCart(); 
}

function calculateTotal() {
    let total = 0;
    panier.forEach(item => {
        total += item.price;
    });
    return total;
}

function togglePopup() {
    let popup = document.querySelector(".popup");
    popup.classList.toggle("open");
}
// ------------dark mode--------

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const navbar = document.querySelector('.navbar');
    const main = document.querySelector('main');
    const footer = document.querySelector('.footer');

    function toggleDarkMode() {
        navbar.classList.toggle('dark-navbar');
        main.classList.toggle('dark-mode');
        footer.classList.toggle('dark-footer');

        
        
        const cardElements = document.querySelectorAll('.card');

        cardElements.forEach(card => {
            card.classList.toggle('dark-card');

            const cardTexts = card.querySelectorAll('.card__genre, .card__name, .card__desc');

            cardTexts.forEach(textElement => {
                textElement.classList.toggle('dark-mode-text');
            });

            const cardButton = card.querySelector('.card__button');

            if (cardButton) {
                cardButton.classList.toggle('dark-mode-button'); 
            }
        });
    }

    darkModeToggle.addEventListener('change', toggleDarkMode);
});

