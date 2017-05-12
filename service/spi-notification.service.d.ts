/**
 * Created by Ozgur Cimen on 03-May-17.
 */
export declare class SpiAlertContent {
    onclose: Function;
    private element;
    constructor(type: string, icon: string, message: string, duration: number);
    getElement(): any;
    private createElement(htmlText);
}
export declare class SpiNotificationService {
    info(message: string, duration?: number): void;
    warn(message: string, duration?: number): void;
    error(message: string, duration?: number): void;
    succeed(message: string, duration?: number): void;
    private push(type, icon, message, duration);
}
