import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeInToBottom } from 'src/app/core/animations/fade-in-to-bottom.animation';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
    selector: 'app-customize-card',
    templateUrl: './customize-card.component.html',
    styleUrls: ['./customize-card.component.scss'],
    animations: [fadeInToBottom]
})
export class CustomizeCardComponent implements OnInit {

    @HostBinding('class') customizeCardComponent = 'customize-card-container';
    @HostBinding('style.height') heightCustomizeCardContainer = this.getHeightContainer();
    @HostBinding('@fadeInToBottom') pageInAnimation = '';
    pokemon: Pokemon | undefined;
    optionsPanelIsOpen: boolean;

    constructor(
        private pokemonService: PokemonService
    ) {
        this.optionsPanelIsOpen = true;
    }

    ngOnInit() {
        this.pokemonService.selectedPokemon$.subscribe(pokemon => {
            this.pokemon = pokemon;
        });

        const observer = new MutationObserver((m) => {
            this.heightCustomizeCardContainer = this.getHeightContainer();
        });

        const nav: any = document.querySelector('#navbarNav');
        observer.observe(nav, { attributes: true, attributeFilter: ['class'] });
    }

    openOptionsPanel() {
        this.optionsPanelIsOpen = true;
    }

    closeOptionsPanel() {
        this.optionsPanelIsOpen = false;
    }

    getHeightContainer() {
        const nav: any = document.querySelector('nav');
        const heightNav = window.getComputedStyle(nav).height;
        return `calc(100vh - ${heightNav})`;
    }

}
