"use strict";
// Домашняя работа.
// «Front End».Объекты»

// Задание: Использую полученные знания, реализуйте экземпляр любого объекта. Объект
// должен иметь, как внутренние, так и доступные для пользователя, свойства и методы.
// Примеры объектов:

//  Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
// расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.

console.log('%c-------Калькулятор---------', 'color: white; background: #212529; font-size: 10px');


{
    //    let Calc = function() {
    //     this.details = function(){
    //       this.a = +prompt('Введите первое число');
    //       this.b = +prompt('Введите второе число')
    //       this.oper = (prompt('Введите операцию (*,/,+,-)'));
    //       this.operation();
    //     }
    //     this.operation = function() {
    //       switch(this.oper){
    //         case '+':
    //           this.result = this.a + this.b
    //          break;
    //          case '-':
    //           this.result = this.a - this.b
    //           break;
    //           case '*':
    //             this.result = this.a * this.b
    //             break;
    //           case '/':
    //             this.result = this.a / this.b
    //             break;
    //         }
    //         this.showCalc();
    //     }
    //     this.showCalc = function () {
    //       console.log(this.a + this.oper + this.b + '=' + this.result);
    //     }

    //   }

    //   let calc = new Calc ();
    //   calc.details();

}

//  Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
// электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
// счетчик горения лампочки.

console.log('%c-------Лампочка---------', 'color: white; background: #212529; font-size: 10px');
{
    // let Lightbulb = function (name) {

    //     this.details = function () {
    //         this.name = name;
    //         this.power = +prompt('Введите мощность лампочки, Вт');
    //         this.costEnergy = +prompt('Введите стоимость электроэнергии за 1Квт' + '/' + 'ч');
    //         if (confirm('Включить лампочку?')) {
    //             this.workTime = +prompt('Сколько времени работает лампочка? , ч');
    //         } else {
    //             this.workTime = 0;
    //         };

    //         this.operation();
    //     };

    //     this.operation = function () {
    //         this.result = (this.power / 1000) * this.costEnergy * this.workTime;

    //         this.show();
    //     };

    //     this.show = function () {

    //         if (this.workTime === 0 || this.workTime === undefined) {
    //             console.log('Лампочка "' + this.name + '" не включена');
    //         } else {
    //             console.log('Лампочка "' + this.name + '" проработала - ' + this.workTime + 'ч, ' + 'Стоимость электроэнергии ' + this.costEnergy + 'р');
    //             console.log('Стоимость потраченой электроэнергии составляет = ' + this.result.toFixed(1) + 'р.')
    //         }
    //     };
    // };

    // let lightBulb = new Lightbulb('Прихожая');
    // lightBulb.details();

    // let lightBulb2 = new Lightbulb('Кухня');
    // lightBulb2.details();

    // let lightBulb3 = new Lightbulb('Ванная');
    // lightBulb3.details();

    // let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result;

    // console.log('Всего стоимость потраченной электроэнергии составляет - ' + totalCost.toFixed(1) + 'р');

}
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

console.log('%c-------Вебинар---------', 'color: white; background: #212529; font-size: 10px');

// Запись на вебинар
{
    function Webinar() {
        this.name;
        this.age;
        this.goal;

        const createName = () => {
            this.name = prompt("Ваше Имя");
            return this.name;
        }

        const createAge = () => {
            this.age = prompt("Ваш возраст")
            let checkAnswear = /^[0-9]{1,2}$/.test(this.age);
            if (!checkAnswear) {
                alert("Неверный возраст!")
                return createAge()
            }
            return this.age;
        }

        const createDay = () => {
            this.day = prompt("В какой день вас записать? (пн, вт, ср, птн, сб) ");
            return this.day
        }

        const createGoal = () => {
            this.goal = prompt("Напишите Вашу цель Вебинара");
            return this.goal
        }

        this.createUser = function () {
            createName();
            createAge();
            createDay();
            createGoal();
        }

        this.addLead = function () {
            this.lead = {
                name: this.name,
                age: this.age,
                day: this.day,
                goal: this.goal,
            }
        }

        this.showContact = function () {
            for (let key in this.lead) {
                console.log(`${key}: ${this.lead[key]}`)
            }
        }
    }

    let сlient = new Webinar();
    сlient.createUser();
    сlient.addLead();
    сlient.showContact();

}
