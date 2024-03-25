const mainEl = document.querySelector(".main");

// написать форму 
// написать input
// написать кнопку search

// добавить input внутрь формы
// добавить button внутрь формы
// добавить форму к main

// добавить ко всем этим 

const formEl = document.createElement("form");
formEl.classList.add('search');
formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

//логика фетч-запроса
const inputsValue = Object.fromEntries(new FormData(e.target));
const response = await fetch(`https://api.github.com/users/${inputsValue.name}`);

if (response.ok) {
const data = await response.json();
// Использовать функцию для отрисовки данных
// Добавить результат выше исполненной функции в mainEl
} else {
    alert("Пользователь не найден");
}

})


const inputEl = document.createElement("input");
inputEl.classList.add('.search-input');
inputEl.setAttribute('name', 'name');

const searchButtonEl = document.createElement("button");
searchButtonEl.classList.add('search-button');
searchButtonEl.setAttribute('type', 'submit');
searchButtonEl.innerHTML = "Поиск";

formEl.appendChild(inputEl);
formEl.appendChild(searchButtonEl);
mainEl.appendChild(formEl);

function createProfileEl(profileData) {
    const element = document.querySelector('div');
    element.classList.add('profile');
    element.innerHTML = `
    <img class="search-image" src=${profileData.avatar_url}></img>
    <p class="search-text"><span>Имя: </span>${profileData.name}</p>
    <p class="search-text"><span>Город: </span>${profileData.location}</p>
    <p class="search-text"><span>О себе: </span>${profileData.bio}</p>
    `;
}

function createDeleteBtnEl() {

}