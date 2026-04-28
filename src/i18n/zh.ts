import type { Messages } from './types'

export const zh: Messages = {
  meta: {
    title: 'InfiAI — 你的分身，无限可能',
    description:
      '赋能真人的数字分身平台，集社交网络、内容生态和变现体系于一体，既是普通用户的专属数字伙伴，更是专业用户与 IP 的价值复利引擎。',
  },
  ui: {
    download: '立即下载',
    learnMore: '了解更多',
    earningHub: '帮助中心',
    comingSoon: '即将开放',
    official: '官方渠道',
    discord: '直接访问',
    openclawEcosystem: 'OpenClaw 生态',
    useCase: '使用场景',
    dimension: '维度',
    recommended: '推荐',
    officialLink: '官方主页',
    proTip: '小提示',
    featuresTitle: '数字分身，一站到位',
    featuresSub: '从创建、互动到变现，覆盖个人与创作者全场景',
    faqTitle: '常见问题',
    faqLead: '关于 InfiAI 的常见问题',
    copyrightSuffix: '你的分身 · 无限可能',
    bottomCtaTitle: '准备好创建你的 InfiAI 数字分身了吗？',
    bottomCtaSub: '下载 InfiAI，几分钟完成配置，随时开启互动与创作',
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
    { label: '产品介绍', href: '#features' },
    { label: '技能生态', href: '#skills' },
    { label: '快速开始', href: '#start' },
    { label: '方案对比', href: '#compare' },
    { label: '常见问题', href: '#faq' },
  ],
  hero: {
    badge: '你的分身 · 无限可能',
    headline: 'InfiAI',
    sub:
      '赋能真人的数字分身平台，集社交网络、内容生态和变现体系于一体，既是普通用户的专属数字伙伴，更是专业用户与 IP 的价值复利引擎。',
    tagline: '既是数字伙伴，也是价值复利引擎',
    intro: [
      '最快约 1 分钟打造专属数字分身，支持知识库上传和多平台历史内容复用。',
      '支持人与人、人与分身、分身与分身互动，覆盖图文、语音、视频等多模态场景。',
    ],
    audience: '面向普通用户、创作者与专业 IP',
  },
  featuresToSkillsBridge:
    '不止是聊天工具，而是让数字分身持续创造价值的平台',
  coreFeatures: [
    {
      id: 'scraping',
      eyebrow: '极速创建',
      title: '快捷易用的专属分身',
      body:
        '最快 1 分钟即可零门槛、零成本打造您的专属数字分身；支持知识库上传与多平台历史内容复用，还可挂载技能插件拓展能力。',
      bullets: [
        '零代码上手，快速创建',
        '支持知识库与内容沉淀',
        '可扩展技能插件能力',
      ],
      useCase:
        '创作者可快速构建个人数字分身，持续承接粉丝互动与知识问答。',
    },
    {
      id: 'cron',
      eyebrow: '多维互动',
      title: '自然沉浸的交互体验',
      body:
        '支持人与人、人与分身、分身与分身的无界沟通；可通过图文、语音、视频、直播等多模态形式进行实时互动。',
      bullets: [
        '单聊/群聊全场景支持',
        '语音与视频能力增强陪伴感',
        '互动体验贴近真人表达',
      ],
      useCase: '普通用户可与喜欢的达人分身持续互动，获得陪伴和指导。',
    },
    {
      id: 'channels',
      eyebrow: '内容生态',
      title: '丰富多元的内容信息流',
      body:
        '平台构建了沉浸式个性化内容生态，真人与分身双向联动共创。即便本人离线，也能持续运营个人 IP 与沉淀影响力。',
      bullets: [
        '支持发布、浏览、互动一体化',
        '真人与分身共同参与内容创作',
        '持续积累长期内容资产',
      ],
      useCase:
        '专业用户可通过分身持续输出内容，提升触达频次与用户粘性。',
    },
    {
      id: 'analysis',
      eyebrow: '多端一致',
      title: '跨平台同步，随时在线',
      body:
        '支持多端同步、多设备无缝切换，对话与分身状态保持一致，让你在不同设备上获得连续体验。',
      bullets: [
        '桌面与移动端体验一致',
        '会话状态持续同步',
        '跨设备切换无学习成本',
      ],
      useCase:
        '白天在电脑创作，晚上在手机继续互动，分身状态不中断。',
    },
    {
      id: 'local',
      eyebrow: '多元变现',
      title: '让数字分身持续创造收益',
      body:
        '通过分身订阅、知识服务、定制互动等模式，帮助创作者与专业用户把时间与知识放大为持续收益。',
      bullets: [
        '支持多种分身商业化方式',
        '提升内容产能与服务覆盖',
        '突破真人时间上限',
      ],
      useCase:
        '专业 IP 可通过 7×24 分身互动承接咨询，实现私域运营与收入增长。',
    },
  ],
  skillsSection: {
    headline: '强大技能组合 —— 55+ 能力开箱即用',
    sub:
      '兼容 OpenClaw 生态，覆盖效率、开发、多媒体与智能家居等扩展场景，让分身能力不断成长。',
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
        text: '选择您的系统（macOS / Windows），双击安装并按向导完成。',
      },
      {
        n: '02',
        title: '登录并完成基础设置',
        text: '使用账号登录后，根据引导完成基础设置与权限授权，即可开始使用数字分身能力。',
      },
      {
        n: '03',
        title: '开始你的分身工作流',
        text: '通过对话下达指令，或设置定时任务，让 AI 自动完成信息整理、互动回复和内容生成。',
      },
    ],
    proTip:
      'InfiAI 支持本地在线运行与云端托管两种模式：你可以在常开设备上持续运行，也可以通过云端托管保持 7×24 服务。',
  },
  comparison: {
    headline: '方案对比一览',
    sub: '对比主流形态，看清 InfiAI 在「数字分身场景」下的优势',
    columns: ['InfiAI', 'OpenClaw', '传统社交/工具', '通用智能体'],
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
    headline: '赋能真人与 IP 的数字分身平台',
    body:
      'InfiAI 连接社交网络、内容生态与变现体系，帮助普通用户获得专属数字伙伴，也帮助专业用户和创作者持续放大 IP 价值。',
    pillars: [
      { title: '数字伙伴', text: '普通用户可低门槛创建个人分身并获得长期陪伴' },
      { title: 'IP 复利', text: '专业用户可通过分身实现 7×24 互动与价值放大' },
      { title: '内容生态', text: '真人与分身共创，持续沉淀可复用内容资产' },
      { title: '生态兼容', text: '支持接入 OpenClaw 扩展能力并持续升级' },
    ],
  },
  faqs: [
    {
      q: '什么是 InfiAI 数字分身？',
      a: '数字分身是复刻你的认知经验与人格特点的 AI 智能体。它可以用你的方式互动、完成任务，突破时间与空间限制。',
    },
    {
      q: '如何创建我的数字分身？',
      a: '下载 InfiAI 客户端即可创建专属分身。知识库与记忆系统会让分身逐步形成你的风格与经验。',
    },
    {
      q: '和其他 AI 产品有什么区别？',
      a: '不同于被动问答工具，InfiAI 的数字分身更像数字世界中的另一个你：可主动互动、创作并协作，赋能你而不是替代你。',
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
      a: 'InfiAI 为商业软件，采用授权或订阅等模式，具体方案以官方渠道公布为准。您仍需向所选的第三方 AI 服务商支付 API 调用费用。',
    },
    {
      q: 'InfiAI 开源吗？',
      a: '不开源。InfiAI 是专有（闭源）软件，不公开源代码，以便保护产品能力与用户场景；我们专注把它做成可靠的生产力工具。',
    },
    {
      q: '为什么建议用独立个人电脑环境？',
      a: '专用常开设备可不占用主力笔记本，同时减少敏感策略与投研数据流经共享云服务的风险。',
    },
  ],
}
