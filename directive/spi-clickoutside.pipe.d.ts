/**
 * Created by Ozgur Cimen on 08-May-17.
 */
import { ElementRef, EventEmitter } from '@angular/core';
export declare class SpiClickOutsideDirective {
    private _elementRef;
    constructor(_elementRef: ElementRef);
    spiClickOutside: EventEmitter<MouseEvent>;
    onClick(event: MouseEvent, targetElement: HTMLElement): void;
}
