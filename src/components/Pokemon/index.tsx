import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type PokemonProps = {
  name?: string;
  sprite: StaticImageData;
};

export const Pokemon = (props: PokemonProps) => {
  const { name, sprite } = props;

  return (
    <article>
      <div className="mx-auto w-fit">
        <Image {...sprite} alt={name} placeholder="blur" title={name} />
      </div>

      <h3 className="capitalize text-center">{name}</h3>

      <button className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease-in hover:bg-indigo-600 focus:shadow">
        Is the Roundest
      </button>
    </article>
  );
};
