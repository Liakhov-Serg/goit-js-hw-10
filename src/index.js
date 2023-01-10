import './css/styles.css';
import './fetchCountries';

fetch(`https://restcountries.com/v2/all?fields=name,capital,currencies`)
.then((response) => response.json())
.then((data) => console.log(data));


const DEBOUNCE_DELAY = 300;


