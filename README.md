
## wails-template-primevue-sakai 

A Wails starter for using Go with PrimeVue's Sakai application template.

* [Go](https://go.dev/)
* [Wails](https://wails.io/)
* [Vue](https://vuejs.org/)
* [PrimeVue](https://primevue.org/)
* [Sakai Application Template](https://sakai.primevue.org/)

## Use

```sh
wails init -n projectname -t https://github.com/TekWizely/wails-template-primevue-sakai
```

## Live Development

To run in live development mode, run `wails dev` in the project directory. In another terminal, go into the `frontend`
directory and run `npm run dev`. The frontend dev server will run on http://localhost:34115. Connect to this in your
browser and connect to your application.

## Building

To build a redistributable, production mode package, use `wails build`.

## Version Info

This template was built and tested using:

* **Wails** _v2.10.1_
* **Sakai** _v4.3.0_
* **Go** _v1.24.1_
* **Node** _v23.11.0_

## Changes from Original Sources

### Wails (`/`)

* Added a starter `.gitignore`
* Moved the `Greet()` function into it own file, `greet.go`
* Changed Mac TitleBar property `TitlebarAppearsTransparent` from `true` to `false`
* Disabled App Properties `MaxWidth` and `MaxHeight`

### Sakai (`frontend/`)

**Added the following "hello world" Vue files:**
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
* `src/assets/fonts/lato.css`11
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
