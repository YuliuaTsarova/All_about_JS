//Конструктор, оператор "new"

{
    // function User(name) {
    //     this.name = name;
    //     this.isAdmin = false;

    //     // return this
    // }

    // let user = new User("Jack"); // шаблон с которым можно создать много обьектов
    // let user1 =new User("Olya");

    // alert(user.name); // Jack
    // alert(user.isAdmin); // false
}

// технически любая функция (кроме стрелочных функций,
// поскольку у них нет this) может использоваться
//  в качестве конструктора.

//Обычно конструкторы не имеют оператора return. 
// Их задача – записать все необходимое в this, 
// и это автоматически становится результатом.



/*Проверка на вызов в режиме конструктора: new.target*/


{
    // function User() {
    //     alert(new.target);
    //   }
      
    //   // без "new":
    //   User(); // undefined
      
    //   // с "new":
    //   new User(); // function User { ... }
}

