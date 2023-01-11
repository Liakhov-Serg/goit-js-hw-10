import './css/styles.css';

import {fetchCountres}from'./fetchCountries';

fetchCountres()
.then((data) => console.log(data));
// fetch(`https://restcountries.com/v2/all?fields=name,capital,currencies`)
// .then((response) => response.json())
// .then((data) => console.log(data));

// function createMarkup {
//     data.forEach((item) => {
//         const elem = "country-list"
//     }

//     )
// }


const DEBOUNCE_DELAY = 300;


