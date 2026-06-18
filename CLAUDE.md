# hesh.am — project notes

Personal site + blog. **Jekyll** (remote theme `HeshamMegid/tale`) hosted on
**GitHub Pages** from the repo `HeshamMegid/heshammegid.github.io`. It deploys
automatically on **push to `master`** (no CI to run); `CNAME` maps it to
`hesh.am`.

## Local development

```sh
bundle exec jekyll serve --livereload      # whole site at localhost:4000
```

The Gemfile uses the **`github-pages`** metagem so local builds match what
GitHub Pages deploys. On a fresh machine you may first need a modern bundler
(`gem install bundler`) before `bundle install` — the original pinned bundler
1.16.1 can't run on Ruby 3.x.

---

# App landing pages (`/apps`)

A self-contained marketing mini-site for the apps, living **inside this repo**
as a subdirectory (`hesh.am/apps`) rather than a subdomain, to keep SEO
authority on the root domain. The app pages **override the blog theme** (via a
local `_layouts/`) so they have their own distinct look; the rest of the blog is
untouched.

## File map

| File | Purpose |
|---|---|
| `_layouts/app.html` | Shared layout for every app page. Overrides the remote theme. Renders hero, feature rows, trust points, closing CTA from front matter. |
| `assets/apps/app.css` | All styling for the app pages + the `/apps` index. Self-contained. |
| `apps/index.html` | The `/apps` index: personal intro ("Hi, I'm Hesham") + a grid of apps. Standalone HTML (no theme). |
| `apps/<slug>.html` | One per app (e.g. `ease.html`, `trackit.html`). Front-matter only; the layout does the rest. |
| `_data/apps.yml` | Drives the `/apps` index grid. `status: live` makes a card link; anything else renders dimmed "coming soon". |
| `assets/apps/<slug>/` | Per-app assets: `icon.png`, `screens/*.png`, `qr.svg`. |
| `assets/apps/appstore-badge.svg` | Official Apple "Download on the App Store" badge (shared). |
| `assets/apps/profile.png` | Hesham's photo, used on the `/apps` index. |
| `<slug>-privacy.md` | Each app's privacy policy (already existed), linked via the page's `privacy:` key. |

`apps/ease.html` is the reference implementation — copy it when adding an app.

## How to add a new app

1. **Gather source material from the app's own repo** (e.g. `~/Apps/iOS/<App>`):
   - App icon (the 1024px `AppIcon` png).
   - Screenshots: each app has a screenshot pipeline. Use the **raw, unframed**
     captures (Ease: `Image Assets/Screenshots/v*/raw/`; TracKit:
     `Image Sources/v*/raw/`). Do **not** use the App-Store "final" composites
     (they have baked-in gradient + headline text).
   - Brand colors: from the app's `compose.swift` (the screenshot gradient) or
     its `Colors.swift`.
   - Marketing copy: the per-screen headlines in `compose.swift` are a great
     starting point for feature-row copy.
   - App Store URL and the privacy-policy page slug.
2. **Generate web assets** into `assets/apps/<slug>/`:
   ```sh
   # icon
   sips -Z 512 <icon-1024>.png --out assets/apps/<slug>/icon.png
   # full screens for feature rows + hero (1080px wide, from raw captures)
   sips --resampleWidth 1080 raw/<screen>.png --out assets/apps/<slug>/screens/<name>.png
   # QR pointing at the App Store listing
   npx qrcode "<app-store-url>" -t svg -o assets/apps/<slug>/qr.svg
   ```
3. **Create `apps/<slug>.html`** — copy `apps/ease.html` and edit the front
   matter (schema below).
4. **Add it to `_data/apps.yml`** with `status: live`.
5. Preview with `bundle exec jekyll serve`, then commit. (Local Chrome
   screenshots can look cropped — a headless quirk where the viewport renders
   wider than the canvas; a real browser is fine.)

## App page front matter (schema)

```yaml
layout: app
permalink: /apps/<slug>
title: "<App> — <one-line> for iPhone"   # <title> + OG (SEO)
app_name: "<App>"
description: "..."                         # meta description + JSON-LD
tagline: "..."                             # hero <h1>
hero_sub: "..."                            # hero subhead
accent: "#RRGGBB"                          # brand color (CSS var --accent)
accent_dark: "#RRGGBB"                     # darker shade (gradient end, --accent-dark)
category: "HealthApplication"              # schema.org applicationCategory
icon: /assets/apps/<slug>/icon.png
appstore: "https://apps.apple.com/app/.../id..."
privacy: /<slug>-privacy
qr: /assets/apps/<slug>/qr.svg
hero_phone: /assets/apps/<slug>/screens/<name>.png
social_proof: "..."                        # small line under the hero CTA
feature_rows:                              # alternating image/text rows
  - img: /assets/apps/<slug>/screens/<name>.png
    kicker: "Short label"
    title: "Feature headline"
    body: "1-2 sentences of value."
trust_points:                              # 3 cards near the bottom
  - title: "..."
    body: "..."
closing_title: "..."
closing_body: "..."
# og_image: /...   # optional; defaults to the icon
```

## Design decisions (keep consistent across apps)

- **Per-app brand:** `accent` / `accent_dark` drive the gradient hero, kickers,
  and closing. Source them from the app, don't invent.
- **Feature media = full device frame** (the whole screen in a phone mockup),
  alternating left/right. We tried tight crops and feathered slices first; both
  looked off. Full frames won.
- **No screenshot gallery.** It duplicated the feature-row phone frames; removed.
- **Hero phone must differ from feature row 1's screen** — showing the same
  screen twice near the top looks repetitive. (Ease hero = Insights; TracKit
  hero = Home, which no row repeats.)
- **Badge + QR = one unified "get-app" card** on desktop (frosted, with a
  divider); on mobile the QR hides and it's just the plain Apple badge. The QR
  is desktop-only (`only-desktop`).
- **Apple badge** sits only on the gradient (hero + closing), where the black
  artwork has contrast. Don't place it on a neutral light/dark surface without
  rechecking contrast (that's why the header has the icon+wordmark, no badge).

## Copy guidelines

- **No em dashes** in user-facing copy (use commas, periods, parentheses).
- **Verify every claim against how the app actually behaves.** Real corrections
  we had to make on TracKit:
  - An "entry" is a single number, not a chart — a chart is built up from many
    entries over time.
  - Its widgets are **display-only** (not interactive); don't claim you can log
    from them.
  - Data is **backed up and synced to the cloud**, not device-only.
- Each app's voice is warm and personal (indie developer). The `/apps` index
  note mirrors the tone of Ease's in-app Settings note, but **don't reuse exact
  phrases** across surfaces (e.g. "makes my day" already lives in-app).

## Brand colors on file

| App | accent | accent_dark |
|---|---|---|
| Ease | `#5959D9` (iris) | `#4542BD` |
| TracKit | `#129EF5` (dodger blue) | `#0878DB` |
