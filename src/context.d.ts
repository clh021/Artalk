import { marked as libMarked } from 'marked';
import ArtalkConfig from '../types/artalk-config';
import { CommentData, NotifyData } from '../types/artalk-data';
import { I18n } from './i18n';
import User from './lib/user';
import ContextApi from '../types/context';
import Editor from './editor';
import Comment from './comment';
import ListLite from './list/list-lite';
import SidebarLayer, { SidebarShowPayload } from './layer/sidebar-layer';
import CheckerLauncher, { CheckerCaptchaPayload, CheckerPayload } from './lib/checker';
import Api from './api';
/**
 * Artalk Context
 */
export default class Context implements ContextApi {
    private api;
    private editor;
    private list;
    private sidebarLayer;
    private checkerLauncher;
    cid: number;
    conf: ArtalkConfig;
    user: User;
    $root: HTMLElement;
    markedInstance?: typeof libMarked;
    markedReplacers: ((raw: string) => string)[];
    private commentList;
    private eventList;
    constructor(conf: ArtalkConfig, $root?: HTMLElement);
    setApi(api: Api): void;
    setEditor(editor: Editor): void;
    setList(list: ListLite): void;
    setSidebarLayer(sidebarLayer: SidebarLayer): void;
    setCheckerLauncher(checkerLauncher: CheckerLauncher): void;
    getApi(): Api;
    getCommentList(): Comment[];
    getCommentDataList(): CommentData[];
    findComment(id: number): Comment | undefined;
    deleteComment(_comment: number | Comment): void;
    clearAllComments(): void;
    insertComment(commentData: CommentData): void;
    updateComment(commentData: CommentData): void;
    replyComment(commentData: CommentData, $comment: HTMLElement, scroll?: boolean): void;
    cancelReplyComment(): void;
    editComment(commentData: CommentData, $comment: HTMLElement): void;
    cancelEditComment(): void;
    updateNotifies(notifies: NotifyData[]): void;
    listReload(): void;
    reload(): void;
    listRefreshUI(): void;
    editorOpen(): void;
    editorClose(): void;
    editorShowLoading(): void;
    editorHideLoading(): void;
    editorShowNotify(msg: any, type: any): void;
    editorTravel($el: HTMLElement): void;
    editorTravelBack(): void;
    showSidebar(payload?: SidebarShowPayload): void;
    hideSidebar(): void;
    checkAdmin(payload: CheckerPayload): void;
    checkCaptcha(payload: CheckerCaptchaPayload): void;
    checkAdminShowEl(): void;
    on(name: any, handler: any, scope?: any): void;
    off(name: any, handler: any, scope?: any): void;
    trigger(name: any, payload?: any, scope?: any): void;
    $t(key: keyof I18n, args?: {
        [key: string]: string;
    }): string;
    setDarkMode(darkMode: boolean): void;
}
