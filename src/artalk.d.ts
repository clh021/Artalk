import ArtalkConfig from '../types/artalk-config';
import { EventPayloadMap, Handler } from '../types/event';
import ArtalkPlug from '../types/plug';
import Context from '../types/context';
import CheckerLauncher from './lib/checker';
import Editor from './editor';
import List from './list';
import SidebarLayer from './layer/sidebar-layer';
/**
 * Artalk
 *
 * @website https://artalk.js.org
 */
export default class Artalk {
    static readonly defaults: ArtalkConfig;
    conf: ArtalkConfig;
    ctx: Context;
    $root: HTMLElement;
    checkerLauncher: CheckerLauncher;
    editor: Editor;
    list: List;
    sidebarLayer: SidebarLayer;
    /** Plugins (in global scope)  */
    protected static Plugins: ArtalkPlug[];
    /** Plugins (in a instance scope) */
    protected instancePlugins: ArtalkPlug[];
    constructor(customConf: Partial<ArtalkConfig>);
    /** 组件初始化 */
    private initComponents;
    /** 基本配置初始化 */
    private static HandelBaseConf;
    /** 初始化组件根据远程加载的配置 */
    private loadConfRemoteAndInitComponents;
    /** 远程加载配置 */
    private loadConfRemote;
    /** 事件绑定初始化 */
    private initEventBind;
    /** 语言初始化 */
    private initLocale;
    /** Layer 初始化 */
    private initLayer;
    /** 暗黑模式初始化 */
    private initDarkMode;
    /** 监听事件 */
    on<K extends keyof EventPayloadMap>(name: K, handler: Handler<EventPayloadMap[K]>): void;
    /** 解除监听事件 */
    off<K extends keyof EventPayloadMap>(name: K, handler: Handler<EventPayloadMap[K]>): void;
    /** 触发事件 */
    trigger<K extends keyof EventPayloadMap>(name: K, payload?: EventPayloadMap[K]): void;
    /** 重新加载 */
    reload(): void;
    /** 设置暗黑模式 */
    setDarkMode(darkMode: boolean): void;
    /** Use Plugin (specific instance) */
    use(plugin: ArtalkPlug): void;
    /** Use Plugin (static method for global scope) */
    static use(plugin: ArtalkPlug): void;
    /** @deprecated Please replace it with lowercase function name `use(...)`. */
    static Use(plugin: ArtalkPlug): void;
    /** 装载数量统计元素 */
    static LoadCountWidget(customConf: Partial<ArtalkConfig>): void;
}
