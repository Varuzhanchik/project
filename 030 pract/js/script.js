/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const comercy = document.querySelectorAll('.promo__adv img');
comercy.forEach(item =>{
    item.remove();
});

let genre = document.querySelector('.promo__genre');
genre.textContent = 'драма';
const bg = document.querySelector('.promo__bg');
bg.style.backgroundImage = 'url("img/bg.jpg")';
console.dir(bg);

/*let interactive = document.querySelectorAll('.promo__interactive-item');

interactive.forEach((item, i) =>{
    item.textContent = `${i+1}-${movieDB.movies[i]}`;
});*/
let interactive = document.querySelector('.promo__interactive-list');

interactive.innerHTML='';
movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    interactive.innerHTML += `<li class="promo__interactive-item">${i+1}-${item}
                            <div class="delete"></div>
                        </li>`;
});
