import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInToBottom = trigger('fadeInToBottom', [
    transition(':enter', [
        style({
            opacity: '0',
            transform: 'translateY(-100%)'
        }),
        animate('0.15s', style({
            opacity: '0',
            transform: 'translateY(-5%)'
        })),
        animate('0.25s', style({
            opacity: '1',
            transform: 'translateY(0)'
        }))
    ])
]);
