// классная работа контакты
const questions = [{             // создали массив для промптов
    question: " You name",
    defaultValue: "karina",
    field: "name",
}, {
    question: " You age",
    defaultValue: 25,
    field: "age",
}, {
    question: " You phone",
    defaultValue: "375291398578",
    field: "phone",
}, {
    question: " You emaile",
    defaultValue: "test@gmail.com",
    field: "email",
}]

function createName(question) {
    const answear = prompt(question.question, question.defaultValue)
    let testAnswear = /^[a-z0-9_-]{3,16}$/.test(answear)

    if (!testAnswear) {
        alert("invalid user name")
        return createName(question)
    }

    return answear
}

function createAge(question) {
    const answear = +prompt(question.question, question.defaultValue)

    if (isNaN(answear) || answear > 18 || Number.isInteger(answear)) {
        alert("invalid user age")
        return createName(question)
    }

    return answear
}

function createPhone(question) {
    const answear = prompt(question.question, question.defaultValue)

    let testAnswear = /^[\d+][\d()\ -]{10,14}\d$/

    if (!testAnswear) {
        alert("invalid user phone")
        return createPhone(question)
    }

    return answear
}

function createEmail(question) {
    const answear = prompt(question.question, question.defaultValue)

    let testAnswear = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(answear)   

    if (!testAnswear) {
        alert("invalid user emaile")
        return createEmail(question)
    }

    return answear
}
function addContact() {
    let contactData = {}

    questions.forEach(question => {
        if (question.field === "name") {
            contactData.name = createName(question)
        }

        if (question.field === "age") {
            contactData.age = createAge(question)
        }

        if (question.field === "phone") {
            contactData.phone = createPhone(question)
        }

        if (question.field === "emaile") {
            contactData.emaile = createEmail(question)
        }
    })


    return this.contacts = [...this.contacts, contactData]
}

//               ( "karina", "age", 36 )
function editeContact(name, key, value) {

    return this.contacts = this.contacts.map(contact => {
        if (contact.name === name) {
            return { ...contact, [key]: value }
        }
        return contact
    })
}

function removeContact(name) {

    return this.contacts = this.contacts.filter(contact => contact.name !== name)
}

function showContact () {
    for ( let prop of this.contacts) {
        console.log (prop) 
    }
}

function Contacts() {
    this.contacts = []

    this.addContact = addContact

    this.editeContact = editeContact

    this.removeContact = removeContact

    this.showContact = showContact
}

const contacts = new Contacts()
//contacts.addContact()
// contacts.editeContact("karina", "age", 36)
// contacts.editeContact("karina", "name", "Sonya")
// contacts.removeContact("karina")



// Домашняя работа.
// «Front End».Объекты»

// Задание: Использую полученные знания, реализуйте экземпляр любого объекта. Объект
// должен иметь, как внутренние, так и доступные для пользователя, свойства и методы.
// Примеры объектов:

//  Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
// расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.

//  Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
// электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
// счетчик горения лампочки.

//  Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
// вкл./выкл., расчет времени закипания воды.

//  Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
// двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
// (ввод информации о скорости движения), расчет пройденных километров.

//  Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
// почта), проверка введенной информации, например: проверить возраст – должен быть
// целым неотрицательным числом больше 18, вывод информации о конкретном
// контакте, вывод всех контактов.

// Можно выдумать любой другой объект. Кол-во методов и свойств может быть любым, но не
// менее трех.