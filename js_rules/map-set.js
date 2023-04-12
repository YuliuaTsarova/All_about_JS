"use strict"

/** Map **/

// Map – это коллекция ключ/значение, как и Object.
// Но основное отличие в том, что Map позволяет использовать ключи любого типа.

// Методы и свойства:
//
// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

{
    let map = new Map();

    map.set("1", "string 1");
    map.set(1, "number 1");
    map.set(true, "bool 1");

    // console.log(map);
    // console.log(map.get(1));
    // console.log(map.get("1"));
    // console.log(map.get(true));
    // //
    // console.log(map.size);

}

// Map может использовать объекты в качестве ключей.

{
    let john = {name: "John"};

    let userMap = new Map();
    userMap.set(john, 123);

    // console.log(userMap);

    // Цепочка вызовов
// Каждый вызов map.set возвращает объект map, так что мы можем объединить вызовы в цепочку:

    userMap.set("1", "string")
        .set(1, "number")
        .set(true, "booll");
}

//     Для перебора коллекции Map есть 3 метода:
//
//     map.keys() – возвращает итерируемый объект по ключам,
//     map.values() – возвращает итерируемый объект по значениям,
//     map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], 
//     этот вариант используется по умолчанию в for..of.

{
    let recipeMap = new Map([
        ["огурец", 500],
        ["помидор", 350],
        ["лук", 50]
    ]);

    console.log(recipeMap.keys());

    for (let vegetable of recipeMap.keys()) {
        console.log(vegetable);
    }

    console.log(recipeMap.values());
    //
    for (let amount of recipeMap.values()) {
        console.log(amount);
    }

    // console.log(recipeMap);


    for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
        console.log(entry);
    }


// В отличие от обычных объектов Object, в Map перебор происходит в том же порядке,
//     в каком происходило добавление элементов.


// Кроме этого, Map имеет встроенный метод forEach, схожий со встроенным методом массивов Array


    recipeMap.forEach((value, key, map) => {
        console.log(`${key}: ${value}`);       
    });
}


// При создании Map мы можем указать массив 
// (или другой итерируемый объект) с парами ключ-значение для инициализации

{
    let map = new Map([
        ["огурец", 500],
        ["помидор", 350],
        ["лук", 50]
    ]);

    // console.log(map)

    // Так что мы можем создать Map из обычного объекта следующим образом:

    let obj = {
        name: "John",
        age: 30
    };

    console.log(Object.entries(obj));

    let user = new Map(Object.entries(obj));

    console.log(user)


    // создаёт из Map объект

    let obj1 = Object.fromEntries(user)

    console.log(obj1);

}

/** Set **/

// Объект Set – это особый вид коллекции: «множество» значений (без ключей),
// где каждое значение может появляться только один раз.

// Его основные методы это:
//
//  new Set(iterable) – создаёт Set, и если в качестве аргумента был
//  предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

// Основная «изюминка» – это то, что при повторных вызовах set.add() 
// с одним и тем же значением ничего не происходит, 
//за счёт этого как раз и получается, что каждое значение появляется один раз.


{
    let set = new Set();

    let john = {name: "John"};
    let pete = {name: "Pete"};
    let mary = {name: "Mary"};


    set.add(john);
    set.add(pete);
    set.add(mary);
    set.add(john);
    set.add(mary);

    console.log(set);
}

// Мы можем перебрать содержимое объекта set как с помощью метода for..of, так и используя forEach

{
    let set = new Set(["апельсин", "яблоко", "банан"]);

    for (let value of set) console.log(value);


// то же самое с forEach:
//valueAgain для совместимости с map


    set.forEach((value, valueAgain, set) => {
        console.log(value);
    });
}

// Set имеет те же встроенные методы, что и Map:
//
//     set.keys() – возвращает перебираемый объект для значений,
//     set.values() – то же самое, что и set.keys(), присутствует для обратной совместимости с Map,
//     set.entries() – возвращает перебираемый объект для пар вида [значение, значение], присутствует для обратной совместимости с Map.


// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.














