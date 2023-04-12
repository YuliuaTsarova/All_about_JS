"use strict"

{
    let elem = document.querySelector('#elem');

    elem.addEventListener('blur', func);

    function func() {
        // console.log(this.value); // по потери фокуса выведет 'text'
    }

}

/** потеря контекста **/

// внутренняя функция имеет доступ ко всем переменным внешней, 
//     но не имеет доступа this. 
//     То есть: если внешняя функция привязана к какому-то DOM элементу, 
//     то this в ней будет указывать на этот элемент, 
//     но this внутренней функции - не будет!

{
    let elem = document.querySelector('#elem');
    elem.addEventListener('blur', parent);

// Вызовется по потери фокуса:
//     function parent() {
//         console.log(this);
//
//         console.log(this.value);
//
//         function child() {
//             console.log(this);
//             console.log(this.value);
//         }
//
//         child(); // вызываем дочернюю функцию
//     }
}

/** Решение проблемы с контекстом **/
// Первое решение проблемы
{
    let elem = document.querySelector('#elem');
    elem.addEventListener('blur', parent);

    function parent() {
        // console.log(this.value); // выведет 'text'

        let self = this; // запишем this в любую переменную, например, в self

        function child() {
            // console.log(self.value); // выведет 'text'
        }

        child();
    }
}

// Второе решение проблемы

{
    // let elem = document.querySelector('#elem');
    // elem.addEventListener('blur', parent);
    //
    // function parent() {
    //     child(this); // передаем параметром this
    //
    //     function child(param) {
    //         console.log(param.value); // выводим value инпута
    //     }
    // }
}

// Третье решение проблемы

{
    // let elem = document.querySelector('#elem');
    // elem.addEventListener('blur', parent);
    //
    // function parent() {
    //     console.log(this.value); // выведет 'text'
    //
    //     let child = () => {
    //         console.log(this.value); // выведет 'text'
    //     }
    //     child();
    // }
}

// Привязывание контекста через методы call, apply, bind

{
    // let elem = document.querySelector('#elem');
    //
    // function func(param1, param2, param3) {
    //     console.log(`${this.value} ${param1} ${param2} ${param3}`);
    // }
    //
    // func.call(elem, 'html', 'css', 'js');

}

{
    // let elem = document.querySelector('#elem');
    //
    // function func(surname, name) {
    //     console.log(this.value + ', ' + surname + ' ' + name);
    // }
    //
    // func.apply(elem, ['hello', 'John Smit']);
}

{
    let elem = document.getElementById('elem');

    function func(param1, param2) {
        // console.log(this.value + param1 + param2);
    }

    let newFunc = func.bind(elem); 
    //
    newFunc('1', '2');

    // // можно перезаписать func = func.bind(elem);
     
}































