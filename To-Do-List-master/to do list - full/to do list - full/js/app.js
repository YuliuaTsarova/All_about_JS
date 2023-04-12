// выбрать элементы
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Имена классов
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//  переменные
let LIST, id;

// // получить item из localstorage
 let data = localStorage.getItem("TODO");

//проверять, не являются ли данные пустыми
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // установите идентификатор последним в списке
    loadList(LIST); // загрузить список в пользовательский интерфейс
}else{
    // if data isn't empty
    LIST = [];
    id = 0;
}

// загружать элементы в пользовательский интерфейс
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// очищать хранилище
clear.addEventListener("click", function(){
    localStorage.clear(); // удалит все значения из хранилища.
    location.reload(); // метод обновляет страницу
});

//  Показать дату
const options = {weekday : "long", month:"short", day:"numeric", year: 'numeric'};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("ru-RU", options);

// добавляем функцию.

function addToDo(toDo, id, done, trash){
    
    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const item = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                `;
    
    const position = "beforeend";
    
    list.insertAdjacentHTML(position, item); // insertAdjacentHTML() разбирает указанный текст как HTML или XML и вставляет полученные узлы (nodes) в DOM дерево в указанную позицию. Данная функция не переписывает имеющиеся элементы, что предотвращает дополнительную сериализацию и поэтому работает быстрее, чем манипуляции с innerHTML.
}

//  добавить элемент в список пользователя клавиши ввода
document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;
        
        // if the input isn't empty если input не пуст
        if(toDo){
            addToDo(toDo, id, false, false);
            
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            
            // add item to localstorage ( this code must be added where the LIST array is updated)
            //добавить элемент в localstorage ( этот код должен быть добавлен при обновлении массива LIST)
            //localStorage.setItem("TODO", JSON.stringify(LIST));
            
            id++;
        }
        input.value = "";
    }
});


// завершить to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    LIST[element.id].done = LIST[element.id].done ? false : true;
}

// удалить to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    LIST[element.id].trash = true;
}


list.addEventListener("click", function(event){
    const element = event.target; // возвращает нажатый элемент внутри списка
    const elementJob = element.attributes.job.value; // заполнить или удалить
    
    if(elementJob === "complete"){
        completeToDo(element);
    }else if(elementJob === "delete"){
        removeToDo(element);
    }
    
    // add item to localstorage ( this code must be added where the LIST array is updated)
    //добавить элемент в localstorage ( этот код должен быть добавлен при обновлении массива LIST)
    //localStorage.setItem("TODO", JSON.stringify(LIST));
});


















