import './css/styles.css';

import {fetchСountries}from'./fetchСountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    inputElem:document.querySelector(`#search-box`),
    listElem:document.querySelector(`.country-list`),
    divElem:document.querySelector(`.country-info`),
}


// console.log(refs);
const DEBOUNCE_DELAY = 300;

refs.inputElem.addEventListener("input", debounce(inSearch, DEBOUNCE_DELAY));
// console.log(refs.inputElem);


function inSearch(e) {
    e.preventDefault();

    const name = refs.inputElem.value.trim();
    
    clearContainer();
    
    if (name)
    fetchСountries(name)
    .then(data => searchCountry(data))
}

function searchCountry(countries) {
    if (countries.length > 10 ) {
        Notify.success("Too many matches found. Please enter a more specific name.");
    } else if (countries.length >= 2 && countries.length < 10)
    {renderCountryList(countries)
    } else if (countries.length === 1) {
        renderCountryCard(countries);
    } else {
        clearError (countries);
    }

}

function renderCountryCard(countries) {
    const markupCard = countries.map((({name, capital, population, flags, languages}) => {
        return `<div class = "country-list_item">
        <div class = "country-list_title">
        <img src="${flags.svg}" style="width: 40px; height: 40px"/>
        <h2>${name}</h2>
        </div>
        <p><strong>Capital:</strong> ${capital}</p>
        <p><strong>Population:</strong> ${population}</p>
        <p><strong>Languages:</strong> 
        ${languages.map(lang=>lang.name)
    }</p>
        </div>`;
    }) ).join("");

    console.log(refs.listElem);

refs.divElem.insertAdjacentHTML("beforeend", markupCard);
// console.log(markupCard);
};
function renderCountryList(countries) {
    const markup = countries.map((({name, flags}) => {
        return `<li class="country-list__item">
        <img src=${flags.svg}  style="width:40px;height:40px"/>
         <h2>${name}</h2>
        </li>`;
    })).join("");

    refs.listElem.insertAdjacentHTML('beforeend', markup)

}


function clearError (countries) {
    if (countries.length === 0 ) {
        throw new Error("404");
    } else {
        Notify.failure("Oops, there is no country with that name");
    }
    
}
function clearContainer() {
    refs.listElem.innerHTML = ''; 
    refs.divElem.innerHTML = ''; 
}

