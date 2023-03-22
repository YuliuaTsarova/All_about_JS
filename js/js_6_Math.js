console.log(`математические функции`)

// Math

console.log(Math.PI); // 3.1415926
console.log(Math.sqrt(9)); //квадратный корень из числа
console.log(Math.log(4)); // находит натуральный логорифм из числа
console.log(Math.pow(12, 3)); // возводит число в любую степень
console.log(Math.abs(-5)); // модуль числа
console.log(Math.exp(3)); //основание логорифма
console.log(Math.max(12, 3, 5, 4, 8, 56, 2)); // находит максимальное число в строке
console.log(Math.min(12, 3, 5, 4, 8, 56, 2)); // находит минимальное число в строке

console.log(Math.random()); // случайное число от 0 до 1

// случайное чмсло от 5 до 15
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandom(5, 15))

console.log(Math.round(20.45)); // округлит до ближайшего целого // 20
console.log(Math.ceil(5.09)); // округлить число до целого большего значения //6
console.log(Math.floor(5.09)); // округлить число до целого меньшего значения //5

console.log(Math.round(getRandom(5, 15))) // число от 5 до 15 округленное до ближайшего целого