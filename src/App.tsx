import { useState } from 'react'
import { DownloadModal } from './components/DownloadModal'
import { SITE } from './content/siteContent'
import { useLocale } from './i18n/LocaleProvider'

const shell = 'min-h-screen bg-[#050508] text-zinc-400 antialiased'
const glow =
  'pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(212,175,55,0.28),transparent_55%),radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(246,193,94,0.1),transparent_50%),linear-gradient(#050508,#050508)]'
const container = 'mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8'

const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#EAB34D] px-5 py-2.5 text-sm font-semibold text-[#141109] shadow-[0_8px_28px_-4px_rgba(212,175,55,0.5)] transition hover:shadow-[0_12px_36px_-4px_rgba(246,193,94,0.45)] hover:brightness-105 active:scale-[0.98]'
const btnGhost =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-white/20 hover:bg-white/[0.07] active:scale-[0.98]'

const sectionTitle =
  'text-center text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl'
const sectionDesc = 'mt-3 text-center text-base text-zinc-500 sm:text-lg'

function LocaleSwitcher() {
  const { locale, setLocale, t } = useLocale()
  const pill = 'rounded-md px-2.5 py-1 text-xs font-semibold transition'
  const active =
    'bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#EAB34D] text-[#141109] shadow-sm'
  const idle = 'text-zinc-500 hover:text-zinc-300'
  return (
    <div
      className="flex shrink-0 rounded-lg border border-white/12 bg-white/[0.04] p-0.5"
      role="group"
      aria-label={t.ui.langAria}
    >
      <button
        type="button"
        className={`${pill} ${locale === 'zh' ? active : idle}`}
        onClick={() => setLocale('zh')}
        aria-pressed={locale === 'zh'}
      >
        {t.ui.langZh}
      </button>
      <button
        type="button"
        className={`${pill} ${locale === 'en' ? active : idle}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        {t.ui.langEn}
      </button>
    </div>
  )
}

function Header() {
  const { t } = useLocale()
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#050508]/75 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050508]/55">
      <div
        className={`${container} flex flex-wrap items-center justify-between gap-4 py-3.5`}
      >
        <a className="group flex items-center gap-2.5" href="#">
          <img
            src="/earningclaw-logo.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 shrink-0 rounded-[10px] object-contain object-center ring-1 ring-white/10 transition group-hover:ring-amber-400/30"
          />
          <span className="text-[15px] font-bold tracking-tight text-zinc-100">
            {SITE.name}
          </span>
        </a>
        <nav
          className="order-3 flex w-full flex-wrap items-center justify-center gap-0.5 sm:order-none sm:w-auto sm:justify-start"
          aria-label={t.ui.navAria}
        >
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-[13px] font-medium text-zinc-500 transition hover:bg-white/[0.05] hover:text-zinc-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap items-center justify-end gap-2 sm:justify-start">
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  )
}

function HeroSection({ onDownloadClick }: { onDownloadClick: () => void }) {
  const { t } = useLocale()
  const { hero: h } = t
  return (
    <section
      className={`${container} pb-14 pt-16 sm:pb-20 sm:pt-20`}
      aria-label={t.ui.heroIntroAria}
    >
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/12 px-3.5 py-1 text-xs font-medium text-[#F6C15E]">
          {h.badge}
        </span>
        <h1 className="mt-7 text-[2rem] font-semibold leading-[1.12] tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.08] md:text-6xl">
          <span className="bg-gradient-to-b from-white via-white to-white/75 bg-clip-text text-transparent">
            {h.headline}
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-zinc-400 sm:text-lg">
          {h.sub}
        </p>
        <p className="mt-4 text-sm font-semibold text-emerald-400/90">{h.tagline}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button type="button" className={btnPrimary} onClick={onDownloadClick}>
            {t.ui.download}
          </button>
          <button
            type="button"
            className={btnGhost}
            onClick={() => window.alert(t.ui.comingSoon)}
          >
            {t.ui.earningHub}
          </button>
        </div>
        <div className="mx-auto mt-12 max-w-xl space-y-3 text-left sm:text-center">
          {h.intro.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-zinc-500 sm:text-[15px]">
              {line}
            </p>
          ))}
        </div>
        <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
          {h.audience}
        </p>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const { t } = useLocale()
  return (
    <section
      className="border-t border-white/[0.06] bg-gradient-to-b from-transparent to-white/[0.02] py-20 sm:py-24"
      id="features"
      aria-labelledby="features-heading"
    >
      <div className={container}>
        <h2 id="features-heading" className={sectionTitle}>
          {t.ui.featuresTitle}
        </h2>
        <p className={sectionDesc}>{t.ui.featuresSub}</p>
        <div className="mt-14 flex flex-col gap-6 lg:gap-7">
          {t.coreFeatures.map((f) => (
            <article
              key={f.id}
              className="grid gap-8 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition hover:border-[#D4AF37]/35 sm:p-8 lg:grid-cols-2 lg:gap-10"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#EAB34D]">
                  {f.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
                  {f.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">{f.body}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-500 marker:text-[#D4AF37]/90">
                  {f.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center rounded-xl border border-white/[0.06] bg-black/30 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-emerald-400/90">
                  {t.ui.useCase}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.useCase}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsBridge() {
  const { t } = useLocale()
  return (
    <div className="border-t border-white/[0.06] py-12 text-center">
      <p className={`${container} text-lg font-medium text-zinc-300 sm:text-xl`}>
        {t.featuresToSkillsBridge}
      </p>
    </div>
  )
}

function SkillsSection() {
  const { t } = useLocale()
  const { skillsSection: s } = t
  return (
    <section
      className="border-t border-white/[0.06] py-20 sm:py-24"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className={container}>
        <h2 id="skills-heading" className={sectionTitle}>
          {s.headline}
        </h2>
        <p className={sectionDesc}>{s.sub}</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.categories.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-white/15"
            >
              <h4 className="text-[15px] font-semibold text-zinc-100">{c.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">{c.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {s.badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-zinc-400"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function GettingStartedSection() {
  const { t } = useLocale()
  const { gettingStarted: g } = t
  return (
    <section
      className="border-t border-white/[0.06] py-20 sm:py-24"
      id="start"
      aria-labelledby="start-heading"
    >
      <div className={container}>
        <h2 id="start-heading" className={sectionTitle}>
          {g.headline}
        </h2>
        <p className={sectionDesc}>{g.sub}</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {g.steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#D4AF37]/[0.14] to-white/[0.02] p-6"
            >
              <div className="text-xs font-bold text-[#F6C15E]">{s.n}</div>
              <h3 className="mt-3 text-lg font-semibold text-zinc-50">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-[#D4AF37]/35 bg-[#D4AF37]/[0.1] p-6 sm:p-8">
          <h4 className="text-sm font-semibold text-[#F6C15E]">{t.ui.proTip}</h4>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{g.proTip}</p>
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const { t } = useLocale()
  const { comparison: c } = t
  const { columns, rows, recommendedCol } = c
  return (
    <section
      className="border-t border-white/[0.06] py-20 sm:py-24"
      id="compare"
      aria-labelledby="compare-heading"
    >
      <div className={container}>
        <h2 id="compare-heading" className={sectionTitle}>
          {c.headline}
        </h2>
        <p className={sectionDesc}>{c.sub}</p>
        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/[0.08] bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
          <table className="w-full min-w-[720px] border-collapse text-left text-[13px]">
            <thead>
              <tr className="border-b border-white/[0.08] bg-black/40">
                <th className="px-4 py-3.5 font-semibold text-zinc-200" scope="col">
                  {t.ui.dimension}
                </th>
                {columns.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={`px-4 py-3.5 font-semibold ${
                      i === recommendedCol
                        ? 'bg-[#D4AF37]/25 text-white'
                        : 'text-zinc-300'
                    }`}
                  >
                    {col}
                    {i === recommendedCol ? (
                      <span className="mt-1 block text-xs font-normal text-white/85">
                        {t.ui.recommended}
                      </span>
                    ) : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.dim} className="border-b border-white/[0.06] last:border-0">
                  <td className="whitespace-nowrap px-4 py-3.5 font-medium text-zinc-200">
                    {row.dim}
                  </td>
                  {row.cells.map((cell, j) => (
                    <td
                      key={`${row.dim}-${String(j)}`}
                      className={`px-4 py-3.5 text-zinc-500 ${
                        j === recommendedCol ? 'bg-[#D4AF37]/[0.12] text-zinc-300' : ''
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-center text-sm text-zinc-500">
          <a
            className="font-medium text-[#EAB34D] underline-offset-4 hover:text-[#F6C15E] hover:underline"
            href={SITE.discordUrl}
            target="_blank"
            rel="noreferrer"
          >
            {SITE.name}
          </a>
          <span className="mx-2 text-zinc-600">×</span>
          <a
            className="font-medium text-[#EAB34D] underline-offset-4 hover:text-[#F6C15E] hover:underline"
            href={SITE.orgGithubUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.ui.officialLink}
          </a>
        </p>
      </div>
    </section>
  )
}

function TrustSection() {
  const { t } = useLocale()
  const { trust: tr } = t
  return (
    <section
      className="border-t border-white/[0.06] py-20 sm:py-24"
      aria-labelledby="trust-heading"
    >
      <div className={container}>
        <h2 id="trust-heading" className={sectionTitle}>
          {tr.headline}
        </h2>
        <p className={`${sectionDesc} mx-auto max-w-3xl`}>{tr.body}</p>
        <div className="mt-8 flex justify-center">
          <a className={btnGhost} href={SITE.githubUrl} target="_blank" rel="noreferrer">
            {t.ui.learnMore}
          </a>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tr.pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-center sm:text-left"
            >
              <h4 className="text-[15px] font-semibold text-zinc-100">{p.title}</h4>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-500">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const { t } = useLocale()
  return (
    <section
      className="border-t border-white/[0.06] py-20 sm:py-24"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className={container}>
        <h2 id="faq-heading" className={sectionTitle}>
          {t.ui.faqTitle}
        </h2>
        <p className={sectionDesc}>{t.ui.faqLead}</p>
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3">
          {t.faqs.map((item) => (
            <details
              key={item.q}
              className="ec-details rounded-2xl border border-white/[0.08] bg-white/[0.02] transition open:border-white/[0.12] open:bg-white/[0.04]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[15px] font-medium text-zinc-100 [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="select-none text-lg font-light text-[#D4AF37]">
                  <span className="ec-plus">+</span>
                  <span className="ec-minus">−</span>
                </span>
              </summary>
              <div className="border-t border-white/[0.06] px-5 pb-4 pt-3 text-sm leading-relaxed text-zinc-500">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function BottomCta({ onDownloadClick }: { onDownloadClick: () => void }) {
  const { t } = useLocale()
  return (
    <section
      className="border-t border-white/[0.06] bg-gradient-to-b from-[#D4AF37]/[0.1] to-transparent py-20 text-center sm:py-24"
      aria-label={t.ui.ctaAria}
    >
      <div className={container}>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
          {t.ui.bottomCtaTitle}
        </h2>
        <p className="mt-3 text-zinc-500">{t.ui.bottomCtaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" className={btnPrimary} onClick={onDownloadClick}>
            {t.ui.download}
          </button>
          <button
            type="button"
            className={btnGhost}
            onClick={() => window.alert(t.ui.comingSoon)}
          >
            {t.ui.earningHub}
          </button>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  const { t } = useLocale()
  return (
    <footer className="border-t border-white/[0.06] py-10 text-center">
      <div className={container}>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a
            className="text-zinc-500 hover:text-zinc-200"
            href={SITE.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.ui.official}
          </a>
          <a
            className="text-zinc-500 hover:text-zinc-200"
            href={SITE.discordUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.ui.discord}
          </a>
          <a
            className="text-zinc-500 hover:text-zinc-200"
            href={SITE.ecosystemUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.ui.openclawEcosystem}
          </a>
        </div>
        <p className="mt-5 text-xs text-zinc-600">
          © {new Date().getFullYear()} {SITE.name} — {t.ui.copyrightSuffix}
        </p>
      </div>
    </footer>
  )
}

function App() {
  const [downloadOpen, setDownloadOpen] = useState(false)
  return (
    <div className={shell}>
      <div className={glow} aria-hidden />
      <Header />
      <main>
        <HeroSection onDownloadClick={() => setDownloadOpen(true)} />
        <FeaturesSection />
        <SkillsBridge />
        <SkillsSection />
        <GettingStartedSection />
        <ComparisonSection />
        <TrustSection />
        <FAQSection />
        <BottomCta onDownloadClick={() => setDownloadOpen(true)} />
      </main>
      <SiteFooter />
      <DownloadModal open={downloadOpen} onClose={() => setDownloadOpen(false)} />
    </div>
  )
}

export default App
