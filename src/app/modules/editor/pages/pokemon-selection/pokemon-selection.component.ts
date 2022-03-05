import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Pokemon } from 'src/app/core/interfaces/pokemon.interface';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
    selector: 'app-pokemon-selection',
    templateUrl: './pokemon-selection.component.html',
    styleUrls: ['./pokemon-selection.component.scss']
})
export class PokemonSelectionComponent {

    @HostBinding('class') content = 'pokemon-selection-container';
    @ViewChild('searchInput') searchInput: ElementRef | undefined;

    searchForm: FormGroup;
    pokemonImg: string;
    searchedWord: string;
    loading: boolean;
    pokemonNotFound: boolean;
    pokemon: Pokemon | undefined;

    constructor(
        private pokemonService: PokemonService,
        private router: Router
    ) {
        this.loading = false;
        this.pokemonImg = '';
        this.searchedWord = '';
        this.pokemonNotFound = false;
        this.searchForm = new FormGroup({
            'pokemon-name': new FormControl({ value: '', disabled: false }, [Validators.required])
        });
    }

    searchPokemon() {
        this.pokemonNotFound = false;
        const pokemonNameControlValue: string = this.searchForm.controls['pokemon-name'].value;

        if (pokemonNameControlValue.replace(/\s+/, '').length === 0) {
            this.searchForm.reset();
            return;
        }

        if (this.searchForm.valid && pokemonNameControlValue !== this.searchedWord) {
            this.pokemonImg = '';
            this.loading = true;
            this.searchForm.controls['pokemon-name'].disable();
            const pokemonName: string = pokemonNameControlValue;
            this.searchedWord = pokemonNameControlValue;
            this.pokemonService.getPokemon(pokemonName.toLowerCase())
                .pipe(
                    delay(1000)
                )
                .subscribe({
                    next: pokemon => {
                        this.pokemon = pokemon;
                        this.pokemonNotFound = false;
                        this.pokemonImg = pokemon.sprites.front_default;
                        // this.pokemonImg = pokemon.sprites.dream_world.front_default;
                        this.loading = false;
                        this.searchForm.controls['pokemon-name'].enable();
                        this.searchInput?.nativeElement.focus();
                    },
                    error: errorResponse => {
                        this.pokemon = undefined;
                        this.pokemonNotFound = true;
                        this.loading = false;
                        this.searchForm.controls['pokemon-name'].enable();
                        this.searchInput?.nativeElement.focus();
                    }
                });
        }
    }

    clearPokemon() {
        this.pokemonImg = '';
        this.searchForm.reset();
        this.searchedWord = '';
        this.pokemon = undefined;
    }

    selectPokemon() {
        if (this.pokemon) {
            this.pokemonService.changeSelectedPokemon(this.pokemon);
            this.router.navigate(['/editor/customize-card']);
        }
    }

}
