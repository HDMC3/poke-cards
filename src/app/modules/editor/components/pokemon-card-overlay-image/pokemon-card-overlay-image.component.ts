import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { POKEMON_TYPE_COLORS } from 'src/app/core/constants/pokemon-type-colors';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { PokemonTypeName } from 'src/app/core/types/pokemon-type-name';

@Component({
    selector: 'app-pokemon-card-overlay-image',
    templateUrl: './pokemon-card-overlay-image.component.html',
    styleUrls: ['./pokemon-card-overlay-image.component.scss']
})
export class PokemonCardOverlayImageComponent implements OnInit {

    @HostBinding('id') overlayImageContainer = 'overlay-image-container';
    @Input() pokemon: Pokemon | undefined;

    pokemonTypeColors = POKEMON_TYPE_COLORS;

    constructor() { }

    ngOnInit() {

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
