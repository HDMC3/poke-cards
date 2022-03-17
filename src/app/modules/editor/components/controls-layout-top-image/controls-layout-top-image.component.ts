import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomStylesTopImageCardService } from 'src/app/core/services/custom-styles-top-image-card.service';
import { CustomValuesTopImageCard } from 'src/app/core/types/custom-values-top-image-card';

@Component({
    selector: 'app-controls-layout-top-image',
    templateUrl: './controls-layout-top-image.component.html',
    styleUrls: ['./controls-layout-top-image.component.scss']
})
export class ControlsLayoutTopImageComponent implements OnInit, OnDestroy {

    customValues!: CustomValuesTopImageCard;
    customInitialValues!: CustomValuesTopImageCard;
    subscriptionCustomStyles!: Subscription;

    constructor(private customStylesService: CustomStylesTopImageCardService) { }

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

    resetValues(group: 'card-bottom' | 'card-top') {
        if (group === 'card-top') {
            this.customValues.cardTopPart = { ...this.customStylesService.defaultValues.cardTopPart };
        }

        if (group === 'card-bottom') {
            this.customValues.cardBottomPart = { ...this.customStylesService.defaultValues.cardBottomPart };
        }

        this.customStylesService.changeValue(this.customValues);
    }

}
