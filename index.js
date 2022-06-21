"use strict";
const form = document.querySelector("#search-form");
const searchInput = document.getElementById("search-input");
const submitButton = document.querySelector(".btn-primary");
const results = document.getElementById("results");

const searchMovies = (query) => {
  fetch(`https://www.omdbapi.com/?s=${query}&apikey=48727053`)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((result) => {
      const movieElement = `<li class="list-item">
        <img class="movie-poster" src="${result.Poster}" alt="movie poster">
        <p class="movie-title">${result.Title}</p>`;
      results.insertAdjacentHTML("beforeend", movieElement);
    });
  })
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  results.innerHTML = "";
  console.log(searchInput.value);
  searchMovies(searchInput.value);
})
