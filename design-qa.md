# 加入我们页面视觉 QA

## 对照目标

- Source visual truth: `/tmp/official-web-join-proposal-v2.jpg`
- Supporting detail reference: `/var/folders/cd/pz4x00xj3zj52gn0w8x3jb300000gn/T/codex-clipboard-ef0648e2-c412-4705-aecc-cf73de6226bd.png`
- Comparison input: `/tmp/official-web-join-qa-comparison-final.jpg`
- Implementation desktop: `/tmp/official-web-join-implemented-desktop-v2.jpg`
- Implementation mobile: `/tmp/official-web-join-implemented-mobile-v2.jpg`

## Viewports and state

- Desktop: 1500 x 800 CSS px, screenshot 1500 x 800 px, device scale factor 1.
- Mobile: 480 x 900 CSS px, screenshot 480 x 900 px, device scale factor 1.
- Route/state: `http://127.0.0.1:5187/#join`, Chinese locale, desktop navigation visible; mobile menu opened and then closed by the `加入我们` anchor navigation.
- Source and implementation were compared at matching viewport sizes without density normalization.

## Evidence review

- Full-view comparison: the implementation follows the accepted centered heading, two-paragraph copy, open three-column benefit row, centered CTA/email, and existing footer composition.
- Focused region comparison: the benefit row was reviewed against the supplied detail image. The three groups have the same text color, font size, weight, and line-height; rectangular cards and vertical dividers are removed. Thin horizontal rules and short gradient strokes provide the intended visual structure.

## Required fidelity surfaces

- Typography: benefit title/body lines share one visual style; the page title and cyan subtitle retain the existing website hierarchy.
- Spacing/layout: desktop benefits are evenly distributed in three columns; mobile benefits stack vertically without overlap; CTA follows the benefits as in the accepted reference.
- Colors/tokens: the existing dark grid background, teal/purple ambient glow, white copy, and cyan accent are preserved.
- Image/assets: the existing repository logo is retained; no new image asset or placeholder was introduced.
- Copy/content: Chinese benefit copy, recruitment copy, CTA, email, and iOS URL were verified in the rendered DOM.

## Interaction and runtime checks

- Desktop `加入我们` navigation link: passed; URL became `/#join` and the new content rendered.
- Mobile menu -> `加入我们`: passed; menu opened, anchor was present, and URL became `/#join`.
- Download modal -> iOS link: passed; rendered `href` is `https://apps.apple.com/cn/app/id6772113093`.
- Page identity/title/non-blank/framework overlay: passed.
- Console: one pre-existing third-party customer-service widget error remains: `MutationObserver.observe` received a non-Node parameter. It is outside the changed JoinSection/download code and was present before this change.

## Comparison history

1. Initial comparison found the CTA/email before the benefit row, which differed from the accepted reference.
2. Moved the CTA/email block below the benefits.
3. Re-captured desktop and mobile screenshots and rechecked the anchor order. No actionable P0/P1/P2 visual findings remain.

## Final result

passed
