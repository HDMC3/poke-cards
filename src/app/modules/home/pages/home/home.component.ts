import { Component, HostBinding } from '@angular/core';
import { fadeInToBottom } from 'src/app/core/animations/fade-in-to-bottom.animation';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [fadeInToBottom]
})
export class HomeComponent {

    @HostBinding('id') homeContainer = 'home-container';
    @HostBinding('style.height') heightHomeContainer = this.getHeightContainer();
    @HostBinding('@fadeInToBottom') pageInAnimation = '';

    constructor() { }

    getHeightContainer() {
        const nav: any = document.querySelector('nav');
        const heightNav = window.getComputedStyle(nav).height;
        return `calc(100vh - ${heightNav})`;
    }

}
