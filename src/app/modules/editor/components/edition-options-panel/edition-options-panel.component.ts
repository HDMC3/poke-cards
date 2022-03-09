import { Component, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-edition-options-panel',
    templateUrl: './edition-options-panel.component.html',
    styleUrls: ['./edition-options-panel.component.scss']
})
export class EditionOptionsPanelComponent {

    @HostBinding('class') hostContainer = 'panel';
    @Output() closeOptionsPanel = new EventEmitter();

    cardType: 'central-image' | 'top-image' | 'overlay-image';

    constructor() {
        this.cardType = 'central-image';
    }

    closePanel() {
        this.closeOptionsPanel.emit();
    }

}
