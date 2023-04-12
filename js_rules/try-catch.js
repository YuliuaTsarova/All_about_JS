"use strict"

//  конструкция try..catch, которая позволяет «ловить» ошибки и
//  вместо падения делать что-то более осмысленное.


{
    // try {
    //     let data = JSON.parse('{1,2,3,4,5}'); 
    //     // console.log('fff')
    // } catch (error) {
    //     console.log(error.name);
    //     console.log(error.message);
    //     console.log('невозможно выполнить операцию разбора JSON');
    // }
}

// Таким образом, try..catch может обрабатывать только ошибки, 
// которые возникают в корректном коде. 
// Такие ошибки называют «ошибками во время выполнения»,
// а иногда «исключениями».
// Он не сработает, если код синтаксически неверен

// try..catch работает синхронно
// Исключение, которое произойдёт в коде, запланированном «на будущее»,
// например в setTimeout, try..catch не поймает


{
    // try {
    //     setTimeout(function () {
    //         noSuchVariable; // скрипт упадёт тут
    //     }, 1000);
    // } catch (e) {
    //     console.log("не сработает");
    // }
}

// Это потому, что функция выполняется позже, 
// когда движок уже покинул конструкцию try..catch.
//
// Чтобы поймать исключение внутри запланированной функции, try..catch
// должен находиться внутри самой этой функции

{
    // setTimeout(function () {
    //     try {
    //         noSuchVariable; // try..catch обрабатывает ошибку!
    //     } catch (err) {
    //         console.log(err.message);
    //     }
    // })
}


/**  Оператор «throw»  **/

// Оператор throw генерирует ошибку.
// В JavaScript есть множество встроенных конструкторов для стандартных ошибок: 
//     Error, SyntaxError, ReferenceError, TypeError и другие. 
//     Можно использовать и их для создания объектов ошибки.

// let error = new Error(message);
// let error = new SyntaxError(message);
// let error = new ReferenceError(message);

{
    // let json = '{ "age": 30 }'; // данные неполны
    //
    // try {
    //
    //     let user = JSON.parse(json); // <-- выполнится без ошибок
    //
    //     // console.log(user.name);
    //
    //     if (!user.name) {
    //         // throw new SyntaxError("Данные неполны: нет имени"); // (*)
    //         throw 'my error'
    //
    //     }
    //
    // } catch (err) {
    //     // console.log("JSON Error: " + err.message); // JSON Error: Данные неполны: нет имени
    //     console.log("JSON Error: " + err); 
    // }

}

/* try…catch…finally */

{
    // let json = '{ "age": 30 }'; // данные неполны
    //
    // try {
    //
    //     let user = JSON.parse(json); // <-- выполнится без ошибок
    //
    //     if (!user.name) {
    //         throw new SyntaxError("Данные неполны: нет имени"); // (*)
    //
    //     }        
    //
    // } catch (err) {
    //     console.log("JSON Error: " + err.message); // JSON Error: Данные неполны: нет имени
    //     // console.log("JSON Error: " + err); 
    // } finally {
    //     console.log('finally')
    // }

}






























