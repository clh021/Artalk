import Context from '../../types/context';
export declare function createElement<E extends HTMLElement = HTMLElement>(htmlStr?: string): E;
export declare function getHeight(el: HTMLElement): number;
export declare function htmlEncode(str: string): string;
export declare function htmlDecode(str: string): string;
export declare function getQueryParam(name: string): string | null;
export declare function getOffset(el: HTMLElement): {
    top: number;
    left: number;
};
export declare function padWithZeros(vNumber: number, width: number): string;
export declare function dateFormat(date: Date): string;
export declare function timeAgo(date: Date, ctx: Context): string;
/** 所有图片加载完毕后执行 */
export declare function onImagesLoaded($container: HTMLElement, event: Function): void;
export declare function getGravatarURL(ctx: Context, emailMD5: string): string;
export declare function sleep(ms: number): Promise<unknown>;
/** 版本号比较（a < b :-1 | 0 | b < a :1） */
export declare function versionCompare(a: string, b: string): 0 | 1 | -1;
/** 初始化 marked */
export declare function initMarked(ctx: Context): void;
/** 解析 markdown */
export declare function marked(ctx: Context, src: string): string;
/** 获取修正后的 UserAgent */
export declare function getCorrectUserAgent(): Promise<string>;
/** 是否为完整的 URL */
export declare function isValidURL(urlRaw: string): boolean;
/** 获取基于 conf.server 的 URL */
export declare function getURLBasedOnApi(ctx: Context, path: string): string;
/** 获取基于某个 baseURL 的 URL */
export declare function getURLBasedOn(baseURL: string, path: string): string;
/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 * @link https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
 */
export declare function mergeDeep(target: any, source: any): any;
