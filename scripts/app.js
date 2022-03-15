const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterURL = document.querySelector(".userInputPoster");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favoriteMovieTitle");
const movieYear = document.querySelector(".userInputYear");
const movieYearToDisplay = document.querySelector(".movieYear");

let titleInStorage = localStorage.getItem('title');
let imageURLStorage = localStorage.getItem('imageURL');
let movieYearStorage = localStorage.getItem('movieYear');


if(titleInStorage && imageURLStorage && movieYearStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(107, 107, 192, 0.63),rgba(70, 66, 66, 0.63)), url('${imageURLStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterURLInput = moviePosterURL.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageURL', posterURLInput);
    localStorage.setItem('movieYear', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(107, 107, 192, 0.63),rgba(70, 66, 66, 0.63)), url("${posterURLInput}")`;
    movieYearToDisplay.textContent = movieYearInput;
    movieTitle.value = '';
    moviePosterURL.value = '';
    movieYear.value = '';

});