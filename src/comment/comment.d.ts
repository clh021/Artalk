import { CommentData } from '../../types/artalk-data';
import Context from '../../types/context';
import Component from '../lib/component';
import CommentRender from './render';
import CommentActions from './actions';
export interface CommentConf {
    isUnread?: boolean;
    openURL?: string;
    isFlatMode: boolean;
    replyTo?: CommentData;
    afterRender?: () => void;
    openEvt?: () => void;
    onReplyBtnClick?: Function;
    onDelete?: Function;
}
export default class Comment extends Component {
    private renderInstance;
    private actionInstance;
    private data;
    private cConf;
    private parent;
    private children;
    private nestCurt;
    private nestMax;
    constructor(ctx: Context, data: CommentData, conf: CommentConf);
    /** 渲染 UI */
    render(): void;
    /** 获取评论操作实例对象 */
    getActions(): CommentActions;
    /** 获取评论渲染器实例对象 */
    getRender(): CommentRender;
    /** 获取评论数据 */
    getData(): CommentData;
    /** 设置数据 */
    setData(data: CommentData): void;
    /** 获取父评论 */
    getParent(): Comment | null;
    /** 获取所有子评论 */
    getChildren(): Comment[];
    /** 获取当前嵌套层数 */
    getNestCurt(): number;
    /** 判断是否为根评论 */
    getIsRoot(): boolean;
    /** 获取评论 ID */
    getID(): number;
    /** 置入子评论 */
    putChild(childC: Comment, insertMode?: 'append' | 'prepend'): void;
    /** 获取存放子评论的元素对象 */
    getChildrenEl(): HTMLElement;
    /** 获取所有父评论 */
    getParents(): Comment[];
    /** 获取评论元素对象 */
    getEl(): HTMLElement;
    /** 获取 Gravatar 头像 URL */
    getGravatarURL(): string;
    /** 获取评论 markdown 解析后的内容 */
    getContentMarked(): string;
    /** 获取格式化后的日期 */
    getDateFormatted(): string;
    /** 获取用户 UserAgent 信息 */
    getUserUA(): {
        browser: string;
        os: string;
    };
    /** 获取配置 */
    getConf(): CommentConf;
}
