export type Locale = 'zh' | 'en'

export type NavItem = { label: string; href: string }

export type CoreFeature = {
  id: string
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  useCase: string
}

export type SkillCategory = { title: string; text: string }

export type GettingStep = { n: string; title: string; text: string }

export type CompareRow = { dim: string; cells: string[] }

export type TrustPillar = { title: string; text: string }

export type FaqItem = { q: string; a: string }

export type Messages = {
  meta: { title: string; description: string }
  ui: {
    download: string
    learnMore: string
    earningHub: string
    comingSoon: string
    official: string
    discord: string
    openclawEcosystem: string
    useCase: string
    dimension: string
    recommended: string
    officialLink: string
    proTip: string
    featuresTitle: string
    featuresSub: string
    faqTitle: string
    faqLead: string
    copyrightSuffix: string
    bottomCtaTitle: string
    bottomCtaSub: string
    langAria: string
    langZh: string
    langEn: string
    heroIntroAria: string
    navAria: string
    ctaAria: string
    downloadModalTitle: string
    downloadReleased: string
    downloadDetected: string
    downloadOtherPlatforms: string
    downloadViewReleases: string
    downloadFetchError: string
    downloadNoInstallers: string
    downloadSmartScreenHint: string
    downloadLoading: string
    downloadClose: string
    envWindowsX64: string
    envWindowsArm64: string
    envMacApple: string
    envMacIntel: string
    envLinux: string
    envUnknown: string
  }
  nav: NavItem[]
  hero: {
    badge: string
    headline: string
    sub: string
    tagline: string
    intro: string[]
    audience: string
  }
  featuresToSkillsBridge: string
  coreFeatures: CoreFeature[]
  skillsSection: {
    headline: string
    sub: string
    categories: SkillCategory[]
    badges: string[]
  }
  gettingStarted: {
    headline: string
    sub: string
    steps: GettingStep[]
    proTip: string
  }
  comparison: {
    headline: string
    sub: string
    columns: string[]
    recommendedCol: number
    rows: CompareRow[]
  }
  trust: {
    headline: string
    body: string
    pillars: TrustPillar[]
  }
  faqs: FaqItem[]
}
