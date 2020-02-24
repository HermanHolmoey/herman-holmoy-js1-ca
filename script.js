const baseUrl = `https://rickandmortyapi.com/api/character/`;

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        characterFunction(json);
    })
    .catch(function() {
        document.location.href = "error.html";
    });



function characterFunction(json) {
    const character = json.results;

    const container = document.querySelector(".row");
    let html = "";

    for (let index = 0; index < character.length; index++) {
        html += `<div class="col-sm-6 col-md-4 col-lg-3">                
                    <div class="card">    
                        <img class="image" src="${character[index].image}" alt="Character Name">
                        <div class="details">
                            <h4 class="name">${character[index].name}</h4>
                            <p>Type: ${character[index].type}</p>    
                            <p>Episode count: ${character[index].episode.length}</p>                                  
                            <a class="btn btn-primary" href="details.html?id=${character[index].id}">Details</a>
                        </div>
                    </div>
                </div>`;
    };
    container.innerHTML = html;
}

characterFunction(baseUrl);

