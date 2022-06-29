import * as trpc from '@trpc/server';
import { PokemonClient } from 'pokenode-ts';
import { z } from 'zod';

const pokemonAPI = new PokemonClient();

export const appRouter = trpc.router().query('get-pokemon-by-id', {
  input: z.object({
    id: z.number(),
  }),
  async resolve({ input }) {
    const pokemon = await pokemonAPI.getPokemonById(input.id);

    return pokemon;
  },
});
