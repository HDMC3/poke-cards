import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomValuesTopImageCard } from '../types/custom-values-top-image-card';

@Injectable({
    providedIn: 'root'
})
export class CustomStylesTopImageCardService {

    private customValues$: BehaviorSubject<CustomValuesTopImageCard>;
    private defaultValuesTopImage = {
        cardTopPart: {
            background: '#FFFFFF',
            pokemonNameColorFont: '#222222',
            labelsColorFont: '#222222',
            badgesColorFont: '#FFFFFF',
            colorBadges: '#242424'
        },
        cardBottomPart: {
            background: '#FFFFFF',
            statColorFont: '#222222',
            radialProgressColor: '#158CBA',
            radialProgressBackground: '#F0F0F0',
            radialProgressColorFont: '#222222',
            radialProgressCentralBackground: '#FFFFFF'
        }
    };

    constructor() {
        const initialValuesTopImage = JSON.parse(JSON.stringify(this.defaultValuesTopImage));
        this.customValues$ = new BehaviorSubject(initialValuesTopImage);
    }

    get customValues() {
        return this.customValues$.asObservable();
    }

    get defaultValues() {
        return this.defaultValuesTopImage;
    }

    changeValue(changedValues: CustomValuesTopImageCard) {
        this.customValues$.next(changedValues);
    }

    resetAllValues() {
        this.customValues$.next(JSON.parse(JSON.stringify(this.defaultValuesTopImage)));
    }
}
