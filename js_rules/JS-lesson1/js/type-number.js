/*** number ***/

const digit = 123;   //целое число
const digitFloat = 12.345;   //число с плавающей точкой
const bigInt = 1234567890123456789012345678901234567890n;
// Символ "n" в конце означает, что это BigInt
// В JavaScript тип number не может безопасно работать с числами, большими, чем (2 в 53 степени-1) 
// (т. е. 9007199254740991) или меньшими, чем -(2 в 53 степени-1) для отрицательных чисел.


console.log(digit);
console.log(digitFloat);
console.log(bigInt);

/** В JavaScript нет возможности для хранения точных
 значений 0.1 или 0.2, используя двоичную систему,
 точно также, как нет возможности хранить одну третью
 в десятичной системе счисления. **/

const count = 0.1 + 0.2

console.log(count);
console.log(count.toFixed(4));


/*** числовые значения ***/

const eternal = Infinity;   // или 1/0
const mathError = "не число" / 2;   // NaN


console.log(eternal);
console.log(mathError);

/** Округление **/

const roundOff = 3.2345;

console.log(Math.floor(roundOff));  // Округление в меньшую сторону
console.log(Math.ceil(roundOff));   // Округление в большую сторону
console.log(Math.round(roundOff));  // Округление до ближайшего целого
console.log(roundOff.toFixed(2));  // Округление до n-ого количества цифр в дробной части

// метод toFixed() возвращает строку, можем преобразовать +num.toFixed(5) или Number()

// console.log(Math.random());  // Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)


/** Преобразование к числу **/

const convert = '100px';
const convertFloat = '12.5em'
const convertError = 'a12'

console.log(parseInt(convert)); // читает число из строки
console.log(parseFloat(convertFloat)); // читает число из строки и возвращает число с плавающей точкой
console.log(parseInt(convertError)); // Функции parseInt/parseFloat вернут NaN, если не смогли прочитать ни одну цифру


// Дана переменная со значением '5px' и переменная со значением '6px'.
//  Найдите сумму пикселей из значений этих переменных и выведите ее на экран.

const convert1 = "5px";
const convert2 = "6px";
const result = parseInt(convert1) + parseInt(convert2)

console.log(result);


// Модифицируйте предыдущую задачу так, чтобы к выводящемуся результату добавлялись буквы 'px'.
// То есть, если наша сумма равна 11.75, то на экран пусть выведется '11.75px'.


