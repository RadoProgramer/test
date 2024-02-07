"use strict";

// let year = 2024;
// console.log(`Rok przed zmianą: ${year}`);
// year = 2020;
// console.log(`Rok po zmianie: ${year}`);

// const birthYear = 1999;
// console.log(`Rok przed zmianą: ${birthYear}`);
// birthYear = 2003;
// console.log(`Rok po zmianie: ${birthYear}`);

// Właściwość dla ciągu znaków "JavaScript is fun!" przechowująca jego długość
// console.log("JavaScript is fun!".length);

// number
// const theVariable = 1;
// const theOtherVariable = 1.45;

// string
// const DEFAULT_THEME = "light";

// boolean
// const IS_DEFAULT_THEME_LIGHT = true;

// null
// const currentTheme = null;

// undefined
// const nonExistent = undefined;

// const zero = 0;

// console.log(typeof zero);

// let num = 0;

// console.log(num);

// console.log(10 !== "10");

// console.log(!("5" == 6) || 11 == "10");

// console.log("PrzykłaD".startsWith("Pr"));

// function printManyLines() {
//     console.log("Line 01");
//     console.log("Line 02");
//     console.log("Line 03");
//     console.log("Line 04");
//     console.log("Line 05");
//     console.log("Line 06");
//     console.log("Line 07");
//     console.log("Line 08");
// }

// printManyLines();
// console.log("------przerwa------");
// printManyLines();

// const nan = Number("a;sdka;lskd;lkd"); // NaN
// const num = Number("123"); // 123

// console.log(Number.isNaN(num));

// const result = ((0.17 * 100) + (0.24 * 100)) / 100;
// const result = 0.17 + 0.24;

// console.log(Number(result.toFixed(2))); // toFixed zmienia typ wartości na string!

// console.log((Math.random() * (10 - 1) + 1));

// const min = 1;
// const max = 100;

// console.log((Math.random() * (max - min) + min));

// console.log("Ala ma kota".replace("Ala", "Ewa"));
// console.log("Ala ma kota. Ala jest szczęśliwa.".replaceAll("Ala", "Ewa"));

// pierwsza liczba to index a druga liczba po wycieciu index wycinamy "ma"
// console.log("Ala ma kota.".slice(4, 6));

// console.log("Test danych wyświetlanych w konsoli przeglądarki metodą log");
// console.info("Test danych wyświetlanych w konsoli przeglądarki metodą info");
// console.warn("Test danych wyświetlanych w konsoli przeglądarki metodą warn");
// console.error("Test danych wyświetlanych w konsoli przeglądarki      metodą error");

//window.alert("Test wyskakującego powiadomienia!");

//uzyskanie odpowiedzi najlepiej przypisac do zmiennej
//const response = window.confirm("Czy na pewno?");

// wartosci po przecinku traktuje oddzielnie
//console.log("Odpowiedz:", response);

//templejstring
//console.log(`Odpowiedz: ${response}`);

//Kontaminacja
//console.log("Odpowiedz:" + response);

// .prompt odpowiada za wprosadzanie danych
//const response = window.prompt("Wprowadź swoje imię");

//console.log("Odpowiedź: " + response);
// console.log(`Odpowiedź: ${response}`);
// console.log("Odpowiedź:", response, `(typ: ${typeof response})`);