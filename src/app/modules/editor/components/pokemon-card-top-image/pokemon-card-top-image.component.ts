import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { POKEMON_TYPE_COLORS } from 'src/app/core/constants/pokemon-type-colors';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { PokemonTypeName } from 'src/app/core/types/pokemon-type-name';

@Component({
    selector: 'app-pokemon-card-top-image',
    templateUrl: './pokemon-card-top-image.component.html',
    styleUrls: ['./pokemon-card-top-image.component.scss']
})
export class PokemonCardTopImageComponent implements OnInit {

    @HostBinding('id') topImageCardContainer = 'top-image-card-container';
    @Input() pokemon: Pokemon | undefined;

    pokemonTypeColors = POKEMON_TYPE_COLORS;

    constructor() { }

    ngOnInit() {
        console.log('PokemonCardTopImageComponent');
    }

    getRadialProgressDegrees(baseStat: number) {
        const degrees = Number((baseStat / 255).toFixed(2)) * 360;
        return `${degrees}deg`;
    }

    getTranslateStatName(statName: string) {
        const dictStatNames: {[key: string] : string} = {
            hp: 'hp',
            attack: 'ataque',
            defense: 'defensa',
            speed: 'velocidad'
        };

        return dictStatNames[statName];
    }

    getTranslatePokemonTypeName(pokemonTypeName: PokemonTypeName) {
        const dictPokemonTypeNames = {
            normal: 'normal',
            fighting: 'lucha',
            flying: 'volador',
            poison: 'veneno',
            ground: 'tierra',
            rock: 'roca',
            bug: 'bicho',
            ghost: 'fantasma',
            steel: 'acero',
            fire: 'fuego',
            water: 'agua',
            grass: 'planta',
            electric: 'electrico',
            psychic: 'psiquico',
            ice: 'hielo',
            dragon: 'dragon',
            dark: 'siniestro',
            fairy: 'hada',
            unknown: '???',
            shadow: 'shadow'
        };

        return dictPokemonTypeNames[pokemonTypeName];
    }

}
