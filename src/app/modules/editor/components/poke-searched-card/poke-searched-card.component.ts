import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-poke-searched-card',
    templateUrl: './poke-searched-card.component.html',
    styleUrls: ['./poke-searched-card.component.scss']
})
export class PokeSearchedCardComponent {

    @Input() pokemonImg = '';
    @Input() isLoading = false;
    @Input() animateNotFound = false;
    @ViewChild('a') a: ElementRef | undefined;

    constructor() {}


}
