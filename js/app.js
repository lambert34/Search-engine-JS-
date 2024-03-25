const mainEl = document.querySelector(".main");

// написать форму 
// написать input
// написать кнопку search

// добавить input внутрь формы
// добавить button внутрь формы
// добавить форму к main

// добавить ко всем этим 

const formEl = document.createElement("form");


const inputEl = document.createElement("input");
inputEl.classList.add('.search-input');
// inputEl.setAttribute('name', 'name');

const searchButtonEl = document.createElement("button");
searchButtonEl.classList.add('search-button');
searchButtonEl.setAttribute('type', 'submit');
searchButtonEl.innerHTML = "Поиск";


formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
mainEl.appendChild(formEl);
