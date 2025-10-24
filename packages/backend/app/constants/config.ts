import { IConfig } from '../model/config.model'

const config: Omit<IConfig, keyof Document> = {
  info: [
    {
      section: 'about',
      content: '欢迎来到MewAcg, 一个致力于为漫画爱好者提供快捷、优质内容的平台。'
    },
    {
      section: 'about',
      content:
        '本站所有内容均来自于互联网，仅供爱好者交流和学习使用，若侵犯了您的权益，请联系页脚邮箱，会第一时间进行处理，感谢您的理解。'
    }
  ],
  footerText: 'MewAcg',
  footerEmail: 'Heisenye@163.com'
}

export default config
