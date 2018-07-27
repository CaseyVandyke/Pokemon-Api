function pokemonCall(search, numHolder) {

const Url = 'https://api.pokemontcg.io/v1/cards';

const query = {
    pageSize: numHolder,
    name: search
}
    $.getJSON(Url, query, function(name){
        for (let i = 0; i < name.cards.length; i++) {
            $('.results').append(`<img class="pokeMon" alt="pokemon-card" src="${name.cards[i].imageUrlHiRes}">`);
        }

    })
   
}

$('.js-catch').on('submit', function(event){
    event.preventDefault();
    let pokemonCount = $('.pokenum').val();
    let pokeHolder = $('.search-anime').val();
    pokemonCall(pokeHolder, pokemonCount);
})