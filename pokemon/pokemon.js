function renderBulbasaur(){
    //This function's job is to change the particular element to the image of the pokemon.

    //The first thing you need to do in order to change that pokeball's "state" from closed to open is you need to target it with the DOM. 

    //You need to target the image tag you want to change, and refer to its position in the DOM. Change the source to be a different image. 
    document.getElementById("bulbasaur").src = "../images/bulbasaur.png";
}

function renderSquirtle(){
    //This function's job is to change the particular element to the image of the pokemon.

    document.getElementById("squirtle").src = "../images/squirtle.png";
}

    
function renderCharmander(){
    //This function's job is to change the particular element to the image of the pokemon

    document.getElementById("charmander").src = "../images/charmander.png";
}