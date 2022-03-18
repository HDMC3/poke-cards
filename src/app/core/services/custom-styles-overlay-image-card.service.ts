import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomValuesOverlayImageCard } from '../types/custom-values-overlay-image-card';

@Injectable({
    providedIn: 'root'
})
export class CustomStylesOverlayImageCardService {

    private customValues$: BehaviorSubject<CustomValuesOverlayImageCard>;
    private defaultValuesOverlayImage: CustomValuesOverlayImageCard = {
        imageContainer: {
            background: '#FFFFFF'
        },
        principalPart: {
            background: '#FFFFFF',
            pokemonNameColorFont: '#222222',
            statNameColorFont: '#222222',
            colorBadges: '#222222',
            badgesFontColor: '#FFFFFF',
            separatorColor: '#646464'
        }
    };

    constructor() {
        const initialValuesOverlayImage = JSON.parse(JSON.stringify(this.defaultValuesOverlayImage));
        this.customValues$ = new BehaviorSubject(initialValuesOverlayImage);
    }

    get customValues() {
        return this.customValues$.asObservable();
    }

    get defaultValues() {
        return this.defaultValuesOverlayImage;
    }

    changeValue(changedValues: CustomValuesOverlayImageCard) {
        this.customValues$.next(changedValues);
    }

    resetAllValues() {
        this.customValues$.next(JSON.parse(JSON.stringify(this.defaultValuesOverlayImage)));
    }

}
