let getSearch = document.getElementById('newsSearch')

function newsSearch(){
  fetch(`https://newsapi.org/v2/everything?q=${getSearch.value}&from=2024-06-05&sortBy=publishedAt&apiKey=b2d5d17e9a924870bd3afa3817882dc5` )
    .then(function (data) {
      return data.json()
    })
  
    .then(function (data) {
      var getDiv = document.getElementById('news')
  
      for (let i = 0; i < data.articles.length; i++) {
        getDiv.innerHTML += `<div class="card m-2" style="width: 22.5rem;">
          <img src="${data.articles[i].urlToImage ? data.articles[i].urlToImage : `https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png`}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${data.articles[i].title}</h5>
            <p class="card-text">${data.articles[i].description}</p>
            <p class="card-text"><small class="text-body-secondary">Last updated ${data.articles[i].publishedAt}</small></p></div>
          </div>
        </div>`
      }
    })
    .catch(err => console.log(err))
  
}
