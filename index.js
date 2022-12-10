const movie = document.querySelector(".movies");

async function searchMovie() {
  const moviesWrapper = await fetch(
    "https://www.omdbapi.com/?i=tt3896198&apikey=8d3516ff&s=fast"
  );
  const moviesData = await moviesWrapper.json();
  document.querySelector(".remove__loading").style.display = "none"
  moviesHtml(moviesData);
  
}

searchMovie();

function moviesHtml(moviesData) {
  const movieHtml = moviesData.Search.map((movie) => {
    return `<div class="movie">
   <figure><img src="${movie.Poster}" alt=""></figure>
    <h1>Title: ${movie.Title}</h1>
    <h1>Year: ${movie.Year}</h1>
    <h1>Id: ${movie.imdbID}</h1>
    <h1>Type: ${movie.Type}</h1>
  </div>`;
  }).join("");
  movie.innerHTML = movieHtml;
}

async function fetchResults(event) {
  event.preventDefault();
  const inputValue = document.querySelector(".movies__input").value;
  const moviesWrapper = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=8d3516ff&s=${inputValue}`
  );
  const moviesData = await moviesWrapper.json();
  moviesHtml(moviesData);
  console.log(inputValue);
}