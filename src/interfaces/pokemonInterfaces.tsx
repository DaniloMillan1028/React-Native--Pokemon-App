interface PokemonPaginatedResponse {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

interface Result {
  name: string;
  url: string;
}
interface SimplePokemon {
  picute: string | undefined;
  id: string;
  name: string;
  picture?: string;
  color?: string;
}
