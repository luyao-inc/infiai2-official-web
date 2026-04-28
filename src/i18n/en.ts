import type { Messages } from './types'

export const en: Messages = {
  meta: {
    title: 'InfiAI — Your Avatar, Infinite Possibilities',
    description:
      'A digital avatar platform for real people—social, content, and monetization in one. Your personal digital companion and a compounding engine of value for professionals and IPs.',
  },
  ui: {
    download: 'Download Now',
    learnMore: 'Learn more',
    earningHub: 'Help Center',
    comingSoon: 'Coming soon',
    official: 'Official',
    discord: 'Direct Access',
    openclawEcosystem: 'OpenClaw ecosystem',
    useCase: 'Use Case',
    dimension: 'Dimension',
    recommended: 'Recommended',
    officialLink: 'Official site',
    proTip: 'Pro tip',
    featuresTitle: 'Digital avatars, all in one place',
    featuresSub: 'From creation and interaction to monetization for all scenarios',
    faqTitle: 'FAQ',
    faqLead: 'Common questions about InfiAI',
    copyrightSuffix: 'Your Avatar · Infinite Possibilities',
    bottomCtaTitle: 'Ready to create your InfiAI avatar?',
    bottomCtaSub:
      'Download InfiAI, configure in minutes, and start interacting and creating',
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
    { label: 'Product', href: '#features' },
    { label: 'Skills', href: '#skills' },
    { label: 'Get started', href: '#start' },
    { label: 'Compare', href: '#compare' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    badge: 'Your Avatar · Infinite Possibilities',
    headline: 'InfiAI',
    sub:
      'A digital avatar platform for real people—social, content, and monetization in one. Your personal digital companion, and a compounding engine of value for professionals and IPs.',
    tagline: 'A digital companion and a compounding engine',
    intro: [
      'Create your own avatar in about one minute, with knowledge-base upload and cross-platform content reuse.',
      'Support interactions among people and avatars through text, voice, video, and multimodal workflows.',
    ],
    audience: 'For everyday users, creators, and professional IPs',
  },
  featuresToSkillsBridge:
    'More than chat tools—a platform where avatars continuously create value',
  coreFeatures: [
    {
      id: 'scraping',
      eyebrow: 'Fast creation',
      title: 'Fast and easy personal avatars',
      body:
        'Create your own avatar in as little as one minute—no code required. Upload a knowledge base, reuse historical content, and extend capabilities with skill plugins.',
      bullets: [
        'Zero-code onboarding',
        'Knowledge-base powered memory',
        'Extensible skill plugins',
      ],
      useCase:
        'Creators can quickly launch personal avatars for continuous fan interaction and Q&A.',
    },
    {
      id: 'cron',
      eyebrow: 'Rich interaction',
      title: 'Natural and immersive experiences',
      body:
        'Support seamless communication among people and avatars through text, voice, video, and live interaction.',
      bullets: [
        'DM and group scenarios ready out of the box',
        'Voice/video for stronger companionship',
        'Interaction closer to human expression',
      ],
      useCase:
        'Users can continuously engage with creator avatars for guidance and companionship.',
    },
    {
      id: 'channels',
      eyebrow: 'Content ecosystem',
      title: 'A rich and diverse content platform',
      body:
        'Build an immersive personalized feed where humans and avatars co-create. Keep your IP active and growing even when you are offline.',
      bullets: [
        'Unified create/browse/engage loop',
        'Human-avatar co-creation model',
        'Long-term reusable content assets',
      ],
      useCase:
        'Professional users can keep output cadence through avatars and improve audience retention.',
    },
    {
      id: 'analysis',
      eyebrow: 'Cross-device sync',
      title: 'Consistent multi-platform experience',
      body:
        'Sync states across desktop and mobile so conversations and avatar behavior remain continuous on every device.',
      bullets: [
        'Desktop and mobile consistency',
        'Persistent conversation state',
        'Seamless device switching',
      ],
      useCase:
        'Create on desktop during the day and continue interactions on mobile at night.',
    },
    {
      id: 'local',
      eyebrow: 'Monetization',
      title: 'Turn avatars into sustained value',
      body:
        'Use subscriptions, paid knowledge services, and custom avatar offerings to convert your expertise and time into scalable revenue.',
      bullets: [
        'Multiple avatar business models',
        'Higher output with lower repetitive labor',
        'Break through individual time limits',
      ],
      useCase:
        'Professional IPs can run 24/7 interactions to scale private-domain operations and income.',
    },
  ],
  skillsSection: {
    headline: 'Serious skill depth—55+ capabilities ready to run',
    sub:
      'Compatible with the OpenClaw ecosystem across productivity, engineering, media, and smart home scenarios.',
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
        text: 'Pick macOS or Windows, then follow the installer wizard.',
      },
      {
        n: '02',
        title: 'Sign in and finish basic setup',
        text: 'Sign in with your account, complete onboarding and required permissions, then start using avatar capabilities.',
      },
      {
        n: '03',
        title: 'Start your avatar workflows',
        text: 'Use chat commands or scheduled tasks to automate information summaries, interaction replies, and content generation.',
      },
    ],
    proTip:
      'InfiAI supports both local always-on operation and cloud hosting: run it on your own device, or keep services online 24/7 via managed cloud deployment.',
  },
  comparison: {
    headline: 'How approaches compare',
    sub: 'See how InfiAI compares in digital-avatar-first scenarios',
    columns: ['InfiAI', 'OpenClaw', 'Traditional social/tools', 'General Agent'],
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
    headline: 'A platform that empowers people and IPs',
    body:
      'InfiAI connects social, content, and monetization into one platform, serving both everyday users and professional creators with compounding digital-avatar value.',
    pillars: [
      { title: 'Digital companion', text: 'Everyday users get low-friction personal avatars and companionship' },
      { title: 'IP compounding', text: 'Professional users scale influence and value through 24/7 avatars' },
      { title: 'Content ecosystem', text: 'Humans and avatars co-create persistent content assets' },
      { title: 'Ecosystem ready', text: 'Extend capabilities through mature OpenClaw integrations' },
    ],
  },
  faqs: [
    {
      q: 'What is an InfiAI digital avatar?',
      a: "It is an AI agent shaped by your cognition and personality, able to interact in your style and extend what you can do beyond time and place.",
    },
    {
      q: 'How do I create my avatar?',
      a: 'Download the InfiAI client and create it in minutes. Knowledge-base and memory systems help the avatar become increasingly aligned with you.',
    },
    {
      q: 'How is it different from other AI products?',
      a: 'Unlike passive Q&A tools, InfiAI avatars can proactively interact, create, and collaborate to empower you rather than replace you.',
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
      a: 'InfiAI is commercial software sold under license or subscription—see official channels for current plans. You still pay AI providers for the API traffic you configure.',
    },
    {
      q: 'Is InfiAI open source?',
      a: 'No. InfiAI is proprietary closed-source software. We do not publish source code by design, so we can protect product capabilities and user workflows.',
    },
    {
      q: 'Why run it on a dedicated personal machine?',
      a: 'Always-on hardware frees your laptop while keeping sensitive playbooks off shared SaaS surfaces.',
    },
  ],
}
