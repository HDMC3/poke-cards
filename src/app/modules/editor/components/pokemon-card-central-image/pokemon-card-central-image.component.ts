import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { POKEMON_TYPE_COLORS } from 'src/app/core/constants/pokemon-type-colors';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';

@Component({
    selector: 'app-pokemon-card-central-image',
    templateUrl: './pokemon-card-central-image.component.html',
    styleUrls: ['./pokemon-card-central-image.component.scss']
})
export class PokemonCardCentralImageComponent implements OnInit {

    @HostBinding('class') hostContainer = 'host-container';
    @Input() pokemon: Pokemon | undefined;
    pokemonTypeColors = POKEMON_TYPE_COLORS;

    constructor() { }

    ngOnInit(): void {
        console.log(this.pokemon);
    }

    getPercentStatProgressBar(baseStat: number) {
        return Number((baseStat / 255).toFixed(2)) * 100;
    }

}
