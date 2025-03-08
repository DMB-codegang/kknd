import { Context, Schema } from 'koishi'

export const name = 'kknd'
export const description = '让群友可以视奸你电脑屏幕的插件，注意保护个人隐私哦'

export interface Config {
  api: string
}

export const Config: Schema<Config> = Schema.object({
  api: Schema.string().required().description('获取图片的地址')
})

export function apply(ctx: Context, cfg: Config) {
  ctx.command('kknd', 'kknd')
    .action(async ({ session }) => {
      session.send(`<img src="${cfg.api}">`)
    })
}
