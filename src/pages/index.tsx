import Head from 'next/head';

import { trpc } from '@/utils/trpc';

import { Pokemon } from '@/components/Pokemon';

export default function IndexPage() {
  const firstPokemon = trpc.useQuery(['get-pokemon-by-id', { id: 2 }]);

  const secondPokemon = trpc.useQuery(['get-pokemon-by-id', { id: 1 }]);

  const firstPokemonData = firstPokemon.data;

  const secondPokemonData = secondPokemon.data;

  return (
    <>
      <Head>
        <title>Roundest Pokémon</title>
      </Head>

      <div className="p-8 flex flex-col min-h-screen">
        <h1 className="text-3xl font-light mb-8 text-center">
          Which Pokémon is Rounder?
        </h1>

        <main className="flex flex-col items-center md:flex-row md:justify-center md:items-start">
          {firstPokemonData?.sprite ? <Pokemon {...firstPokemonData} /> : null}

          <p className="text-center my-5 md:m-0 md:mx-5 md:text-start">Vs.</p>

          {secondPokemonData?.sprite ? (
            <Pokemon {...secondPokemonData} />
          ) : null}
        </main>
      </div>
    </>
  );
}
