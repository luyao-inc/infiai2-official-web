# 灵谐官网

React + Vite 构建的中英文官网，正式域名 `https://lingxie.net`。首页在构建时生成完整 HTML，浏览器使用 React hydration 恢复交互；生产仍是 Nginx 静态服务，不新增 Node 服务。

## 开发与检查

```sh
npm ci
npm run dev
npm run lint
npm run build
```

`npm run build` 依次运行类型检查、客户端构建、服务端构建、双语静态渲染和 GEO 产物检查。`dist-ssr` 只在构建阶段使用，发布产物是 `dist`。

## 内容维护

- 品牌事实源：`public/brand-facts.json`。修改后运行兄弟 Docker 仓库的 `scripts/check-site-brand.py --sync`，并审核开放平台镜像文件。
- 首页文案及 FAQ：`src/i18n/messages.ts`。静态正文与 FAQ JSON-LD 使用同一份问答。
- 新增事实页面：`src/content/factPages.json`，包含路由、标题、直接答案、章节、参考链接和真实修订日期。构建时生成独立静态页面，接入首页页脚和 sitemap；无英文版本的页面不声明英文 hreflang。
- 页面真实修订日期：`src/content/pageDates.json`。仅在对应内容发生变化时调整，不以构建日期批量刷新；条款与隐私日期单独维护。
- 中英文关于页：`scripts/render-about-pages.mjs`，与概览页共用 `scripts/page-shell.mjs` 和 `public/fact-pages.css`。开发和构建均生成完整页面；旧 `public/about` HTML 不再作为页面来源。
- 条款与隐私页：`public` 对应的静态 HTML；其可见日期、元数据与日期表需同步复核。
- `dist/sitemap.xml`、`llms.txt`、`llms-full.txt` 和 `feed.xml` 由 `scripts/prerender.mjs` 生成，覆盖 `public` 中的历史静态副本；不要把修改历史副本作为发布方式。
- 无 JavaScript 时显示完整正文、导航及所有 FAQ；有 JavaScript 时保留全屏滚动、FAQ 切换、下载引导和客服挂件。

## 路由与发布

Nginx 只返回真实存在的文件，不存在路径返回 HTTP 404。`index.html` 入口规范化为目录地址，保留查询参数；Widget 的 loader 与 embed 路径独立保留。

`npm run geo:check` 只验证线上 sitemap，不会通知搜索引擎。IndexNow 与抓取统计的操作说明见兄弟仓库 `infiai2-docker/docs/site-geo.md`。提交和部署必须遵循工作区正式发布流程。

本地正式验收入口为官网 `http://127.0.0.1:18080/`、开放平台 `http://127.0.0.1:11014/`。`npm run dev` 默认使用 5188 端口，现在也按请求生成 7 个事实页面，支持目录与 index.html 地址规范化。

本地联调可运行 `VITE_SITE_DOCS_URL=http://127.0.0.1:11014 npm run dev`；该变量只配置用户点击的文档入口，canonical 与结构化数据继续使用正式域名。Docker 构建支持同名参数，本地 Compose 使用 `OPEN_PLATFORM_DOCS_PUBLIC_URL`。正式构建不传该参数时使用品牌事实源中的正式开放平台地址。
