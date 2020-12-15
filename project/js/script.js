/* 
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

let moviesList = document.querySelector('.promo__interactive-list');
let addForm = document.querySelector('form.add');
let addInput = addForm.querySelector('.adding__input');
let addCheckbox = addForm.querySelector('[type="checkbox"]');




const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "AЛа-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
	
	movieDB.movies.sort();

function start(){
	movieDB.movies.sort();
	moviesList.innerHTML='';

movieDB.movies.forEach((item, i) =>{
	moviesList.innerHTML += `<li class="promo__interactive-item">${i+1}  ${item}
                            <div class="delete"></div>
                        </li>`
});
mov();
};

start();



function mov(){
	let btn = document.querySelector('button');
	btn.addEventListener('click', (e) =>{
		e.preventDefault();
		let addVol = addInput.value;
		if (addVol) {
			if (addVol.length > 21) {
				addVol = addVol.substring(0 , 21)+ "...";
			};
			console.log(addVol);
			movieDB.movies.push(addVol);
			start();
			console.log(movieDB.movies);
			if (addCheckbox.checked) {
				console.log(`Добавляем любимый фильм ${addInput.value}`)
			};
			console.log(addCheckbox.checked);
			addForm.reset();
		};
		
	});

	let del = document.querySelectorAll('.delete');
	del.forEach((film, y) =>{
		film.addEventListener('click', () =>{
			film.parentElement.remove();
			movieDB.movies.splice(y, 1);
			start();
		});
	});
};


