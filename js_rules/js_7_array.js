

// //Arrays
// //let dogs = ["Bulldog", "Beagle", "Labrador"]; 
// //let dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration объявление

// alert(dogs[1]);             // access value at index, first item being [0] значение доступа в индексе, первым элементом является [0]
// dogs[0] = "Bull Terier";    // change the first item

// for (var i = 0; i < dogs.length; i++) {     // parsing with array.length
// console.log(dogs[i]);
// }
// Methods
// dogs.toString();                        // convert to string: results "Bulldog,Beagle,Labrador"
// dogs.join(" * ");                       // join: "Bulldog * Beagle * Labrador"
// dogs.pop();                             // remove last element
// dogs.push("Chihuahua");                 // add new element to the end
// dogs[dogs.length] = "Chihuahua";        // the same as push
// dogs.shift();                           // remove first element
// dogs.unshift("Chihuahua");              // add new element to the beginning
// delete dogs[0];                         // change element to undefined (not recommended)
// dogs.splice(2, 0, "Pug", "Boxer");      // add elements (where, how many to remove, element list)
// let animals = dogs.concat(cats,birds);  // join two arrays (dogs followed by cats and birds)
// dogs.slice(1,4);                        // elements from [1] to [4-1]
// dogs.sort();                            // sort string alphabetically
// dogs.reverse();                         // sort string in descending order
// x.sort(function(a, b){return a - b});   // numeric sort
// x.sort(function(a, b){return b - a});   // numeric descending sort
// highest = x[0];                         // first item in sorted array is the lowest (or highest) value
// x.sort(function(a, b){return 0.5 - Math.random()});     // random order sort
// concat, copyWithin, every, fill, filter, find, findIndex, forEach, indexOf, isArray, join, lastIndexOf,
//  map, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, toString, unshift, valueOf



/****************************************************************
 * 
 Объекты обычно создаются, чтобы представлять сущности реального
  мира, будь то пользователи, заказы и так далее:
*
****************************************************************/


//  Имя свойства может состоять из нескольких слов,
//  но тогда оно должно быть заключено в кавычки:
// Для свойств, имена которых состоят из нескольких слов, 
// доступ к значению «через точку» не работает:


{
    // let user = {
    //     name: "John",
    //     age: 30,
    //     "Likes birds": true
    //   };

    //   console.log(user["Likes birds"])
}

// Квадратные скобки также позволяют обратиться к свойству, 
//имя которого может быть результатом выражения. 
//Например, имя свойства может храниться в переменной:

{
    // let key = "name";

    // user[key] = "Tanya"

    // console.log(user[key])
}

//Вычисляемые свойства

{
    // let fruit = prompt("Какой фрукт купить?", "apple");

    // let bag = {
    //     [fruit]: 5, // имя свойства будет взято из переменной fruit
    // };

    // console.log(bag); // 5, если fruit="apple"
}

//Свойство из переменной

{
    // function makeUser(name, age) {
    //     return {
    //       name: name,
    //       age: age
    //       // ...другие свойства
    //     };
    //   }

    //   let user = makeUser("John", 30);
    //   console.log(user); // John
}

// короткая запись

// {
//     function makeUser(name, age) {
//         return {
//           name,
//           age
//           //...другие свойства
//         };
//       }

//       let user = makeUser("John", 30);

//       console.log(user["name"]); // John
// }



/** Проверка существования свойства, оператор «in» **/


// При обращении к свойству, которого нет, возвращается undefined

{
    // let user = {};

    // console.log(user.age); // undefined

    // console.log(user.age === undefined); // true

    // console.log("age" in user); // false

}



/** Для перебора всех свойств объекта используется цикл for..in.  **/



// for (key in object) {
//     // тело цикла выполняется для каждого свойства объекта
//   }

{
    //     let user = {
    //         name: "John",
    //         age: 30,
    //         isAdmin: true
    //       };

    //       for (let key in user) {
    //         // ключи
    //         console.log( key );  // name, age, isAdmin
    //         // значения ключей
    //         console.log( user[key] ); // John, 30, true
    //       }
}

/************* Проверка на пустоту **************/

{
    // function isEmpty(object) {
    //     for (let key in object) {
    //         // если тело цикла начнет выполняться
    //         // значит в объекте есть свойства
    //         return false;
    //     }
    //     return true;
    // }
}



/******** Копирование объектов и ссылки **********/



//При копировании переменной объекта копируется ссылка, но сам объект не дублируется.
//но его свойства меняются и если мы просто присвоим через равно другое имя обьекту
// то он перезапишет свойства старого объекта



/******** Клонирование и объединение, Object.assign **********/


{
    // let user = {
    //     name: "John",
    //     age: 30
    //   };

    //   let clone = {}; // новый пустой объект

    //   // давайте скопируем все свойства user в него
    //   for (let key in user) {
    //     clone[key] = user[key];
    //   }

    //   // теперь clone это полностью независимый объект с тем же содержимым
    //   clone.name = "Pete"; // изменим в нём данные

    //   console.log( user.name ); // все ещё John в первоначальном объекте
    //   console.log( clone.name );
    //   console.log( clone === user );
}

// создаем пустой обьект, проходимся циклом и копируем все ключ значения в другой

// Object.assign(dest, [src1, src2, src3...]) - объединяет объекты

{
    // let user = { name: "John" };

    // let permissions1 = { canView: true };
    // let permissions2 = { canEdit: true };

    // // копируем все свойства из permissions1 и permissions2 в user
    // Object.assign(user, permissions1, permissions2);

    // console.log(user);
    // // теперь user = { name: "John", canView: true, canEdit: true }

}

// что бы скопировать объект методом Object.assign

{
    // const clone = Object.assign({}, user);

    // console.log(clone);
    // console.log(clone === user);
}


/******** ОПЕРАТОР РАСШИРЕНИЯ *** ... ***///*РАСКУКОЖИВАТЕЛЬ*///

{
    // let user = {
    //     name: "John",
    //     age: 30,
    //     isLogin: true
    //   };

    //   const user1 = {...user}

    //   console.log(user === user1); // false
    //   console.log(user1) // склонировали объект
}



/**********Вложенное клонирование**************/

// Мы можем реализовать глубокое клонирование, используя рекурсию. 
// Или, чтобы не изобретать велосипед заново, возьмите готовую реализацию, 
// например _.

// cloneDeep(obj)

//из библиотеки JavaScript lodash.

// Также мы можем использовать глобальный метод 

// structuredClone()

// который позволяет сделать полную копию объекта. К сожалению он 
// поддерживается только современными браузерами. Здесь можно ознакомиться 
// с поддержкой этого метода.



/****************************************************************
 * 
 * Методы объекта, "this"
 *  
 *****************************************************************/

// И так же, как и в реальном мире, пользователь может совершать действия: 
// выбирать что-то из корзины покупок, авторизовываться, выходить из системы, 
// оплачивать и т.п.

// Такие действия в JavaScript представлены функциями в свойствах.

{
    // let user = {
    //     name: "John",
    //     age: 30,
    //     sayHi: function () {
    //         console.log("Привет!");
    //     };
    // }
    // user.sayHi();
    // console.log(user);
}


/* Функцию, которая является свойством объекта, называют методом этого объекта.*/


{
    //сокращенная запись

    // let user = {
    //     name: "John",
    //     age: 30,
    //     sayHi() {
    //         console.log("Привет!");
    //     }
    // }
    // user.sayHi();
    // console.log(user);
}


/* Ключевое слово «this» в методах */
 

// Для доступа к информации внутри объекта метод 
// может использовать ключевое слово this.

// Значение this – это объект «перед точкой», 
// который используется для вызова метода.

{
    // let user = {
    //     name: "John",
    //     age: 30,

    //     sayHi() {
    //         // "this" - это "текущий объект".
    //         console.log(this.name);
    //     }

    // };

    // user.sayHi(); // John
}

//Например, здесь одна и та же функция назначена 
//двум разным объектам и имеет различное значение «this» в вызовах:

{
    // let user = { name: "John" };
    // let admin = { name: "Admin" };

    // function sayHi() {
    //     console.log(this.name);
    // }

    // // используем одну и ту же функцию в двух объектах
    // user.f = sayHi;
    // admin.f = sayHi;

    // // эти вызовы имеют  разное значение this
    // // "this" внутри функции - это объект "перед точкой"
    // user.f(); // John  (this == user)
    // admin.f(); // Admin  (this == admin)

    // admin['f'](); // Admin (нет разницы между использованием точки 
    // //или квадратных скобок для доступа к объекту)
}

// Вызов без объекта: this == undefined
// Мы даже можем вызвать функцию вообще без объекта:

{
// function sayHi() {
//   alert(this);
// }

// sayHi(); // undefined
}

// В строгом режиме ("use strict") в таком коде значением this будет являться undefined. 
// Если мы попытаемся получить доступ к this.name – это вызовет ошибку.

// В нестрогом режиме значением this в таком случае будет глобальный объект 
// (window в браузерe, мы вернёмся к этому позже в главе Глобальный объект). 
// Это – исторически сложившееся поведение this, которое исправляется использованием 
// строгого режима ("use strict").

// Итого/**************************************************************************************/

// Функции, которые находятся в свойствах объекта, называются «методами».
// Методы позволяют объектам «действовать»: object.doSomething().
// Методы могут ссылаться на объект через this.
// Значение this определяется во время исполнения кода.

// При объявлении любой функции в ней можно использовать this, но этот this не 
// имеет значения до тех пор, пока функция не будет вызвана.
// Функция может быть скопирована между объектами (из одного объекта в другой).
// Когда функция вызывается синтаксисом «метода» – object.method(), 
// значением this во время вызова является object.
// Также ещё раз заметим, что стрелочные функции являются особенными 
// – у них нет this. Когда внутри стрелочной функции обращаются к this, 
// то его значение берётся извне.

/***********************************************************************************************/