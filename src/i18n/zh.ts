import type { Messages } from './types'
import { SITE } from '../content/siteContent'

export const zh: Messages = {
  meta: {
    title: '灵 谐 - 数字分身互动平台',
    description:
      '灵谐是数字分身互动平台，帮助博主、创作者和各领域专家免费创建像你又懂你的数字分身，持续与粉丝或客户互动。',
  },
  ui: {
    download: '立即下载',
    directExperience: '个人体验',
    enterpriseAccess: '企业接入',
    joinUs: '加入我们',
    joinEyebrow: '合作伙伴计划',
    joinTitle: '把资源变成长期收益',
    joinBody:
      '灵谐正处在业务快速扩张期，覆盖 C 端博主达人、B 端企业数字员工两大核心赛道，面向全网招募具备客户资源、销售能力的业务合伙人。\n无需任何投入，依托灵谐已落地的成熟 AI 数字分身产品即可开启合作。合伙人聚焦前端市场开拓与商务洽谈，平台负责产品落地、技术运维、客户售后等中后端工作，双方共享万亿级 AI 市场红利。',
    joinCta: '立即成为合伙人',
    joinEmailPrefix: '简历可发送到邮箱',
    openPlatformDocs: '开放平台文档',
    termsOfService: '服务条款',
    privacyPolicy: '隐私政策',
    contactUs: '联系我们：info@lingxie.net',
    menuOpen: '打开菜单',
    menuClose: '关闭菜单',
    navAria: '主导航',
    langAria: '语言切换',
    langZh: '中文',
    langEn: 'EN',
    heroIntroAria: '灵谐产品介绍',
    ctaAria: '行动号召',
    universeTitle: '用灵谐数字分身\n无限放大你的能力与价值',
    universeSub:
      '数字分身不是死板的 AI 聊天工具，TA 是带有你知识经验和性格特质的“另一个你”。TA 用你的方式去交流和互动，并能自我成长进化，让你的能力与价值打破时间和精力的束缚。',
    featuresTitle: '核心功能',
    featuresSub:
      '灵谐围绕分身创建、管理、运营构建完整产品闭环。无需任何技术背景，就能在几分钟内上手，让你的分身好用、好管、能赚钱。',
    startTitle: '你的分身 四步上线',
    startSub: '从下载到变现，四步即可打造你的专属数字分身。',
    platformsTitle: '点击下载适合你的客户端',
    platformsSub: '',
    faqTitle: '常见问题',
    faqLead: '',
    bottomCtaTitle: '让你的数字分身开始为你工作',
    bottomCtaSub: '下载灵谐客户端，或直接进入网页版创建你的专属分身。',
    pageUpdatedPrefix: '本页主要内容更新于',
    copyrightSuffix: '数字分身互动平台',
    downloadModalTitle: '选择你的体验方式',
    downloadModalSub: '灵谐会根据当前设备推荐最合适的入口。',
    downloadReleased: '发布于 {date}',
    downloadDetected: '检测到的系统：{env}',
    downloadOtherPlatforms: '其他平台',
    downloadViewReleases: '查看多端体验',
    downloadFetchError: '无法获取最新版本。请稍后重试。',
    downloadNoInstallers: '当前没有可用的公开安装包。',
    downloadSmartScreenHint:
      '如果 Windows SmartScreen 阻止运行，请点击“更多信息”后选择“仍要运行”。',
    downloadLoading: '正在获取版本信息...',
    downloadClose: '关闭',
    iosDownloadTitle: '前往 App Store 下载',
    iosDownloadBody: '灵谐 iOS 客户端已上线 App Store，点击按钮即可下载。',
    envWindowsX64: 'Windows（x64）',
    envWindowsArm64: 'Windows（ARM64）',
    envMacApple: 'MacOS（Apple 芯片）',
    envMacIntel: 'MacOS（Intel）',
    envIOS: 'iOS',
    envAndroid: 'Android',
    envLinux: 'Linux',
    envUnknown: '未知环境',
  },
  nav: [
    { label: '企业服务平台', href: SITE.enterprisePlatformUrl },
    { label: '首页', href: '#home' },
    { label: '数字分身', href: '#universe' },
    { label: '核心功能', href: '#features' },
    { label: '四步启动', href: '#start' },
    { label: '用户案例', href: '#cases' },
    { label: '常见问题', href: '#faq' },
    { label: '下载客户端', href: '#platforms' },
    { label: '加入我们', href: '#join' },
  ],
  hero: {
    badge: '数字分身互动平台',
    headline: '灵 谐',
    slogan: '1 分钟即可免费创建一个\n像你又懂你的数字分身',
    sub:
      '7*24 小时与你的粉丝或客户互动，提升你的影响力并持续为你创造价值。尤其适合博主、创作者和各领域专家。',
    metrics: [
      { value: '1 min', label: '免费创建分身' },
      { value: '7*24', label: '持续互动' },
      { value: 'AI', label: '放大影响力' },
    ],
    orbitLabels: ['社群运营', '粉丝互动', '情感陪伴', '专业咨询', '客户沟通', '学习交流'],
  },
  universeNodes: [
    { label: '持续进化', text: '用得越多越懂你，时刻都在成长进化。' },
    { label: '精力释放', text: '分身全天候在线服务，告别重复劳动，释放你的时间。' },
    { label: '自动创收', text: '无需本人在线，分身一直在帮你创造价值。' },
    { label: '专业服务', text: '分身始终提供高质量服务，并自动过滤筛选垃圾信息。' },
    { label: '价值沉淀', text: '把你的内容和认知转为可复用的数字资产。' },
    { label: '海量连接', text: '同时连接万人互动，打破个人精力极限。' },
  ],
  coreFeatures: [
    {
      id: 'persona-management',
      eyebrow: '分身管理',
      title: '专业全面的\n分身管理系统',
      body:
        '零代码可视化管理你的数字分身，可精细化调整分身的性格、语气、表达习惯，并支持超 10 万项通用技能一键挂载与个人知识库上传。还可通过自动化任务实现社群和粉丝的自动运营或完成特定任务。',
      bullets: ['可调整性格、语气和表达习惯', '个人知识库上传', '自动化任务运营社群与粉丝'],
    },
    {
      id: 'interaction',
      eyebrow: '交互界面',
      title: '简单易用的\n交互界面',
      body:
        '基于最熟悉的 IM 产品界面打造沉浸式对话体验，支持单聊、群聊、语音、文字等多种沟通形式。可实现分身对真人、分身对分身、真人对真人的多重交互。还原最自然的真人交流感受。',
      bullets: ['支持分身对真人、分身对分身、真人对真人', '单聊 / 群聊多场景互动', '语音 / 文字自然沟通'],
    },
    {
      id: 'monetization',
      eyebrow: '商业变现',
      title: '成熟多元的\n变现方式',
      body:
        '支持粉丝订阅你的专属分身、知识库或按次付费咨询等多种变现模式。后续还将开放商单推广、广告分成、个人商城等功能。让你的影响力和知识经验，通过多条路径自动转化为持续性收入。',
      bullets: ['粉丝订阅专属分身', '知识库订阅与按次咨询', '多路径自动转化为持续性收入'],
    },
  ],
  gettingStarted: {
    steps: [
      { n: '01', title: '下载注册', text: '下载灵谐APP，或直接浏览器中打开网页版。用手机号/邮箱完成注册。通过和“我的分身”对话或进入“分身”页面填写分身的名称和简介。你的数字分身就此诞生。' },
      { n: '02', title: '完善人设', text: '用几句话告诉分身它是谁、擅长什么、怎么说话。你可以手动调整语气风格、性格特点和禁忌限制等。也可以一键用AI替你生成。这一步定下了分身的人设基调。' },
      { n: '03', title: '注入知识', text: '在“分身”下的“知识库”页面中，上传你的文章、课程、聊天记录等你认可的内容。内容越丰富，分身就越懂你。你还可以在“技能”页面挑选你需要分身掌握的具体技能。赋予分身完成特定操作的能力。' },
      { n: '04', title: '发布分享', text: '设置分身的公开范围，设置变现方式和价格，比如按月订阅、按次咨询。确认无误后一键发布，分身即刻上线为你工作和变现。你还可以对外分享自己的分身名片或创建群聊让更多人看到你的分身。' },
    ],
  },
  cases: {
    title: '用户案例',
    sub: '看数字分身如何帮助我们的用户。',
    items: [
      { role: '我是财经分析师', quote: '我把近年的付费问答资料喂给我的分身，现在 TA 帮我处理 70% 的日常粉丝提问。我可以有更多精力花在市场研究上。' },
      { role: '我是心理咨询师', quote: '过去每天最多接 4 位来访者就筋疲力尽。现在我的分身可以 7*24 小时给需要的人提供陪伴，让我的经验能帮助更多的人。' },
      { role: '我是咨询顾问', quote: '分身把我的方法论学会了，客户可以先跟分身聊一轮，分身帮我整理好客户的需求和痛点，后面 TA 还能持续帮我跟进客户情况。' },
      { role: '我是二次元博主', quote: '我把自己的声音和人设训练成分身，粉丝随时能找“我”聊剧情、玩角色扮演。以前签售才能见面，现在他们和分身聊得不亦乐乎。' },
      { role: '我是 MCN 老板', quote: '我让旗下艺人每人都开分身，粉丝订阅就能随时找分身聊。这块收入纯增量，不影响直播打赏和商单，艺人下播时分身都在赚钱。' },
      { role: '我是培训老师', quote: '以前同样的问题讲几十遍。现在分身帮我做课后辅导和知识点串讲，用我的教学方式回应每个学员，我的精力留给了课程研发。' },
      { role: '我是健康科普作者', quote: '我把十年积累的饮食调理知识库接入分身，读者按月订阅就能随时咨询。它用我的口吻给个性化建议，相当于出了一本会对话的畅销书。' },
      { role: '我是脱口秀演员', quote: '我把自己的段子风格和互动节奏训练进分身，它在群里接梗、调侃、维护氛围。粉丝活跃度高了一大截，甚至有品牌找分身聊商务。' },
      { role: '我是品牌主理人', quote: '我把品牌资料录入分身，TA 帮我对接买手、回答订货咨询、讲解设计故事。我不在的时候，品牌依然有温度，复购率明显提升。' },
    ],
  },
  platforms: [
    { os: 'windows', title: 'Windows', status: '立即下载', body: '适合完整桌面体验、持续运行和托管配置。' },
    { os: 'mac', title: 'MacOS', status: '立即下载', body: '支持 Apple 芯片与 Intel 设备，适合日常创作与管理。' },
    { os: 'ios', title: 'iOS', status: '立即下载', body: 'iOS 客户端已上线 App Store，点击即可下载。' },
    { os: 'android', title: 'Android', status: '立即下载', body: '支持主流 Android 手机，下载 APK 安装后即可登录使用。' },
  ],
  joinBenefits: [
    { title: '零成本参与成熟业务', body: '无需前期投入，依托灵谐已落地的 AI 数字分身产品，把资源变为可持续的长期收益。' },
    { title: '顶级佣金分成比例', body: '清晰透明的合作收益机制，多劳多得，收益无上限。' },
    { title: '全程业务扶持保障', body: '平台提供产品、技术、运维、售后和成交赋能的一站式支持。' },
  ],
  trust: {
    headline: '灵谐把 AI 放回真实关系里',
    body:
      '它不是孤立的问答窗口，而是围绕你本人、你的分身、你的知识和你的社交网络持续运转的产品。',
  },
  geoDefinition: {
    title: '什么是灵谐数字分身？',
    body:
      '灵谐数字分身是带有你的知识经验和性格特质的智能体，能够用你的方式交流互动，并持续为粉丝或客户提供服务。',
  },
  faqs: [
    {
      q: '创建数字分身需要准备什么？',
      a:
        '您无需任何准备，只用几分钟简单配置分身的基础性格、语气等即可初步上线。如果需要分身更深入地理解您，可以在分身“知识库”中上传你希望分身获取的内容。没有固定格式要求，文字内容最好，如文章、课程内容、聊天记录等均可，视频 / 语音也都支持。内容越丰富，分身越懂你。',
    },
    {
      q: '我上传的资料和数据安全吗？',
      a:
        '你的数据全程加密存储，分身所有权和数据主权完全归属于你。数据仅用于为您和您的分身更好地服务。除非经您本人授权，我们不会将你的知识库和交互数据用于任何第三方用途，你也可以随时删除您上传的资料和数据。',
    },
    {
      q: '我可以随时调整我的分身吗？',
      a:
        '你的分身严格遵循你设定的知识边界和风格准则，所有回复可追溯。你可以随时查看交互记录，持续调校；也能对分身的性格、语气、表达习惯进行精细化微调，每次调整实时生效，确保言行始终在你掌控之中。',
    },
    {
      q: '我怎么用我的分身赚钱？',
      a:
        '你的分身可以设置付费订阅功能，让粉丝为专属互动付费；也可以开启按次咨询，针对单次问答收费；还可以将细分知识库设为付费解锁。所有定价由你决定，收益分配你占绝对主导。后续还将陆续开放商单推广、广告分成和自有商品带货，让你的影响力和专业知识持续转化为被动收入。',
    },
  ],
}
