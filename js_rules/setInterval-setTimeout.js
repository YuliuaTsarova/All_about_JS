"use strict"

// функция setInterval запускает заданный код через
// определенные промежутки времени.

{
    // setInterval(timer, 1000);
    //
    // function timer() {
    //     console.log('!');
    // }

}
// Необязательно создавать отдельную функцию -
// можно просто в первый параметр setInterval передать анонимную функцию:

{
    // setInterval(function () {
    //     console.log('!');
    // }, 1000);
}

// Остановка таймера 

{
    // let i = 0;
    //
    // let timerId = setInterval(function () {
    //     console.log(++i);
    //
    //     if (i >= 10) {
    //         clearInterval(timerId);
    //     }
    // }, 1000);

    // console.log(timerId);

}

// передача параметров

{
    // setInterval(func, 1000, 'a', 'b');
    //
    // function func(str1, str2) {
    //     console.log(str1, str2); // каждую секунду будет вводить 'a','b'
    // }
}

//тоже через анонимную функцию

{
    // setInterval(function(str1, str2) {
    //     console.log(str1, str2);
    // }, 1000, 'a', 'b');
}


// привязка this

{
    // let elem = document.querySelector('#elem');
    //
    // elem.addEventListener('click', function () {
    //    
    //     setInterval(func, 1000, this); // параметром передаем this
    //
    //     function func(self) { // в self попадает this
    //       
    //         console.log(self.value);
    //     }
    // });
}

//тоже через анонимную функцию

{
    // let elem = document.querySelector('#elem');
    //
    // elem.addEventListener('click', function () {
    //     setInterval(() => {
    //         console.log(this.value);
    //     }, 1000);
    // });
}

/*** setTimeout ***/

// setTimeout() метод устанавливает таймер,
//     который выполняет функцию или указанный 
// фрагмент кода по истечении времени таймера.

{
    // let elem = document.querySelector('#elem');
    //
    // elem.addEventListener('click', function () {
    //     setTimeout(function () {
    //         alert('!');
    //     }, 3000);
    // });


}




















































