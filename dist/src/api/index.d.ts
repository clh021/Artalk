import { CommentData, ListData, UserData, PageData, SiteData, NotifyData } from '../../types/artalk-data';
import ArtalkConfig from '../../types/artalk-config';
import Context from '../../types/context';
export default class Api {
    private ctx;
    private baseURL;
    constructor(ctx: Context);
    /** 评论 · 获取 */
    get(offset: number, pageSize: number, flatMode?: boolean, paramsEditor?: (params: any) => void): Promise<ListData>;
    /** 评论 · 创建 */
    add(comment: {
        nick: string;
        email: string;
        link: string;
        content: string;
        rid: number;
        page_key: string;
        page_title?: string;
        site_name?: string;
    }): Promise<CommentData>;
    /** 评论 · 修改 */
    commentEdit(data: Partial<CommentData>): Promise<CommentData>;
    /** 评论 · 删除 */
    commentDel(commentID: number, siteName?: string): Promise<unknown>;
    /** 用户 · 登录 */
    login(name: string, email: string, password: string): Promise<string>;
    /** 用户 · 获取  */
    userGet(name: string, email: string): {
        req: Promise<{
            user: UserData | null;
            is_login: boolean;
            unread: NotifyData[];
            unread_count: any;
        }>;
        abort: () => void;
    };
    /** 用户 · 登录状态 */
    loginStatus(): Promise<{
        is_login: boolean;
        is_admin: boolean;
    }>;
    /** 用户 · 注销 */
    logout(): Promise<unknown>;
    /** 页面 · 获取 */
    pageGet(siteName?: string, offset?: number, limit?: number): Promise<{
        pages: PageData[];
        total: number;
    }>;
    /** 页面 · 修改 */
    pageEdit(data: PageData): Promise<PageData>;
    /** 页面 · 删除 */
    pageDel(pageKey: string, siteName?: string): Promise<unknown>;
    /** 页面 · 数据更新 */
    pageFetch(id?: number, siteName?: string, getStatus?: boolean): Promise<any>;
    /** 站点 · 获取 */
    siteGet(): Promise<SiteData[]>;
    /** 站点 · 创建 */
    siteAdd(name: string, urls: string): Promise<SiteData>;
    /** 站点 · 修改 */
    siteEdit(data: SiteData): Promise<SiteData>;
    /** 站点 · 删除 */
    siteDel(id: number, delContent?: boolean): Promise<unknown>;
    /** 导出 */
    export(): Promise<any>;
    /** 投票 */
    vote(targetID: number, type: string): Promise<{
        up: number;
        down: number;
    }>;
    /** 已读标记 */
    markRead(notifyKey: string, readAll?: boolean): Promise<unknown>;
    /** PV */
    pv(): Promise<number>;
    /** 统计 */
    stat(type: 'latest_comments' | 'latest_pages' | 'pv_most_pages' | 'comment_most_pages' | 'page_pv' | 'site_pv' | 'page_comment' | 'site_comment', pageKeys?: string | string[], limit?: number): Promise<number | object | CommentData[] | PageData[]>;
    /** 图片上传 */
    imgUpload(file: File): Promise<{
        img_file: string;
        img_url: string;
    }>;
    /** 获取配置 */
    conf(): Promise<ArtalkConfig>;
    /** 验证码 · 获取 */
    captchaGet(): Promise<string>;
    /** 验证码 · 检验 */
    captchaCheck(value: string): Promise<string>;
    /** 验证码 · 状态 */
    captchaStatus(): Promise<{
        is_pass: boolean;
    }>;
    /** 缓存清除 */
    cacheFlushAll(): Promise<unknown>;
    /** 缓存预热 */
    cacheWarmUp(): Promise<unknown>;
}
