// Display all the movies
console.log('The whole array of movies we have is: ', movies)

// Show the number of movies we have in the array
console.log('The number of movies we have is: ', movies.length)

// How many movies were shooted after 1980?
console.log('The number of movies after 1980 is: ', movies.filter(movie => movie.year > 1980).length)

// Display only the title of each movie (map version)
console.log('The titles are: ', movies.map(movie => movie.title))

// Display only the title of each movie (forEach version)
movies.forEach((movie, index) => {
  console.log( `The title for movie number ${index} is: `, movie.title)
})

// Display only the title of each movie sorted by year (without modifying the original array)
console.log('The titles sorted by year are: ', [...movies].sort((a,b) => a.year - b.year).map(movie => movie.title))

// Display the average year for the array of movies
console.log('The average year is: ', movies.reduce((acc, movie) => acc + movie.year, 0) / movies.length)



// Example of how to modify the DOM (the HTML elements) from a JS file like this
document.getElementById("list-of-movies").innerHTML = movies.map(movie => `<li>${movie.title}</li>`).join('')