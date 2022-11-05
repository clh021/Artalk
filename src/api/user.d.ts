import { UserData, NotifyData, UserDataForAdmin } from '../../types/artalk-data';
import ApiBase from './api-base';
/**
 * 用户 API
 */
export default class UserApi extends ApiBase {
    /** 用户 · 登录 */
    login(name: string, email: string, password: string): Promise<{
        token: string;
        user: UserData;
    }>;
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
    /** 已读标记 */
    markRead(notifyKey: string, readAll?: boolean): Promise<unknown>;
    /** 用户 · 列表 */
    userList(offset?: number, limit?: number, type?: 'all' | 'admin' | 'in_conf'): Promise<{
        users: UserDataForAdmin[];
        total: number;
    }>;
    /** 用户 · 新增 */
    userAdd(user: Partial<UserDataForAdmin>, password?: string): Promise<UserDataForAdmin>;
    /** 用户 · 修改 */
    userEdit(user: Partial<UserDataForAdmin>, password?: string): Promise<UserDataForAdmin>;
    /** 用户 · 删除 */
    userDel(userID: number): Promise<unknown>;
}
