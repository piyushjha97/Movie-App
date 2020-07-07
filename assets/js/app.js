searchButton
//urls

const API_KEY = 'cf3b39752a371a951346340b2f76c815';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=cf3b39752a371a951346340b2f76c815'

const inputElement = document.querySelector("#inputValue");
const buttonElement = document.querySelector("#searchButton");

buttonElement.onclick = function(event) {
    event.preventDefault();

    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl) 
        .then( (res) => res.json())
        .then( (data) => {
            console.log('data: ',data);

        })
        .catch((err) => {
            console.log(err);
        })
    
     
}

