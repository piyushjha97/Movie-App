//urls

const API_KEY = 'cf3b39752a371a951346340b2f76c815';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=cf3b39752a371a951346340b2f76c815'
const imgUrl = 'https://image.tmdb.org/t/p/w500';
const inputElement = document.querySelector("#inputValue");
const buttonElement = document.querySelector("#searchButton");
const movieSearchable = document.querySelector("#movie-searchable");





// const renderSearchMovies(movies){


// }

function movieSelection(movies) {

    return movies.map((movie) => {
        if(movie.poster_path)
             return `<img src = ${imgUrl + movie.poster_path} data-movie-id = {movie.id} />`;
    })
}

 function createMovieContainer(movies) {

    const movieElement = document.createElement('div');
    movieElement.setAttribute('class','movie');

    const movieTemplate = `
    <section class = "section">
     ${movieSelection(movies)};
     </section>`

    movieElement.innerHTML = movieTemplate;

    return movieElement;

}

buttonElement.onclick = function(event) {
    
    
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl) 
        .then( (res) => res.json())
        .then( (data) => {
             const movies = data.results;
            const movieBlock = createMovieContainer(movies);
            movieSearchable.appendChild(movieBlock);

            console.log(movies);


        })
        .catch((err) => {
            console.log(err);
        })
    
     
}

