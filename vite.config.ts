import path from 'node:path'
import fs from 'node:fs'
import os from 'node:os'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const devPort = Number(process.env.OFFICIAL_WEB_DEV_PORT || 5188)
const dockerDev = process.env.DOCKER_DEV === '1'

/** Dev-only: map clean paths to public index.html (matches nginx try_files in production). */
function publicDirectoryIndexPlugin(): Plugin {
  const rewrites: [RegExp, string][] = [
    [/^\/terms\/?$/, '/terms/index.html'],
    [/^\/privacy\/?$/, '/privacy/index.html'],
    [/^\/en\/terms\/?$/, '/en/terms/index.html'],
    [/^\/en\/privacy\/?$/, '/en/privacy/index.html'],
    [/^\/about\/?$/, '/about/index.html'],
    [/^\/en\/about\/?$/, '/en/about/index.html'],
  ]
  return {
    name: 'public-directory-index',
    configureServer(server) {
      const generated = fs.mkdtempSync(path.join(os.tmpdir(), 'lingxie-fact-pages-'))
      server.httpServer?.once('close', () => fs.rmSync(generated, { recursive: true, force: true }))
      server.middlewares.use(async (req, res, next) => {
        const incoming = new URL(req.url ?? '/', 'http://localhost')
        const facts = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/content/factPages.json'), 'utf8')) as Array<{ route: string }>
        const canonicalPath = incoming.pathname.replace(/index\.html$/, '').replace(/\/?$/, '/')
        const isAbout = ['/about/', '/en/about/'].includes(canonicalPath)
        if (!isAbout && !facts.some(page => page.route === canonicalPath)) return next()
        if (incoming.pathname !== canonicalPath) {
          res.writeHead(301, { Location: canonicalPath + incoming.search })
          res.end()
          return
        }
        try {
          const { renderFactPages } = await server.ssrLoadModule('/scripts/render-fact-pages.mjs')
          const brand = JSON.parse(fs.readFileSync(path.join(__dirname, 'public/brand-facts.json'), 'utf8'))
          if (isAbout) {
            const { renderAboutPages } = await server.ssrLoadModule('/scripts/render-about-pages.mjs')
            renderAboutPages(__dirname, generated, brand)
          } else renderFactPages(__dirname, generated, brand, {})
          const html = fs.readFileSync(path.join(generated, canonicalPath, 'index.html'), 'utf8')
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' })
          res.end(html)
        } catch (error) { next(error as Error) }
      })
      server.middlewares.use((req, _res, next) => {
        const pathname = req.url?.split('?')[0] ?? ''
        for (const [pattern, target] of rewrites) {
          if (pattern.test(pathname)) {
            req.url = target
            break
          }
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'brand-facts-module',
      enforce: 'pre',
      resolveId(id) {
        if (id === '../../public/brand-facts.json') return '\0lingxie-brand-facts'
      },
      load(id) {
        if (id === '\0lingxie-brand-facts') {
          return `export default ${fs.readFileSync(path.join(__dirname, 'public/brand-facts.json'), 'utf8')}`
        }
      },
    },
    react(), tailwindcss(), publicDirectoryIndexPlugin(),
  ],
  server: {
    host: dockerDev ? true : process.env.VITE_DEV_HOST === '0.0.0.0',
    port: devPort,
    strictPort: true,
    watch: dockerDev
      ? {
          usePolling: true,
          interval: 300,
        }
      : undefined,
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        en: path.resolve(__dirname, 'en/index.html'),
        widget: path.resolve(__dirname, 'widget/embed/index.html'),
      },
    },
  },
})
