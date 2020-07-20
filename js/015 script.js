"use strict";
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "введите число");

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms+1,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
console.log(personalMovieDB);
for (let i = 0; i < 2; i++) {

    let mov = prompt("Один из последних просмотренных фильмов?", "");
    let movChenge = prompt("На сколько оцените его?", "");
    if (mov == "" || mov.length > 50 || movChenge == "" || movChenge.length > 50) {
        i--;
    }
    else{
        personalMovieDB.movies[mov] = movChenge;
    };

    
    
    console.log(i);

     
}
let personalChenge= "";
if (personalMovieDB.count <9 ) {
    personalChenge = "Просмотрено довольно мало фильмов";
} else {
    if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        personalChenge = "Вы классический зритель";
    } else {
        if (personalMovieDB.count >= 30) {
            personalChenge = "Вы киноман";
        } else {
            personalChenge = "Ошибка";
        }
    }
}

console.log(personalMovieDB["movies"]);
console.log(personalChenge);

