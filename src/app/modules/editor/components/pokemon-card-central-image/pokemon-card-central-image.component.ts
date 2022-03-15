import { Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { POKEMON_TYPE_COLORS } from 'src/app/core/constants/pokemon-type-colors';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { CustomStylesCentralImageCardService } from 'src/app/core/services/custom-styles-central-image-card.service';
import { CustomValuesCentralImageCard } from 'src/app/core/types/custom-values-central-image-card';
import { PokemonTypeName } from 'src/app/core/types/pokemon-type-name';

@Component({
    selector: 'app-pokemon-card-central-image',
    templateUrl: './pokemon-card-central-image.component.html',
    styleUrls: ['./pokemon-card-central-image.component.scss']
})
export class PokemonCardCentralImageComponent implements OnInit, OnDestroy {

    @HostBinding('class') hostContainer = 'host-container';
    @Input() pokemon: Pokemon | undefined;

    pokemonTypeColors = POKEMON_TYPE_COLORS;
    customStyleValues!: CustomValuesCentralImageCard;
    subscriptionCustomStyles!: Subscription;

    constructor(private customStylesService: CustomStylesCentralImageCardService) { }

    ngOnInit() {
        this.subscriptionCustomStyles = this.customStylesService.customValues.subscribe(value => {
            this.customStyleValues = value;
        });
    }

    ngOnDestroy() {
        this.subscriptionCustomStyles.unsubscribe();
        this.customStylesService.resetAllValues();
    }

    getPercentStatProgressBar(baseStat: number) {
        return Number((baseStat / 255).toFixed(2)) * 100;
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
