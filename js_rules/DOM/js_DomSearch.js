// Поиск: getElement*, querySelector*

// document.getElementById или просто id

// Если у элемента есть атрибут id, 
// то мы можем получить его вызовом 
document.getElementById(id)
// где бы он ни находился.

// ПРИМЕР

{/* <div id="elem">
  <div id="elem-content">Element</div>
</div> */}

{/* <script> */}
  // получить элемент
  let elem = document.getElementById('elem');

  // сделать его фон красным
  elem.style.background = 'red';
{/* </script> */}


querySelectorAll