// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].

{
    let user = {
        name: "John",
        age: 30
    };

    const keys = Object.keys(user)
    const values = Object.values(user)
    const entries = Object.entries(user)

    // console.log(keys);
    // console.log(values);
    // console.log(entries);


    for (let value of Object.values(user)) {
        // console.log(value);
    }
    for (let value of Object.entries(user)) {
        // console.log(value);
    }


}

// Трансформации объекта
// У объектов нет множества методов, которые есть в массивах, например map, filter и других.
// 
// Если мы хотели бы их применить, то можно использовать Object.entries 
// с последующим вызовом Object.fromEntries:

// Object.fromEntries()метод преобразует список пар ключ-значение в объект.

{
    let prices = {
        banana: 1,
        orange: 2,
        meat: 4,
    };

    let doublePrices = Object.fromEntries(
        // преобразовать в массив, затем map, затем fromEntries обратно объект
        Object.entries(prices).map(([key, value]) => {
           return  [key, value * 2]
        })
    );

    // console.log(doublePrices);

}