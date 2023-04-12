console.log('Основы ОПП. Наследование. Инкапсуляция. Полиморфизм')

console.log({ a: '2', b: 123 }); // создали и вывели в консоль объект //{a: '2', b: 123}

let obj1 = { // инициировали переменную и присвоили ей объект
    a: 123,
    b: 'Text'
};

console.log(obj1); //{a: 123, b: 'Text'}

let Obj2 = function () {
    this.a = 'Text';
    this.b = 654;
};

// создаем функцию конструтор

let obj2 = new Obj2();
console.log(obj2); // Obj2 {a: 'Text', b: 654}
// используя функцию конструктор можно создать несколько обьектов
let obj3 = new Obj2()
    obj4 = new Obj2()
    obj5 = new Obj2()

console.log(obj3);// Obj2 {a: 'Text', b: 654}
console.log(obj4);// Obj2 {a: 'Text', b: 654}
console.log(obj5);// Obj2 {a: 'Text', b: 654}

//кросбраузерный способ 
// dog.prototype = animal

let dog = function (name) {
    this.name = name;
};

let animal = function (name) {
    this.name = name;
};
 


