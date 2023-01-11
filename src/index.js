import './css/styles.css';

import {fetchCountres}from'./fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    inputElem:document.querySelector(`#search-box`),
    listElem:document.querySelector(`country-list`),
    divElem:document.querySelector(`country-info`),

}
console.log(refs);
const DEBOUNCE_DELAY = 300;

refs.inputElem.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));
console.log(document.querySelector(`.country-info`));
function onSearch(e) {
    // e.preventDefoult();
}

const name = refs.inputElem.value.trim();

// clearForm();
// if (name) {
    fetchCountres(name)
.then(data => searchCountry(data))

// } else {
// Notify.failure("Too many matches found. Please enter a more specific name.")
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




function searchCountry(countries) {
    console.log(countries);
    if (searchCountry.length >= 10) {
        Notify.success
    }
}


// if (name.length > 0 && name.trim() !== '') {
    
// }
