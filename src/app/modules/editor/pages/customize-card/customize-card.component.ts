import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { fadeInToBottom } from 'src/app/core/animations/fade-in-to-bottom.animation';
import { EditorExit } from 'src/app/core/interfaces/editor-exit.interface';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { CustomStylesCentralImageCardService } from 'src/app/core/services/custom-styles-central-image-card.service';
import { CustomStylesOverlayImageCardService } from 'src/app/core/services/custom-styles-overlay-image-card.service';
import { CustomStylesTopImageCardService } from 'src/app/core/services/custom-styles-top-image-card.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
    selector: 'app-customize-card',
    templateUrl: './customize-card.component.html',
    styleUrls: ['./customize-card.component.scss'],
    animations: [fadeInToBottom]
})
export class CustomizeCardComponent implements OnInit, OnDestroy, EditorExit {

    @HostBinding('class') customizeCardComponent = 'customize-card-container';
    @HostBinding('style.height') heightCustomizeCardContainer = this.getHeightContainer();
    @HostBinding('@fadeInToBottom') pageInAnimation = '';
    pokemon: Pokemon | undefined;
    optionsPanelIsOpen: boolean;
    cardTypeSelected: string;
    mutationObserverNavbar: MutationObserver;

    constructor(
        private pokemonService: PokemonService,
        private customStyleTopImageService: CustomStylesTopImageCardService,
        private customStyleCentralImageService: CustomStylesCentralImageCardService,
        private customStyleOverlayImageService: CustomStylesOverlayImageCardService
    ) {
        this.optionsPanelIsOpen = true;
        this.cardTypeSelected = 'central-image';
        this.mutationObserverNavbar = new MutationObserver((m) => {
            this.heightCustomizeCardContainer = this.getHeightContainer();
        });
    }

    ngOnInit() {
        this.pokemonService.selectedPokemon$.subscribe(pokemon => {
            this.pokemon = pokemon;
        });

        const nav: any = document.querySelector('#navbarNav');
        this.mutationObserverNavbar.observe(nav, { attributes: true, attributeFilter: ['class'] });
    }

    ngOnDestroy() {
        this.customStyleCentralImageService.resetAllValues();
        this.customStyleTopImageService.resetAllValues();
        this.customStyleOverlayImageService.resetAllValues();
        this.mutationObserverNavbar.disconnect();
    }

    onExit() {
        const result = confirm('Desea salir del editor?');
        return result;
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

    changeCardType(value: string) {
        this.cardTypeSelected = value;
    }

}
