import React, {useEffect, useRef, useState} from 'react';
import {PokemonPagina, PokemonSimple, Result} from '../interfaces/Interfas';
import { pokemonApi } from '../api/pokemonApi';
export const usePokemonSearch = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<PokemonSimple[]>(
    [],
  );

  const loadPokemos = async () => {
    console.log('cargando');
    const respo = await pokemonApi.get<PokemonPagina>(
      'https://pokeapi.co/api/v2/pokemon?limit=1200'
    );
    mapPokemon(respo.data.results);
  };

  const mapPokemon = (pokemonList: Result[]) => {
    const newPokemonList: PokemonSimple[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picute = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {id, picute, name};
    });
    console.log('simple pokemon, ', simplePokemonList)
    setSimplePokemonList(newPokemonList);
    setIsFetching(false);
  };

  useEffect(() => {
    loadPokemos();
  }, []);
  
  return {isFetching, simplePokemonList};
};
