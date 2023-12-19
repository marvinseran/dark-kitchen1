const collection = [
    {
        priceShow : "11 €",
        price: 11 ,
        name: "Pizza 4 Fromages",
        img: "img/pqf.jpg",
        genre: ["Pizza"],
        desc: "La pizza ai quattro formaggi est une variété de pizza de la cuisine italienne garnie d'une combinaison de quatre sortes de fromages, généralement fondus ensemble, avec ou sans sauce tomate.",
    },
    {
        priceShow : "12 €",
        price: 12,
        name: "Pizza Jambon",
        img: "img/pj.jpg",
        genre: ["Pizza"],
        desc: "C'est un classique des menus des pizzerias, sur une base jambon-fromage-champignons.",
    },
    {
        priceShow : "8 €",
        price: 8,
        name: "Pâtes Bolognaise",
        img: "img/ptbolo.jpg",
        genre: ["Pâtes"],
        desc: "Pâtes al dente accompagnées d'une sauce à la viande mijotée avec tomates, oignons et herbes.",
    },    
    {
        priceShow : "8 €",
        price: 8,
        name: "Pâtes Carbonara",
        img: "img/ptcar.jpg",
        genre: ["Pâtes"],
        desc: "Pâtes cuites avec une sauce crémeuse à base de pancetta, d'œufs, de fromage pecorino et de poivre noir.",
    },    
    {
        priceShow : "11 €",
        price: 11,
        name: "Pizza Napolitaine",
        img: "img/pnap.jpg",
        genre: ["Pizza", "Vegan"],
        desc: "Une délicieuse pizza à croûte fine, garnie de tomates San Marzano, de mozzarella de bufflonne, d'huile d'olive, de basilic frais.",
    },    
    {
        priceShow : "14 €",
        price: 14,
        name: "Lasagne à la Bolognaise",
        img: "img/lsbol.jpg",
        genre: ["Spécialité de la maison"],
        desc: "Fines feuilles de pâtes avec une sauce bolognaise à base de viande hachée, de tomates, d'oignons, d'ail, de béchamel et de fromage.",
    },    
    {
        priceShow : "15 €",
        price: 15,
        name: "Veau à l'italienne",
        img: "img/vit.webp",
        genre: ["Spécialité de la maison"],
        desc: "Un plat mettant en valeur des morceaux de veau tendres, des tomates, des herbes aromatiques et de l'ail.",
    },    
    {
        priceShow : "14 €",
        price: 14,
        name: "Canneloni à la Bolognaise",
        img: "img/canbol.jpg",
        genre: ["Spécialité de la maison"],
        desc: "Des tubes de pâtes remplis d'une délicieuse farce à la viande, souvent préparée avec une sauce bolognaise, du fromage ricotta ou béchamel.",
    },    
    {
        priceShow : "15 €",
        price: 15,
        name: "Arancini",
        img: "img/acini.jpg",
        genre: ["Entrée"],
        desc: "Des boules de riz cuites, généralement farcies avec du risotto, de la viande hachée, des petits pois, de la mozzarella, puis panées et frites.",
    },    
    {
        priceShow : "12 €",
        price: 12,
        name: "Pizza aux champignons",
        img: "img/pcha.jpg",
        genre: ["Pizza", "Vegan"],
        desc: "Une pizza garnie d'une sauce tomate ou crème fraîche, de mozzarella fondante, et de champignons tranchés.",
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

   section.classList.add('card')
    
    createCard(section, 'img', 'card__img', null, object.img, 'Image du plat')

    createCard(section, 'div', 'card__genre', object.genre.join(', '))
    
    createCard(section, 'div', 'card__name', object.name)
    
    createCard(section, 'div', 'card__priceShow', object.priceShow)

    createCard(section, 'div', 'card__desc', object.desc)


    
    if (index % 2 === 0){
        section1.appendChild(section);
 
    }
    else {
        section2.appendChild(section);

    }
});


// ---------------------------------------------------

//function panier (price) {

//}
