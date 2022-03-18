import { animate, style, transition, trigger } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('0.25s', style({
            opacity: 0.8
        })),
        animate('0.35s', style({
            opacity: 1
        }))
    ])
]);
