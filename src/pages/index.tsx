import { trpc } from '@/utils/trpc';

export default function IndexPage() {
  const { data: firstPokemonData, isLoading: isFirstPokemonLoading } =
    trpc.useQuery(['get-pokemon-by-id', { id: 2 }]);

  const { data: secondPokemonData, isLoading: isSecondPokemonLoading } =
    trpc.useQuery(['get-pokemon-by-id', { id: 1 }]);

  const isLoading = isFirstPokemonLoading || isSecondPokemonLoading;

  if (isLoading) return <h1>Loading . . .</h1>;

  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-extralight mb-8">
        Which Pokémon is Rounder?
      </h1>

      <main className="border rounded p-8">
        <div>{firstPokemonData?.name}</div>

        <p>Vs.</p>

        <div>{secondPokemonData?.name}</div>
      </main>
    </div>
  );
}
