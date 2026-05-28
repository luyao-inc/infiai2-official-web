export type ClientOS = 'windows' | 'mac' | 'ios' | 'android' | 'linux' | 'unknown'
export type ClientArch = 'x64' | 'arm64' | 'unknown'

export type ClientPlatform = { os: ClientOS; arch: ClientArch }

type UserAgentData = {
  platform?: string
  getHighEntropyValues?: (hints: string[]) => Promise<{ architecture?: string; platform?: string }>
}

function normalizeArch(value?: string): ClientArch {
  const arch = (value || '').toLowerCase()
  if (/(arm64|aarch64|arm)/i.test(arch)) return 'arm64'
  if (/(x86_64|x64|amd64|win64|wow64)/i.test(arch)) return 'x64'
  return 'unknown'
}

export function detectClientPlatform(): ClientPlatform {
  const ua = navigator.userAgent
  const uaL = ua.toLowerCase()

  let os: ClientOS = 'unknown'
  if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) {
    os = 'ios'
  } else if (/android/i.test(ua)) os = 'android'
  else if (/windows/i.test(ua)) os = 'windows'
  else if (/mac os x|macintosh/i.test(ua) && !/like mac/i.test(ua)) os = 'mac'
  else if (/linux|x11/i.test(ua) && !/android/i.test(ua)) os = 'linux'

  let arch: ClientArch = normalizeArch(uaL)

  const nav = navigator as Navigator & { userAgentData?: UserAgentData }
  const uad = nav.userAgentData
  if (uad?.platform) {
    const p = uad.platform.toLowerCase()
    if (p.includes('ios')) os = 'ios'
    else if (p.includes('android')) os = 'android'
    else if (p.includes('win')) os = 'windows'
    else if (p.includes('mac')) os = 'mac'
    else if (p.includes('linux')) os = 'linux'
  }

  return { os, arch }
}

export async function detectClientPlatformHighEntropy(): Promise<ClientPlatform> {
  const base = detectClientPlatform()
  const nav = navigator as Navigator & { userAgentData?: UserAgentData }
  const highEntropy = await nav.userAgentData?.getHighEntropyValues?.(['architecture', 'platform']).catch(() => null)
  if (!highEntropy) return base

  let os = base.os
  const platform = highEntropy.platform?.toLowerCase()
  if (platform) {
    if (platform.includes('ios')) os = 'ios'
    else if (platform.includes('android')) os = 'android'
    else if (platform.includes('win')) os = 'windows'
    else if (platform.includes('mac')) os = 'mac'
    else if (platform.includes('linux')) os = 'linux'
  }

  const arch = normalizeArch(highEntropy.architecture)
  return { os, arch: arch === 'unknown' ? base.arch : arch }
}
