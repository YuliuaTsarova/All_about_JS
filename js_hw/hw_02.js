// Домашнее задание.
// «Условный оператор if...else. Вложенные условия. Оператор
// выбора switch.»

// Задание:

// 1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию
// prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д.
// Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в
// городе %Город% и работаю в компании %Компания%. Мои контактные данные:
// %Телефон%, %Почта%.».

console.log('%cTask1 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

const name = prompt('Имя');
let age = prompt('Возраст');
let city = prompt('Город');
let phone = prompt('Номер Телефона');
let email = prompt('Email');
let company = prompt('Место работы');
console.log(`«Меня зовут ${name}, мне ${age}. Я проживаю в ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}.»`)

// 2. Определите по введенному возрасту (исп. значение из задания 1) год рождения.
// Выведите на экран «%Имя% родился в %Год% году.».

console.log('%cTask2 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

const yearNow = new Date().getFullYear();
const yearBirth = yearNow - age;
console.log(`${name} родился в ${yearBirth} году.`);

// 3. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
// вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

console.log('%cTask3 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let number = prompt('Введите число из 6 чисел');
let firstCount = number[0] + number[1] + number[2];
let secondCount = number[3] + number[4] + number[5];
if (firstCount == secondCount) {
    console.log('да');
}
else {
    console.log('нет');
}

// 4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном 1, 0, -3.

console.log('%cTask4 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let a = prompt(`Введите число`);

let result = (a > 0) ? `Верно` : `Неверно`;
console.log(result);

if (a > 0) { console.log('Верно'); }
else {
    console.log('Неверно');
}

// 5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение,
// частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в
// квадрат.

console.log('%cTask5 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

a = 10;
let b = 2;
console.log('сумма = ', a + b);
console.log('разность = ', a - b);
console.log('произведение = ', a * b);
console.log('частное = ', a / b);
if (a + b > 1) {
    console.log('сумма в квадрате = ', Math.pow(a + b, 2));
}

// 6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания
// 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите
// 'Неверно'.

console.log('%cTask6 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

// 7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает
// это число (в первую, вторую, третью или четвертую).

console.log('%cTask7 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

let n = prompt('Введите число от 0 до 59');
if (n >= 0 && n < 16) {
    console.log('1-я четверть часа');
}
else if (n >= 15 && n < 31) {
    console.log('2-я четверть часа');
}
else if (n >= 30 && n < 46) {
    console.log('3-я четверть часа');
}
else if (n >= 45 && n < 60) {
    console.log('4-я четверть часа');
}

// 8. В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду
// месяца попадает это число (в первую, вторую или третью).

console.log('%cTask8 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

const day = prompt('Введите число от 1 до 31');
if (day >= 1 && day < 11) {
    console.log('1-я декада');
}
if (day >= 10 && day < 21) {
    console.log('2-я декада');
}
if (day >= 20 && day <= 31) {
    console.log('3-я декада');
}

// 9. Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы
// (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты
// вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца,
// недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели»,
// соответственно.

console.log('%cTask9 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

const days = prompt('Введите количество дней');
const year = days / 365;
const month = Math.ceil(days / 31);
const week = days / 7;
const hr = days * 24;
const min = days * 24 * 60;
const sec = days * 24 * 60 * 60;

if (days < 7) {
    console.log('Меньше года \n Меньше месяца \n Меньше недели \n' + (hr) + ' часов\n' + (min) + ' минут \n' + (sec) + ' секунд.');
}
if (days >= 7 && days < 31) {
    console.log('Меньше года \n Меньше месяца \n' + (week).toFixed(2) + ' недели \n' + (hr) + ' часов\n' + (min) + ' минут \n' + (sec) + ' секунд.');
}
if (days >= 31 && days < 365) {
    console.log('Меньше года \n ' + (month) + ' месяцев \n' + (week).toFixed(2) + ' недели \n' + (hr) + ' часов\n' + (min) + ' минут \n' + (sec) + ' секунд.');
}
if (days >= 365) {
    console.log((year).toFixed(2) + ' года \n' + (month) + ' месяцев \n' + (week).toFixed(2) + ' недели \n' + (hr) + ' часов\n' + (min) + ' минут \n' + (sec) + ' секунд.');
}

// 10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8
// задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и
// т.д.). Скрипт определение поры года написать через switch.


console.log('%cTask10 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

switch (month) {
    case 1:
    case 2:
    case 12: console.log((month) + 'й месяц \nЗима');
        break;
    case 3:
    case 4:
    case 5: console.log((month) + 'й месяц \nВесна');
        break;
    case 6:
    case 7:
    case 8: console.log((month) + 'й месяц \nЛето');
        break;
    case 9:
    case 10:
    case 11: console.log((month) + 'й месяц \nОсень');
        break;
    default: console.log('Неправильно введено число');
        break;
}

console.log('%cTask10 -------------------------------------------', 'color: white; background: #212529; font-size: 10px');

if (month == 1 || month == 2 || month == 12) {
    console.log((month) + 'й месяц \nЗима')
} else if (month == 3 || month == 4 || month == 5) {
    console.log((month) + 'й месяц \nВесна');
} else if (month == 6 || month == 7 || month == 8) {
    console.log((month) + 'й месяц \nЛето');
} else if (month == 9 || month == 10 || month == 11) {
    console.log((month) + 'й месяц \nОсень');
} else {
    console.log('Неправильно введено число');
}

// Для вывода результатов скриптов вы можете использовать функции: alert() для вывода
// всплывающего окна; console.log() для вывода в консоль браузера; document.write() для вывода
// в «тело» HTML-документа.