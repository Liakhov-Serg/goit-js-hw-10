import './css/styles.css';
import "./fetchCountries";

fetch(`https://restcountries.com/v3.1/`)
.then((response) => response.json())
.then((data) => console.log(data));


const DEBOUNCE_DELAY = 300;

console.log(`china`);
