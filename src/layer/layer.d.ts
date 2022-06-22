import Context from '../../types/context';
import Component from '../lib/component';
export default class Layer extends Component {
    private name;
    private $wrap;
    private $mask;
    private maskClickHideEnable;
    static BodyOrgOverflow: string;
    static BodyOrgPaddingRight: string;
    afterHide?: Function;
    constructor(ctx: Context, name: string, el?: HTMLElement);
    getName(): string;
    getWrapEl(): HTMLElement;
    getEl(): HTMLElement;
    show(): void;
    hide(): void;
    setMaskClickHide(enable: boolean): void;
    pageBodyScrollBarHide(): void;
    pageBodyScrollBarShow(): void;
    private static actionTimers;
    private newActionTimer;
    private fireAllActionTimer;
    /** 销毁 - 无动画 */
    disposeNow(): void;
    /** 销毁 */
    dispose(): void;
    checkCleanLayer(): void;
}
export declare function GetLayerWrap(ctx: Context): {
    $wrap: HTMLElement;
    $mask: HTMLElement;
};
