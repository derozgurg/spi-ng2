import { Component, Directive, ElementRef, EventEmitter, HostListener, Injectable, NgModule, Output, Pipe } from '@angular/core';
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
                styles: [".spi-backdrop-content{ background: rgba(0,0,0,.4); position: absolute; top: 0; bottom: 0; left: 0; right: 0; z-index: 1000; pointer-events: auto; transition: opacity .4s } .spi-backdrop-content .loading-content{ width: 128px; height: 30px; background-color: white; display: block; margin: auto; position: relative; top: -30px; padding:5px; } .spi-backdrop-content .loading-content.out{ transition: .5s; top: -30px; } .spi-backdrop-content .loading-content.in{ transition: .5s; top: 0; } .spinner.auto{ position: absolute; top: 30%; width: 100%; margin: auto; } .spinner { animation: rotator 1.4s linear infinite; } @keyframes rotator { 0% { transform: rotate(0deg); } 100% { transform: rotate(270deg); } } .path { stroke-dasharray: 187; stroke-dashoffset: 0; transform-origin: center; animation: dash 2.4s ease-in-out infinite, colors 5.6s ease-in-out infinite; } @keyframes colors { 0% { stroke: #4285F4; } 25% { stroke: #DE3E35; } 50% { stroke: #F7C223; } 75% { stroke: #1B9A59; } 100% { stroke: #4285F4; } } @keyframes dash { 0% { stroke-dashoffset: 187; } 50% { stroke-dashoffset: 748; transform:rotate(135deg); } 100% { stroke-dashoffset: 187; transform:rotate(450deg); } } /*spi-alert-content ALERT CONTENT */ .spi-notification-content{ position: absolute; right: 30px; top: 0; z-index: 1000; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -moz-flex-direction: column; -ms-flex-direction: column; flex-direction: column; box-orient:vertical; -moz-box-orient:vertical; -webkit-box-orient:vertical; justify-content:flex-end; align-items: flex-end; -webkit-align-items: flex-end; -moz-align-items: flex-end; box-pack:end; -webkit-box-pack:end; -moz-box-pack:end; } .spi-alert-content{ display: inline-table; right: -500px; max-width: 500px; height: 61px; z-index: 1000; border: 1px solid; margin: .5em 0; padding: 1em 3em 1em .5em; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; position: relative; } .spi-alert-content.in{ right: 0; transition: .5s; } .spi-alert-content .close-icon{ color: #fff; cursor: pointer; position: absolute; top: 5px; right: 5px; } .spi-alert-content ul{ margin: 0; padding: 0; list-style-type: none; display: inline-block; vertical-align: middle; box-sizing: border-box; } .spi-alert-content ul li{ box-sizing: border-box; display: list-item; text-align: -webkit-match-parent; } .spi-alert-content .spi-alert-icon{ display: inline-block; padding: 0; vertical-align: middle; box-sizing: border-box } .spi-alert-content .spi-alert-summary{ font-weight: bold; margin-left: .25em; box-sizing: border-box; } .spi-alert-content .spi-alert-detail{ padding-left: 10px; box-sizing: border-box; line-height: initial; } .spi-alert-content.error{ color: #fff; background-color: #f44336; border-color: #f44336; } .spi-alert-content.succeed{ color: #fff; background-color: #4caf50; border-color: #4caf50; } .spi-alert-content.info{ color: #fff; background-color: #2196f3; border-color: #2196f3; } .spi-alert-content.warn{ color: #fff; background-color: #ffb300; border-color: #ffb300; } /****************spi-alert-content ALERT CONTENT */"],
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
 * Created by Ozgur Cimen on 03-May-17.
 */
/**
 * Created by Ozgur Cimen on 28-Apr-17.
 */
var SpiProcessingService = (function () {
    function SpiProcessingService() {
    }
    /**
     * @param {?=} text
     * @param {?=} delay
     * @return {?}
     */
    SpiProcessingService.prototype.showLoading = function (text, delay) {
        if (text === void 0) { text = 'Loading...'; }
        if (delay === void 0) { delay = 0; }
        if (this.isLoadingOpen)
            return;
        this.isLoadingHiding = false;
        this.isLoadingOpen = true;
        var /** @type {?} */ elBody = document.getElementsByTagName('body')[0];
        this.oldStyle = elBody.style.overflow;
        elBody.style.overflow = 'hidden';
        this.backDrop = document.createElement('div');
        this.backDrop.classList.add('spi-backdrop-content');
        this.loadingContent = document.createElement('div');
        this.loadingContent.classList.add('loading-content');
        this.loadingContent.innerHTML = "\n         <svg class=\"spinner\" width=\"20px\" height=\"20px\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\">\n                <circle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\" cx=\"33\" cy=\"33\" r=\"30\"></circle>\n          </svg>\n          <span style=\"position: relative; margin-left: 5px; top: -5px;\">" + text + "</span>\n        ";
        this.backDrop.appendChild(this.loadingContent);
        elBody.appendChild(this.backDrop);
        setTimeout(function () {
            this.loadingContent.classList.add('in');
        }.bind(this), 120);
        if (delay > 0)
            setTimeout(this.hideLoading.bind(this), delay);
    };
    /**
     * @return {?}
     */
    SpiProcessingService.prototype.hideLoading = function () {
        if (!this.isLoadingOpen)
            return;
        if (this.isLoadingHiding)
            return;
        this.isLoadingHiding = true;
        this.loadingContent.classList.remove('in');
        this.loadingContent.classList.add('out');
        setTimeout(function () {
            var /** @type {?} */ elBody = document.getElementsByTagName('body')[0];
            elBody.removeChild(this.backDrop);
            elBody.style.overflow = this.oldStyle;
            elBody = null;
            this.loadingContent = null;
            this.backDrop = null;
            this.isLoadingHiding = false;
            this.isLoadingOpen = false;
        }.bind(this), 500);
    };
    return SpiProcessingService;
}());
SpiProcessingService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SpiProcessingService.ctorParameters = function () { return []; };

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
 * Created by Ozgur Cimen on 03-May-17.
 */
var SpiAlertContent = (function () {
    /**
     * @param {?} type
     * @param {?} icon
     * @param {?} message
     * @param {?} duration
     */
    function SpiAlertContent(type, icon, message, duration) {
        var template = " \n            <div class=\"spi-alert-content " + type + "\" >\n                <span class=\"close-icon\" ><i class=\"fa fa-close\"></i></span>\n                <span class=\"spi-alert-icon fa fa-afw fa-2x " + icon + "\"></span>\n                <span class=\"spi-alert-detail\">" + message + "</span>\n            </div>";
        this.element = this.createElement(template);
        var closeElement = this.element.children[0];
        closeElement.onclick = close.bind(this);
        setTimeout(function () {
            this.element.classList.add('in');
        }.bind(this), 120);
        if (duration && duration < 0)
            return;
        var _duration = 2000;
        if (duration && duration > 0) {
            _duration = duration;
        }
        setTimeout(close.bind(this), _duration);
        function close() {
            this.element.remove();
            this.element = null;
            if (this.onclose)
                this.onclose.call();
        }
    }
    /**
     * @return {?}
     */
    SpiAlertContent.prototype.getElement = function () {
        return this.element;
    };
    /**
     * @param {?} htmlText
     * @return {?}
     */
    SpiAlertContent.prototype.createElement = function (htmlText) {
        var /** @type {?} */ el = document.createElement('div');
        el.innerHTML = htmlText;
        return el.children[0];
    };
    return SpiAlertContent;
}());
var SpiNotificationService = (function () {
    function SpiNotificationService() {
    }
    /**
     * @param {?} message
     * @param {?=} duration
     * @return {?}
     */
    SpiNotificationService.prototype.info = function (message, duration) {
        if (duration === void 0) { duration = 0; }
        this.push('info', 'fa-info-circle', message, duration);
    };
    /**
     * @param {?} message
     * @param {?=} duration
     * @return {?}
     */
    SpiNotificationService.prototype.warn = function (message, duration) {
        if (duration === void 0) { duration = 0; }
        this.push('warn', 'fa-warning', message, duration);
    };
    /**
     * @param {?} message
     * @param {?=} duration
     * @return {?}
     */
    SpiNotificationService.prototype.error = function (message, duration) {
        if (duration === void 0) { duration = 0; }
        this.push('error', 'fa-warning', message, duration);
    };
    /**
     * @param {?} message
     * @param {?=} duration
     * @return {?}
     */
    SpiNotificationService.prototype.succeed = function (message, duration) {
        if (duration === void 0) { duration = 0; }
        this.push('succeed', ' fa-check', message, duration);
    };
    /**
     * @param {?} type
     * @param {?} icon
     * @param {?} message
     * @param {?} duration
     * @return {?}
     */
    SpiNotificationService.prototype.push = function (type, icon, message, duration) {
        var /** @type {?} */ elBody = document.getElementsByTagName('body')[0];
        var /** @type {?} */ notificationContent = document.getElementsByClassName('spi-notification-content');
        var /** @type {?} */ spiNotify = new SpiAlertContent(type, icon, message, duration);
        spiNotify.onclose = function () {
            spiNotify = null;
        };
        if (notificationContent == null || notificationContent.length === 0) {
            notificationContent = document.createElement('div');
            notificationContent.classList.add('spi-notification-content');
            notificationContent.appendChild(spiNotify.getElement());
            elBody.appendChild(notificationContent);
        }
        else {
            notificationContent[0].appendChild(spiNotify.getElement());
        }
    };
    return SpiNotificationService;
}());
SpiNotificationService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
SpiNotificationService.ctorParameters = function () { return []; };

/**
 * Created by Ozgur Cimen on 08-May-17.
 */
var SpiClickOutsideDirective = (function () {
    /**
     * @param {?} _elementRef
     */
    function SpiClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.spiClickOutside = new EventEmitter();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    SpiClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var /** @type {?} */ clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.spiClickOutside.emit(event);
        }
    };
    return SpiClickOutsideDirective;
}());
SpiClickOutsideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[spiClickOutside]'
            },] },
];
/**
 * @nocollapse
 */
SpiClickOutsideDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SpiClickOutsideDirective.propDecorators = {
    'spiClickOutside': [{ type: Output },],
    'onClick': [{ type: HostListener, args: ['document:click', ['$event', '$event.target'],] },],
};

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
            providers: [SpiProcessingService, SpiSystemService, SpiNotificationService]
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
                    SpiLoadingPipe,
                    SpiClickOutsideDirective
                ],
                exports: [
                    SpiLoadingComponent,
                    SpiLoadingDirective,
                    SpiLoadingPipe,
                    SpiClickOutsideDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
SpiModule.ctorParameters = function () { return []; };

export { SpiModule, SpiLoadingComponent, SpiLoadingDirective, SpiLoadingPipe, SpiLoadingService, SpiSystemService, SpiAlertContent, SpiNotificationService, SpiProcessingService, SpiClickOutsideDirective };
