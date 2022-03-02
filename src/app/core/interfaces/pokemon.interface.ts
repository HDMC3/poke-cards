import { PokemonSprites } from './pokemon-sprites.interface';
import { PokemonStat } from './pokemon-stat.interface';
import { PokemonType } from './pokemon-type.interface';

export interface Pokemon {
    id: number;
    base_experience: number;
    height: number;
    weight: number;
    name: string;
    stats: PokemonStat[];
    sprites: PokemonSprites;
    types: PokemonType[];
    moves?: string[];
}
