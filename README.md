# [MKKE - Mechanical Keyboard Key Editor](https://github.com/the-via/app) - Your keyboards best friend

**MKKE is a fork of [VIA](https://usevia.app) (Visual Interface for Architects)** - a powerful, open-source web-based interface for configuring your [QMK](https://qmk.fm)-powered mechanical keyboard.

Original VIA is maintained at: [https://github.com/the-via/app](https://github.com/the-via/app)

![android-chrome-192x192](https://user-images.githubusercontent.com/1714072/222621960-ddfb8ee6-a486-4c66-8852-b204ba7c807b.png)

[![Azure Static Web Apps CI/CD](https://github.com/the-via/app/actions/workflows/azure.yml/badge.svg)](https://github.com/the-via/app/actions/workflows/azure.yml)

MKKE (forked from [VIA](https://usevia.app)) is a powerful, open-source web-based interface for configuring your [QMK](https://qmk.fm)-powered mechanical keyboard. It allows you to customize your keymaps, create macros, and adjust RGB settings (if it has RGB) on the fly, without needing to recompile your keyboard's firmware. This makes keyboard customization easier and more accessible for everyone.

## Getting VIA support to your keyboard

MKKE leverages the same VIA protocol and definition system. Are you a keyboard maker or a developer interested in adding support for your keyboard? We welcome contributions to the VIA project!

1. The source code of the keyboard **has to be merged** in [QMK Firmware Repositories](https://github.com/qmk/qmk_firmware) Master branch.
2. Your `keymaps/via` keymap **has to be merged** in [VIA's QMK Userspace Repository](https://github.com/the-via/qmk_userspace_via) Main branch.
3. Create a definition in JSON format for your keyboard and submit it as a pull request to [VIA's Keyboards Repository](https://github.com/the-via/keyboards) Master branch.

Please follow our [Specification documentation](https://www.caniusevia.com/docs/specification) carefully to ensure your pull request is smoothly reviewed and merged.

## Local development setup

Start by cloning [`the-via/keyboards`](github.com/the-via/keyboards) then install dependencies with `npm install` and finally `npm run build`. You should see
the output folder `dist`. This should be copied or symlinked to our repo's `public/definitions` folder.

```bash
# Inside the-via/app
public/definitions -> ../../keyboards/dist
```

### Useful commands

#### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

#### `npm run test`

Launches the application test runner.
Run with the `--watch` flag (`npm test -- --watch`) to run in interactive watch mode.

---

This project is tested with [BrowserStack](https://www.browserstack.com/).

## Looking for an offline app?

@cebby2420 has kindly made a desktop app that does so.

You can find it at [https://github.com/cebby2420/via-desktop](https://github.com/cebby2420/via-desktop).

**NOTE: This project has no official affiliation with VIA, and we cannot provide support for it.**

## Legal & License

**MKKE is a fork of [VIA](https://usevia.app) (Visual Interface for Architects)**, licensed under **GNU General Public License v3.0 (GPL v3)**.

### GPL v3 Compliance

As a modified version of VIA, MKKE complies with GPL v3 Section 5 requirements:
- **Copyright notices** in `src/index.tsx` stating this is a fork
- **Appropriate Legal Notices** displayed in the about dialog
- **Full license text** available in the about dialog and `LICENSE` file
- **License preservation** - entire codebase licensed under GPL v3

### Attribution

- **Original project**: [VIA](https://usevia.app) - https://github.com/the-via/app
- **Original license**: GNU General Public License v3.0
- **License text**: https://www.gnu.org/licenses/gpl-3.0.en.html

If you encounter any issues or bugs while using [MKKE (fork of VIA)](https://usevia.app), please report them by opening an issue in the [Issues section](https://github.com/the-via/app/issues). This will help us to track down and resolve problems, and improve the VIA experience for everyone.

Before reporting, please make sure to check if an issue has already been reported. Thank you!
