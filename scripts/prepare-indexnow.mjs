// Optional public IndexNow ownership proof, injected only after the site build.
import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'
const secretFile = '/run/secrets/indexnow_key'
const key = fs.existsSync(secretFile) ? fs.readFileSync(secretFile, 'utf8').trim() : ''
const expectedHash = process.env.INDEXNOW_KEY_SHA256 || ''
if (expectedHash && !key) throw new Error('Configured IndexNow proof secret is missing')
if (key) {
  if (createHash('sha256').update(key).digest('hex') !== expectedHash) throw new Error('IndexNow proof hash mismatch; supply INDEXNOW_KEY_SHA256 build argument')
  if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) throw new Error('Invalid IndexNow proof key format')
  const dist = path.resolve(process.argv[2])
  if (!fs.existsSync(path.join(dist, 'sitemap.xml'))) throw new Error('Build sitemap first')
  fs.writeFileSync(path.join(dist, key + '.txt'), key + '\n', { mode: 0o644 })
  console.log('Public IndexNow proof included in static artifact.')
} else {
  console.log('IndexNow proof not configured; static build remains unchanged.')
}
