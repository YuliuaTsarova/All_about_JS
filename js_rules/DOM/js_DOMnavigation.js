// Все операции с DOM начинаются с объекта document. 

// Это главная «точка входа» в DOM. 
// Из него мы можем получить доступ к любому узлу.

// Так выглядят основные ссылки, по которым можно переходить между узлами DOM:

// ________________document

// _______document.documentElement //<HTML>

// ______________document.body // <body> (if inside body)

// ______________document.head // <head>
__________________________________________________

// _____________parentNode

// previousSibling < DIV > nextSibling

// _____________childNodes
// firstChild                  lastChild

// В DOM значение null значит «не существует» или «нет такого узла».


// DOM-коллекции

// childNodes - не массив, а коллекция

for (let node of document.body.childNodes) {
    alert(node); // покажет все узлы из коллекции
}

// Соседи и родитель

// родителем <body> является <html>
alert(document.body.parentNode === document.documentElement); // выведет true

// после <head> идёт <body>
alert(document.head.nextSibling); // HTMLBodyElement

// перед <body> находится <head>
alert(document.body.previousSibling); // HTMLHeadElement



// Узлы-элементы

// -------------------document.documentEle
// ---------------------- < HTML >
// ---------------------document.body
// --------------------(if inside body)
// ____________________________________________________
// ---------------------parent Element

// -----------------------< DIV >
// previous Element Sibling       next Element Sibling
// ------------------------children
// first Element Child             last Element Child



{/* children – коллекция детей, которые являются элементами.
firstElementChild, lastElementChild – первый и последний дочерний элемент.
previousElementSibling, nextElementSibling – соседи-элементы.
parentElement – родитель-элемент. */}

while (elem = elem.parentElement) { // идти наверх до <html>
    alert(elem);
}

for (let elem of document.body.children) {
    alert(elem); //  цикл выводит только элементы:
}

Итого

{/* Получив DOM-узел, мы можем перейти к его ближайшим соседям
 используя навигационные ссылки. */ }


// Есть два основных набора ссылок: 

/* Для всех узлов:  */ 

// parentNode, childNodes,
// firstChild, lastChild,
// previousSibling, nextSibling.


/* Только для узлов-элементов:  */ 

// parentElement, children,
// firstElementChild, lastElementChild,
// previousElementSibling, nextElementSibling.


