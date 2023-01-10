const BASE_URL = `https://restcountries.com/v3.1/name/{name}`

export function fetchCountres(name) {
    return fetch(`${BASE_URL}/name/${name}?fields=name,capital,population,languages,flags`)
    .then(response => {

        return response.json();
    })
}