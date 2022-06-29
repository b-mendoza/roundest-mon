import { trpc } from '@/utils/trpc';

export default function IndexPage() {
  const { data, isLoading } = trpc.useQuery(['hello', { text: 'Bryan' }]);

  if (isLoading) return <h1>Loading . . .</h1>;

  if (data) return <h1>{data.greeting}</h1>;

  return (
    <div className="h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-extralight mb-8">
        Which Pokémon is Rounder?
      </h1>

      <main className="border rounded p-8">
        {/* First Pokémon */}
        <div />

        <p>Vs.</p>

        {/* Second Pokémon */}
        <div />
      </main>
    </div>
  );
}
