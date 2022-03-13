import { Injectable } from '@angular/core';
import { toSvg, toPng, toJpeg } from 'html-to-image';

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

                this.downloadImage(pokemonName, 'png', imageData);
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

                this.downloadImage(pokemonName, 'svg', imageData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async exportToJpg(pokemonName: string) {
        try {
            const pokemonCard: HTMLLIElement | null = document.querySelector('.pokemon-card');

            if (pokemonCard) {
                const imageData = await toJpeg(pokemonCard, { quality: 1, pixelRatio: 1 });

                this.downloadImage(pokemonName, 'jpeg', imageData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    private downloadImage(pokemonName: string, fileExtension: string, imageData: string) {
        const a = document.createElement('a');
        a.href = imageData;
        a.download = `${pokemonName}-card.${fileExtension}`;
        a.click();
        a.remove();
    }
}
