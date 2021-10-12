const apiKey  = "dad10603";

function fetchMovies(){
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=parasite`)
    .then(response => response.json())
    .then(data => 
        console.log(data))
};

window.onload = function(){
    fetchMovies();
};