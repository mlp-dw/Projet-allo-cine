fetch("/data/moovies.json")
    .then(function (response){
        console.log(response)
        return response.json()
    }).then(function (moovies){
        console.log(moovies);

        function template(film) {
        return `
        <div class="touslesfilms mx-5 bg-black">
            <div class="block-film bg-white d-flex flex-row m-3 p-3 ">
                <img class="col-12 col-sm-12 col-md-4 photo img-fluid" src="${film.Poster}">
                <div class="col-12 col-sm-12 col-md-8 text ps-4 d-flex flex-wrap flex-column justify-content-around">
                    <h2 class="titrefilm text-uppercase">${film.Title} (${film.Runtime})</h2>
                    <p class="genrefilm fst-italic">${film.Genre}</p>
                    <p>${film.Year} </p>
                    <p class="directorfilm">Réalisé par ${film.Director}</p>
                    <p class="writerfilm">Écrit par${film.Writer}</p>
                    <p class="resume">${film.Plot}</p>
                    <div class="note-images d-flex flex-row align-items-end justify-content-between">
                        <p class="note w-20 px-3">${film.imdbRating}/10</p>
                        <div class="w-80">${film.Images.map(function (image){
                            return `<img class="film-images img-fluid" src="${image}">`
                        }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        `
        }
        
        document.getElementById("allo").innerHTML = `
        <h1 class="Films-title text-center text-white bg-black px-2 py-5">Projet Mini Allo-Ciné !</h1>
        ${moovies.map(template).join('')}
        <p class="footer m-2 text-center">Ces ${moovies.length} films ont été ajoutés récemment.</p>
        `

    })
