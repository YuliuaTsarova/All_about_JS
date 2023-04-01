/*** Преобразование типов (явное и неявное) ***/

/** Явное **/

/* строковое, численное, логическое String() */

const total = String(25);

console.log(total, typeof total);
console.log(total, typeof String(total));

/* строковое, численное, логическое Number() или + */

const lessons = '18';

console.log(lessons, typeof lessons);
console.log(lessons, typeof Number(lessons));
console.log(lessons, typeof +lessons);

/* строковое, численное, логическое Boolean() */

const userMessage = "Привет";
const userAge = 0;

console.log("userMessage", typeof userMessage);
console.log("userMessage", Boolean(userMessage));
console.log("userMessage", Boolean(userAge));


// значения 0, null, undefined, NaN, "" это всегда false

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(3));

/** неявное преобразование, приведение к одному типу (когда в выражениях есть разные типы данных) **/

console.log(12 / "6");
console.log('r5' + 2);
console.log("number" + 15 + 3);
console.log(15 + 3);
console.log('1' > 0);
console.log('100px' / 1); // NaN
console.log(true + false);  // в математических операциях логические значения вначале преобразуются к числу

// знаки равенства == и ===

console.log(5 == '5')
console.log(5 === '5')

console.log(5 !== '5')


// let a = '5' + '2';
// console.log(a);

// let b = 5 + '2';
// console.log(b);

// let b = '5' - '2';
// console.log(b);

// let n = '5' / '2';
// console.log(n);

// let f = '5' % '2';
// console.log(f);

// let f = '5s' + '2';
// console.log(f);

// let h = 2 + 3 + '1';
// alert(h);

// let m = '5' * '1' + '2' * '1';
// console.log(m);

//true + true
// console.log(w);


//let p = true + true
// console.log(p);

// let c = '1' + true
// console.log(c);

// Дана переменная a со значением '10' и переменная b со значением '20'.
// Сложите данные переменные как числа. (использую явное преобразование Number(), String())

// console.log(Number('2') + Number('3'));
// console.log('2' + Number('3'));


//Дана переменная с числом. Найдите количество цифр в этом числе.

// Даны две переменные с числами. 
// Найдите количество цифр в одном и во втором числе, результаты сложите и выведите на экран.


