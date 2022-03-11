import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonStat } from '../interfaces/pokemon-stat.interface';
import { PokemonType } from '../interfaces/pokemon-type.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private selectedPokemon: BehaviorSubject<Pokemon | undefined>;

    constructor(private http: HttpClient) {
        this.selectedPokemon = new BehaviorSubject<Pokemon | undefined>(undefined);
    }

    getPokemon(name: string): Observable<Pokemon> {
        return this.http.get(`${environment.API_URL}/pokemon/${name}`)
            .pipe<Pokemon>(
                map(this.mapPokemonResponseCallback)
            );
    }

    get selectedPokemon$() {
        return this.selectedPokemon.asObservable()
            .pipe(
                map(value => {
                    if (value) {
                        return value;
                    }

                    return this.getSelectedPokemonFromStorage();
                })
            );
    }

    changeSelectedPokemon(pokemon: Pokemon) {
        this.selectedPokemon.next(pokemon);
        this.setPokemonInStorage(pokemon);
    }

    setPokemonInStorage(pokemon: Pokemon) {
        const pokemonStr = JSON.stringify(pokemon);
        localStorage.setItem('selected-pokemon', pokemonStr);
    }

    getSelectedPokemonFromStorage() {
        const pokemonStr = localStorage.getItem('selected-pokemon');
        if (!pokemonStr) {
            return undefined;
        }
        const pokemon: Pokemon = JSON.parse(pokemonStr);
        return pokemon;
    }

    private decimetersToMeters(decimeters: number) {
        return Number((decimeters * 0.1).toFixed(2));
    }

    private hectogramsToKilograms(hectograms: number) {
        return Number((hectograms * 0.1).toFixed(1));
    }

    private mapPokemonResponseCallback = (response: any): Pokemon => {
        return {
            id: response.id,
            name: response.name,
            height: this.decimetersToMeters(response.height),
            weight: this.hectogramsToKilograms(response.weight),
            base_experience: response.base_experience,
            sprites: {
                front_default: response.sprites.front_default,
                dream_world: {
                    front_default: response.sprites.other.dream_world.front_default
                },
                home: {
                    front_default: response.sprites.other.home.front_default
                },
                official_artwork: {
                    front_default: response.sprites.other['official-artwork'].front_default
                }
            },
            stats: response.stats
                .filter((s: any) => s.stat.name !== 'special-attack' && s.stat.name !== 'special-defense')
                .map((stat: any) => {
                    const newStat: PokemonStat = {
                        base_stat: stat.base_stat,
                        name: stat.stat.name
                    };

                    return newStat;
                }),
            types: response.types.map((type: any) => {
                const newType: PokemonType = {
                    slot: type.slot,
                    name: type.type.name
                };

                return newType;
            }),
            moves: response.moves.map((move: any) => {
                return move.move.name;
            })
        };
    };

}
