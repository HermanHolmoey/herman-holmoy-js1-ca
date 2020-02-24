const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
    id = params.get("id");
} else {
    document.location.href = "index.html";
}

const indexUrl = "https://rickandmortyapi.com/api/character/";
const detailUrl = `${indexUrl}${id}`;

fetch(detailUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createDetail(json);
    })
    .catch(function() {
        document.location.href = "error.html";
    })

function createDetail(json) {
    console.dir(json);

    const image = document.querySelector(".details-image");
    image.src = json.image;
    image.alt = json.name;

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const status = document.querySelector("#status");
    status.innerHTML = json.status;

    const species = document.querySelector("#species");
    species.innerHTML = json.species;

    const origin = document.querySelector("#origin");
    origin.innerHTML = json.origin.name;

    const location = document.querySelector("#location");
    location.innerHTML = json.location.name;
}