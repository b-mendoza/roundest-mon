import { trpc } from '@/utils/trpc';

export default function IndexPage() {
  const firstPokemon = trpc.useQuery(['get-pokemon-by-id', { id: 2 }]);

  const secondPokemon = trpc.useQuery(['get-pokemon-by-id', { id: 1 }]);

  const isLoading = firstPokemon.isLoading || secondPokemon.isLoading;

  if (isLoading) return <h1>Loading . . .</h1>;

  const { sprites: firstPokemonSprites } = firstPokemon.data ?? {};

  const { sprites: secondPokemonSprites } = secondPokemon.data ?? {};

  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-extralight mb-8">
        Which Pokémon is Rounder?
      </h1>

      <main className="border rounded p-8">
        {firstPokemonSprites?.front_default ? (
          <img
            alt={firstPokemon.data?.name}
            src={firstPokemonSprites.front_default}
          />
        ) : null}

        <p>Vs.</p>

        {secondPokemonSprites?.front_default ? (
          <img
            alt={secondPokemon.data?.name}
            src={secondPokemonSprites.front_default}
          />
        ) : null}
      </main>
    </div>
  );
}
