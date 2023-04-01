"use script"


{
    // const button = document.querySelector("#button")
    //
    //
    // button.addEventListener("click", function (event) {
    //     // console.log(button)
    //     // console.log(event)
    //     // console.log(event.type)
    //     console.log(event.target)
    //
    //
    // })
}

// focus

{
    // let elem = document.querySelector('#elem');
    //
    // elem.addEventListener('focus', function () {
    //     console.log(elem.value = "Hi");
    // });
    //
    // elem.addEventListener('blur', function () {
    //     elem.value = "By"
    // });
}


// this

{
    // let elem = document.querySelector('#elem');
    // elem.addEventListener('blur', func);
    //
    // function func() {
    //     console.log(this); // содержит ссылку на наш элемент
    //     console.log(elem);
    // }
}


{
    // let button1 = document.querySelector('#button1');
    // let button2 = document.querySelector('#button2');
    // let button3 = document.querySelector('#button3');
    //
    //
    // button1.addEventListener('click', func);
    // button2.addEventListener('click', func);
    // button3.addEventListener('click', func);
    //
    // function func() {
    //     console.log(this.value);
    // }
}

// группы элементов

{
    // let elems = document.querySelectorAll('.paragraph');
    //
    //
    //
    // for (let elem of elems) {
    //     elem.addEventListener('click', function func() {
    //         this.textContent = this.textContent + '!';
    //     });
    // }    
}

// отвязывание событий

{
    // const button = document.querySelector("#button")
    // button.addEventListener('click', func);
    //
    // function func() {
    //     console.log('!!!');
    //     this.removeEventListener('click', func);
    // }
}

// checkbox

{
    // let elem = document.querySelector('#checkbox');
    //
    //
    // elem.addEventListener("click", function () {       
    //     console.log(elem.checked);
    //    
    //    
    // })
}

// disabled 

{
    // let elem = document.querySelector('#disabled');
    // let button = document.querySelector('#button4');
    //
    // button.addEventListener('click', function () {
    //     elem.disabled = !elem.disabled;
    // });


}

// radio 
// чтобы отличить на JavaScript, какая именно кнопка была выбрана,
//  каждой радиокнопке в группе добавляют атрибуты value с различным значением
// и по умолчанию, ей необходимо задать атрибут checked


{
    // let radios = document.querySelectorAll('input[type="radio"]');
    // let button = document.querySelector('#button5');
    //
    // button.addEventListener('click', function () {
    //     for (let radio of radios) {
    //         if (radio.checked) {
    //             console.log(radio.value);
    //         }
    //     }
    // });


}

// change - возникающее в полях ввода при их изменениях

{
    // let elem = document.querySelector('#elem');
    //
    // elem.addEventListener('change', function () {
    //     console.log(this.value);
    // });

}

//input - возникает каждый раз при вводе нового символа в инпут

{
    // let elem = document.querySelector('#elem');
    //
    // elem.addEventListener('input', function() {
    //     console.log(this.value);
    // });
}

// существуют специальные методы, которые позволяют принудительно установить
// фокус в инпут или убрать его оттуда. Это методы focus и blur.


{
    // let elem   = document.querySelector('#elem');
    // let button = document.querySelector('#button');
    //
    // button.addEventListener('click', function() {
    //     elem.focus();
    // });

}

// выпадающий список
// переменная, в которой хранится ссылка на селект является массивом, 
//     элементами которого являются теги option

{
    let select = document.querySelector('#select');

    select.addEventListener('change', function () {
        console.log(this.value);
        console.log(this.selectedIndex);
    });

    // console.log(document.querySelectorAll('#select option'));


    // for (let option of select) {
    //     console.log(option);
    // }

    console.log(select[0]);

    console.log(select[0].text);
    console.log(select[0].value);
    console.log(select[0].selected);


}















