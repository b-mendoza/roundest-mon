const MAX_POKEMON_ID = 150;

export const getRandomPokemon = (notThisOne?: number): number => {
  const pokedexNumber = Math.floor(Math.random() * MAX_POKEMON_ID);

  if (pokedexNumber !== notThisOne) return pokedexNumber;

  return getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
  const firstId = getRandomPokemon();
  const secondId = getRandomPokemon(firstId);

  return [firstId, secondId];
};
