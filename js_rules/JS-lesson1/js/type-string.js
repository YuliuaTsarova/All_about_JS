/*** string ***/

const str = "Привет";
const str2 = 'Одинарные кавычки тоже подойдут';
const phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;  //шаблонные строки
const phrases = `Обратные кавычки позволяют 
допускают перенос строки ${str}`;
const screening = "I'm the Walrus!";
const lineFeed = "I\n'm the Walrus!";
let str3 = 'abc' + 'def';

console.log(str);
console.log(str2);
console.log(phrase);
console.log(phrases);
console.log(screening);
console.log(lineFeed);
console.log(str3);


/** Длинна строки **/
/** Свойство length содержит длину строки **/

const message = "Hello World";

console.log("message:", message.length);


/** Доступ к символам **/

const pos = "Hello";

console.log(pos[1]);
console.log(pos.at(3));
console.log(pos.at(-3));

/** Изменение регистра **/

const register = "My IT school"

console.log(register.toLocaleLowerCase());
console.log(register.toUpperCase());


/** Поиск подстроки **/

/* str.indexOf(substr, pos) 
Он ищет подстроку substr в строке str, начиная с позиции pos, 
и возвращает позицию, на которой располагается совпадение,
либо -1 при отсутствии совпадений.
 */

const widget = 'Widget with id';

console.log(widget.indexOf('id'));
console.log(widget.indexOf('widget'));

/* str.includes(substr, pos) */

const widgetInclude = 'Widget with id';

console.log(widgetInclude.includes('Widget'));
console.log(widgetInclude.includes('widget'));

/** Получение подстроки **/

// метод str.slice(start [, end])

const sliceString = "stringify";

console.log(sliceString.slice(0, 5));
console.log(sliceString.slice(1, 3));
console.log(sliceString.slice(0, 1));
console.log(sliceString.slice(2));
console.log(sliceString.slice(-4, -1));


// метод str.sliceString(start [, end])

const subString = "stringify";

console.log(subString.substring(2, 6));
console.log(subString.substring(6, 2));
// можно задать start больше end

// str.substr(start [, length]) Deprecated!!!


// Создайте переменную с текстом 'java' и переменную с текстом 'script'.
//С помощью этих переменных и операции сложения строк выведите на экран строку 'javascript'.


//Запишите в переменную какую-нибудь строку. Выведите на экран длину вашей строки.

//Запишите в переменную str строку, состоящую из символов 'a', 'b', 'c',
// причем после каждого символа, кроме последнего, должен стоять перенос строки.


//Дана строка 'abcde'.
// Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.



var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line
var len = abc.length;           // string length
abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno");        // last occurance
abc.slice(3, 6);                // cuts out "def", negative values count from behind
abc.replace("abc","123");       // find and replace, takes regular expressions
abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters
//128.toString(16);               // number to hex(16), octal (8) or binary (