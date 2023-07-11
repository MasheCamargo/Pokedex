const baseURL = "https://pokeapi.co/api/v2/pokemon/";
const pokeContent = document.getElementById('PokeName');
const buttonSearch = document.getElementById('searchPokemon');
const removePokemon = document.getElementById('borrarPokemon');
const appNode = document.getElementById('app');

buttonSearch.addEventListener('click', insertarPokemon);
removePokemon.addEventListener('click', eliminarPokemones);

function insertarPokemon() {
    window.fetch(`${baseURL}${pokeContent.value.toLowerCase()}`)
        .then(response => {
            if (response.status === 404) {
                alert('Este pokemon no está disponible');
            } else {
                return response.json();
            }
        })
        .then(responseJSON => {
            const result = [];

            for (let pokemonInfo in responseJSON) {
                result.push([pokemonInfo, responseJSON[pokemonInfo]]);
            }
            console.table(result);

            const pokeImagen = document.createElement('img');
            pokeImagen.src = responseJSON.sprites.front_default;

            const pokemonName = document.createElement('h2');
            pokemonName.innerText = `Name: ${responseJSON.name} | id: ${responseJSON.id}`;

            const pokemonType = document.createElement('h3');
            pokemonType.innerText = `Type: ${responseJSON.types[0].type.name}`;

            const contenedor = document.createElement('section');
            contenedor.append(pokeImagen, pokemonName, pokemonType);

            appNode.appendChild(contenedor);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function eliminarPokemones() {
    appNode.innerHTML = ''; // Limpiar contenido
}




