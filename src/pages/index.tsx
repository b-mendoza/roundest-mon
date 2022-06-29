import { trpc } from '@/utils/trpc';

export default function IndexPage() {
  const firstPokemon = trpc.useQuery(['get-pokemon-by-id', { id: 2 }]);

  const secondPokemon = trpc.useQuery(['get-pokemon-by-id', { id: 1 }]);

  const isLoading = firstPokemon.isLoading || secondPokemon.isLoading;

  if (isLoading) return <h1>Loading . . .</h1>;

  const firstPokemonData = firstPokemon.data;

  const secondPokemonData = secondPokemon.data;

  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-extralight mb-8">
        Which Pokémon is Rounder?
      </h1>

      <main className="border rounded p-8">
        {firstPokemonData?.sprite ? (
          <img alt={firstPokemonData?.name} src={firstPokemonData.sprite} />
        ) : null}

        <p>Vs.</p>

        {secondPokemonData?.sprite ? (
          <img alt={secondPokemonData?.name} src={secondPokemonData?.sprite} />
        ) : null}
      </main>
    </div>
  );
}
