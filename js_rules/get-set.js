"use strict"

/*** Флаги и дескрипторы свойств ***/

//  Помимо значения value, свойства объекта имеют три специальных атрибута
//  (так называемые «флаги»).
//
//  writable – если true, свойство можно изменить, иначе оно только для чтения.
//  enumerable – если true, свойство перечисляется в циклах, в противном случае циклы 
//  его игнорируют.
//  configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, 
//  иначе этого делать нельзя.


// Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.
//  let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

{
    // let user = {
    //     name: "John",
    //     age: 30
    // };
    //
    // let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
    //
    // console.log(descriptor);
}


// Чтобы изменить флаги, мы можем использовать метод Object.defineProperty.
// Object.defineProperty(obj, propertyName, descriptor)

{

    // let user = {
    //     name: "John",
    //     age: 20,
    //     city: "Minsk"
    // };
    //
    // Object.defineProperty(user, "name", {
    //     writable: false,
    //     enumerable: false,
    // });
    //
    // let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
    //
    // console.log(descriptor);
    //
    // // user.name = "Pete";
    //
    // for (let key in user) console.log(key)

}

{
    /** Неконфигурируемое свойство **/

        // Обратите внимание: configurable: false не даст изменить флаги свойства,
        // а также не даст его удалить. При этом можно изменить значение свойства.

    let user = {
            name: "John",
            age: 20,
            city: "Minsk"
        };

    Object.defineProperty(user, "name", {
        configurable: false
    });


    // Object.defineProperty(user, "name", {
    //     enumerable: false
    // });


    let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

    // console.log(descriptor);


    user.name = "Pete"; // работает
    // delete user.name;
}

// метод Object.defineProperties(obj, descriptors),

{
    let user = {};

    Object.defineProperties(user, {
        name: {value: "John", writable: false, enumerable: true},
        surname: {value: "Smith", writable: false},

    });

    let descriptor = Object.getOwnPropertyDescriptors(user); // получаем все свойства

    // console.log(descriptor);

}

// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства.
// Устанавливает configurable: false, writable: false для всех существующих свойств.

{
    let user = {
        name: "John",
        age: 20,
        city: "Minsk"
    };

    Object.freeze(user)

    let descriptor = Object.getOwnPropertyDescriptors(user); // получаем все свойства

    // console.log(descriptor);

}


/*** Свойства - геттеры и сеттеры **/

//     свойства-аксессоры (accessor properties) это функции, 
//     которые используются для присвоения и получения значения,

//     Свойства-аксессоры представлены методами: «геттер» – для чтения и «сеттер» – 
//     для записи.
//     При литеральном объявлении объекта они обозначаются get и set


{
    let user = {
        name: "John",
        surname: "Smith",

        get fullName() {
            return `${this.name} ${this.surname}`;
        },

        set fullName(value) {
            const [first, second] = value.split(" ");
            this.firstName = first;
            this.lastName = second;

        }
    };

    // console.log(user)   // не вызываем так как это обычное свойство

    user.fullName = "Тест"; // ошибка, свойство только для чтения

    user.fullName = "Alice Cooper";

    // console.log(user.fullName)
}

// инкапсуляция

{
    let user = {

        get name() {
            return this._name;
        },

        set name(value) {
            if (value.length < 4) {
                console.log("Имя слишком короткое, должно быть более 4 символов");
                return;
            }
            this._name = value;
        }
    };

    // console.log(user);

    user.name = "Pete";


    // user.name = ""; // Имя слишком короткое...
}
















