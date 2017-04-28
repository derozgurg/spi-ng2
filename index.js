import { Component, Directive, ElementRef, Injectable, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Created by Ozgur Cimen on 26-Apr-17.
 */
var SpiLoadingComponent = (function () {
    function SpiLoadingComponent() {
    }
    return SpiLoadingComponent;
}());
SpiLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'spi-loading',
                template: "<h1>Spi Loading</h1>"
            },] },
];
/**
 * @nocollapse
 */
SpiLoadingComponent.ctorParameters = function () { return []; };

/**
 * Created by Ozgur Cimen on 26-Apr-17.
 */
var SpiLoadingDirective = (function () {
    /**
     * @param {?} el
     */
    function SpiLoadingDirective(el) {
        this.el = el;
    }
    return SpiLoadingDirective;
}());
SpiLoadingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[spiLoadingDirective]'
            },] },
];
/**
 * @nocollapse
 */
SpiLoadingDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };

/**
 * Created by Ozgur Cimen on 26-Apr-17.
 */
var SpiLoadingPipe = (function () {
    function SpiLoadingPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    SpiLoadingPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    return SpiLoadingPipe;
}());
SpiLoadingPipe.decorators = [
    { type: Pipe, args: [{
                name: 'spiLoadingPipe'
            },] },
    { type: Injectable },
];
/**
 * @nocollapse
 */
SpiLoadingPipe.ctorParameters = function () { return []; };

/**
 * Created by Ozgur Cimen on 26-Apr-17.
 */
var SpiLoadingService = (function () {
    function SpiLoadingService() {
    }
    return SpiLoadingService;
}());
SpiLoadingService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SpiLoadingService.ctorParameters = function () { return []; };

/**
 * Created by Ozgur Cimen on 28-Apr-17.
 */
var SpiSystemService = (function () {
    function SpiSystemService() {
    }
    /**
     * @return {?}
     */
    SpiSystemService.prototype.disableLogs = function () {
        console = {
            log: function () { },
            warn: function () { },
            error: function () { }
        };
    };
    return SpiSystemService;
}());
SpiSystemService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SpiSystemService.ctorParameters = function () { return []; };

/**
 * Created by Ozgur Cimen on 26-Apr-17.
 */
var SpiModule = (function () {
    function SpiModule() {
    }
    /**
     * @return {?}
     */
    SpiModule.forRoot = function () {
        return {
            ngModule: SpiModule,
            providers: [SpiLoadingService, SpiSystemService]
        };
    };
    return SpiModule;
}());
SpiModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    SpiLoadingComponent,
                    SpiLoadingDirective,
                    SpiLoadingPipe
                ],
                exports: [
                    SpiLoadingComponent,
                    SpiLoadingDirective,
                    SpiLoadingPipe
                ]
            },] },
];
/**
 * @nocollapse
 */
SpiModule.ctorParameters = function () { return []; };

export { SpiModule, SpiLoadingComponent, SpiLoadingDirective, SpiLoadingPipe, SpiLoadingService, SpiSystemService };
