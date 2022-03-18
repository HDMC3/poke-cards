import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomStylesOverlayImageCardService } from 'src/app/core/services/custom-styles-overlay-image-card.service';
import { CustomValuesOverlayImageCard } from 'src/app/core/types/custom-values-overlay-image-card';

@Component({
    selector: 'app-controls-layout-overlay-image',
    templateUrl: './controls-layout-overlay-image.component.html',
    styleUrls: ['./controls-layout-overlay-image.component.scss']
})
export class ControlsLayoutOverlayImageComponent implements OnInit, OnDestroy {

    customValues!: CustomValuesOverlayImageCard;
    customInitialValues!: CustomValuesOverlayImageCard;
    subscriptionCustomStyles!: Subscription;

    constructor(private customStylesService: CustomStylesOverlayImageCardService) { }

    ngOnInit() {
        this.subscriptionCustomStyles = this.customStylesService.customValues.subscribe(value => {
            this.customValues = value;
            if (!this.customInitialValues) {
                this.customInitialValues = JSON.parse(JSON.stringify(value));
            }
        });
    }

    ngOnDestroy() {
        this.subscriptionCustomStyles.unsubscribe();
    }

    onChangeControlValue() {
        this.customStylesService.changeValue(this.customValues);
    }

    resetValues(group: 'overlay-image' | 'principal-part') {
        if (group === 'overlay-image') {
            this.customValues.imageContainer = { ...this.customStylesService.defaultValues.imageContainer };
        }

        if (group === 'principal-part') {
            this.customValues.principalPart = { ...this.customStylesService.defaultValues.principalPart };
        }

        this.customStylesService.changeValue(this.customValues);
    }

}
