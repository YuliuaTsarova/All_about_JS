console.log(`Дата и время`);

let dateNow = new Date();
console.log(dateNow);

//получаеи иннформацию о ...
console.log(dateNow.getFullYear()); // годе
console.log(dateNow.getMonth()); // месяце
console.log(dateNow.getDay()); // дне
console.log(dateNow.getDate()); //дате
console.log(dateNow.getHours()); // часах
console.log(dateNow.getMinutes()); // минутах
console.log(dateNow.getSeconds()); // секундах
console.log(dateNow.getMilliseconds()); // милисекундах

//Меняем информацию
dateNow.setDate(1); // меняет дату
dateNow.setMonth(11); // меняет месяц и это январь так как отсчет с 0
dateNow.setHours(00); // меняет часы
dateNow.setMinutes(00); //меняет минуты
console.log(dateNow);

//метод указания даты в том регионе который нужен
console.log(dateNow.toLocaleDateString(`ru`)); 

// можно использовать специальные опции что бы поменять на нужный формат
let opt = {
    year: `numeric`,
    month: `numeric`,
    day: `numeric`,
    hour: `numeric`,
    minute: 'numeric',
    weekday: `long` // день недели
};
console.log(dateNow.toLocaleDateString(`ru`, opt));