import Context from '../../types/context';
import comment from './comment';
import page from './page';
import site from './site';
import user from './user';
import system from './system';
import captcha from './captcha';
import admin from './admin';
import upload from './upload';
declare const ApiComponents: {
    comment: typeof comment;
    page: typeof page;
    site: typeof site;
    user: typeof user;
    system: typeof system;
    captcha: typeof captcha;
    admin: typeof admin;
    upload: typeof upload;
};
declare class Api {
    protected ctx: Context;
    get baseURL(): string;
    constructor(ctx: Context);
}
declare type TC = typeof ApiComponents;
declare type AC = {
    [K in keyof TC]: InstanceType<TC[K]>;
};
interface Api extends AC {
}
export default Api;
