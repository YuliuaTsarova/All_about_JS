// Домашняя работа.
// «Массивы»

// Задание:

// 1. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

console.log('%cTask1 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let arr = [1, 2, 3, 4, 5]
console.log(arr);
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i]);
}
// второй метод
for (let i of arr) {
    console.log(i);
}

// 2. Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

console.log('%cTask2 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > -10 && arr2[i] < -3)
        console.log(arr2[i])
}

// 3. Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.

console.log('%cTask3 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let arr3 = [];
let sum = 0
for (let i = 23; i < 57; i++) {
    sum += arr3.push(i)
}
console.log(arr3);
console.log(sum);

// while

let arr33 = [];
let i = 22
let sum3 = 0
while (i < 56) {
    i++;
    sum3 += arr33.push(i);
}
console.log(arr33);
console.log(sum3);

// 4. Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
// 5.

console.log('%cTask4 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');
// через вложенный цикл 
// let arr4 = [`10`, `20`, `30`, `50`, `235`, `3000`];
// let arrStart = [1, 2, 5];

// for (let i = 0; i < arr4.length; i++) {
//     for (let j = 0; j < arrStart.length; j++) {
//         if ( +arr4[i][0] === arrStart[j]) console.log(arr4[i])
//     }
// }

// перебирая элементы
let arr44 = [`10`, `20`, `30`, `50`, `235`, `3000`];
console.log(arr44);
for (let elem of arr44) {
    if (elem[0] === `1` || elem[0] === `2` || elem[0] === `5`) {
        console.log(elem);
    }
}

//решение через forEach и  startsWith

// let arr444 = ['10', '20', '30', '50', '235', '3000'];
// console.log(arr444);
// arr444.forEach((elem) => { //Метод forEach() вызывает функцию один раз для каждого элемента массива по порядку.
//     if (elem.startsWith('1') || elem.startsWith('2') || elem.startsWith('5')) {
//         console.log(elem);
//     } // Метод startsWith() определяет, начинается ли строка с символов указанной строки.
// });

// 5. Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

console.log('%cTask5 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let arr5 = [`пн`, `вт`, `ср`, `чт`, `птн`];
for (let elem of arr5) {
    console.log(elem);
}
arr5.push(`сб`, `вск`); // добавили 2 эллемента в конец массива
console.log(`%c${arr5[5]}`, `font-size: 14px; font-weight: 400`);
console.log(`%c${arr5[6]}`, `font-size: 14px; font-weight: 400`);
console.log(arr5);

//через html  и if else

let arr55 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for (let i = 0; i < arr55.length; i++) {
    if (arr55[i] === 'СБ' || arr55[i] === 'ВС') {
        document.write('<br>' + '<b>' + arr55[i] + '</b>' + '<br>');
    } else {
        document.write('<br>' + arr55[i] + '<br>')
    }
}

// 6. Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

console.log('%cTask6 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

arr6 = [1, 2, 3, 4, 5];
console.log(arr6);
arr6[arr6.length] = 6; //добавляем эллемент в конец массива
console.log(arr6);
let last = arr6[arr6.length - 1]; // присваиваем переменную последнему эллементу
console.log(`Последний элемент ${last}`);

// 7. Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

console.log('%cTask7 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let number;
let arr7 = [];

for (i = 0; ; i++) {
    number = prompt(`Введите число`);
    if (number === ``) break;
    if (isNaN(number)) {  //проверяем number на число       
        continue;
    }
    arr7.push(number);
}
console.log(arr7);
// сортируем массив
arr7.sort(function (a, b) {
    return a - b;
})
console.log(`Отсортированный массив`);
console.log(arr7);

// сортируем массив запись через стрелочную функцию

// arr7.sort((a, b) => a - b)
// console.log(`Отсортированный массив`);
// console.log(arr7);

// 8. Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

console.log('%cTask8 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
console.log(arr8)
arr8.reverse();
console.log(`Перевернутый массив`);
console.log(arr8);

// через while
let ii = 0;
while (ii < arr8.length) {
    ii++;
}
console.log(arr8);

// 9. Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном
// целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].

console.log('%cTask9 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];

let stringPusto = 0;
for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] === undefined) {
        arr9[i] += stringPusto;
        stringPusto++;
    }
}
console.log(`Количество нулевых (пустых) элементов = ` + stringPusto);


// 10. Найдите сумму элементов массива между двумя нулями (первым и последним нулями
// в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть
// более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или
// [1,8,0,13,76,8,7,0,22,0,2,3,2].

console.log('%cTask10 ------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let arr10 = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2]
// обозначаем интервал
let ind = arr10.indexOf(0);
let indEnd = arr10.lastIndexOf(0);
// переменная для суммы цифр
let count = 0;

for (let i = ind; i < indEnd; i++) { // перебираем цикл по интервалу
    if (indEnd < 0) break;

    count += arr10[i];
}
console.log(count);

// 11. *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь. Например: высота = 5, на экране: картинка

console.log('%cTask11 ------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let line = prompt (`введите число`);
let star = 1;
let space = 10;
for (let i = 0; i < line; i++) {
    
    for (let j = 0; j < space; j++) {
        document.write('&nbsp');
    }
    for (let k = 0; k < star; k++) {
        document.write('*')
    }
    star++;
    space--;
    document.write('<br>');
}



// Для ввода значений можете использовать ф-цию prompt(), либо задавать значения при
// инициализации переменных в коде.
// Для вывода результатов скриптов вы можете использовать функции: alert() для вывода
// всплывающего окна; console.log() для вывода в консоль браузера; document.write() для вывода
// в «тело» HTML-документа.
// 
//********************************************************************************************
// let height = Number(prompt('Введите высоту'));
// let iii = 0 ;
// let j = 0 ;

// let space = " " ;

// let star = " " ;

// while(iii < height){
//  space = " " ;
//  star = " " ;

//  for( j = 0; j < height - iii; j ++) space += " ";
 
//  for( j = 0; j < 2 * iii + 1; j ++) star += "^";
//  console.log(space+star);
//  iii ++;
// }
//********************************************************************************************

// let number11 = prompt('Введите высоту: ');
// let str = "";
// let space = "";
// let iiii = 0;
// let j = 0;
// while (iiii < number11) {
// space = "";
// str = "";
// for (j = 0; j < number11 - iiii; j++) {space += " ";}
// for (j = 0; j < 2 * iiii + 1; j++) {str += "^";}
// console.log(space + str);
// iiii++;
// }
//********************************************************************************************