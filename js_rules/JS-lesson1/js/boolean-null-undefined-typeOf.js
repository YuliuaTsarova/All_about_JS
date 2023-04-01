/***  Булевый логический тип ***/

//Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь).

const nameFieldChecked = true;
const ageFieldChecked = false;

const isGreater = 4 < 1;

console.log(nameFieldChecked);
console.log(ageFieldChecked);
console.log(isGreater);

/***  Значение «null» ***/

// Это просто специальное значение, которое представляет собой «ничего», 
//  «пусто» или «значение неизвестно»

let age = null;

console.log(age);


/***  Значение «undefined» ***/

// означает, что значение не было присвоено

let name;

console.log(name);

/*** Оператор typeof ***/

const country = "Minsk"
const countryAge = 135

console.log(typeof country);
console.log(typeof (countryAge));
console.log(typeof "City")
console.log(typeof null) // ошибка в javascript