/** 非文案配置：外链占位，发布前替换为官网 / 下载页 */
export const SITE = {
  name: 'EarningClaw',
  /** 与 `githubUrl` 同属一仓库，供 `releases/latest` API 使用：`owner/repo` */
  githubRepo: 'YOUR_ORG/EarningClaw',
  downloadUrl: 'https://github.com/YOUR_ORG/EarningClaw/releases',
  githubUrl: 'https://github.com/YOUR_ORG/EarningClaw',
  discordUrl: 'https://discord.com/invite/PLACEHOLDER',
  ecosystemUrl: 'https://github.com/openclaw',
  orgGithubUrl: 'https://github.com/YOUR_ORG',
} as const
