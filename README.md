<!-- Header Content -->

<h1 align="center">
  <img src="/public/text-logo.png" width="100%" alt="Banquet Text Logo" />
</h1>

<div align="center">
  <p>A gourmet Next.js starter + boilerplate</p>
</div>

<div align="center">
  <img alt="Netlify" src="https://img.shields.io/netlify/8fda250e-338f-4ad0-b887-dbf08ff7781e">
  <img alt="GitHub" src="https://img.shields.io/github/license/timmybytes/banquet">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/timmybytes/banquet">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/timmybytes/banquet">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/timmybytes/banquet">
  <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/timmybytes/banquet">
</div>

<!-- Main Content -->

## 🍛 Contents

- [About](#about)
  - [Structure](#structure)
  - [Chakra UI](#️chakra-ui)
  - [Plop.js](#bake-new-components-pages-etc-with-plopjs)
  - [Other Features](#other-features)
- [Getting Started](#getting-started)
- [Customizing](#customizing)
- [License](./LICENSE)

## 🥘 About

Banquet is an opinionated starter + boilerplate for creating [Next.js](https://nextjs.org/) projects. There are _many_ great starter templates out there for settings up a web development project, but Banquet front-loads more tools and configurations as defaults with less tinkering required.

Banquet comes with the following out of the box:

- Modern React: [Next.js](https//nextjs.org) + [TypeScript](https://www.typescriptlang.org/)
- Robust UI: [Chakra UI](https://chakra-ui.com/) + [React Icons](https://github.com/react-icons/react-icons) included
- Flexible styling: Support for [CSS Modules](https://github.com/css-modules/css-modules) with SCSS/SASS
- Testing defaults: [Jest](https://github.com/facebook/jest) + [React Testing Library](https://github.com/testing-library/react-testing-library)
- Customizable templating: [Plop.js](https://github.com/plopjs/plop) code generator
- CI/CD: Pre-commit and pre-push hooks with [Husky](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged)

### 🍱 Structure

Banquet follows a common React project style:

```bash
public/
src/
  assets/
  components/
    SomeComponent/
      SubComponent/
      SomeComponent.tsx
      SomeComponent.test.tsx
      SomeComponent.module.scss
      index.ts
  pages/
    _app.tsx
    index.tsx
  styles/
    _globals.scss
  utils/
  ...
```

This differs a little from the initial Next.js structure, which doesn't use a `src` directory by default, but is still [fully compatible with all of Next's features](https://nextjs.org/docs/advanced-features/src-directory).

Components are kept in their own directories with related files and a root `index.ts` for easy imports/exports, and when creating new components and pages with [`yarn bake`](./docs/plop.md), the same structure is followed by default.

Banquet also uses a basic custom `Layout` component to wrap all pages, and includes a `Header/Nav` and `Footer` component. When creating new pages, you can forgo having to manually add a header/footer, and simply add your desired page content; it will be automatically wrapped with the given layout.

### ⚡️ Chakra UI + React Icons

Banquet also includes [Chakra UI](https://chakra-ui.com/) and [React Icons](https://github.com/react-icons/react-icons) for flexible, accessible, and easy to use UI components and hooks. And with Chakra’s theme provider, it’s easy to define default colors, sizes, fonts, etc., and access them from anywhere in your project.

[Read more about using Chakra in Banquet](docs/chakra.md)

### 🧁 Plop.js: Bake new components, pages, etc.

Banquet comes with a `bake` command to invoke a CLI code generator called [Plop](https://plopjs.com). You can use it to add new components, tests, pages, etc., based on the included [Handlebars.js-style](https://handlebarsjs.com/guide/) templates—or create ones yourself!

The included templates can generate:

- A new `tsx` component with accompanying `.test`, `.scss`, and `index.ts` files inside their own directory in `src/components`
- _Only_ a `.tsx` component inside its own directory in `src/components`
- A new page inside `src/pages`

To use it, run `yarn bake` from the terminal, and choose from the options available, or [read more about using Plop in Banquet](docs/plop.md) and make your own custom templates.

### Other Features

#### Path Aliasing

Banquet comes pre-configured with path aliasing for simplified imports during development. From `tsconfig.json`, you can customize or add to the predefined paths:

```json
"@components/*": ["src/components/*"],
"@pages/*": ["src/pages/*"],
"@hooks/*": ["hooks/*"],
"@public/*": ["public/*"],
"@test/*": ["test/*"],
"@styles/*": ["src/styles/*"],
"@utils/*": ["src/utils/*"],
"@/*": ["src/*"]
```

When importing components, hooks, etc., use the aliases to avoid having to resolve full paths. For example:

```tsx
// ExampleComponent.tsx

import { SignInPopup } from ‘@components/SignInPopup’;

export const SignInWrapper = () => ( <SignInPopup /> );

```

#### CI Checks With Husky

Banquet also comes with pre-commit and pre-push hooks ready to use via Husky and [`lint-staged`](https://github.com/okonet/lint-staged). These are checks and commands run against staged code when you’re committing and pushing changes, respectively.

Current defaults include linting with ESLint, formatting with Prettier, and type checking with `tsc`, but you can add whatever customizations you like.

## 🍽 Getting Started

Clone the repo and install the dependencies:

```bash
git clone https://github.com/timmybytes/banquet.git
cd banquet
yarn
```

To run the development server on port 3000:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing

Update site-wide variables and data from `src/components/Meta/SiteData`. Here’s part of the `SITE_DATA` object, where you can add your own branding/copy for things like link-sharing previews and meta tags:

```tsx
export const SITE_DATA = {
  title: 'Banquet',
  description: 'A gourmet Next.js boilerplate',
  author: 'Timothy Merritt',
  authorHandle: '@timmybytes', // For Twitter link cards
  authorHomepage: 'https://timmybytes.com',
  color: '#e9c46a',
  // etc.
}
```

This data will populate throughout the site, and can be easily imported into new components/pages with `import {SITE_DATA} from ‘@components/Meta`

## 📄 License

Banquet is offered under an [MIT license](./LICENSE.md).
