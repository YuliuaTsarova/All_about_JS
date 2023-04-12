// Из других домашек
// {

//     let WorkDOM = function () {

//         this.createTag = function (nameTag) {
//             const tag = document.createElement(`${nameTag}`);
//             document.body.prepend(tag)
//             console.log(tag);
//         }

//         this.getTag = function (nameTag) {
//             const gettag = document.querySelector(`${nameTag}`)
//             console.log(gettag);

//         }

//         this.createAttr = function (nameAt, nameAttr, value) {
//             const input = document.createElement(`${nameAt}`);
//             document.body.prepend(input)
//             input.setAttribute(`${nameAttr}`, `${value}`)
//             console.log(input);
//             const get = input.getAttribute(`${nameAttr}`)
//             console.log(get);

//         }

//         this.createElement = function (elem) {
//             const div = document.querySelector('div');
//             const element = document.createElement(`${elem}`);
//             element.innerHTML = "Hello";
//             div.append(element);
//             const el = document.querySelector(`${elem}`);

//             console.log(element);
//             console.log(el);
//         }

//         this.addClass = function () {
//             const p = document.querySelector('p');
//             p.classList.add('header');
//             console.log(p);

//         }
//         this.removeClass = function () {
//             const p = document.querySelector('p');
//             p.classList.remove('container__header');
//             console.log(p);

//         }
//         this.toggleClass = function () {
//             const p = document.querySelector('p');
//             p.classList.toggle('container__header');
//             console.log(p);

//         }

//         this.hasClass = function () {
//             const div = document.querySelector('div');
//             const clas = div.classList.contains("container");
//             console.log(clas);
//         }

//         this.append = function () {
//             const div = document.querySelector('div');
//             const h1 = document.createElement('h1');
//             h1.innerHTML = "Hello World";
//             h1.classList.add('headerH1')
//             div.prepend(h1);

//             console.log(h1);
//         }

//         this.on = function () {
//             const click = document.querySelector('.headerH1')
//             console.log(click);

//             click.addEventListener('mousemove', function () {
//                 this.style.backgroundColor = 'green';


//             })
//             click.addEventListener('mouseout', function () {
//                 this.style.backgroundColor = 'white';

//             })

//         }

//     };
//     // };

//     let DOM = new WorkDOM()
//     // console.log(DOM);
//     DOM.createTag('div')
//     DOM.getTag('div')
//     DOM.createAttr('img', 'type', 'src')
//     DOM.createElement('span')
//     // DOM.addClass()
//     // DOM.removeClass()
//     // DOM.toggleClass()
//     DOM.hasClass()
//     DOM.append()
//     DOM.on()

// }

{
    let DOMControl = function() {

        this.create = function(tagName) {
            const tag = document.createElement(tagName);
            return tag;
        }

        this.attr = function(elem, attribute, valueAtrribute) {
            if(arguments.length === 3 ){
                this.element = this.create(elem);
                this.element.setAttribute(attribute, valueAtrribute)
                document.body.append(this.element)
                return this.element.getAttribute(attribute);
            } else {
                this.element = this.create(elem);
                document.body.append(this.element)
            }
        }

        // this.html = function(elem, value) {
        //     this.searchElem = document.querySelector(elem);
        //     this.searchElem.innerHTML = value;
        // }
        
        // this.search = function(selector) {
        //     this.search = document.querySelectorAll(selector);
        //     return this.search;
        // }

        // this.addClass = function(elem, className) {
        //     this.elem = document.querySelector(elem);
        //     this.elem.classList.add(className);
        // }

        // this.removeClass = function(elem, className) {
        //     this.elem = document.querySelector(elem);
        //     this.elem.classList.remove(className);
        // }

        // this.toggleClass = function(elem, className) {
        //     this.elemToggle = document.querySelector(elem);
        //     this.elemToggle.addEventListener('click', () => {
        //         this.elemToggle.classList.toggle(className)
        //     })
        // }

        // this.hasClass = function(elem, className) { 
        //     this.elem = document.querySelector(elem);
        //     if(this.elem.classList.contains(className)) return true;
        //     else return false;
        // }

        // this.append = function(elem, newElem, beforeElem) {
        //     if(beforeElem !== undefined){
        //         this.beforeElem = document.querySelector(beforeElem);
        //         this.newElem = document.createElement(newElem);
        //         this.beforeElem.before(this.newElem);
        //     }else {
        //         this.elem = document.querySelector(elem);
        //         this.newElem = document.createElement(newElem);
        //         this.elem.append(this.newElem);   
        //     }
        // }

        // this.on = function(elem, event, funcName) {
        //     this.elem = document.querySelector(elem);
        //     this.elem.addEventListener(event, funcName);
        // }

    }

    let try1 = new DOMControl();
    // console.log(try1);
    console.log(try1.attr('input', 'type', 'color'));
    try1.attr('div');
    // try1.html('div', 'asfsafsdfasafs');  
    // console.log(try1.search('div'));
    // try1.addClass('div', 'classForDiv');
    // try1.addClass('div', 'SecondclassForDiv');
    // try1.removeClass('div', 'classForDiv');
    // try1.toggleClass('input', 'active');
    // console.log(try1.hasClass('div', 'SecondclassForDiv'));
    // try1.append('div', 'p');
    // try1.html('p', 'ppppppppp' )
    // try1.append('div', 'input', 'p'); 
    // try1.on('p', 'click', func)


    // function func(event) {
    //     console.log(event.clientX, event.clientY);

    //     const ask = prompt('Заменить текст на ', this.innerHTML);
    //     this.innerHTML = ask;
    // }
}

{
    function App() {

        this.createTag = function () {
            const tag = document.createElement('p')
            document.body.append(tag)
        }
    
        this.getTag = function () {
            document.querySelector('p');
        }
    
        this.setAttribut = function () {
            const input = document.querySelector('input')
            input.setAttribute('type', 'text')
        }
    
        this.addContent = function () {
            const value = document.querySelector('p');
            value.innerHTML = prompt('введи свой текст')
        }
        this.searchClass = function () {
            const div = document.querySelector('.class')
        }
        this.addClass = function () {
            const setClass = document.querySelector('p')
            setClass.classList.add('paragraph')
        }
        this.removeClass = function () {
            const removeClass = document.querySelector('p')
            removeClass.classList.remove('paragraph')
        }
    
        this.toggleClass = function () {
            const getTag = document.querySelector('p')
            getTag.classList.toggle('newStyle');
    
        }
        this.hasClass = function () {
            const hasclas = document.querySelector('p')
            if (hasclas.classList.contains === true)
                return true
            else return false
        }
        this.appendEl = function () {
            const element = document.querySelector('div')
            const elem = document.createElement('p')
            const message = confirm('Добавить элемент внутрь тега div?')
            if (message === true) {
                element.append(elem)
            }
            else {
                element.before(elem)
            }
        }
    
    
    }
    
    let app = new App();
    console.log(app)
    app.createTag();
    app.getTag();
    app.setAttribut();
    app.addContent();
    app.searchClass();
    app.addClass();
    app.removeClass();
    app.toggleClass();
    app.appendEl();
}