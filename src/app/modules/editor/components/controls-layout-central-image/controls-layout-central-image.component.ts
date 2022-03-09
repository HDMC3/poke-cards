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
    subscriptionCustomStyles!: Subscription;

    constructor(private customStylesService: CustomStylesCentralImageCardService) {
    }

    ngOnInit() {
        this.subscriptionCustomStyles = this.customStylesService.customValues.subscribe(value => {
            this.customValues = value;
        });
    }

    ngOnDestroy() {
        this.subscriptionCustomStyles.unsubscribe();
    }

    onChangeControlValue() {
        this.customStylesService.changeValue(this.customValues);
    }

}
