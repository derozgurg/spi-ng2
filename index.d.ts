/**
 * Created by Ozgur Cimen on 26-Apr-17.
 */
import { ModuleWithProviders } from '@angular/core';
export * from './spi-loading.component';
export * from './spi-loading.directive';
export * from './spi-loading.pipe';
export * from './spi-loading.service';
export * from './service/spi-system.service';
export * from './service/spi-notification.service';
export * from './service/spi-processing.service';
export * from './directive/spi-clickoutside.pipe';
export declare class SpiModule {
    static forRoot(): ModuleWithProviders;
}
