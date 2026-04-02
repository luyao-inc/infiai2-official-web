import type { Messages } from './types'

export const en: Messages = {
  meta: {
    title: 'EarningClaw — The AI Claw Built to Help You Earn | Local · Proprietary',
    description:
      'EarningClaw: proprietary, local-first AI—from discovery across sources, to mining actionable opportunities, to delivering conclusions to your channels. One machine, closed loop.',
  },
  ui: {
    download: 'Download Now',
    learnMore: 'Learn more',
    earningHub: 'EarningHub',
    comingSoon: 'Coming soon',
    official: 'Official',
    discord: 'Discord',
    openclawEcosystem: 'OpenClaw ecosystem',
    useCase: 'Use Case',
    dimension: 'Dimension',
    recommended: 'Recommended',
    officialLink: 'Official site',
    proTip: 'Pro tip',
    featuresTitle: 'A desktop app built for earning-focused workflows',
    featuresSub: 'Five capabilities that turn an information edge into action',
    faqTitle: 'FAQ',
    faqLead: 'Common questions about EarningClaw',
    copyrightSuffix: 'Proprietary software · built to earn',
    bottomCtaTitle: 'Ready to put your earning claw online?',
    bottomCtaSub:
      'Download EarningClaw, configure in minutes, and never miss a 24/7 opportunity window',
    langAria: 'Language',
    langZh: '中文',
    langEn: 'EN',
    heroIntroAria: 'Introduction',
    navAria: 'Primary',
    ctaAria: 'Call to action',
    downloadModalTitle: 'Download {name}',
    downloadReleased: 'Released on {date}',
    downloadDetected: 'Detected: {env}',
    downloadOtherPlatforms: 'Other platforms',
    downloadViewReleases: 'View all releases on GitHub',
    downloadFetchError: 'Could not load the latest release. Try again or open the releases page.',
    downloadNoInstallers: 'No installer assets in this release. See GitHub for other files.',
    downloadSmartScreenHint:
      'If SmartScreen blocks the app, click “More info”, then “Run anyway”.',
    downloadLoading: 'Loading release…',
    downloadClose: 'Close',
    envWindowsX64: 'Windows (x64)',
    envWindowsArm64: 'Windows (ARM64)',
    envMacApple: 'macOS (Apple Silicon)',
    envMacIntel: 'macOS (Intel)',
    envLinux: 'Linux',
    envUnknown: 'Unknown environment',
  },
  nav: [
    { label: 'Features', href: '#features' },
    { label: 'Skills', href: '#skills' },
    { label: 'Get started', href: '#start' },
    { label: 'Compare', href: '#compare' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    badge: 'Discover · Mine · Deliver',
    headline: 'Discover and mine opportunities—agents built to earn',
    sub:
      'A proprietary AI that runs locally: discover signals across filings and sources, mine the opportunity with agentic analysis, then deliver actionable conclusions to Feishu, Telegram, email, and more. OpenClaw-compatible extensions; the full loop stays on your machine.',
    tagline: 'Always on, never stops',
    intro: [
      'One pipeline: discover the move → mine the setup → deliver the summary and alerts—no more scattered browser tabs.',
      'On an always-on box, it is the 24/7 operator for discovery, mining, and delivery.',
    ],
    audience: 'For investors, traders, and builders who treat attention as money',
  },
  featuresToSkillsBridge:
    'More than tooling—a full AI OS wired around discovery, mining, and delivery',
  coreFeatures: [
    {
      id: 'scraping',
      eyebrow: 'Real-time collection, multi-source aggregation',
      title: 'Cross-source scraping—nothing important slips by',
      body:
        'Independent browser sessions can log into terminals, news, policy portals, and social—tuned for different markets and languages—so monetizable information surfaces faster.',
      bullets: [
        'Autonomous browsing with structured takeaways',
        'Multi-engine search plus full-page capture',
        'Isolated sessions for your data-terminal identities',
      ],
      useCase:
        'Every morning, scan ten sources and ship a US / A-share / HK briefing before the opening print.',
    },
    {
      id: 'cron',
      eyebrow: 'Scheduled tasks, nonstop monitoring',
      title: 'Visual scheduling—opportunity comes to you',
      body:
        'Pick intervals—minutes, hours, or daily anchors. EarningClaw runs on autopilot with zero cron syntax: choose the time, choose the job, done.',
      bullets: [
        'Track pages and datasets on a cadence',
        'Watch KPIs, policy drops, and listing announcements',
        'Push anomalies straight to messaging endpoints',
      ],
      useCase:
        'Poll SEC / HKEX every fifteen minutes and beam fresh filings to Telegram before liquidity reprices.',
    },
    {
      id: 'channels',
      eyebrow: 'Omnichannel delivery—money waits for no one',
      title: 'WhatsApp / Telegram / Discord / Feishu / Email',
      body:
        'You cannot live inside a dashboard. Twenty-plus channels deliver alerts, briefs, and summaries to your phone so each ping can map to a trade, a hedge, or a monetized post.',
      bullets: [
        'Instant anomaly alerts',
        'Daily executive summaries',
        'Team broadcasts to Feishu or Discord',
      ],
      useCase:
        'Major headline or filing drops—WhatsApp and your team channel see it within seconds.',
    },
    {
      id: 'analysis',
      eyebrow: 'Agent-native analysis—not just transport',
      title: 'More than a crawler—an analyst that thinks',
      body:
        'Built-in agent runtime for multi-step reasoning: compare, summarize, and judge—not just paste URLs—across ten-plus AI vendors (OpenAI, Anthropic, Google, OpenRouter, Moonshot, Qwen, and more).',
      bullets: [
        'Contrast reports and isolate opinion divergence',
        'Distill long PDFs to a one-line thesis',
        'Flag time-series anomalies',
        'Multilingual intake in one pipeline',
      ],
      useCase:
        'Hand it three sell-side PDFs and receive a decision-ready contrast of consensus, risk, and deltas.',
    },
    {
      id: 'local',
      eyebrow: 'Data stays on your machine',
      title: 'Local by default—your playbook stays yours',
      body:
        'Serious money means serious IP. EarningClaw ships as proprietary, closed-source software so core mechanics stay protected—while your machine holds the crown-jewel data and keys.',
      bullets: [
        'Local storage—no pass-through to our cloud for your content',
        'API keys encrypted at rest',
        'Proprietary (closed-source) delivery to guard product and your workflows',
      ],
      useCase:
        'Compliance-heavy desks need sensitive playbooks off third-party SaaS—local plus proprietary posture fits.',
    },
  ],
  skillsSection: {
    headline: 'Serious skill depth—55+ capabilities ready to run',
    sub:
      'Compatible with the OpenClaw ecosystem for productivity, engineering, media, and home automations—earning workflows plus everyday leverage in one stack.',
    categories: [
      {
        title: 'Productivity',
        text: 'Notion, Obsidian, Trello, Apple Notes/Reminders—AI keeps your pipeline tidy',
      },
      {
        title: 'Developer tools',
        text: 'Terminal, scripting, and ops assists—power users stay in flow',
      },
      {
        title: 'Media creation',
        text: 'Image, video, and speech tooling—accelerate content monetization',
      },
      {
        title: 'Smart home',
        text: 'Lights, speakers, Spotify—control environments via chat',
      },
      {
        title: 'Communication',
        text: 'Discord, Slack, iMessage, voice—every channel covered',
      },
      {
        title: 'Security & privacy',
        text: '1Password-aware workflows with guardrails',
      },
      {
        title: 'MCP protocol',
        text: 'Wire in any Model Context Protocol service you trust',
      },
      {
        title: 'ClawHub market',
        text: 'Expand with curated skills—install and iterate fast',
      },
    ],
    badges: [
      'OpenClaw-compatible extensions',
      'Cross-platform macOS / Windows / Linux',
      'CLI + GUI dual mode',
    ],
  },
  gettingStarted: {
    headline: 'Get productive in three minutes',
    sub: 'No coding—visual setup from the first launch',
    steps: [
      {
        n: '01',
        title: 'Download & install',
        text: 'Pick macOS, Windows, or Linux, double-click, and follow the wizard.',
      },
      {
        n: '02',
        title: 'Configure AI',
        text: 'Select a provider and paste API keys—visual UI only. Flagship models recommended.',
      },
      {
        n: '03',
        title: 'Start earning workflows',
        text: 'Chat instructions or schedule monitors for filings, tape, and narrative.',
      },
    ],
    proTip:
      'Park EarningClaw on a spare tower, grant access, and it becomes a 24/7 intel claw—the more access it earns, the more surface area you can monetize.',
  },
  comparison: {
    headline: 'How approaches compare',
    sub: 'See how EarningClaw stacks up when the goal is earning, not just chatting',
    columns: ['EarningClaw', 'OpenClaw', 'Data Terminal SaaS', 'General Agent'],
    recommendedCol: 0,
    rows: [
      {
        dim: 'Real-time data',
        cells: [
          'Live collection, AI-driven browsing',
          'Supported when self-hosted',
          'Real-time but pricey',
          'Mostly static knowledge',
        ],
      },
      {
        dim: '24/7 operation',
        cells: [
          'Your hardware stays awake',
          'Depends on your ops',
          'Tied to SaaS uptime',
          'Cloud disconnects hurt',
        ],
      },
      {
        dim: 'Multi-source aggregation',
        cells: [
          '55+ skills in one stack',
          'Integration debt over time',
          'Vendor lock-in',
          'Single-surface limits',
        ],
      },
      {
        dim: 'Context memory',
        cells: [
          'Long-running memory',
          'Configurable depth',
          'Windowed history',
          'Shallow recall layers',
        ],
      },
      {
        dim: 'Smart analysis',
        cells: [
          'Collect · analyze · push',
          'Bring your glue code',
          'Preset analytics only',
          'Little proactive intake',
        ],
      },
      {
        dim: 'Push notifications',
        cells: [
          '20+ channels, visual config',
          'Bring your own pipes',
          'Third-party heavy',
          'Almost none native',
        ],
      },
      {
        dim: 'Data security',
        cells: [
          'Local storage, proprietary control plane',
          'Depends on deployment',
          'Vendor-hosted data',
          'Mostly cloud resident',
        ],
      },
      {
        dim: 'Ease of use',
        cells: [
          'Visual-first, zero code default',
          'Engineer-friendly only',
          'Sign-up simple',
          'Shallow but easy',
        ],
      },
      {
        dim: 'Cost',
        cells: [
          'Commercial licensing for serious earners',
          'Free stack, self-maintained',
          'Subscription SaaS',
          'Monthly tooling fees ($20+)',
        ],
      },
      {
        dim: '—',
        cells: ['Excellent', 'Partial', 'Limited/None', '—'],
      },
    ],
  },
  trust: {
    headline: 'Built where information meets money',
    body:
      'We obsess over timely data, multi-source intelligence, and compliance realities—and we ship those learnings as a proprietary desktop product focused on helping you earn, not as a science-fair repo.',
    pillars: [
      {
        title: 'Commercial-grade',
        text: 'Closed-source delivery with a roadmap you can bet workflows on',
      },
      {
        title: 'Built to earn',
        text: 'Flows prioritize markets, catalysts, and monetizable attention',
      },
      { title: 'Local first', text: 'Your machine holds the sensitive slices' },
      {
        title: 'Ecosystem ready',
        text: 'Extends through the mature OpenClaw skill fabric',
      },
    ],
  },
  faqs: [
    {
      q: 'What is EarningClaw?',
      a: 'A proprietary desktop AI assistant that helps you earn by monitoring filings, narrative, and market-moving data, pushing distilled conclusions to your channels, and coordinating OpenClaw-compatible skills.',
    },
    {
      q: 'How is it different from ChatGPT / Claude?',
      a: 'Scheduling, scraping, and proactive pushes—not a general chat window—with emphasis on tradable context instead of small talk.',
    },
    {
      q: 'Do I need coding skills?',
      a: 'No for setup and scheduling. Advanced users can extend via skills and configuration.',
    },
    {
      q: 'Is my data secure?',
      a: 'Runs locally with encrypted API storage and your choice of model vendors. Closed-source distribution reduces copycat exposure for how you run your edge.',
    },
    {
      q: 'Which AI models are supported?',
      a: '10+ providers including OpenAI, Anthropic, Google, OpenRouter, Moonshot, Qwen, and more.',
    },
    {
      q: 'Is there a fee?',
      a: 'EarningClaw is commercial software sold under license or subscription—see official channels for current plans. You still pay AI providers for the API traffic you configure.',
    },
    {
      q: 'Is EarningClaw open source?',
      a: 'No. EarningClaw is proprietary closed-source software. We do not publish source code, by design, so we can protect the product and the workflows you rely on to earn.',
    },
    {
      q: 'Why run it on a dedicated personal machine?',
      a: 'Always-on hardware frees your laptop while keeping sensitive playbooks off shared SaaS surfaces.',
    },
  ],
}
