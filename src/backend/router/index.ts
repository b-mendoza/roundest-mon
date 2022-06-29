import * as trpc from '@trpc/server';
import { getPlaiceholder } from 'plaiceholder';
import { PokemonClient } from 'pokenode-ts';
import { z } from 'zod';

const pokemonAPI = new PokemonClient();

export const appRouter = trpc.router().query('get-pokemon-by-id', {
  input: z.object({
    id: z.number(),
  }),
  async resolve({ input }) {
    const pokemon = await pokemonAPI.getPokemonById(input.id);

    const { name, sprites } = pokemon;

    const { front_default } = sprites.other['official-artwork'];

    if (typeof front_default !== 'string') {
      return {
        name,
        sprite: undefined,
      };
    }

    const { base64, img } = await getPlaiceholder(front_default, {
      size: 16,
    });

    const normalizedPokemon = {
      name: name,
      sprite: {
        ...img,
        blurDataURL: base64,
      },
    };

    return normalizedPokemon;
  },
});
