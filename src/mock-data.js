let mock = []

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const url = "https://pokeapi.co/api/v2/pokemon/";
for (let i = 1; i < 894; i++) {
  let currUrl = url + i.toString();
  (async () => {
  await fetch(currUrl)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let pokemon = new Object();
      pokemon.id = i;
      pokemon.name = capitalizeFirstLetter(json.name);
      let pokeType = json.types[0].type.name;
      pokemon.type = pokeType;
      pokemon.sprite = json.sprites.front_default;

      if (i < 152) {
        pokemon.country = "Kanto";
      }
      else if (i < 252) {
        pokemon.country = "Johto";
      }
      else if (i < 387) {
        pokemon.country = "Hoenn";
      }
      else if (i < 495) {
        pokemon.country = "Sinnoh";
      }
      else if (i < 650) {
        pokemon.country = "Unova";
      }
      else if (i < 722) {
        pokemon.country = "Kalos";
      }
      else if (i < 810) {
        pokemon.country = "Alola";
      }
      else {
        pokemon.country = "Galar";
      }

      setTimeout(() => { mock.push(pokemon); }, 50*i);

    });
  })();

}

export default mock;
