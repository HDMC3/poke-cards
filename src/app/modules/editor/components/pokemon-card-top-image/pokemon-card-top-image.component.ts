import { Component, OnInit, HostBinding, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { fadeIn } from 'src/app/core/animations/fade-in.animation';
import { POKEMON_TYPE_COLORS } from 'src/app/core/constants/pokemon-type-colors';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { CustomStylesTopImageCardService } from 'src/app/core/services/custom-styles-top-image-card.service';
import { CustomValuesTopImageCard } from 'src/app/core/types/custom-values-top-image-card';
import { PokemonTypeName } from 'src/app/core/types/pokemon-type-name';

@Component({
    selector: 'app-pokemon-card-top-image',
    templateUrl: './pokemon-card-top-image.component.html',
    styleUrls: ['./pokemon-card-top-image.component.scss'],
    animations: [
        fadeIn
    ]
})
export class PokemonCardTopImageComponent implements OnInit, OnDestroy {

    @HostBinding('id') topImageCardContainer = 'top-image-card-container';
    @HostBinding('@fadeIn') cardInAnimation = '';
    @Input() pokemon: Pokemon | undefined;

    pokemonTypeColors = POKEMON_TYPE_COLORS;
    customStyleValues!: CustomValuesTopImageCard;
    subscriptionCustomStyles!: Subscription;

    constructor(private customStylesService: CustomStylesTopImageCardService) { }

    ngOnInit() {
        this.subscriptionCustomStyles = this.customStylesService.customValues.subscribe(value => {
            this.customStyleValues = value;
        });
    }

    ngOnDestroy() {
        this.subscriptionCustomStyles.unsubscribe();
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
