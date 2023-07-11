
const  baseURL= "https://pokeapi.co/api/v2/pokemon/"
const pokeContent = document.getElementById('PokeName')
const buttonSearch = document.getElementById('searchPokemon')
const appNode = document.getElementById ('app')

buttonSearch.addEventListener('click', insertarPokemon)

function insertarPokemon(){
    window.fetch(`${baseURL}${pokeContent.value.toLowerCase()}`)
    .then(response =>{
        if(response.status===404){
            alert('Este pokemon no está disponible')
        }else {
            return response.json()
        }
    })
        .then(responseJSON => {
        const allItems =[]
        const result = []

        for(let pokemonInfo in responseJSON){
            result.push([pokemonInfo, responseJSON[pokemonInfo]])
        }
        console.table(result)        
    })
}




