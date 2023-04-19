import React, {useEffect, useRef, useState} from 'react';
import {PokemonApi} from '../api/PokemonApi';
import {PokemonPagina, PokemonSimple, Result} from '../interfaces/Interfas';

export const usePokemonPagina = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<PokemonSimple[]>(
    [],
  );

  const nextUrl = useRef('http://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemos = async () => {
    console.log('cargando')
    setIsLoading(true);
    const respo = await PokemonApi.get<PokemonPagina>(nextUrl.current);
    nextUrl.current = respo.data.next;
    mapPokemon(respo.data.results);
  };

  const mapPokemon = (pokemonList: Result[]) => {
    const newPokemonList: PokemonSimple[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picute = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {id, picute, name};
    });
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemos();
  }, []);
  return {isLoading, simplePokemonList, loadPokemos};
};
