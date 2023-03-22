/* Домашнее задание.
«Введение в JS. Переменные. Операторы»
Задание: Задания 1, 9 и 10 решите внутри HTML-документа, для решения остальных задач
создайте отдельные JS-файлы и подключите их. Порядок решения задач неважен, но решение
задачи 4 должно идти после решения задачи 2 обязательно.*/

/*2. Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9,
a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль
результат выражений:
5 % 3;
3 % 5;
5 + '3';
'5' – 3;
75 + 'кг';
785 * 653;
100 / 25;
0 * 0;
0 / 2;
89 / 0;
98 + 2;
5 – 98;
(8 + 56 * 4) / 5;
(9 - 12) * 7 / (5 + 2);
+"123";
1 || 0;
false || true;
true > 0.
Проверьте (выведите в консоль) каким типам принадлежат переменные.*/
console.log('%cTask2 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + `3`,
    a4 = `5` - 3,
    a5 = 75 + "кг",
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = ((9 - 12) * 7) / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

console.log(a1, typeof a1);
console.log(a2, typeof a2);
console.log(a3, typeof a3);
console.log(a4, typeof a4);
console.log(a5, typeof a5);
console.log(a6, typeof a6);
console.log(a7, typeof a7);
console.log(a8, typeof a8);
console.log(a9, typeof a9);
console.log(a10, typeof a10);
console.log(a11, typeof a11);
console.log(a12, typeof a12);
console.log(a13, typeof a13);
console.log(a14, typeof a14);
console.log(a15, typeof a15);
console.log(a16, typeof a16);
console.log(a17, typeof a17);
console.log(a18, typeof a18);

/*3. Напишите скрипт, который находит площадь прямоугольника высотой 23см и
шириной 10см, значение высоты и ширины должны хранится в width и height,
соответственно, а значение площади должно хранится в числовой переменной SPryam.*/
console.log('%cTask3 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

const width = 10;
const height = 23;
const SPryam = width * height;
console.log(`Площадь прямоугольника: ${SPryam}см`);

/*4. Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром
основания равным значению переменной a7 из задания 2, результат поместите в
переменную VCilindra.*/
console.log('%cTask4 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

const Height = 10;
const diameter = a7;
const VCilindra = Number(Math.PI * diameter * Height).toFixed(1);
console.log(`Объем цилиндра: ${VCilindra}м`);

/*Найдите площадь круга (SKruga) с радиусом 5см (r).*/
console.log('%cTask5 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

const radius = 5;
const SKruga = (Math.PI * Math.pow(radius, 2)).toFixed(1);
console.log(`Площадь круга: ${SKruga}см`);

/*6. Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см
(h).*/
console.log('%cTask6 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let a = 5;
let b = 7;
let h = 10;
const STrap = ((a + b) / 2) * h;
console.log(`Площадь трапеции: ${STrap}см`);

/*7. Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
содержаться в переменной Pereplata.*/
console.log('%cTask7 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

const mortgage = 2000000;
const annual_rate_of_interest = 10;
const loan_years = 5;
const Pereplata = ((mortgage * annual_rate_of_interest) / 100) * loan_years;
console.log(`Переплата по кредиту: ${Pereplata} рублей`);

/*8. Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a+2(x-b)=16;
b(x+15)=a+6x;
x+2x+ax+bx=23780.*/
console.log('%cTask8 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

a = 8;
b = 3;
let x;
x=(16+2*b-a)/2;
console.log('x =',x.toFixed(1));
x=(a-15*b)/(b-6);
console.log('x =',x.toFixed(1));
x=23780/(3+a+b);
console.log('x =',x.toFixed(1));