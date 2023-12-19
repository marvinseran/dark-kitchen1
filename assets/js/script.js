const collection = [
    {
        name: "Pizza 4 Fromages",
        img: "assets/p4f.jpg",
        genre: ["Pizza"],
        desc: "La pizza ai quattro formaggi est une variété de pizza de la cuisine italienne garnie d'une combinaison de quatre sortes de fromages, généralement fondus ensemble, avec ou sans sauce tomate.",
    },
    {
        name: "Pizza Jambon",
        img: "assets/pj.jpg",
        genre: ["Pizza"],
        desc: "C'est un classique des menus des pizzerias, sur une base jambon-fromage-champignons. L'origine de cette pizza remonterait à Naples et au pizzaiolo Raffaele Esposito.",
    },
    {
        name: "Pâtes Bolognaise",
        img: "assets/ptbolo.jpg",
        genre: ["Pâtes"],
        desc: "Pâtes al dente accompagnées d'une sauce à la viande mijotée avec tomates, oignons et herbes.",
    },    {
        name: "Pâtes Carbonara",
        img: "assets/ptcar.jpg",
        genre: ["Pâtes"],
        desc: "Pâtes cuites avec une sauce crémeuse à base de pancetta, d'œufs, de fromage pecorino et de poivre noir.",
    },    {
        name: "Pizza Napolitaine",
        img: "assets/pnap.jpg",
        genre: ["Pizza", "Vegan"],
        desc: "Une délicieuse pizza à croûte fine, garnie de tomates San Marzano, de mozzarella de bufflonne, d'huile d'olive, de basilic frais et cuite à haute température pour une saveur authentique.",
    },    {
        name: "Lasagne à la Bolognaise",
        img: "assets/lsbol.jpg",
        genre: ["Spécialité de la maison"],
        desc: "Fines feuilles de pâtes superposées, alternant avec une sauce bolognaise généreuse à base de viande hachée, de tomates, d'oignons, d'ail, de béchamel et de fromage, le tout gratiné au four pour une texture onctueuse et savoureuse.",
    },    {
        name: "Veau à l'italienne",
        img: "assets/vit.jpg",
        genre: ["Spécialité de la maison"],
        desc: "Un plat mettant en valeur des morceaux de veau tendres, souvent préparés avec une combinaison d'ingrédients italiens tels que des tomates, des herbes aromatiques, de l'ail, parfois du vin blanc ou du vinaigre balsamique, créant ainsi une cuisine savoureuse et parfumée typique de l'Italie.",
    },    {
        name: "Canneloni à la Bolognaise",
        img: "assets/canbol.jpg",
        genre: ["Spécialité de la maison"],
        desc: "Des tubes de pâtes remplis d'une délicieuse farce à la viande, souvent préparée avec une sauce bolognaise, du fromage ricotta ou béchamel, le tout cuit au four pour obtenir des rouleaux de pâtes gratinés et savoureux.",
    },    {
        name: "Arancini",
        img: "assets/acini.jpg",
        genre: ["Entrée"],
        desc: "Des boules de riz cuites, généralement farcies avec du risotto, de la viande hachée, des petits pois, de la mozzarella, puis panées et frites. Ce plat italien est apprécié pour sa texture croustillante à l'extérieur et son cœur moelleux et savoureux.",
    },    {
        name: "Pizza aux champignons",
        img: "assets/pcha.jpg",
        genre: ["Pizza", "Vegan"],
        desc: "Une pizza garnie d'une sauce tomate ou crème fraîche, de mozzarella fondante, et de champignons tranchés, créant une combinaison délicieuse entre la richesse des champignons et le fondant du fromage, cuite à perfection pour une expérience gustative équilibrée.",
    }
]

    
var section1 = document.querySelector('.box1');
var section2 = document.querySelector('.box2');

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

    createCard(section, 'div', 'card__desc', object.desc)
    
    if (index % 2 === 0){
        section1.appendChild(section);
    }
    else {
        section2.appendChild(section);
    }
});
