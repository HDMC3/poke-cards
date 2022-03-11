import { Injectable } from '@angular/core';
import { toSvg, toPng } from 'html-to-image';

@Injectable({
    providedIn: 'root'
})
export class ImageExportService {

    constructor() { }

    async exportToPng(pokemonName: string) {

        try {
            const pokemonCard: HTMLElement | null = document.querySelector('.pokemon-card');

            if (pokemonCard) {
                const imageData = await toPng(pokemonCard);

                const a = document.createElement('a');
                a.href = imageData;
                a.download = `${pokemonName}-card.png`;
                a.click();
                a.remove();
            }

        } catch (error) {
            console.log(error);
        }

    }

    async exportToSvg(pokemonName: string) {
        try {
            const pokemonCard: HTMLLIElement | null = document.querySelector('.pokemon-card');

            if (pokemonCard) {
                const imageData = await toSvg(pokemonCard, { quality: 1, pixelRatio: 1 });

                const a = document.createElement('a');
                a.href = imageData;
                a.download = `${pokemonName}-card.svg`;
                a.click();
                a.remove();
            }
        } catch (error) {
            console.log(error);
        }
    }
}
