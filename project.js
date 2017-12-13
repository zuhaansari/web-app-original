$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});
  
function getMovies(searchText){
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=f62f8967b93ea7ddf648911a9627d7d6&query='+searchText)
  .then((response) => {
    
    console.log(response);
    var movies = response.data.results;
    let output= '';
    $.each(movies, (index, movie) => {
      output +=`
          <div class="col-md-3">
          <div class="well text-center">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
          <h5>${movie.title}</h5> 
           <a onclick="movieSelected('${movie.id}')" class= "btn btn-primary" href="#">Movie Details</a>
              </div>
          </div>
    `;
    });
    
    $('#movies').html(output);
  })
  .catch((err) => {
    console.log(err);
  });
  
}

function movieSelected(id){
  
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie(){
  let movieId= sessionStorage.getItem('movieId');
  axios.get('https://api.themoviedb.org/3/movie/'+movieId+'?api_key=f62f8967b93ea7ddf648911a9627d7d6&query=')
  .then((response) => {
    
    console.log(response);
    let movie = response.data;
    
    var output =`
        <div class="row">
        <div class="col-md-4">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
        </div>
        <div class="col-md-8">
            <h2>${movie.title}</h2>
          <ul class="list-group">
              <li class="list-group-item"><strong>Movie Tagline:</strong> ${movie.tagline}</li>
               <li class="list-group-item"><strong>Released:</strong> ${movie.release_date}</li>
               <li class="list-group-item"><strong>Budget:</strong> ${movie.budget}</li>
               <li class="list-group-item"><strong>Runtime:</strong> ${movie.runtime}</li>
               <li class="list-group-item"><strong>Popularity:</strong> ${movie.popularity}</li>
          </ul>
        </div>
      </div>

    <div class="row">
    <div class="well">
      <h3>Plot</h3>
      ${movie.overview}
       <hr>
        <a href="http://imdb.com/title/${movie.imdb_id}" target="blank" class="btn btn-primary">View IMDB</a>
        <a href="index.html" class="btn btn-default">Go Back To Search</a>
		<a href="DisplayJSON.php" class="btn btn-default"> Save to Favourites </a>
      </div>
    </div>
    `;
    
     $('#movie').html(output);
    
  })
  .catch((err) => {
    console.log(err);
  });
  
}































// $(document).ready(()=>{
//     $('searchForm').on('submit', (e) =>{
//         let serachText=$('searchText').val();
//         getMovies(searchText);
//         e.preventDefault();
//     });
// });
// function getMovies(searchText){
//     axios.get('https://api.themoviedb.org/3/search/movie?api_key=f62f8967b93ea7ddf648911a9627d7d6&query=%27'+searchText)
//             .then(function (response) {
//         var movies = response.data.results;
//         console.log(response);
//         var output = '';
//         $.each(movies, function(index, movie){
//             output += '<div class="col-md-3">';
//             output +=   '<div class="well text-center">';
//             output +=  '<img src="http://image.tmdb.org/t/p/w185/'+movie.poster_path+'">';
//             output +=       '<h5>'+ movie.title+'</h5>';
//             output +=       '<a onclick=movieSelected("'+movie.id+' class="btn btn-primary" href="#")>Movie Details</a>';
//             output +=   '</div>';
//             output += '</div>';
          
//         });
//       function handleMissingImg(ele)
//       {
//           ele.src = '../../resources/images/poster-not-found.png';
//       }

        //$('movies').html(output);

//     })
//    .catch(function (err) {
//          console.log(error);
       
//     });
// }

