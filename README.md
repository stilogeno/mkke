# MKKE - Mechanical Keyboard Key Editor (VIA Fork)

A web-based interface for configuring QMK-powered mechanical keyboards via WebHID. Customize keymaps, create macros, and adjust RGB lighting in real-time without recompiling firmware.

**MKKE is a fork of [VIA](https://usevia.app) (Visual Interface for Architects)** - the original project is maintained at [https://github.com/the-via/app](https://github.com/the-via/app).

![MKKE Screenshot](https://user-images.githubusercontent.com/1714072/222621960-ddfb8ee6-a486-4c66-8852-b204ba7c807b.png)

## Features

### 🎹 Real-time Keymap Editing
- Configure key mappings for every key on your keyboard
- Support for multiple layers (layers, option keys)
- Custom option key configurations
- Visual matrix view to see key relationships

### 🎨 RGB Lighting Control
- Adjust RGB backlight and RGBLight effects
- Support for RGB Matrix keyboards
- Custom lighting effects and patterns
- Lighting menu customization

### 📝 Macro Creation
- Record and play back macro sequences
- Create custom key combinations
- Debug and test macros in real-time
- Save/load macro configurations

### 🖥️ 3D Keyboard Visualization
- Interactive 3D rendering of your keyboard
- Visual feedback for key presses and lighting
- Real-time updates as you configure

### 🎛️ Custom Menus
- Design custom menu structures
- Rotary encoder support (Satisfaction75, etc.)
- Custom feature integration

### 💾 Save/Load Configurations
- Save your configurations to the cloud
- Load saved configurations for different keyboards
- Share configurations with others

## Getting Started

### Prerequisites
- **Browser**: Chrome, Edge, or other browsers with [WebHID support](https://caniuse.com/webhid)
- **Keyboard**: A QMK-powered keyboard with VIA protocol enabled
- **Firmware**: Your keyboard must be running VIA-compatible firmware

### First Time Setup

1. **Open MKKE** in your browser at `http://localhost:5173` (or deployed version)

2. **Authorize your keyboard**
   - Click the `+` button to authorize your keyboard via WebHID
   - Your keyboard will appear in the device list

3. **Select a keyboard definition**
   - Go to the **Design** tab
   - Upload the JSON definition file for your keyboard (provided by manufacturer)
   - Or select from available keyboard definitions

4. **Start configuring**
   - Navigate to the **Configure** tab
   - Use the menu on the left to access different configuration options:
     - **Keycodes**: Map keys to different functions
     - **Layouts**: Configure option keys and custom layouts
     - **Macros**: Create and record macro sequences
     - **Lighting**: Adjust RGB effects and colors
     - **Save/Load**: Manage your configurations

## Keyboard Definition Support

MKKE leverages the VIA protocol and keyboard definition system. To add support for your keyboard:

### For Keyboard Manufacturers
1. Ensure keyboard firmware is merged in [QMK Firmware Repository](https://github.com/qmk/qmk_firmware)
2. Create VIA keymap and merge in [VIA QMK Userspace Repository](https://github.com/the-via/qmk_userspace_via)
3. Submit keyboard definition JSON to [VIA Keyboards Repository](https://github.com/the-via/keyboards)

### For Developers
- Follow the [VIA Specification](https://www.caniusevia.com/docs/specification) for keyboard definitions
- Use VIA protocol v2 or v3 for keyboard communication
- Ensure your keyboard supports the VIA protocol

## Local Development

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Opens http://localhost:5173

# Development with Electron
npm run electron:dev
```

### Build Commands

```bash
# Generate keyboard definitions
npm run build:kbs

# Full build (definitions + TypeScript + Vite)
npm run build
# Outputs to dist/

# Build for Azure deployment
npm run build:azure
```

### Keyboard Definitions

Keyboard definitions are generated from the `@the-via/keyboards` package:

```bash
# Reinstall and rebuild keyboard definitions
npm run refresh-kbs

# The definitions are placed in public/definitions/
# This directory is symlinked to ../../keyboards/dist
```

### Development Structure

```
src/
├── components/          # React components
│   ├── panes/          # Main configuration panes (Configure, Design, Debug, etc.)
│   ├── inputs/         # UI components (buttons, sliders, dialogs)
│   ├── three-fiber/    # 3D rendering with Three.js
│   └── ...
├── store/              # Redux state management
├── utils/              # Utility functions
│   ├── keyboard-rendering.ts  # Keyboard layout rendering
│   ├── keyboard-api.ts        # WebHID API wrapper
│   └── ...
└── types/              # TypeScript type definitions

public/definitions/     # Keyboard definitions (generated)
dist/                   # Build output
```

## Architecture

### Tech Stack
- **Frontend**: React 18, TypeScript 5.9.3
- **Build Tool**: Vite 8
- **Styling**: styled-components
- **3D Rendering**: Three.js, @react-three/fiber
- **State Management**: Redux Toolkit
- **Internationalization**: i18next + react-i18next
- **Drag & Drop**: @dnd-kit/*
- **Routing**: wouter

### Key Modules
- **`src/utils/keyboard-rendering.ts`**: Core keyboard layout rendering logic
- **`src/utils/keyboard-api.ts`**: WebHID API abstraction layer
- **`src/utils/device-store.ts`**: Device connection and management
- **`src/store/devicesSlice.ts`**: Redux slice for device state
- **`src/store/keymapSlice.ts`**: Redux slice for keymap configuration
- **`src/store/definitionsSlice.ts`**: Redux slice for keyboard definitions

### External Dependencies
- **`@the-via/reader`**: VIA protocol parsing and keyboard definition reading
- **`@the-via/pelpi`**: PeliPi protocol for custom menus
- **`via-keyboards`**: Keyboard definition package

## Deployment

### Cloudflare Pages
MKKE is deployed to Cloudflare Pages:
- **Auto-deploy**: Push to `main` branch
- **Manual trigger**: `repository_dispatch` with `definition_update` type
- **Build process**: `bun run refresh-kbs && bun run build`

### Local Preview
```bash
npm run preview
# Serves the production build
```

## Troubleshooting

### Keyboard Not Detected
- Ensure your browser supports WebHID (Chrome, Edge recommended)
- Check that your keyboard is running VIA-compatible firmware
- Try refreshing the page and re-authorizing

### Definitions Not Loading
- Verify you have the correct JSON definition file for your keyboard
- Check the definition format matches VIA specification
- Use the Design tab to upload custom definitions

### Lighting Not Working
- Verify your keyboard supports RGB lighting
- Check that the correct lighting menu is selected
- Some keyboards require specific QMK lighting modules

## Contributing

MKKE is open source and welcomes contributions! Whether you're a keyboard manufacturer, developer, or enthusiast, we'd love to hear from you.

### For Keyboard Makers
- Add your keyboard to the definition database
- Contribute to VIA protocol development
- Report bugs and suggest features

### For Developers
- Fix bugs in the codebase
- Add support for new keyboard features
- Improve the UI/UX
- Add new languages to i18n

## License

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

## Issues and Support

If you encounter any issues or bugs while using MKKE, please report them by opening an issue in the [Issues section](https://github.com/the-via/app/issues) of the original VIA repository. This will help track down and resolve problems, and improve the VIA experience for everyone.

Before reporting, please make sure to check if an issue has already been reported. Thank you!
