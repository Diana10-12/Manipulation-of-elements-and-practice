///////////МАНИПУЛИРОВАНИЕ ЭЛЕМЕНТАМИ///////////

// 318.1 Вставьте ему в конец li с текстом 'item'.
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// li.textContent = 'item';
// elem.appendChild(li);

// 318.2 Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// let button = document.querySelector('#button');
// button.addEventListener('click', function () {
//     li.textContent = 'item';
//     elem.appendChild(li);
// })

// 319.1 Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// let button = document.querySelector('#button');
// button.addEventListener('click', function () {
//     li.textContent = 'item';
//     elem.appendChild(li);
// })
// li.addEventListener('click', function () {
//     li.textContent = li.textContent + '!';
// })

// 320.1 Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
// let elem = document.querySelector('#elem');
// for (let i = 1; i <= 10; i++) {
//  let li = document.createElement('li');
//  li.textContent = i;
//  elem.appendChild(li);
// }

// 321.1 Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
// let parent = document.querySelector('#parent');
// let p = document.querySelector('p');
// for (let i = 1; i <= 5; i++) {
//  let input = document.createElement('input');
//  input.addEventListener('blur', function() {
//      p.textContent = input.value
//  });
//  parent.appendChild(input);
// }

// 322.1 Сделайте так, чтобы любая li удалялась по клику на нее.
// let ul = document.querySelectorAll('li');
// for (let li of ul) {
//  li.addEventListener('click', function() {
//      li.remove();
//  });
// }

// 322.2 Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');
//  button.addEventListener('click', function() {
//      parent.removeChild(parent.lastElementChild);
//  });

// 323.1 Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
// let elem = document.querySelector('#elem');
// let li1 = document.createElement('li');
// li1.innerHTML = 'finish';
// let li2 = document.createElement('li');
// li2.innerHTML = 'start';
// elem.append(li1);
// elem.prepend(li2);

// 323.2 Вставьте перед этим элементом элемент с текстом 'new'.
// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// li.innerHTML = '!';
// parent.insertBefore(li, elem);

// 323.3 Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.
// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
// li.innerHTML = 'hello';
// parent.insertBefore(li, elem);
// li.addEventListener('click', function() {
//  li.innerHTML = li.innerHTML + '!';
// });

// 324.1 Вставьте перед ним абзац с текстом '!!!'.
// let p = document.createElement('p');
// p.innerHTML = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeBegin', p);

// 324.2 Вставьте после него абзац с текстом '!!!'.
// let p = document.createElement('p');
// p.innerHTML = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterEnd', p);

// 324.3 Вставьте ему в начало абзац с текстом '!!!'.
// let p = document.createElement('p');
// p.innerHTML = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterBegin', p);

// 324.4 Вставьте ему в конец абзац с текстом '!!!'.
// let p = document.createElement('p');
// p.innerHTML = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeEnd', p);

// 324.5 Дан элемент. Вставьте перед ним следующий тег:
// let elem = document.querySelector('#elem');
// elem.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');

// 325.1 Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
// let parent = document.querySelector('#parent');
// let elem = parent.querySelector('.elem');
// let button = document.querySelector('button');
// button.addEventListener ('click', function () {
//  let clone = elem.cloneNode(true);
//  parent.appendChild(clone);
// })

// 326.1 Проверьте, является ли этот элемент элементом с классом www.
// let elem = document.querySelector('#elem');
// console.log(elem.matches('div.www'));

// 326.2 Дан элемент. Проверьте, является ли этот элемент абзацем.
// let elem = document.querySelector('#elem');
// console.log(elem.matches('p'));

// 326.3 Проверьте, является ли элемент из elem2 потомком элемента из elem1.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let contains = elem1.contains(elem2);
// console.log(contains);




///////////ПРАКТИКА///////////

// 327.1 Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//  let p = document.createElement('p');
//  p.addEventListener ('click', function () {
//      p.textContent = Number(p.textContent) + 1
//  })
//  p.textContent = elem;
//  parent.appendChild(p);
// }

// 328.1 Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// let elem = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let elem1 of arr) {
//  let li = document.createElement('li');
//  li.textContent = elem1;
//  elem.appendChild(li);
// }

// 328.2 Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
// let elem = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let elem1 of arr) {
//  let li = document.createElement('li');
//  li.addEventListener ('click', function () {
//      alert (li.textContent)
//  })
//  li.textContent = elem1;
//  elem.appendChild(li);
// }

// 328.3 Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
// let elem = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let elem1 of arr) {
//  let li = document.createElement('li');
//  li.addEventListener ('click', function () {
//      li.textContent = li.textContent + '!'
//  })
//  li.textContent = elem1;
//  elem.appendChild(li);
// }

// 328.4 Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
// let elem = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let elem1 of arr) {
//  let li = document.createElement('li');
//  li.addEventListener ('click', function func() {
//      li.textContent = li.textContent + '!'
//      this.removeEventListener('click', func)
//  })
//  li.textContent = elem1;
//  elem.appendChild(li);
// }

// 329.1 Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
// let table = document.querySelector('#table');
// for (let i = 0; i < 5; i++) {
//  let tr = document.createElement('tr');
//  for (let i = 0; i < 5; i++) {
//      let td = document.createElement('td');
//      tr.appendChild(td);
//  }
//  table.appendChild(tr);
// }

// 329.2 Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
//  let tr = document.createElement('tr');
//  for (let i = 0; i < 5; i++) {
//      let td = document.createElement('td');
//      tr.appendChild(td);
//  }
//  table.appendChild(tr);
// }

// 329.3 Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.
// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
//  let tr = document.createElement('tr');
//  for (let i = 0; i < 5; i++) {
//      let td = document.createElement('td');
//      tr.appendChild(td);
//      td.textContent = td.textContent + 'x'
//  }
//  table.appendChild(tr);
// }

// 329.4 Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
// let table = document.querySelector('#table');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let button = document.querySelector('button');
// button.addEventListener('click', function () {
//  for (let i = 0; i < inp1.value; i++) {
//      let tr = document.createElement('tr');
//      for (let i = 0; i < inp2.value; i++) {
//          let td = document.createElement('td');
//          tr.appendChild(td);
//          td.textContent = td.textContent + 'x'
//      }
//      table.appendChild(tr);
//  }
// })

// 330.1 Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.
// let table = document.querySelector('#table');
// let k = 1;
// for (let i = 0; i < 5; i++) {
//  let tr = document.createElement('tr');
//  for (let i = 0; i < 5; i++) {
//      let td = document.createElement('td');
//      td.textContent = k;
//      k++;
//      tr.appendChild(td);
//  }
//  table.appendChild(tr);
// }

// 330.2 Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
// let table = document.querySelector('#table');
// let k = 1;
// for (let i = 0; i < 5; i++) {
//  let tr = document.createElement('tr');
//  for (let i = 0; i < 5; i++) {
//      let td = document.createElement('td');
//      td.textContent = k * 2;
//      k++;
//      tr.appendChild(td);
//  }
//  table.appendChild(tr);
// }

// 331.1 Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr) {
//  let tr = document.createElement('tr');
//  for (let elem of subArr) {
//      let td = document.createElement('td');
//      td.textContent = elem;
//      tr.appendChild(td);
//  }
//  table.appendChild(tr);
// }

// 331.2 Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr) {
//  let tr = document.createElement('tr');
//  for (let elem of subArr) {
//      let td = document.createElement('td');
//      td.textContent = elem * elem;
//      tr.appendChild(td);
//  }
//  table.appendChild(tr);
// }

// 332.1 Выведите элементы этого массива в виде HTML таблицы.
// let employees = [
//  {name: 'employee1', age: 30, salary: 400},
//  {name: 'employee2', age: 31, salary: 500},
//  {name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let user of employees) {
//  let tr = document.createElement('tr');  
//  let td1 = document.createElement('td');
//  td1.textContent = user.name;
//  tr.appendChild(td1);    
//  let td2 = document.createElement('td');
//  td2.textContent = user.age;
//  tr.appendChild(td2);    
//  let td3 = document.createElement('td');
//  td3.textContent = user.salary;
//  tr.appendChild(td3);
//  table.appendChild(tr);
// }

// 332.2 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.
// let employees = [
//  {name: 'employee1', age: 30, salary: 400},
//  {name: 'employee2', age: 31, salary: 500},
//  {name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let user of employees) {
//  let tr = document.createElement('tr');  
//  let td1 = document.createElement('td');
//  td1.textContent = user.name;
//  tr.appendChild(td1);    
//  let td2 = document.createElement('td');
//  td2.addEventListener('click', function () {
//      td2.textContent = Number(td2.textContent) + 1;
//  })
//  td2.textContent = user.age;
//  tr.appendChild(td2);    
//  let td3 = document.createElement('td');
//  td3.textContent = user.salary;
//  tr.appendChild(td3);
//  table.appendChild(tr);
// }

// 332.3 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
// let employees = [
//  {name: 'employee1', age: 30, salary: 400},
//  {name: 'employee2', age: 31, salary: 500},
//  {name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');
// for (let user of employees) {
//  let tr = document.createElement('tr');  
//  let td1 = document.createElement('td');
//  td1.textContent = user.name;
//  tr.appendChild(td1);    
//  let td2 = document.createElement('td');
//  td2.textContent = user.age;
//  tr.appendChild(td2);    
//  let td3 = document.createElement('td');
//  td3.addEventListener('click', function () {
//      td3.textContent =Number(td3.textContent) + Number(td3.textContent) / 100 * 10;
//  })
//  td3.textContent = user.salary;
//  tr.appendChild(td3);
//  table.appendChild(tr);
// }

// 333.1 Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
// let table = document.querySelector('#table');
// let td = document.createElement('td');
// let button = document.querySelector('button');
// button.addEventListener('click', function () {
    // for (let i = 1; i <= 1; i++) {
    //  let tr = document.createElement('tr');
    //  tr.textContent = tr.textContent + 'd'
    //  td.appendChild(tr);
    // }
// })
// table.appendChild(td);

// 333.2 Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
// let table = document.querySelector('#table');
// let tds = document.querySelectorAll('#table td');
// let button = document.querySelector('button');
// let trs = document.querySelectorAll('#table tr');
// button.addEventListener('click', function () {
//  for (let tr of trs) {
//      let td = document.createElement('td');
//      tr.appendChild(td);
//  }
//  for (let td of tds) {
//      let tr = document.createElement('tr');
//      td.appendChild(tr);
//      table.appendChild(td);
//  }

// 334.1 Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
// let tds = document.querySelectorAll('#table td');
// let button = document.querySelectorAll('button');
// button.addEventListener('click', function () {
// for (let td of tds) {
//  td.textContent = td.textContent*2;
// }
// })

// 335.1 Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');
// let elems = document.querySelectorAll('p');
// button.addEventListener('click', function() {
//  let li = document.createElement('li');
//  li.textContent = '!'
//  parent.appendChild(li);
// })
// for (let elem of elems) {
//  elem.addEventListener('click', function() {
//      elem.remove();
//  });
// }

// 336.1 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// remove.addEventListener('click', function(event) {
//  elem.remove();
//  event.preventDefault(); // отменяем переход по ссылке
// });

// 337.1 Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
// let elems = document.querySelectorAll('#parent li');
// for (let elem of elems) {
//  let remove = document.createElement('a');
//  remove.href = '';
//  remove.textContent = 'remove';
//  elem.appendChild(remove);
//  remove.addEventListener('click', function(event) {
//      elem.remove();
//      event.preventDefault();
//  });
// }

// 337.2 Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
// let table = document.querySelectorAll('#table');
// let trs = document.querySelectorAll('#table tbody tr');
// for (let tr of trs) {
//  let td = document.createElement('td');
//  let a = document.createElement('a');
//  a.href = '';
//  a.textContent = 'remove';
//  td.append(a);
//  tr.appendChild(td);
//  tr.addEventListener('click', function(event){
//      tr.remove();
//      event.preventDefault();
//  })
// }

// 338.1 Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.value = elem.textContent;
// input.addEventListener('input', function() {
//  elem.textContent = this.value;
// });

// 338.2 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//  let input = document.createElement('input');
//  input.value = elem.textContent;
//  input.addEventListener('blur', function() {
//      elem.textContent = this.value;
//      this.remove();
//  });
//  elem.parentElement.appendChild(input);
// });

// 339.1 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function func() { 
//  let input = document.createElement('input');
//  input.value = elem.textContent;
//  elem.textContent = '';
//  elem.appendChild(input);
//  input.addEventListener('blur', function() {
//      elem.textContent = this.value;
//      elem.addEventListener('click', func);
//  });
//  elem.removeEventListener('click', func);
// });

// 340.1 Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.
// let li = document.querySelectorAll('#ul li');
// for (let elem of li) {
//  elem.addEventListener('click', function func() {
//      let input = document.createElement('input');
//      input.value = elem.textContent;
//      elem.textContent = '';
//      elem.appendChild(input);
//      input.addEventListener('blur', function() {
//          elem.textContent = this.value;
//          elem.addEventListener('click', func);
//      });
//      elem.removeEventListener('click', func);
//  });
// }

// 340.2 Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.
// let table = document.querySelectorAll('#table');
// let tds = document.querySelectorAll('#table tbody td');
// for (let td of tds) {
//  td.addEventListener('click', function func() {
//      let input = document.createElement('input');
//      input.value = td.textContent;
//      td.textContent = '';
//      td.appendChild(input);
//      input.addEventListener('blur', function() {
//          td.textContent = this.value;
//          td.addEventListener('click', func);
//      });
//      td.removeEventListener('click', func);
//  });
// }

// 341.1 Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.
// let span = document.querySelectorAll('#parent span');
// for (let elem of span) {
//     let a = document.createElement('a');
// 	a.href = '';
// 	a.textContent = 'remove';
// 	elem.insertAdjacentElement('afterend', a);
// 	a.addEventListener('click', function(event){
//         elem.remove();
// 		a.remove();
// 		event.preventDefault();
// 	});
// 	elem.addEventListener('click', function func() {
//         let input = document.createElement('input');
// 		input.value = elem.textContent;
// 		elem.textContent = '';
// 		elem.appendChild(input);
// 		input.addEventListener('blur', function() {
//             elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
// 		elem.removeEventListener('click', func);
// 	});
// }

// 341.2 Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.
// let span = document.querySelectorAll('#parent p');
// for(let elem of span){
// 	let span = document.createElement('span');
// 	span.textContent = elem.textContent;
// 	elem.textContent = '';
// 	elem.append(span);
// 	let a = document.createElement('a');
// 	a.textContent = 'remove';
// 	a.href = '';
// 	elem.append(a);
// 	a.addEventListener('click', function(event){
// 		elem.remove();
// 		event.preventDefault();
// 	});
// 	span.addEventListener('click', function func(){
// 		let input = document.createElement('input');
// 		input.value = span.textContent;
// 		span.textContent = '';
// 		span.appendChild(input);
// 		input.addEventListener('blur', function() {
// 			span.textContent = input.value;
// 			span.addEventListener('click', func);
// 		});
// 		span.removeEventListener('click', func);
// 	});	
// }

// 344.1 Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }

// 344.2 Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');
// for (let i = 0; i < buttons.length; 
// 	i++) { 
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }

// 344.3 Изучите мое решение, а затем самостоятельно, не подсматривая в мой код, решите эту задачу.
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }

// 345.1 Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.
// let ul = document.querySelectorAll('#ul li');
// for(let elem of ul){
//     elem.textContent = 'text';
//     elem.addEventListener('click', function(){
//         this.classList.add('active');    
//     });
// }

// 345.2 Модифицируйте предыдущую задачу так, чтобы по нажатию на активированный пункт списка активация с него снималась.
// let ul = document.querySelectorAll('#ul li');
// for(let elem of ul){
//     elem.textContent = 'text';
//     elem.addEventListener('click', function(){
//         this.classList.toggle('active');    
//     });
// }

// 346.1 Разберите мой код, а затем самостоятельно повторите решение этой задачи.
// let tds = document.querySelectorAll('#table td');
// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}
// 		this.classList.add(color);
// 	});
// }

// 346.2 Расскажите, как работает приведенный мною код.
// let tds = document.querySelectorAll('#table td');
// let i = 0;
// let colors = ['color1', 'color2', 'color3']; 
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		this.classList.add(colors[i]);
// 		i++;
// 		if (i == colors.length) {
// 			i = 0;
// 		}
// 	});
// }

// 347.1 Дан массив. Выведите его элементы в виде списка ul.
// let ul = document.querySelector('.ul');
// arr = [1 ,2, 3, 4, 5];
// i = 0;
// while (i < arr.length) {
// li = document.createElement('li');
// li.innerHTML = arr[i];
// ul.appendChild(li);
// i++;
// }

