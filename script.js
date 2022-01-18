//task 1
/*
let div = document.body.firstElementChild;

let ul = document.body.lastElementChild;

let li_second = document.body.lastElementChild.lastElementChild;
*/

//task 2
//elem.lastChild.nextSibling; //всегда равен null, так как у последнего дочернего элемента не может быть следующего соседнего элемента.

//elem.children[0].previousSibling; //не всегда равен null, так как у первого потомка (children[0]) может быть предыдущим соседним элементом, например, текстовый узел.

//task 3 (Выделите ячейки по диагонали)
/*
let table = document.body.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
        table.rows[i].cells[i].style.backgroundColor = 'red';
    }
}
*/

//task 3 (Поиск элементов)
/*
let table = document.getElementById('age-table');
table.querySelectorAll('label');
table.querySelector('td');
let form = document.querySelector('form[name="search"]');
form.querySelector('input');
let inputs = form.querySelectorAll('input');
inputs[inputs.length-1];
*/

//task 7
//1. Объектом какого класса является document? - это объект класса HTMLDocument
//2. Какое место он занимает в DOM-иерархии? - это главная "входная точка" в DOM
//3. Наследует ли он от Node или от Element, или может от HTMLElement? - document наследует от Node

//task 8
/*
function clear(elem) {
    elem.innerHTML = '';
}   
clear(elem);
*/

//task 9
/*alert(table);  
table.remove(); //останется ааа, так как HTML в задаче некорректен. Браузер исправил ошибку автоматически. Но внутри <table> не может быть текста: в соответствии со спецификацией допускаются только табличные теги. Поэтому браузер добавляет "aaa" до <table>.
*/

//task 10
/*
let ul = document.createElement('ul');
document.body.append(ul);

while(true) {
    let data = prompt("Введите текст для элемента списка", "");
    if (!data) {
        break;
    }

    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}
*/

//task 11
/*
let ul = document.querySelector('#ul');
let li = document.querySelector('#two');

let li_2 = document.createElement('li');
li_2.innerHTML = '2';
ul.insertBefore(li_2, two);

let li_3 = document.querySelector('li');
li_3.innerHTML = '3';
ul.insertBefore(li_3, two);
*/