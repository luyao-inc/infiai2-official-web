export type Locale = 'zh' | 'en'

export type NavItem = { label: string; href: string }

export type FeatureItem = {
  id: string
  eyebrow: string
  title: string
  body: string
  bullets: string[]
}

export type UniverseNode = { label: string; text: string }

export type CaseItem = { role: string; quote: string }

export type PlatformItem = {
  os: 'windows' | 'mac' | 'ios' | 'android'
  title: string
  status: string
  body: string
}

export type JoinBenefit = { title: string; body: string }

export type FaqItem = { q: string; a: string }

export type Messages = {
  meta: { title: string; description: string }
  ui: {
    download: string
    directExperience: string
    enterpriseAccess: string
    joinUs: string
    joinEyebrow: string
    joinTitle: string
    joinBody: string
    joinCta: string
    openPlatformDocs: string
    termsOfService: string
    privacyPolicy: string
    contactUs: string
    menuOpen: string
    menuClose: string
    navAria: string
    langAria: string
    langZh: string
    langEn: string
    heroIntroAria: string
    ctaAria: string
    universeTitle: string
    universeSub: string
    featuresTitle: string
    featuresSub: string
    startTitle: string
    startSub: string
    platformsTitle: string
    platformsSub: string
    faqTitle: string
    faqLead: string
    bottomCtaTitle: string
    bottomCtaSub: string
    pageUpdatedPrefix: string
    copyrightSuffix: string
    downloadModalTitle: string
    downloadModalSub: string
    downloadReleased: string
    downloadDetected: string
    downloadOtherPlatforms: string
    downloadViewReleases: string
    downloadFetchError: string
    downloadNoInstallers: string
    downloadSmartScreenHint: string
    downloadLoading: string
    downloadClose: string
    iosDownloadTitle: string
    iosDownloadBody: string
    envWindowsX64: string
    envWindowsArm64: string
    envMacApple: string
    envMacIntel: string
    envIOS: string
    envAndroid: string
    envLinux: string
    envUnknown: string
  }
  nav: NavItem[]
  hero: {
    badge: string
    headline: string
    slogan: string
    sub: string
    metrics: { value: string; label: string }[]
    orbitLabels: string[]
  }
  universeNodes: UniverseNode[]
  coreFeatures: FeatureItem[]
  gettingStarted: {
    steps: { n: string; title: string; text: string }[]
  }
  cases: {
    title: string
    sub: string
    items: CaseItem[]
  }
  platforms: PlatformItem[]
  joinBenefits: JoinBenefit[]
  trust: {
    headline: string
    body: string
  }
  geoDefinition: { title: string; body: string }
  faqs: FaqItem[]
}
