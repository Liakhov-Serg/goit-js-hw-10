import './css/styles.css';

import {fetchCountres}from'./fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    inputElem:document.querySelector(`#search-box`),
    listElem:document.querySelector(`.country-list`),
    divElem:document.querySelector(`.country-info`),

}
console.log(refs);
const DEBOUNCE_DELAY = 300;

refs.inputElem.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));
console.log(document.querySelector(`.country-info`));


function onSearch(e) {
    e.preventDefoult();
    const name = refs.inputElem.value.trim();
    if (name)
    fetchCountres(name)
    .then(data => searchCountry(data))
}

function searchCountry(countries) {
    console.log(countries);
    if (searchCountry.length >= 10) {
        Notify.success
    } else {
        renderCountryCard(countries)
    }
}


function clearError(countries) {
    if (countries.length === 0) {
        throw new Error("404");
    } else {
        Notify.failure("Too many matches found. Please enter a more specific name.")
    }
}
//  {
    

// } else {
// 
// }
console.log(name);

// .then((response) => response.json())
// .then((data) => console.log(data));

function createMarkup() {
    data.forEach((item) => {
        const elem = "country-list"
    }

    )
}






function renderCountryCard(countries) {
    const markupCard = countries.map((({name, capital, population, flags, languages}) => {
        return `<li class = "country-list_item">
        <div class = "country-list_title">
        <img scr = "${flags.svg}" style = "width: 40px; height: 40px"/>
        <h2>${name}</h2>
        </div>
        <p><strong>Capital:</strong> ${capital}</p>
        <p><strong>Population:</strong> ${population}</p>
        <p><strong>Languages:</strong> ${Object.values(languages).join(",")
    }</p>
        </li>`;
    }) ).join("");
    console.log(refs.listElem);
refs.listElem.insertAdjacentHTML("beforeend", markupCard)
};


// if (name.length > 0 && name.trim() !== '') {
    
// }
