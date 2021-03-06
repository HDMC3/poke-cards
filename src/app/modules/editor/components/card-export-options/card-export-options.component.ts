import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageExportService } from 'src/app/core/services/image-export.service';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
    selector: 'app-card-export-options',
    templateUrl: './card-export-options.component.html',
    styleUrls: ['./card-export-options.component.scss']
})
export class CardExportOptionsComponent implements OnInit, OnDestroy {

    @Input() cardType = '';
    pokemonName: string;
    pokemonSubscription!: Subscription;
    cardTypesDict: {[key: string]: string} = {
        'central-image': '1',
        'top-image': '2',
        'overlay-image': '3'
    };

    constructor(
        private imageExportService: ImageExportService,
        private pokemonService: PokemonService
    ) {
        this.pokemonName = 'pokemon';
    }

    ngOnInit() {
        this.pokemonSubscription = this.pokemonService.selectedPokemon$.subscribe(pokemon => {
            if (pokemon) {
                this.pokemonName = pokemon.name;
            }
        });
    }

    ngOnDestroy(): void {
        this.pokemonSubscription.unsubscribe();
    }

    exportCardToSvg() {
        this.imageExportService.exportToSvg(this.pokemonName, this.cardTypesDict[this.cardType]);
    }

    exportCardToPng() {
        this.imageExportService.exportToPng(this.pokemonName, this.cardTypesDict[this.cardType]);
    }

    exportCardToJpg() {
        this.imageExportService.exportToJpg(this.pokemonName, this.cardTypesDict[this.cardType]);
    }

}
