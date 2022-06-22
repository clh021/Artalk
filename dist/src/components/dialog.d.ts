import Context from '../../types/context';
declare type BtnClickHandler = (btnEl: HTMLElement, dialog: Dialog) => boolean | void;
/**
 * 对话框
 */
export default class Dialog {
    ctx: Context;
    $el: HTMLElement;
    $content: HTMLElement;
    $actions: HTMLElement;
    constructor(ctx: Context, contentEl: HTMLElement);
    /** 按钮 · 确定 */
    setYes(handler: BtnClickHandler): this;
    /** 按钮 · 取消 */
    setNo(handler: BtnClickHandler): this;
    private onBtnClick;
}
export {};
