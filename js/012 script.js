"use strict";
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "введите число");

console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};
console.log(personalMovieDB);

let mov = prompt("Один из последних просмотренных фильмов?", "" );
let movChenge = prompt("На сколько оцените его?", "");
let mov1 = prompt("Один из последних просмотренных фильмов?", "");
let movChenge1 = prompt("На сколько оцените его?", "");
personalMovieDB.movies[mov] = movChenge;
personalMovieDB.movies[mov1] = movChenge1;
console.log(personalMovieDB["movies"]);

/*
3) Задайте пользователю по два раза вопросы:
    -'Один из последних просмотренных фильмов?' -
    'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }*/