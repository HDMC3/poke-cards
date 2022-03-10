import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomStylesCentralImageCardService } from 'src/app/core/services/custom-styles-central-image-card.service';
import { CustomValuesCentralImageCard } from 'src/app/core/types/custom-values-central-image-card';

@Component({
    selector: 'app-controls-layout-central-image',
    templateUrl: './controls-layout-central-image.component.html',
    styleUrls: ['./controls-layout-central-image.component.scss']
})
export class ControlsLayoutCentralImageComponent implements OnInit, OnDestroy {

    customValues!: CustomValuesCentralImageCard;
    customInitialValues!: CustomValuesCentralImageCard;
    subscriptionCustomStyles!: Subscription;

    constructor(private customStylesService: CustomStylesCentralImageCardService) {
    }

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

    resetValues(group: 'card-bottom' | 'card-top' | 'card-image' | 'card-header') {
        if (group === 'card-header') {
            this.customValues.header = { ...this.customStylesService.defaultValues.header };
        }

        if (group === 'card-top') {
            this.customValues.cardTopPart = { ...this.customStylesService.defaultValues.cardTopPart };
        }

        if (group === 'card-bottom') {
            this.customValues.cardBottomPart = { ...this.customStylesService.defaultValues.cardBottomPart };
        }

        if (group === 'card-image') {
            this.customValues.imageContainer = { ...this.customStylesService.defaultValues.imageContainer };
        }

        this.customStylesService.changeValue(this.customValues);
    }

}
