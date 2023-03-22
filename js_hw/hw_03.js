// Домашняя работа.
// «Циклы do... while, while, for. Вложенные циклы.»

// Задание:

// 1. Выведите числа от 1 до 50 и от 35 до 8.

console.log('%cTask1 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

for ( let i = 1; i <= 50; i++) { console.log ( i ); }
console.log('%c---------------------------------------------', 'color: blue; font-size: 10px');
for ( let n = 35; n >= 8; n--) { console.log ( n ); }


// 2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа
// тегом <br /> друг от друга, чтобы получить столбец, а не строку.

console.log('%cTask2           В HTML ', 'color: white; background: #212529; font-size: 10px');

let k = 89;
while ( k >= 11 ) {
    document.write(`${k}</br>`);
    k--;
}

// 3. С помощью цикла найдите сумму чисел от 0 до 100.

console.log('%cTask3 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let sum = 0;
for (let a = 1; a <=100; a++){
    sum +=a;
}
console.log (`Сумма чисел от 1 до 100 = ${+sum}`);


// 4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
// (1+2+3).

console.log('%cTask4 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let b = 5;
let suum = 0;
for ( let j =1; j <= b; j++) {
    suum = 0
    for ( let g =1; g <= j; g++) {
        suum +=g;
    }
    console.log (`sum` +j+ `=` +suum);
}

// 5. Выведите чётные числа от 8 до 56. Решить задание через while и for.

console.log('%cTask5 ---четные----------------------------------', 'color: white; background: #212529; font-size: 10px');

for (let m = 8; m <= 56; m += 2) {
    console.log(m)
}

console.log('%cTask5 ---четные----------------------------------', 'color: white; background: #212529; font-size: 10px');

let h = 8
while (h <= 56) {
    console.log(h);
    h += 2;
}

console.log('%cTask5 ---нечетные--------------------------------', 'color: white; background: #212529; font-size: 10px');

for (let m = 8; m <= 56; m++) {
    if (m % 2 === 0) continue;
    console.log(m)
}

console.log('%cTask5 ---нечетные--------------------------------', 'color: white; background: #212529; font-size: 10px');

let hh = 8
while (hh <= 56) {
    if (hh % 2 === 0); {
        console.log(++hh);
    }
    hh++;
}

// 6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
// 2*2 = 4
// 2*3 = 6
// 2*4 = 8
// 2*5 = 10
// ...
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// ...
// Для решения задачи используйте вложенные циклы.

console.log('%cTask6 Таблица умножения----------------------------', 'color: white; background: #212529; font-size: 10px');

for (p=2; p <= 10; p++) {
    for (j=2; j <= 10; j++) {
    console.log(`${p} x ${j} = ${p * j}`);
    }
    console.log('\n');
    }

// 7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет
// меньше 50. Какое число получится? Посчитайте количество итераций, необходимых
// для этого (итерация - это проход цикла), и запишите его в переменную num.

console.log('%cTask7 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let n = 1000;
let i = 0;

for (; n >= 50; n /= 2) {
    i++;
}
console.log(`%cЧисло = ${n}`, `color: #ff00ff; font-size: 16px`);
console.log(`%cИтераций = ${i}`, `color: #ff00ff; font-size: 16px`);

// через while

while (n > 50) {
    n /= 2;
    i++;
}
console.log (`Через while`);
console.log(`%cЧисло = ${n}`, `color: green; font-size: 16px`);
console.log(`%cИтераций = ${i}`, `color: green; font-size: 16px`);

// 8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до
// тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите
// общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не
// число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь
// может ввести отрицательное значение.

console.log('%cTask8 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let number;
sum = 0;
count = 0;
while (number != 0 || number != " ") {
  number = +prompt("Введите число") ;
  if(isNaN(number) || number < 0){
    alert('Error'); continue;
}
  else {
    sum += number;
    count++;
  }
}
console.log(`Сумма: ${sum}`)
console.log(`Среднее арифметическое: ${(sum /= count).toFixed(1)}`);


// 9. Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36
// 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.

console.log('%cTask9 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
let rez = '';
let min;
let max;
for (let i = 0; i < str.length; i++) {
  rez += str[i];
  if (+str[i] && !+str[i+1]) {
    if (typeof min !== 'number' || rez < +min) min = +rez;
    if (typeof max !== 'number' || rez > +max) max = +rez;
    rez = '';
  }
}
console.log('Min:', min)
console.log('Max:', max)

// 10. Дано произвольное целое число n. Написать программу, которая:
// a. разбивает число n на цифры и выводит их на экран;
// b. подсчитывает сколько цифр в числе n;
// c. находит сумму цифр числа n;
// d. меняет порядок цифр числа n на обратный.
// Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.

console.log('%cTask10 ------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let nu = +prompt("Введите число:", "123"); // Ввод с экрана в браузере
let summ = 0; // Переменная для суммы цифр
let strN = String(nu); // Число в виде строки
let strN_reversed = ""; // Число в виде строки в обратном порядке
for (let i = 0; i < strN.length; i++) {
    let sim = strN[i]; // Получить цифру как символ
    summ += +sim; // Преобразовать цифру в число и добавить его к сумме
    strN_reversed = sim + strN_reversed; // Символ поместить в начало обратной строки
    console.log(sim); // Вывести в консоль символ
}
console.log("Цифр в числе = " + strN.length);
console.log("Сумма = " + summ);
console.log("Обратный порядок: " + strN_reversed); // Вывести в консоль число в обратном порядке

// Для ввода значений можете использовать ф-цию prompt(), либо задавать значения при
// инициализации переменных в коде.
// Для вывода результатов скриптов вы можете использовать функции: alert() для вывода
// всплывающего окна; console.log() для вывода в консоль браузера; document.write() для вывода
// в «тело» HTML-документа.


// 10 Через функцию

// function Task(n) {
//     let sum = 0; // Переменная для суммы цифр
//     let strN = String(n); // Число в виде строки
//     let strN_reversed = ""; // Число в виде строки в обратном порядке
//     for (let i = 0; i < strN.length; i++) {
//         let sim = strN[i]; // Получить цифру как символ
//         sum += +sim; // Преобразовать цифру в число и добавить его к сумме
//         strN_reversed = sim + strN_reversed; // Символ поместить в начало обратной строки
//         console.log(sim); // Вывести в консоль символ
//     }
//     console.log("Цифр в числе = " + strN.length);
//     console.log("Сумма = " + sum);
//     console.log("Обратный порядок: " + strN_reversed); // Вывести в консоль число в обратном порядке
// }

// let n = +prompt("Введите число:", "123"); // Ввод с экрана в браузере
// Task(n);




