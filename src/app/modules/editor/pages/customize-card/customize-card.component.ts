import { Component, HostBinding, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
    selector: 'app-customize-card',
    templateUrl: './customize-card.component.html',
    styleUrls: ['./customize-card.component.scss']
})
export class CustomizeCardComponent implements OnInit {

    @HostBinding('class') hostContainer = 'host-container';
    pokemon: Pokemon | undefined;

    constructor(
        private pokemonService: PokemonService
    ) {}

    ngOnInit() {
        this.pokemonService.selectedPokemon$.subscribe(pokemon => {
            this.pokemon = pokemon;
        });
    }

}
