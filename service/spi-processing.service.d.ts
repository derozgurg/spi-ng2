/**
 * Created by Ozgur Cimen on 28-Apr-17.
 */
export declare class SpiProcessingService {
    private backDrop;
    private loadingContent;
    private oldStyle;
    private isLoadingOpen;
    private isLoadingHiding;
    showLoading(text?: string, delay?: number, backDrop?: boolean): void;
    hideLoading(): void;
}
