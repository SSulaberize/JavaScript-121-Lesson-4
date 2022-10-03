// Burger Bar
let navigationLine = document.getElementById ('navigation-bar');
let hamburgerBar = document.getElementById ('burger-bar');
hamburgerBar.addEventListener ('click', function(){
    hamburgerBar.classList.toggle('toggle');
    navigationLine.classList.toggle('active');
})

// To DO List
let inputform = document.querySelector ('.product');
let buttonadd = document.querySelector ('.button');
let listofproducts = document.querySelector ('.products-list');
let removeAllIcons = document.querySelector ('.clear');
let form = document.getElementById ('form-wrapper');

form.addEventListener ('submit', function(event) {
    event.preventDefault();
let value = inputform.value;
let li = document.createElement ('li');
let deleteIcon = document.createElement ("i");
deleteIcon.innerHTML = '<i class="fa-solid fa-trash"></i>';
deleteIcon.addEventListener ('click', function(){
    li.remove();
})
li.textContent = value;
li.appendChild(deleteIcon);
listofproducts.appendChild(li);
inputform.value = ' ';
})

removeAllIcons.addEventListener ('click', function(){
    listofproducts.innerHTML = '';
})
