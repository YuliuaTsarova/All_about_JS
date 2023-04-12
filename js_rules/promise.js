"use strict"


/** Синхронный и асинхронный код **/

{
    // console.log('3');
    //
    // setTimeout(function () {
    //     console.log('1');
    // }, 0)
    //
    // console.log('2')
}

{
    // const elem = document.querySelector('#button')
    // elem.addEventListener('click', function () {
    //     console.log('1');
    // })
    //
    // console.log('2')
}

{
    // let image = document.createElement('img');
    // image.src = 'img/dog.jpg';
    // document.body.appendChild(image);
    //
    // image.addEventListener('load', function () {
    //     document.body.prepend(image); // размещаем по загрузке
    // })

}

{
    // function make() {
    //     setTimeout(function () {
    //         console.log('1');
    //     }, 3000)
    // }
    //
    // make();
    // console.log('2')

}

// сделать так, чтобы второй вывод в консоль выполнился после того,
// как выполнится асинхронная операция внутри функции make.

/*** Первый подход Колбэк ***/

{
    // function make(callback) {
    //     console.log(callback);
    //     setTimeout(function () {
    //         console.log('1'); // некая асинхронная операция, может не одна
    //         callback();       // затем наш коллбэк
    //     }, 3000)
    // }
    //
    // make(() => console.log('2'))
}

/** Передача результата в коллбэк **/

// Пусть теперь асинхронная операция после своего завершения 
// не выводит нечто в консоль,
// а получает некий результат.

{
    // function make(callback) {
    //     setTimeout(() => {
    //         let res = [1, 2, 3, 4, 5].reduce((acc, el) => acc + el);
    //         callback(res); // передаем результат параметром
    //     }, 2000)
    // }
    //
    // make((res) => console.log(res))

}

/** Обработка исключений в коллбэках **/

// исключения, возникшие внутри асинхронной функции,
// не могут быть пойманы через try-catch
// В коллбэк-подходе с исключениями работают следующим образом: 
// в первый параметр коллбэка отправляют результат, а во второй - ошибку.

{
    // function make(num, callback) {
    //     setTimeout(() => {
    //         let arr = [1, 2, 3, 4, 5];
    //
    //         let err;
    //         if (arr[num] === undefined) {
    //             err = 'elem not exists'; // текст ошибки
    //         } else {
    //             err = null; // ошибки нет
    //         }
    //
    //         callback(arr[num], err);
    //     }, 3000);
    // }
    //
    // make(10, (res, err) => {
    //     if (!err) {
    //         console.log(res); // ошибки не возникло, выведем результат
    //     } else {
    //         console.log(err); // ошибка возникла, выведем ее текст
    //     }
    // });

}

/*** Callback hell ***/

{
    //
    //
    // function loadImage(img, callback) {
    //     //......
    //
    //     // callback(res, err)
    //     //
    // }
    //
    // loadImage('img1.png', function (image1, err1) {
    //     document.body.append(image1);
    //
    //     loadImage('img2.png', function (image2, err2) {
    //         document.body.append(image2);
    //
    //         loadImage('img3.png', function (image3, err3) {
    //             document.body.append(image3);
    //             console.log('все картинки загружены');
    //         });
    //     });
    // });


}


/*** Модель Promise ***/

// Промис представляет собой объект, в который параметром передается функция, 
// внутри которой нужно размещать наш асинхронный код

// let promise = new Promise(function(resolve, reject) {
//       ...executor
//    
// });

// promise.then(function() {
//     // выполнится при завершении асинхронного кода
// });

{
    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         let result = [1, 2, 3, 4, 5];
    //         resolve(result)
    //     }, 2000);
    // });
    //
    // console.log(promise);
    //
    // promise.then((res) => console.log(res))

}

// исключения

{
    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         let isError = true;
    //
    //         if (!isError) {
    //             resolve([1, 2, 3, 4, 5]);
    //         } else {
    //             reject(new Error('error in promise'));
    //         }
    //     }, 3000);
    // });
    //
    // promise.then(res => console.log(res), err => console.log(err))
}
// try {
//    
// }catch () {
//    
// }

{
    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         let isError = true;
    //
    //         if (!isError) {
    //             resolve([1, 2, 3, 4, 5]);
    //         } else {
    //             reject(new Error('error in promise'));
    //         }
    //     }, 2000);
    // })
    //
    // // promise.then(res => console.log(res), err => console.log(err))
    //
    //
    // promise.then(res => console.log(res))
    //     .catch(err => console.log(err))
    //     // .finally(() => console.log('finally'))


    /** Состояния промиса **/

//     Промис может находится в одном из трех состояний.
//     При создании промис находится в ожидании (pending),
//     а затем может стать исполненным (fulfilled), 
//     вернув полученный результат, или отклоненным (rejected), вернув причину отказа.

    // console.log(promise);
}


/** Цепочки промисов **/


{
    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(function () {
    //         resolve('string');
    //     }, 3000);
    // })
    //
    // promise.then(result => result + '!') // string!
    //     .then(result => result + '1') // string!1
    //     .then(result => result + '2') // string!12
    //     .then(result => console.log(result))


    // Функции цепочки могут также возвращать промисы.
    // В этом случае результат этого промиса попадет в следующий then:


    // .then(result => result + '1')
    // .then(result => {
    //     return new Promise((resolve) => {
    //         resolve(result + '2'); // этот результат попадет в следующий then
    //     });
    // })
    // .then(result => result + '3')
    // .then(result => console.log(result))
    // .catch(err => console.log(err))

}


/*** Запросы по сети, метод fetch ***/

// let promise = fetch(url, [options])
// url – URL для отправки запроса.
// options – дополнительные параметры: метод, заголовки и так далее.

const container = document.createElement('div')
container.style.display = 'flex',
    container.style.flexDirection = "column"
container.style.marginLeft = "50px"
document.body.prepend(container)
const paragraph = document.createElement('span')
const button = document.createElement('button')
button.style.width = "100px"
button.style.height = "50px"
button.style.margin = "5px"
button.innerHTML = "GET"

const paragraph1 = document.createElement('span')
const button1 = document.createElement('button')
button1.style.width = "100px"
button1.style.height = "50px"
button1.style.margin = "5px"
button1.innerHTML = "POST"


const paragraph2 = document.createElement('span')
const button2 = document.createElement('button')
button2.style.width = "100px"
button2.style.height = "50px"
button2.style.margin = "5px"
button2.innerHTML = "PUT"

const paragraph3 = document.createElement('span')
const button3 = document.createElement('button')
button3.style.width = "100px"
button3.style.height = "50px"
button3.style.margin = "5px"
button3.innerHTML = "PATCH"


const button4 = document.createElement('button')
button4.style.width = "100px"
button4.style.height = "50px"
button4.style.margin = "5px"
button4.innerHTML = "DELETE"


container.append(
    paragraph,
    button,
    paragraph1,
    button1,
    paragraph2,
    button2,
    paragraph3,
    button3,
    button4
)
{
// GET
    button.addEventListener('click', () => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.data = data
                localStorage.setItem('',)
                return paragraph.innerHTML = data.title
            })

    })


//POST

    button1.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',

            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return paragraph1.innerHTML = data.title
            })

    })


//PUT


    button2.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                title: 'foo',
                body: 'barppp',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return paragraph2.innerHTML = data.body
            })

    })


//PATCH


    button3.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PATCH',
            body: JSON.stringify({
                title: 'fo',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                return paragraph3.innerHTML = data.title
            })

    })


// DELETE  

    button4.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)

            })

    })
}


/*** Promise.all ***/

// параллельно загружает несколько файлов и обрабатывает результат, когда он готов.

// let promise = Promise.all(iterable);

// Метод Promise.all принимает массив промисов (может принимать любой перебираемый объект, 
//  но обычно используется массив) и возвращает новый промис.

{
    // Promise.all([
    //     new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    //     new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    //     new Promise(resolve => setTimeout(() => resolve(3), 1000))
    // ]).then(res => console.log(res));

    // Если любой из промисов завершится с ошибкой, то промис, возвращённый Promise.all, 
    // немедленно завершается с этой ошибкой.

    // Promise.all([
    //     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    //     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    //     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    // ]).catch(err => console.log(err)); // Error: Ошибка!
}

/*** Promise.allSettled ***/
// let promise = Promise.allSettled(iterable);

// Метод Promise.allSettled всегда ждёт завершения всех промисов. В массиве результатов будет
//
// {status:"fulfilled", value:результат} для успешных завершений,
// {status:"rejected", reason:ошибка} для ошибок.

{
    // Promise.allSettled([
    //     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    //     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    //     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    // ]).then(res => console.log(res));
}


/*** Promise.race ***/

// Метод очень похож на Promise.all, но ждёт только первый выполненный промис,
//     из которого берёт результат (или ошибку).

{
    // Promise.race([
    //     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    //     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    //     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    // ]).then(res => console.log(res));
}

// Метод очень похож на Promise.race, но ждёт только первый успешно выполненный промис,
// из которого берёт результат.

{
    // Promise.any([
    //     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
    //     new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    //     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
    // ]).then(res => console.log(res));
}


{
    // Promise.resolve('haha').then(res => console.log(res))
    // Promise.reject('haha').catch(res => console.log(res))
}


/*** Async/await ***/

// синтаксис для работы с промисами

// У слова async один простой смысл: эта функция всегда возвращает промис. 
// Значения других типов оборачиваются в завершившийся успешно промис автоматически.

{
    // async function f() {
    //     return 1;
    // }
    //
    // f().then(res => console.log(res))
    //
    // // Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор,
    // // пока промис справа от await не выполнится. После чего оно вернёт его результат,
    // // и выполнение кода продолжится.
    //
    // async function func() {
    //
    //     let promise = await new Promise((resolve, reject) => {
    //         setTimeout(() => resolve("готово!"), 2000)
    //     });
    //
    //
    //     console.log(promise);
    // }
    //
    // func();
}

// ошибки можно ловить, используя try..catch

{
    // async function f() {
    //
    //     try {
    //         let response = await fetch('/no-user-here');
    //         let user = await response.json();
    //     } catch (err) {
    //         // перехватит любую ошибку в блоке try: и в fetch, и в response.json
    //         console.log(err);
    //     }
    // }
    //
    // f();
}

// метод .catch промиса, чтобы обработать ошибку:

{
//     async function f() {
//         let response = await fetch('http://no-such-url');
//     }
//
// // f() вернёт промис в состоянии rejected
//     f().catch(console.log); // TypeError: failed to fetch // (*)
}


{
    // button.addEventListener('click', async () => {
    //
    //     try {
    //         const request = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //         const response = await request.json()
    //         // console.log(response);
    //
    //     } catch (err) {
    //         console.log(err.name);
    //     }
    //
    //
    // })

    // button.addEventListener('click', () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts/1')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             return paragraph.innerHTML = data.title
    //         })
    //
    // })
}

// частый кейс
{
    // const urls = [
    //     "https://jsonplaceholder.typicode.com/todos/1",
    //     "https://jsonplaceholder.typicode.com/posts/1",
    //     "https://jsonplaceholder.typicode.com/users",
    // ]
    //
    //
    // const fetchData = async () => {
    //     try {
    //         let results = await Promise.all(urls.map(url => fetch(url).then(res => res.json())));
    //
    //         console.log(results);
    //
    //     } catch (error) {
    //         console.log("Error", error)
    //     }
    // }
    //
    // // fetchData()

}












