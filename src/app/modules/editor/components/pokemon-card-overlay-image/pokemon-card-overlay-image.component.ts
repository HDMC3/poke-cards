import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { fadeIn } from 'src/app/core/animations/fade-in.animation';
import { POKEMON_TYPE_COLORS } from 'src/app/core/constants/pokemon-type-colors';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { CustomStylesOverlayImageCardService } from 'src/app/core/services/custom-styles-overlay-image-card.service';
import { CustomValuesOverlayImageCard } from 'src/app/core/types/custom-values-overlay-image-card';
import { PokemonTypeName } from 'src/app/core/types/pokemon-type-name';

@Component({
    selector: 'app-pokemon-card-overlay-image',
    templateUrl: './pokemon-card-overlay-image.component.html',
    styleUrls: ['./pokemon-card-overlay-image.component.scss'],
    animations: [
        fadeIn
    ]
})
export class PokemonCardOverlayImageComponent implements OnInit, OnDestroy {

    @HostBinding('id') overlayImageContainer = 'overlay-image-container';
    @HostBinding('@fadeIn') cardInAnimation = '';
    @Input() pokemon: Pokemon | undefined;

    pokemonTypeColors = POKEMON_TYPE_COLORS;
    customStyleValues!: CustomValuesOverlayImageCard;
    subscriptionCustomValues!: Subscription;

    constructor(private customStylesService: CustomStylesOverlayImageCardService) { }

    ngOnInit() {
        this.subscriptionCustomValues = this.customStylesService.customValues.subscribe(value => {
            this.customStyleValues = value;
        });
    }

    ngOnDestroy() {
        this.subscriptionCustomValues.unsubscribe();
        this.customStylesService.resetAllValues();
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
