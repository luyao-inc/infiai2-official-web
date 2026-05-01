/**
 * InfiAI 全网官方账号主页（ curated from `InfiAI全网媒体列表` CSV）。
 *
 * 已从列表中剔除：
 * - Reddit：表格中与 Substack 重复，属错误行
 * - 优酷：`mp.youku.com/v2/login...` 为登录页，非稳定主页
 * - Pinterest：`https://www.pinterest.com/` 为站点首页，非品牌主页
 * - 空链接或非 http(s) 项（如「视频号」仅账号标识，见 public/llms.txt）
 */

export const OFFICIAL_PROFILE_URLS = [
  'https://author.baidu.com/home?context=%7B%22uk%22%3A%229TpJCHU9bwnb1TnZCOtkBw%22%7D',
  'https://bsky.app/profile/infinityacademy.bsky.social',
  'https://buymeacoffee.com/infiai',
  'https://discord.com/channels/1414083403434692732/1414083404663619696',
  'https://flipboard.com/@infiai?from=share&utm_source=flipboard&utm_medium=curator_share',
  'https://hashnode.com/@InfinityAcademy',
  'https://i.eastmoney.com/7911356278734104',
  'https://infiai.quora.com/',
  'https://ko-fi.com/infiai',
  'https://mastodon.social/@InfinityAcademy',
  'https://medium.com/@yuanlive01',
  'https://media.om.qq.com/author?id=MHfSp0q-OitnknpftIQTDVjA0',
  'https://mp.sohu.com/profile?xpt=eXVhbmxpdmV3ZWNoYXRAMTYzLmNvbQ',
  'https://odysee.com/@InfinityAcademy:9',
  'https://open.spotify.com/show/7d91vJRLuCD5ZXhtxiDAnK',
  'https://rumble.com/account/channel/content?channelId=7819786',
  'https://space.bilibili.com/10642220',
  'https://substack.com/@infiai',
  'https://t.me/infiai_org',
  'https://tieba.baidu.com/f?kw=infiai%E6%8A%95%E7%A0%94&ie=utf-8',
  'https://v.douyin.com/9ZylEyd6pYI',
  'https://vk.com/infiai',
  'https://weibo.com/yuanlive01',
  'https://www.facebook.com/profile.php?id=61580695864948',
  'https://www.instagram.com/infiai_org/',
  'https://www.iqiyi.com/creator/2462934418',
  'https://www.jianshu.com/u/abe7550dba2c',
  'https://www.kuaishou.com/profile/3xzuznunahhin4g',
  'https://www.patreon.com/infiai',
  'https://www.producthunt.com/@infiai',
  'https://www.qtfm.cn/podcasters/4bec5780f2074f97a13eb596ddafa56b/',
  'https://www.threads.com/@infiai_org',
  'https://www.tumblr.com/communities/infiaior',
  'https://www.xiaohongshu.com/user/profile/684140a7000000001b021205',
  'https://www.ximalaya.com/zhubo/34146645',
  'https://www.xiaoyuzhoufm.com/podcast/68babe81987bbb64a4aa5844',
  'https://www.youtube.com/@infiaiorg',
  'https://www.zhihu.com/people/metalive',
  'https://x.com/infiaiorg',
  'https://xueqiu.com/InfiAI',
  'https://y.qq.com/n/ryqq/singer/001mgG624V92u2',
] as const
