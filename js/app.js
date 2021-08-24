'use strict';
let movieForm = document.getElementById('movieForm');

let moviesAyyar = [];

let moviesImgArray = ['action.png', 'adventure.png', 'animation.png', 'comedy.png', 'detective.png', 'fantasy.png', 'history.png', 'horror.png', 'musical.png', 'pirate.png', 'romantic.png', 'sci-fi.png', 'war.png', 'western.png'];

let movieTable = document.getElementById('movieTable');

let clearBtn = document.getElementById('clearBtn');

function Movies (movieName, issueYear, movieImg){
  this.name = movieName;
  this.year = issueYear;
  this.image = movieImg;
  moviesAyyar.push(this);
}

moviesStorage();


Movies.prototype.render = function () {

  for (let i = 0; i < moviesImgArray.length; i++) {
    let movieImageTr = document.createElement('tr');
    movieTable.appendChild(movieImageTr);

    let movieImg = document.createElement('img');
    movieImageTr.appendChild(movieImg);
    movieImg.src = `img/${moviesImgArray[i]}`;
    console.log(movieImageTr);
  }

  let movieNameTr = document.createElement('tr');
  movieTable.appendChild(movieNameTr);
  movieNameTr.textContent = this.name;

  let movieYearTr = document.createElement('tr');
  movieTable.appendChild(movieYearTr);
  movieYearTr.textContent = this.year;

  localStorage.movieStorage = JSON.stringify(moviesAyyar);
};



movieForm.addEventListener('submit', getMovieInfo);

function getMovieInfo (event) {
  event.preventDefault();
  let getMovieName = event.target.movieName.value;
  let getMovieYear = event.target.issueYear.value;

  let newMovie = new Movies(getMovieName, getMovieYear);
  newMovie.render();
}

function moviesStorage () {
  if(localStorage.movieStorage){
    let storeageMovives = JSON.parse(localStorage.movieStorage);
    for (let i = 0; i < storeageMovives.length; i++) {
      let movieNameTr = document.createElement('tr');
      movieTable.appendChild(movieNameTr);
      movieNameTr.textContent = storeageMovives[i].name;

      let movieYearTr = document.createElement('tr');
      movieTable.appendChild(movieYearTr);
      movieYearTr.textContent = storeageMovives[i].year;
    }
  }
}

clearBtn.addEventListener('click', removeStorage);

function removeStorage(event){
  event.localStorage.clear();
}


