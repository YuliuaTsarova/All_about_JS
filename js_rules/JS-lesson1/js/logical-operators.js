// В JavaScript есть четыре логических оператора: || (ИЛИ), && (И), ! (НЕ)

/** ИЛИ "||" находит первое истинное значение или последнее, если такое значение не найдено.**/

console.log(0 || 1);

let currentUser = null;
let defaultUser = "John";

console.log(currentUser || 0 || null);


/** И "&&" возвращает первое ложное значение. Или последнее, если ничего не найдено **/


console.log(1 && 0);
console.log(1 && 5);
console.log(1 && 2 && null && 3);
(5 > 0) && console.log('Greater than zero!');


/** НЕ "!" возвращает противоположное значение **/

console.log(!true);
console.log(!0);
console.log(!!"non-empty string");
console.log(!!null);
