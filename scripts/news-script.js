//// JavaScript source code
//const news = [{
//    name: 'Что смотреть в 2025 году: 50 самых ожидаемых зарубежных фильмов',
//    link: 'https://www.kinopoisk.ru/media/article/4010470/'
//},
//{
//    name: 'Все американские фильмы 2025 года',
//    link: 'https://kino.mail.ru/cinema/all/2025/usa/'
//},
//{
//    name: 'Премия Гильдии актеров — 2025: звезды на красной дорожке',
//    link: 'https://www.kinopoisk.ru/media/article/4010721/'
//},
//{
//    name: 'Российские актеры на «Оскаре 2025',
//    link: 'https://kino.mail.ru/news/82874-anoriki-pokorili-gollivud-luchshie-momentyi-s-rossijskimi-akterami-na-oskare/'
//},
//{
//    name: 'Два российских актера попали в лонг-лист британской кинопремии BAFTA',
//    link: 'https://www.gazeta.ru/culture/news/2025/01/03/24766490.shtml'
//},
//];

//function getLink(name, href) {
//    let li = document.createElement('li');

//    let a = document.createElement('a');
//    a.textContent = name;
//    a.setAttribute('href', href);

//    li.append(a);
//    return li;
//}
//function renderLinks(links, selector) {
//    let container = document.querySelector(selector);

//    links.forEach(link => {
//        const element = getLink(link.name, link.link);
//        container.append(element);
//    });
//}
//renderLinks(news, 'section.list-group');