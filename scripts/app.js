const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterURL = document.querySelector(".userInputPoster");
const btn = document.querySelector(".button");
const movieTitleToDisplay = document.querySelector(".favoriteMovieTitle");

let titleInStorage = localStorage.getItem('title');
let imageURLStorage = localStorage.getItem('imageURL');

if(titleInStorage && imageURLStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(107, 107, 192, 0.63),rgba(70, 66, 66, 0.63)), url('${imageURLStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterURLInput = moviePosterURL.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageURL', posterURLInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(107, 107, 192, 0.63),rgba(70, 66, 66, 0.63)), url("${posterURLInput}")`;
    movieTitle.value = '';
    moviePosterURL.value = '';

});