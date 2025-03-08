import { Context, Schema } from 'koishi';
export declare const name = "kknd";
export declare const description = "\u8BA9\u7FA4\u53CB\u53EF\u4EE5\u89C6\u5978\u4F60\u7535\u8111\u5C4F\u5E55\u7684\u63D2\u4EF6\uFF0C\u6CE8\u610F\u4FDD\u62A4\u4E2A\u4EBA\u9690\u79C1\u54E6";
export interface Config {
    api: string;
}
export declare const Config: Schema<Config>;
export declare function apply(ctx: Context, cfg: Config): void;
