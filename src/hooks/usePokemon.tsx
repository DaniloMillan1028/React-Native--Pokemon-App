import React, {useEffect, useState} from 'react';
import {Pokemonfull} from '../interfaces/Interfas';
import {PokemonApi} from '../api/PokemonApi';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, SetPokemon] = useState<Pokemonfull>({} as Pokemonfull);

  const loadPokemon = async () => {
    const respo = await PokemonApi.get<Pokemonfull>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    SetPokemon(respo.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
