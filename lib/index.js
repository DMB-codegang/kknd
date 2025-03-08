var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Config: () => Config,
  apply: () => apply,
  description: () => description,
  name: () => name
});
module.exports = __toCommonJS(src_exports);
var import_koishi = require("koishi");
var name = "kknd";
var description = "让群友可以视奸你电脑屏幕的插件，注意保护个人隐私哦";
var Config = import_koishi.Schema.object({
  api: import_koishi.Schema.string().required().description("获取图片的地址")
});
function apply(ctx, cfg) {
  ctx.command("kknd", "kknd").action(async ({ session }) => {
    session.send(`<img src="${cfg.api}">`);
  });
}
__name(apply, "apply");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Config,
  apply,
  description,
  name
});
