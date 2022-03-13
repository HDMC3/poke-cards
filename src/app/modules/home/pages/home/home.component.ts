import { Component, HostBinding } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    @HostBinding('id') homeContainer = 'home-container';
    @HostBinding('style.height') heightHomeContainer = this.getHeightContainer();

    constructor() { }

    getHeightContainer() {
        const nav: any = document.querySelector('nav');
        const heightNav = window.getComputedStyle(nav).height;
        return `calc(100vh - ${heightNav})`;
    }

}
