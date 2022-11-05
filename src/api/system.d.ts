import ArtalkConfig from '../../types/artalk-config';
import ApiBase from './api-base';
/**
 * 系统 API
 */
export default class SystemApi extends ApiBase {
    /** 获取配置 */
    conf(): Promise<ArtalkConfig>;
    /** 获取配置数据 */
    getSettings(): Promise<string>;
    /** 保存配置数据 */
    saveSettings(yamlStr: string): Promise<boolean>;
    /** 获取 API 版本信息 */
    version(): Promise<{
        app: string;
        version: string;
        commit_hash: string;
        fe_min_version: string;
    }>;
}
