
## Wails + PrimeVue + Sakai

![Screenshot](./screenshot.png)

A Wails starter for using Go with PrimeVue's Sakai application template.

* [Go](https://go.dev/)
* [Wails](https://wails.io/)
* [Vue](https://vuejs.org/)
* [PrimeVue](https://primevue.org/)
* [Sakai Application Template](https://sakai.primevue.org/)

## Getting Started

**NOTE:** Assumes `go`, `node`, and `wails` are already installed.

Create a new project from this template:
```sh
wails init -n myproject -t https://github.com/TekWizely/wails-template-primevue-sakai
```

Remove the `.github` folder as it only exists to serve the template's github page
```sh
rm -rf .github
```

## Live Development

To get started, run `wails dev` in the project folder.

This will start both the `frontend` and `backend` components and open a browser to connect to the application.

For more details on development options, please refer to the [Dev Command Reference](https://wails.io/docs/reference/cli/#dev).


### Reload On File Change

In dev mode, Wails watches the configured _asset folder_ (`frontend/dist`) and automatically reloads the browser when changes are detected.

Unfortunately, Vite's dev-mode server does not build/copy files into the `dist` folder, but instead processes/serves them directly.  As a result, Wails' watchers are never triggered.

However, Vite's dev-mode server enables its own built-in HMR (Hot Module Reload) feature by default.

#### Vite Hot Model Reload

This template is configured to use the HMR feature via the following properties in `wails.json` and `vite.config.js`:

_wails.json (hmr)_
```json5
{
  // ...
  "frontend:dev:build"    : "npm run clean-dist",
  "frontend:dev:watcher"  : "npm run dev",
  "frontend:dev:serverUrl": "auto",
  "debounceMS"            : 500,
  // ...
}
```
_vite.config.json_
```json5
{
  hmr: {
    host: "localhost",
    protocol: "ws"
  }
}
```

**Note:** You may need to tweak `debounceMS` if Wails opens the browser before the Vite dev server is ready.

#### Disabling HMR

If HMR is giving you issues, or if you just want to disable it, you can modify the configuration in `vite.config.js`:

```json5
{
  hmr: false
  // hmr: {
  //     host: "localhost",
  //     protocol: "ws",
  // }
}
```

**Remember:** With the default `wails.json` configuration, disabling Vite's HMR will result in Wails not reloading the browser when you make changes in the `frontend` folder.

#### Wails Automatic Reload

If you disable HMR, you can still use Wails' _automatic reload_ feature by adding the `frontend` folder to the `reloaddirs` property in `wails.json`:

Here's the relevant set of properties in `wails.json` with the `reloaddirs` property added:

_wails.json (no hmr)_
```json5
{
  // ...
  "reloaddirs"            : "frontend",
  "frontend:dir"          : "frontend",
  "frontend:install"      : "npm install",
  "frontend:build"        : "npm run build",
  "frontend:dev:build"    : "npm run clean-dist",
  "frontend:dev:watcher"  : "npm run dev",
  "frontend:dev:serverUrl": "auto",
  "debounceMS"            : 500,
  // ...
}
```

**Note:** You may need to tweak `debounceMS` if Wails opens/reloads the browser before the Vite dev server is ready.

#### Vite Build-Watch Mode

One final option for gaining automatic reloading is to use Vite's `build --watch` mode, which triggers a build whenever a file changes in the `frontend` folder.

Since `vite build` places the build assets into the `frontend/dist` folder, and Wails automatically watches that folder in _dev_ mode, changes _should_ automatically reload the browser.

Be aware that, in this mode, Vite's dev server is not started.

Here's the relevant set of properties in `wails.json` for the _build-watch_ mode:

_wails.json (build-watch)_
```json5
{
  // ...
  "frontend:dir"        : "frontend",
  "frontend:install"    : "npm install",
  "frontend:build"      : "npm run build",
  "frontend:dev:build"  : "npm run dev-build",
  "frontend:dev:watcher": "npm run dev-build-watch",
  "debounceMS"          : 2000,
  // ...
}
```
**Note:** The `debounceMS` value is larger to accommodate the extra time needed to do a full build.  Just the same, you may still need to tweak it if Wails opens/reloads the browser before the build completes.


## Building

To build a redistributable, production mode package, use `wails build`.

This will compile your project and save the binary/app in the `build/bin` folder.

For more details on compilation options, please refer to the [Build Command Reference](https://wails.io/docs/reference/cli/#build).

## Version Info

This template was built and tested using:

* **Wails** _v2.10.1_
* **Sakai** _v4.3.0_
* **Go** _v1.24.1_
* **Node** _v23.11.0_

## Changes from Original Sources

### Wails (`/`)

**Ran `go mod tidy`:**
* Updated `go.tmpl.mod`
* Updated `go.sum`

* Added a starter `gitignore.txt`
  * Gets renamed to `.gitignore` when template is installed
* Moved the `Greet()` function into it own file, `greet.go`
* Changed Mac TitleBar property `TitlebarAppearsTransparent` from `true` to `false`
* Disabled App Properties `MaxWidth` and `MaxHeight`
* Renamed `app.tmpl.go` to simply `app.go` as it has no template elements
* Renamed `main.go.tmpl` to `main.go.tmpl` to match convention
 
**Modified `go.tmpl.mod`:**
* Set `module.name` to be `{{.ProjectName}}`
* Updated file with results of `go mod tidy`
  * Updated go from `1.18` to `1.22`
  * Added `toolchain go1.24.1`
  * Updated various`require` modules / versions

**Modified `go.sum`:**
* Changes made via `go mod tidy`

**Modified `wails.tmpl.json`:**
* Added properties:
  * `"frontend:dir"          : "frontend"`
  * `"frontend:dev:build"    : "npm run clean-dist"`
  * `"frontend:dev:watcher"  : "npm run dev"`
  * `"frontend:dev:serverUrl": "auto"`
  * `"debounceMS"            : 500`
* NOTE: you may need to tweak `debounceMS`

**Adds `wails-nohmr.tmpl.json`:**
* Offers an alternative to (hopefully) enable Wails automatic reloading when Vite's HMR is disabled
* See [Disabling HMR](#disabling-hmr) for instructions on disabling HMR
* Notable properties:
  * `"reloaddirs"            : "frontend"`
  * `"frontend:dir"          : "frontend"`
  * `"frontend:dev:build"    : "npm run clean-dist"`
  * `"frontend:dev:watcher"  : "npm run dev"`
  * `"frontend:dev:serverUrl": "auto"`
  * `"debounceMS"            : 500`
* NOTE: you may need to tweak `debounceMS`

* **Adds `wails-buildw.tmpl.json`:**
* Offers an alternative to develop using vite's `build --watch` mode
* Should (hopefully) support hot-reloading
* Notable properties:
  * `"frontend:dir"        : "frontend"`
  * `"frontend:dev:build"  : "npm run dev-build"`
  * `"frontend:dev:watcher": "npm run dev-build-watch"`
  * `"debounceMS"          : 2000`
* NOTE: you may need to tweak `debounceMS`

### Sakai (`frontend/`)

**Ran `npm audit fix`:**
* Updated versions in `package-lock.json`

* **Added the following "hello world" Vue files:**
* `src/views/pages/Wails.vue`
* `src/components/Greet.vue`

NOTE: These were adapted from the default wails `vue` template and modified to use the Sakai framework:
* Removes use of custom styling and Nunito font
* Uses tailwind for styling
* Supports Lite/Dark modes
* Uses default (Lato) fonts

**Added Wails universal logo:**
* `src/assets/images/wails-logo-universal.png`

**Added `src/components/URL.vue`:**
* Use in place of `<a>` to open URLs via Wails' `BrowserOpenURL` functionality

**Converted the following to go templates:**
* `index.tmpl.html`
  * Set `title` to be `{{.ProjectName}}`
* `package.tmpl.json`
  * Set `name` to be `{{.ProjectName}}`
* `package-lock.tmpl.json`
  * Set `name` to be `{{.ProjectName}}`

**Modified `vite.config.js`:**
* Renamed from `vite.config.mjs` to `vite.config.js` as the project has been tagged as `module` type
* Added the required HMR configuration for Vite 5 + Wails:
  * `server.hmr.host    : "localhost"`
  * `server.hmr.protocol: "ws"`
  * **note:** Likely not needed if you downgrade to Vite 4-
  * **note:** May not be needed for Vite 6+
* Added note on disabling HMR (referencing `wails-nohmr.json`)

**Modified `package.json`:**
* Added `"type": "module"` to be specific about the project's intended default js type
* Added + Reorganized scripts:
  * `"clean-dist"     : "rm -rf dist && mkdir dist && touch dist/index.html"`
  * `"lint"           : "eslint --fix . --ext .vue,.js,.jsx,.cjs,.mjs --fix --ignore-path .gitignore"`
  * `"dev"            : "vite dev"`
  * `"dev-build"      : "vite build -m development --minify false --logLevel info"`
  * `"dev-build-watch": "vite build --watch --emptyOutDir false -m development --minify false --logLevel info"`
  * `"preview"        : "vite preview"`
  * `"build"          : "vite build"`
  * `"build-watch"    : "vite build --watch --emptyOutDir false"`
  * `"vite"           : "vite"`

**Modified `src/router/index.js`**
* Switched history tracker from `createWebHistory()` to `createWebHashHistory(import.meta.env.BASE_URL)`
* Changed dashboard route from `/` to `/pages/dashboard`
* Added new root route `/` to point to `Wails.vue` 

**Modified `Dashboard.vue`:**
* Moved from `src/views` to `src/views/pages`

**Modified `index.html`:**
* Changed `title` to be templated from `{{.ProjectName}}`
* Removed `favicon` element
* Changed Lato fonts import to local `/src/assets/fonts/lato.css`

**Modified `src/layout/AppTopbar.vue`:**
* Added wails logo next to Sakai logo in the top bar

**Modified `src/layout/AppMenue.vue`:**
* Changed `Home` item label from `Dashboard` to `Welcome`
* Added `Dashboard` item as first item in `Pages` section
* Moved `Crud` item to be under `Dashboard`
* Removed `View Source` item

**Modified `src/layout/AppMenuItem.vue`:**
* Defer URL menu items to Wails' `BrowserOpenURL` functionality

**Modified `src/layout/AppFooter.vue`:**
* Changed footer text to "Wails + PrimeVue + Sakai by TekWizely"
* Changed link from PrimeVue.org to template project page
* Modified link to use new `URL` component

**Modified `src/views/pages/Documentation.vue`:**
* Modified `create-vue` link to use new `URL` component
* Removed `Get Started` content regarding cloning/running Sakai as a standalone project
* Removed `Add Sakai-Vue to a Nuxt Project` section

**Added Sakai [Lato fonts [cdnfonts]](https://www.cdnfonts.com/lato.font):**
* `src/assets/fonts/lato.css`
* `src/assets/fonts/lato/OFL.txt`
* `src/assets/fonts/lato/Lato-BoldItalic.woff`
* `src/assets/fonts/lato/Lato-SemiBoldItalic.woff`
* `src/assets/fonts/lato/Lato-Hairline.woff`
* `src/assets/fonts/lato/Lato-BlackItalic.woff`
* `src/assets/fonts/lato/Lato-Italic.woff`
* `src/assets/fonts/lato/Lato-Black.woff`
* `src/assets/fonts/lato/Lato-HairlineItalic.woff`
* `src/assets/fonts/lato/Lato-ExtraBold.woff`
* `src/assets/fonts/lato/Lato-ExtraBoldItalic.woff`
* `src/assets/fonts/lato/Lato-ExtraLightItalic.woff`
* `src/assets/fonts/lato/Lato-Bold.woff`
* `src/assets/fonts/lato/Lato-ThinItalic.woff`
* `src/assets/fonts/lato/Lato-LightItalic.woff`
* `src/assets/fonts/lato/Lato-Regular.woff`
* `src/assets/fonts/lato/Lato-SemiBold.woff`
* `src/assets/fonts/lato/Lato-ExtraLight.woff`
* `src/assets/fonts/lato/Lato-Medium.woff`
* `src/assets/fonts/lato/Lato-Thin.woff`
* `src/assets/fonts/lato/Lato-MediumItalic.woff`
* `src/assets/fonts/lato/Lato-Light.woff`

**Modified `package-lock.json`:**
* Changes as part of running `npm audit fix`

**Modified `postcss.config.cjs`:**
* Renamed from `postcss.config.js` to `postcss.config.cjs` to match ints js type

**Modified `.eslintrc.cjs`:**
* Simple reformat to put `extends` entries on separate lines

**Modified `src/service/CustomerService.js`:**
* Removed `getCustomers(params)` function
  * Fetches from the web
  * Not actually used by the demo code

**Added `dist/index.html`:**
* A place-holder to avoid IDE warnings with `go:embed`
* Replaced during the build process

**Removed the following files/folders:**
* `CHANGELOG.md`
* `LICENSE.md` (matches LICENSE in project root)
* `README.md`
* `public/favicon.ico`
* `.vscode/`

**Removed the following entries from `.gitignore`:**
* `.idea`
* `.DS_Store`
* `**/.DS_Store`

## License

The `tekwizely/wails-template-primevue-sakai` project is released under the MIT License, matching both the Wails and Sakai licenses. See LICENSE file.
