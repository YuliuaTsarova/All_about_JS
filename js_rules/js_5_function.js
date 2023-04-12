//  С УРОКА НЕ ВСЕ ПЕРЕПИСАНО!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//  function имя(параметры) {
//    ...тело...
//   }

/*

function showMessage () {
    console.log (`Hello`);
}

showMessage ()
showMessage ()
showMessage ()

*/
/*
const getUser = function (num)) {
    console.log (`Kolya`);
    console.log (num);
}

getUser(5)



const setUser = () => {
    console.log (`Olya`);
}   
setUser()

const setMessage = (ISmESSAGE) ...getUser.НЕ НАПИСАЛА */

//локальные переменные
/*
let userName = "Vasya"; //глобальная переменная

function showMessage(num, text, isUser = false) { //дефолтное значение

    let userName = "Petya"; // это локальная переменная
    let message = `Hello, ${userName}`;
    console.log (message);
    console.log (num);
    console.log (text);
    console.log (isUser)
}

showMessage (5,"hi-hi",true)

*/


/*вернуть результат

function sum (a,b){
return a + b
}

let result = sum (1,2)

console.log (result);
console.log (sum (1,2))

*/

//обязательно на строчке return должно быть хотябы скобка или вся фраза
/*
function getAge(age) {

    // return age < 18 ? `Доступ запрещен`: `Доступ разрешен`

    if (age < 18) {
        return `Доступ разрешен`
    } else {
        return `Доступ разрешен`
    }

}

let result = getAge(15)

console.log(result);
*/

//колбэки это функции которые выполняются когда нибудь потом

/*function ask(question, yes, no) {
if ( confirm(question))yes()
else no()
}

function showOk() {
    console.log(`Вы согласны`)
}

function showCancel() {
    console.log(`Вы отменили выполнение`)
}

ask (`Вы согласны?`, showOk , showCancel)

*/

/* переписапть!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
ask (`Вы согласны?`, 
showOk ,
 showCancel)
*/
/*
ask(`Вы согласны?`,
    yes () => console.log(`Вы согласны`),
    no () => console.log(`Вы отменили выполнение`)
)
*/

