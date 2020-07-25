"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "введите число");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "введите число");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {

            let mov = prompt("Один из последних просмотренных фильмов?", "");
            let movChenge = prompt("На сколько оцените его?", "");
            if (mov == "" || mov.length > 50 || movChenge == "" || movChenge.length > 50) {
                i--;
            } else {
                personalMovieDB.movies[mov] = movChenge;
            }



            console.log(i);


        }
    },
    detectPersonalLevel:function() {
        let personalChenge;
        if (personalMovieDB.count < 9) {
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
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log("good");
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else{
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let index = 1; index < 4; index++) {
            let genre = prompt("Ваш любимый жанр под номером " + index);

            if (genre == ''|| genre == null) {
                console.log('вы ввели неправильно');
                index--;
            } else{
                personalMovieDB.genres.push(genre);
            }

        };
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }

};


console.log(personalMovieDB);