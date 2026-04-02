import type { Messages } from './types'

export const zh: Messages = {
  meta: {
    title: 'EarningClaw — 专注帮您赚钱的 AI Claw | 本地运行 · 商业软件',
    description:
      'EarningClaw：本地专有 AI，从多源发现到掘金机会，再到消息与工作流交付——监测、研判与触达在一台电脑上闭环。',
  },
  ui: {
    download: '立即下载',
    learnMore: '了解更多',
    earningHub: 'EarningHub',
    comingSoon: '即将开放',
    official: '官方渠道',
    discord: 'Discord',
    openclawEcosystem: 'OpenClaw 生态',
    useCase: '使用场景',
    dimension: '维度',
    recommended: '推荐',
    officialLink: '官方主页',
    proTip: '小提示',
    featuresTitle: '面向「赚钱」场景的桌面应用，开箱即用',
    featuresSub: '五大核心能力，把信息优势变成行动与收益',
    faqTitle: '常见问题',
    faqLead: '关于 EarningClaw 的常见问题',
    copyrightSuffix: '专有软件 · 专注变现',
    bottomCtaTitle: '准备好让赚钱的 Claw 随时在线了吗？',
    bottomCtaSub: '下载 EarningClaw，三分钟完成配置，机会与监测 7×24 不间断',
    langAria: '语言切换',
    langZh: '中文',
    langEn: 'EN',
    heroIntroAria: '介绍',
    navAria: '主导航',
    ctaAria: '行动号召',
    downloadModalTitle: '下载 {name}',
    downloadReleased: '发布于 {date}',
    downloadDetected: '检测到的系统：{env}',
    downloadOtherPlatforms: '其他平台',
    downloadViewReleases: '在 GitHub 上查看所有版本',
    downloadFetchError: '无法获取最新版本。请稍后重试，或直接前往发布页下载。',
    downloadNoInstallers: '当前发布没有可用的安装包，请在 GitHub 上查看其他资源。',
    downloadSmartScreenHint:
      '如果 SmartScreen 阻止运行，请点击「更多信息」→「仍要运行」。',
    downloadLoading: '正在获取版本信息…',
    downloadClose: '关闭',
    envWindowsX64: 'Windows（x64）',
    envWindowsArm64: 'Windows（ARM64）',
    envMacApple: 'macOS（Apple 芯片）',
    envMacIntel: 'macOS（Intel）',
    envLinux: 'Linux',
    envUnknown: '未知环境',
  },
  nav: [
    { label: '功能特性', href: '#features' },
    { label: '技能生态', href: '#skills' },
    { label: '快速开始', href: '#start' },
    { label: '方案对比', href: '#compare' },
    { label: '常见问题', href: '#faq' },
  ],
  hero: {
    badge: '发现 · 掘金 · 交付',
    headline: '发现掘金机会，做会赚钱的 Agent',
    sub:
      '跑在您电脑上的专有 AI：在多源情报与公告里完成发现，用 Agent 研判筛选完成掘金，再通过飞书、Telegram、邮件等通道把可执行结论交付到您手里。兼容 OpenClaw 生态扩展，全流程本地闭环。',
    tagline: '始终在线，永不停歇',
    intro: [
      '一条链路：发现异动与情报 → 掘金定位机会与标的 → 交付结论与提醒，不把环节散落在十几个标签页里。',
      '装在常开电脑上，就是 7×24 替你盯发现、做掘金、做交付的副驾。',
    ],
    audience: '面向投资者、交易员与认真搞钱的内容创业者',
  },
  featuresToSkillsBridge:
    '不止是工具——更是把发现、掘金、交付串成闭环的 AI 操作系统',
  coreFeatures: [
    {
      id: 'scraping',
      eyebrow: '实时采集，多源聚合',
      title: '跨源抓取，处处不漏',
      body:
        'EarningClaw 可运行独立浏览器实例，同时登录并浏览多个专业数据源——金融终端、新闻站点、政策平台与社交媒体，并针对不同市场与语言优化，帮您比别人更早看到可交易、可变现的信息。',
      bullets: [
        '自主浏览并抽取网页内容，输出结构化摘要',
        '多引擎搜索 + 整页抓取',
        '独立浏览器会话，可直接操作您的数据终端账号',
      ],
      useCase:
        '每个交易日早晨自动浏览 10 个信息源，生成美股 / A 股 / 港股市场晨报，抓住隔夜与盘前机会。',
    },
    {
      id: 'cron',
      eyebrow: '定时任务，7×24 持续监测',
      title: '可视化调度，机会主动找您',
      body:
        '设置监测频率：每 5 分钟、每小时或每日固定时刻。EarningClaw 按计划在后台执行。无需手写 Cron——可视化排程，选好时间与任务即可。',
      bullets: [
        '周期性抓取指定页面 / 数据源并跟踪变化',
        '监测关键指标、政策发布与公告更新',
        '异常时通过消息通道即时推送',
      ],
      useCase: '每 15 分钟检查 SEC / 港交所披露，新公告秒级推到 Telegram，抢在盘面反应前读完要点。',
    },
    {
      id: 'channels',
      eyebrow: '全渠道触达，信息不等人',
      title: 'WhatsApp / Telegram / Discord / 飞书 / 邮件',
      body:
        '您无法时刻盯屏。EarningClaw 支持 20+ 消息通道，将分析结论、监测告警与机会摘要直接送到手机，让每一次推送都可能对应一笔决策或一单变现。',
      bullets: [
        '异常告警推送至 Telegram',
        '每日摘要邮件送达',
        '团队共享数据推送至飞书 / Discord 频道',
      ],
      useCase:
        'AI 发现重大公司公告或舆情拐点后，10 秒内推送到您的 WhatsApp 与团队飞书频道。',
    },
    {
      id: 'analysis',
      eyebrow: 'AI 原生分析，不止搬运数据',
      title: '不仅是爬虫，更是会思考的分析师',
      body:
        '内置 AI Agent 运行时，支持多步推理。不是简单展示网页——而是理解、摘要、对比与判断。兼容 10+ AI 服务商：OpenAI / Anthropic / Google / OpenRouter / 月之暗面 / 通义千问等。',
      bullets: [
        '交叉阅读多份报告，提炼核心观点分歧',
        '长文 / PDF 自动摘要，一句话抓住结论',
        '跟踪时间序列变化，标记录常波动',
        '多语种信源统一处理',
      ],
      useCase:
        '交给 EarningClaw 三份不同机构的 PDF 研报，快速得到可下单级别的对比结论与风险点。',
    },
    {
      id: 'local',
      eyebrow: '数据留在您的电脑',
      title: '本地运行，策略与逻辑留在自己手里',
      body:
        '真金白银的场景里，数据与策略就是资产。EarningClaw 完整运行在您的设备上——专有软件闭源交付，核心逻辑不对外公开，更利于保护您的打法与合规边界。',
      bullets: [
        '数据本地存储，不经我们云端',
        'API Key 静态加密存储',
        '专有（闭源）软件，保护产品与您的使用场景',
      ],
      useCase:
        '券商 / 基金 / 私募合规要求敏感策略不外流——本地 + 闭源形态天然更契合严肃赚钱场景。',
    },
  ],
  skillsSection: {
    headline: '强大技能组合 —— 55+ 能力开箱即用',
    sub:
      '兼容 OpenClaw 生态，覆盖效率、开发、多媒体与智能家居等扩展场景，让「赚钱主战场」与「日常提效」同在一套系统里。',
    categories: [
      {
        title: '效率工具',
        text: 'Notion、Obsidian、Trello、Apple 备忘录/提醒事项——AI 帮您管理任务与知识管线',
      },
      {
        title: '开发者工具',
        text: '代码助手、终端与运维向能力——技术派用户的第二双手',
      },
      {
        title: '多媒体创作',
        text: 'AI 生图、视频处理、语音转写——内容变现与传播的加速器',
      },
      {
        title: '智能家居',
        text: '灯光、音箱、Spotify——用消息或语音控制环境',
      },
      {
        title: '通讯协作',
        text: 'Discord、Slack、iMessage、语音通话——全渠道触达',
      },
      {
        title: '安全与隐私',
        text: '集成 1Password——在受控前提下安全访问凭据',
      },
      {
        title: 'MCP 协议',
        text: '兼容 Model Context Protocol，可连接任意 MCP 工具服务',
      },
      {
        title: 'ClawHub 市场',
        text: '技能扩展市场，一键安装，能力持续扩展',
      },
    ],
    badges: [
      '兼容 OpenClaw 生态扩展',
      '跨平台 macOS / Windows / Linux',
      '支持 CLI + GUI 双模式',
    ],
  },
  gettingStarted: {
    headline: '三分钟快速上手',
    sub: '无需编程，可视化界面一键配置',
    steps: [
      {
        n: '01',
        title: '下载与安装',
        text: '选择您的系统（macOS / Windows / Linux），双击安装并按向导完成。',
      },
      {
        n: '02',
        title: '配置 AI',
        text: '选择模型服务商并填写 API Key。建议优先 Claude、Gemini 或 OpenAI 旗舰模型。',
      },
      {
        n: '03',
        title: '开始搞钱向工作流',
        text: '通过对话下达指令，或设置定时任务让 AI 自动盯盘、盯公告、盯舆情。',
      },
    ],
    proTip:
      '把 EarningClaw 装在一台闲置旧电脑上，授予必要权限，就是 7×24 的情报与执行副驾。权限越多，能 claw 到的机会面越宽。只要通电，它就不会停。',
  },
  comparison: {
    headline: '方案对比一览',
    sub: '对比主流形态，看清 EarningClaw 在「赚钱场景」下的取舍',
    columns: ['EarningClaw', 'OpenClaw', '数据终端 SaaS', '通用智能体'],
    recommendedCol: 0,
    rows: [
      {
        dim: '实时数据',
        cells: [
          '实时采集，AI 驱动浏览',
          '支持，需自建',
          '实时但昂贵',
          '多为本地知识 / 单点能力',
        ],
      },
      {
        dim: '7×24 运行',
        cells: [
          '您的电脑持续在线',
          '视部署环境而定',
          '依赖 SaaS 可用性',
          '云端易断连',
        ],
      },
      {
        dim: '多源聚合',
        cells: [
          '55+ 技能一体化',
          '需逐步集成',
          '绑定特定厂商',
          '单平台能力有限',
        ],
      },
      {
        dim: '上下文记忆',
        cells: [
          '长对话与自动记忆',
          '支持，需配置',
          '有限，偏窗口级',
          '简单历史记录',
        ],
      },
      {
        dim: '智能分析',
        cells: [
          '采集 + 分析 + 推送一体',
          '需自定义集成',
          '预设分析，灵活度有限',
          '难以主动采集',
        ],
      },
      {
        dim: '消息推送',
        cells: [
          '20+ 通道，可视化配置',
          '支持推送',
          '多依赖第三方',
          '几乎无原生推送',
        ],
      },
      {
        dim: '数据安全',
        cells: [
          '本地存储，专有软件可控',
          '取决于部署',
          '数据在第三方',
          '多为云端存储',
        ],
      },
      {
        dim: '易用性',
        cells: [
          '可视化界面，零代码',
          '需要一定开发能力',
          '注册即用',
          '上手低但能力受限',
        ],
      },
      {
        dim: '成本',
        cells: [
          '商业授权，面向盈利场景',
          '免费栈，需自行维护',
          '订阅制',
          '约 $20+/月 起',
        ],
      },
      {
        dim: '—',
        cells: ['出色', '部分具备', '有限 / 无', '—'],
      },
    ],
  },
  trust: {
    headline: '深耕「信息与金钱」之间的距离',
    body:
      '我们懂实时数据、多源情报与合规压力，并把多年金融与工程经验凝结成一款专注帮您赚钱的桌面产品——闭源交付，持续迭代，认真服务严肃玩家。',
    pillars: [
      { title: '商业级产品', text: '专有软件闭源，保护核心能力与您的使用场景' },
      { title: '变现导向', text: '为投研、交易与内容变现场景优先设计' },
      { title: '本地优先', text: '关键数据与策略保留在您的设备一侧' },
      { title: '生态兼容', text: '可接入成熟的 OpenClaw 扩展能力' },
    ],
  },
  faqs: [
    {
      q: 'EarningClaw 是什么？',
      a: '一款运行在您电脑上的专有 AI 助手，聚焦帮您从信息里挖出机会：监测公告、舆情与数据，推送结论，并与 OpenClaw 技能生态协同；目标是提升决策与执行效率，助力赚钱相关的工作流。',
    },
    {
      q: '和 ChatGPT / Claude 有什么不一样？',
      a: '面向定时监测、多源抓取与推送触达，而不是泛聊天；数据与学习曲线更贴近「机会与风险」而不是「闲聊」。',
    },
    {
      q: '需要会编程吗？',
      a: '不需要。安装与排程均为可视化；高阶用户仍可通过技能与配置扩展。',
    },
    {
      q: '我的数据安全吗？',
      a: '本地运行；API Key 加密存储；模型与存储由您自主选择。我们不以「开源代码」形式分发产品，以降低策略与工作流被轻易复刻的风险。',
    },
    {
      q: '支持哪些 AI 模型？',
      a: '10+ 服务商，含 OpenAI、Anthropic、Google、OpenRouter、月之暗面、通义千问等。',
    },
    {
      q: '软件收费吗？',
      a: 'EarningClaw 为商业软件，采用授权或订阅等模式，具体方案以官方渠道公布为准。您仍需向所选的第三方 AI 服务商支付 API 调用费用。',
    },
    {
      q: 'EarningClaw 开源吗？',
      a: '不开源。EarningClaw 是专有（闭源）软件，不公开源代码，以便保护产品与您的策略资产；我们专注把它做成能帮您赚钱的生产力工具。',
    },
    {
      q: '为什么建议用独立个人电脑环境？',
      a: '专用常开设备可不占用主力笔记本，同时减少敏感策略与投研数据流经共享云服务的风险。',
    },
  ],
}
