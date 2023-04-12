"use strict"

{
    let name = "user";
    let value = "John Smith"

    // document.cookie = `${user}=${value}`;

// кодирует в user=John%20Smith

// document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

}

/** обновляем только куки с именем 'user'  **/

{
    // document.cookie = "user=John"
}

/** время жизни куки устанавливается в формате GMT. Этот формат можно получить так **/

{

    // let date = new Date(Date.now() + 20000);
    // date = date.toUTCString();
    // document.cookie = "user=John; expires=" + date;

}


/** получить куки getCookie(name) **/

// function getCookie(name) {
//     let matches = document.cookie.match(new RegExp(
//         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//     ));
//     return matches ? decodeURIComponent(matches[1]) : undefined;
// }
//
// console.log(getCookie('user'));


/** установить куки setCookie(name, value, options)  **/


function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

// let date = new Date(Date.now() + 20000);

// setCookie('user', 'John', {secure: false, 'expires': 3600})


/** delete cookies **/

// let date = new Date(Date.now() - 1);
//
// function deleteCookie(name) {
//     setCookie(name, "", {
//         'expires': date
//     })
// }
//
// deleteCookie('user')


//***  LocalStorage, sessionStorage ***/

// Объекты хранилища localStorage и sessionStorage предоставляют
// одинаковые методы и свойства:
//
// setItem(key, value) – сохранить пару ключ/значение.
// getItem(key) – получить данные по ключу key.
// removeItem(key) – удалить данные с ключом key.
// clear() – удалить всё.
// key(index) – получить ключ на заданной позиции.
//     length – количество элементов в хранилище.


{
    localStorage.setItem('test', 1);
    // console.log(localStorage.getItem('test'));
}

// удалить ключ

{
    // localStorage.removeItem('test');
}

//Перебор ключей

{
//     let keys = Object.keys(localStorage);
//     for (let key of keys) {
//         console.log(`${key}: ${localStorage.getItem(key)}`);
//     }
}

//Только строки
// ключ и значение должны быть строками.

// Мы можем использовать JSON для хранения объектов:

{
    // localStorage.user = JSON.stringify({name: "John"});
    // console.log(typeof localStorage.user);
    //
    // let user = JSON.parse( localStorage.user );
    // console.log(typeof user)
}

// sessionStorage

{
    // sessionStorage.setItem('test', 1);
}






