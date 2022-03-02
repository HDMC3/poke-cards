import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonStat } from '../interfaces/pokemon-stat.interface';
import { PokemonType } from '../interfaces/pokemon-type.interface';
import { Pokemon } from '../interfaces/pokemon.interface';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(private http: HttpClient) { }

    getPokemon(name: string): Observable<Pokemon> {
        return this.http.get(`${environment.API_URL}/pokemon/${name}`)
            .pipe<Pokemon>(
                map(this.mapPokemonResponseCallback)
            );
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
            stats: response.stats.map((stat: any) => {
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
