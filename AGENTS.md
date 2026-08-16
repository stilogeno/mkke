# MKKE - Mechanical Keyboard Key Editor (VIA Fork)

React + Vite web app for configuring QMK mechanical keyboards via the VIA protocol. Deploys to Cloudflare Pages.

**MKKE is a fork of [VIA](https://usevia.app) (Visual Interface for Architects)** - the original project is maintained at [https://github.com/the-via/app](https://github.com/the-via/app).

## Commands

### Development
```bash
npm run dev              # Vite dev server (http://localhost:5173)
npm run electron:dev     # Dev server + Electron wrapper
```

### Build
```bash
npm run build:kbs       # Generate keyboard definitions from @the-via/keyboards
npm run build           # Full build: kbs + tsc + vite build (outputs to dist/)
npm run build:azure     # Refresh kbs + full build
```

### Keyboard Definitions (Critical)
```bash
npm run refresh-kbs     # Reinstall @the-via/keyboards package and rebuild
```

**Definition Flow:**
1. Keyboard firmware merged in QMK firmware repo
2. VIA keymap merged in the-via/qmk_userspace_via repo
3. JSON definition submitted to the-via/keyboards repo
4. Run `npm run build:kbs` to generate definitions
5. `public/definitions/` is symlinked to `../../keyboards/dist`

### Code Quality
```bash
npm run format          # Prettier format
npm run lint            # Prettier check
npm run find-deadcode   # ts-prune for unused code
```

## Architecture

### Package Boundaries
- **`src/`** - Main React/Vite application (App.tsx, components/, store/, utils/)
- **`public/definitions/`** - Keyboard definitions (symlinked to `../../keyboards/dist`)
- **`scripts/`** - Build definitions (build-definitions.js, download-definition.js)
- **`dist/`** - Vite build output (deployed to Cloudflare Pages)
- **`release/`** - Electron app builds (macOS DMG/ZIP)

### Key Dependencies
- **Frontend**: React 18, Vite 8, TypeScript 5.9.3, styled-components
- **3D/Visual**: Three.js, @react-three/fiber, @react-three/drei
- **State**: Redux Toolkit, Redux Logger
- **Drag & Drop**: @dnd-kit/*
- **i18n**: i18next + react-i18next
- **External VIA packages**: @the-via/pelpi, @the-via/reader, via-keyboards
- **Routing**: wouter

### Build Pipeline
1. `build-definitions.js` runs first (generates keyboard definitions)
2. TypeScript compilation (`tsc`)
3. Vite build to `dist/`
4. `dist/` deployed via Cloudflare Pages wrangler

## Important Notes

- **Bun is preferred** over npm (package.json uses `bun run` in scripts)
- **Node 18+ required** (engines field)
- Keyboard definitions come from external `@the-via/keyboards` package
- TypeScript strict mode enabled (`strict: true` in tsconfig.json)
- Uses `patch-package` for postinstall patches
- Prettier config: single quotes, trailing commas "all", no bracket spacing
- Cloudflare Pages deployment on `main` branch push or `definition_update` dispatch
- **GPL v3 Licensed**: MKKE is a fork of VIA. See `src/index.tsx` for license header and about dialog for full license text.

## Deployment

- **Cloudflare Pages**: Auto-deploys from `main` branch
- **Trigger**: Push to main OR `repository_dispatch` with `definition_update` type
- **Build step**: `bun run refresh-kbs && bun run build`
