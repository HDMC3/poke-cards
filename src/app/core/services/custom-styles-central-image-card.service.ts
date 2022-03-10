import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomValuesCentralImageCard } from '../types/custom-values-central-image-card';

@Injectable({
    providedIn: 'root'
})
export class CustomStylesCentralImageCardService {

    private customValues$: BehaviorSubject<CustomValuesCentralImageCard>;
    private defaultValuesCentralImage = {
        header: {
            background: '#FFFFFF',
            fontColor: '#222222'
        },
        imageContainer: {
            background: '#FFFFFF'
        },
        cardBottomPart: {
            background: '#FFFFFF',
            statColorFont: '#222222',
            progressBarBackground: '#F0F0F0',
            progressBarColor: '#158CBA',
            progressBarColorFont: '#FFFFFF'
        },
        cardTopPart: {
            background: '#FFFFFF',
            badgesColorFont: '#FFFFFF',
            colorBadges: '#242424',
            labelsColorFont: '#222222'
        }
    };

    constructor() {
        const initialValuesCentralImage = JSON.parse(JSON.stringify(this.defaultValuesCentralImage));
        this.customValues$ = new BehaviorSubject(initialValuesCentralImage);
    }

    get customValues() {
        return this.customValues$.asObservable();
    }

    get defaultValues() {
        return this.defaultValuesCentralImage;
    }

    changeValue(changedValues: CustomValuesCentralImageCard) {
        this.customValues$.next(changedValues);
    }
}
