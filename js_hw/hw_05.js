// Домашняя работа No5. Функции
// Используя полученные знания выполните сл. задания:

// 1. Сделайте функцию, которая отнимает от первого числа второе и делит на
// третье. Числа передаются параметром.

console.log('%cTask1 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');
{
    function sum(a, b, c) {
        let result = (a - b) / c
        console.log(result)
    }

    sum(3, 2, 2);
}

// тоже самое через return
{
    function count(a, b, c) {
        return (a - b) / c;
    }
    let result = count(5, 2, 2);

    console.log(result);
}

// тоже самое через стрелочную функцию
{
    const count = (a, b, c) => { return (a - b) / c; }

    console.log(count(4, 2, 2));
}

// 2. Сделайте функцию, которая возвращает куб числа и его квадрат. Число
// передается параметром.

console.log('%cTask2 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');
// через Рекурсию
{
    function pow(x, y) {
        if (y === 0) return 1;
        return x * pow(x, y - 1)
    }
    result = pow(5, 1)
    console.log(`Число = ` + result)
    console.log(`Квадрат числа = ` + pow(5, 2));
    console.log(`Куб числа = ` + pow(5, 3));
}
// через Math.pow
{
    function count(a) {
        let square = Math.pow(a, 2);
        let cube = Math.pow(a, 3);
        console.log(`Число = ${a}, Квадрат числа = ${square}, Куб числа = ${cube}`);
    }

    count(8);
}

// тоже самое через стрелочную функцию
{
    result = (a) => {
        return (`Число = ${a}, Квадрат числа = ${a ** 2}, Куб числа = ${a ** 3}`);
    }

    console.log(result(2));
}


// 3. Напишите функции min и max, которые возвращают меньшее и большее из
// чисел a и b.

console.log('%cTask3 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');
{
    function min(a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }

    console.log(`Меньшее число = ` + min(56, 125));
}

{
    function max(a, b) {
        if (a > b) {
            return a;
        } else
            return b;
    }

    const num = max(56, 125);
    console.log(`Большее число = ` + num);
}

// 4. Напишите две функции: первая ф-ция должна возвращать массив с
// числовыми значениями, диапазон которых должен вводиться пользователем
// с клавиатуры; вторая – выводить полученный массив.

console.log('%cTask4 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

{
    let a;
    let arr = [];

    function getArr(sizeArray) {
        for (let i = 0; i < sizeArray; i++) {
            a = prompt("Введите элемент массива");
            arr[i] = a;
        }

        return arr;
    }

    function showArr() {
        let show = getArr(prompt("Введите длину массива"));
        console.log(show);
    }

    showArr();
}

// 5. Сделайте функцию isEven() (even - это четный), которая параметром
// принимает целое число и проверяет: четное оно или нет. Если четное - пусть
// функция возвращает true, если нечетное — false.

console.log('%cTask5 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

{
    function isEven(a) {
        if (a % 2 === 0) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
    isEven(126);
}

// 6. Напишите ф-цию, в которую передается массив с целыми числами.
// Верните новый массив, где останутся лежать только четные из этих чисел.
// Для этого используйте вспомогательную функцию isEven из предыдущей
// задачи.

console.log('%cTask6 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

{

    let arr = [1, 2, 2, 3, 5, 4, 8, 7, 56, 84, 52, 84]
    let arr2 = [];

    function Even() {

        for (let i = 0; i <= arr.length; i++) {

            if (arr[i] % 2 === 0) {
                arr2.push(arr[i]);
            }
        }
    }

    Even(arr);
    console.log(arr2);
}

// 7. Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные
// циклы):
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// Кол-во рядов должно вводиться параметром. Если пользователь ввел доп.
// параметр, непредусмотренный ф-цией по умолчанию - один любой символ,
// кроме пробела, то пирамида должна быть нарисована этим символом,
// например:

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********

document.write (`<h3> Task7 </h3>`);

{
    let triangle = function (size, symbol) {
        for (let i = 0; i <= size; i++) {
            for (let j = 0; j < i; j++) {
                if (symbol === undefined) document.write(i);
                else document.write(symbol)
            }
            document.write("<br>")
        }
    }

    triangle(8)
    triangle(7, "*")
    triangle(5, `$`)
}

// 8. Напишите ф-цию, которая рисует равнобедренный треугольник из
// звездочек:

// *
// ***
// *****
// *******
// *********

// Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же ф-
// цию, но которая выведет перевернутый треугольник.

console.log('%cTask8 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');


{
    function triangleTree(rows, Reverse) {
        const element = new Array(rows).fill(0).map((_, i) => i);
        if (Reverse) element.reverse();
        for (let i of element) {
            const spaces = ' '.repeat(rows - 1 - i);
            console.log(spaces + '*'.repeat(1 + i * 2) + spaces);
        }
    }

    const n = +prompt('Введите число строк:');
    triangleTree(n);
    if (confirm('Вывести перевёрнутый?')) triangleTree(n, true);

}

// 9. Напишите ф-цию, которая возвращает массив заполненный числами
// Фибоначи от 0 до 1000.

console.log('%cTask9 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

{
    function Fibonacci(number) {
        let fib = [];
        fib[0] = 0;
        fib[1] = 1;
        for (let i = 2; i < number; i++) {
            fib[i] = fib[i - 2] + fib[i - 1];
        }
        return fib;
    }
    let result = Fibonacci(1000);
    console.log(result);
}

// 10. Дано число. Сложите его цифры. Если сумма получилась более 9-ти,
// опять сложите его цифры. И так, пока сумма не станет однозначным числом
// (9 и менее). Исп. Рекурсию.

console.log('%cTask10 ------------------------------------------', 'color: white; background: #212529; font-size: 10px');

{
    function sum(num) {
        let som = 0;
        let str = num.toString();

        for (let i = 0; i < str.length; i++) {
            som += +str[i];
        }

        return som <= 9 ? som : sum(som);
    }
    const result = sum(4566258541);
    console.log(result);
}
// 11. Дан массив с числами (передается параметром). Выведите
// последовательно его элементы, используя рекурсию и не используя цикл.

console.log('%cTask11 ------------------------------------------', 'color: white; background: #212529; font-size: 10px');

{
    let arr = [34, 56, 12, 3, 7, 96, 36];
    function func(arr, i = 0) {
        if (i === arr.length) {
            return;
        } else
            console.log(arr[i]);
        func(arr, i + 1);
    }
    func(arr);
}

// 12. Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер
// группы студента и выводящую введённые данные в следующем виде:

// *****************************
// * Домашняя работа: «Функции» *
// * Выполнил: студент гр. W4017 *
// * Иванов Иван Иванович *
// *****************************

// Размер рамки должен определятся автоматически по самой длинной строке.
// Рамку вывести в консоль.

{
    function topBottomRamka(length) {
        let ramka = "";
        for (let i = 0; i < length; i++) {
            ramka += "*";
        }
        console.log(ramka);
    }

    let stroki = [];
    stroki.push(`Домашняя работа "Функции"`);

    let group = prompt("Введите номер группы");
    stroki.push("Выполнил студент гр." + group);

    let familia = prompt("Введите фамилию");
    let imya = prompt("Введите имя");
    let otchestvo = prompt("Введите отчество");
    let fio = familia + ' ' + imya + ' ' + otchestvo;
    stroki.push(fio);

    let dlinaRamki = 0;
    for (let i = 0; i < stroki.length; i++) {
        if (dlinaRamki < stroki[i].length) {
            dlinaRamki = stroki[i].length;
        }
    }

    dlinaRamki += 2;

    topBottomRamka(dlinaRamki);
    for (let i = 0; i < stroki.length; i++) {
        let resultString = "*";
        for (let j = 0; j < dlinaRamki; j++) {
            if (stroki[i][j] === undefined) {
                if (j === dlinaRamki - 2) {
                    resultString += '*';
                }
                else {
                    resultString += ' ';
                }
            }
            else {
                resultString += stroki[i][j];
            }
        }
        console.log(resultString);
    }
    topBottomRamka(dlinaRamki);

}

// 13. Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:
// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
// быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
// «.@» или «@@», «_@», «@-», «--» и т.п.
// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени, и точку;
// c. после последней точки и после @, домен верхнего уровня (ru, by, com и
// т.п.) не может быть длиной менее 2 и более 11 символов.

// Для ввода значений можете использовать ф-цию prompt(), либо задавать
// значения при инициализации переменных в коде.
// Для вывода результатов скриптов вы можете использовать функции: alert()
// для вывода всплывающего окна; console.log() для вывода в консоль браузера;
// document.write() для вывода в «тело» HTML-документа.

