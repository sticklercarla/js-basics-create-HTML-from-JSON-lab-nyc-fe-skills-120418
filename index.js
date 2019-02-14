document.addEventListener("DOMContentLoaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here
console.log(movies)

const titanicButton = document.getElementById('Titanic')
const terminatorButton = document.getElementById('Terminator 2')

const title = document.getElementById('title')
const director = document.getElementById('director')
const genre = document.getElementById('genre')
const filmRating = document.getElementById('filmRating')
const posterImg = document.getElementById('poster')
const description = document.getElementById('description')
const audienceScore = document.getElementById('audienceScore')
const castUL = document.createElement('ul')
const reviewsUL = document.createElement('ul')

const changeMovie = (movie) => {
  // top movie details
  title.innerHTML = movies[movie].title
  director.innerHTML = movies[movie].director
  genre.innerHTML = movies[movie].genre
  filmRating.innerHTML = movies[movie].filmRating
  posterImg.src = movies[movie].poster
  description.innerHTML = movies[movie].description
  audienceScore.innerHTML = movies[movie].audienceScore
  // the problem is we want to make an <li> for every cast member
  for (let person of movies[movie].cast) {
    const li = document.createElement('li') // <li>role: name</li>
    li.innerHTML = person.role + ": " + person.actor 
    castUL.appendChild(li)
  }
  const castDiv = document.getElementById('cast')
  castDiv.appendChild(castUL)
  
  for (let review of movies[movie].reviews) {
    const li = document.createElement('li') 
    li.innerHTML = review.username + ": " + review.content 
    reviewsUL.appendChild(li)
  }
  const reviewsDiv = document.getElementById('reviews')
  reviewsDiv.appendChild(reviewsUL)
}
titanicButton.addEventListener('click', () => changeMovie('Titanic'))

terminatorButton.addEventListener('click', () => changeMovie('Terminator 2'))
});