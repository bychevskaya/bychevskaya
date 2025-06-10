// JavaScript source code
"use strict";

//const links = [
//    {
//        name: 'Главная',
//        link: './index.html'
//    },
//    {
//        name: 'Категории(+выпадающее меню)',
//        link: './categories.html'
//    },
//    {
//        name: 'Лучшие фильмы',
//        link: './best-films.html'
//    }
//];

const contactLinks = [{
    name: 'Гитхаб',
    link: 'https://github.com/bychevskaya'
},
{
    name: 'Телеграм',
    link: 'https://web.telegram.org/a/'
},
{
    name: 'ВК',
    link: 'https://vk.com/al_im.php?peers=410012921'
},
];
function getLink(name, href) {
    let li = document.createElement('li');

    let a = document.createElement('a');
    a.textContent = name;
    a.setAttribute('href', href);

    li.append(a);
    return li;
}
function renderLinks(links, selector) {
    let container = document.querySelector(selector);

    links.forEach(link => {
        const element = getLink(link.name, link.link);
        container.append(element);
    });

}

//renderLinks(links, 'ul.navigation');
renderLinks(contactLinks, 'ol.navigation');


//let navbar = document.querySelector('.navigation');
//navbar.innerHTML = `
//<li><a href="./categories.html">Категории(+выпадающее меню)</a></li>
//                <li><a href="./best-films.html">Лучшие фильмы</a></li>`;
