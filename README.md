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

## Contents

- [About](#about)
  - [Structure](#structure)
  - [Chakra UI](#️chakra-ui)
  - [Plop.js](#bake-new-components-pages-etc-with-plopjs)
  - [Other Features](#other-features)
- [Getting Started](#getting-started)
- [Customizing](#customizing)
- [License](./LICENSE)

## About

Banquet is an opinionated starter + boilerplate for creating [Next.js](https://nextjs.org/) projects. There are _many_ great starter templates out there for settings up a web development project, but Banquet front-loads more tools and configurations as defaults with less tinkering required.

Banquet comes with the following out of the box:

- Modern React: [Next.js](https//nextjs.org) + [TypeScript](https://www.typescriptlang.org/)
- Robust UI: [Chakra UI](https://chakra-ui.com/) + [React Icons](https://github.com/react-icons/react-icons) included
- Flexible styling: Support for [CSS Modules](https://github.com/css-modules/css-modules) with SCSS/SASS
- Testing defaults: [Jest](https://github.com/facebook/jest) + [React Testing Library](https://github.com/testing-library/react-testing-library)
- Customizable templating: [Plop.js](https://github.com/plopjs/plop) code generator
- CI/CD: Pre-commit and pre-push hooks with [Husky](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged)

### Structure

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

### Chakra UI + React Icons

Banquet also includes [Chakra UI](https://chakra-ui.com/) and [React Icons](https://github.com/react-icons/react-icons) for flexible, accessible, and easy to use UI components and hooks. And with Chakra’s theme provider, it’s easy to define default colors, sizes, fonts, etc., and access them from anywhere in your project.

[Read more about using Chakra in Banquet](docs/chakra.md)

### Plop.js: Bake new components, pages, etc.

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

## Getting Started

Clone the repo and install the dependencies:

```bash
git clone https://github.com/timmybytes/banquet.git your-project-name
cd your-project-name
yarn
```

To run the development server on port 3000:

```bash
yarn dev
# or use yarn dev -p 3001 etc for custom port
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing Banquet

### Adding your own metadata

Use the various objects in [`SiteData`](src/data/SiteData) to update Banquet with your own information, including data for site metadata, `header` and `footer` links, and information for the homepage’s `Hero` component.

The `CustomHead` component adds a variety of `meta` tags and [Open Graph](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/) information for personalizing Banquet for your own needs, including link sharing data and images, favicons, icons, and more.

### Components and basic config

Banquet follows a familiar React project structure, with a few caveats. Most config files are located in the root directory, including those for `jest`, `eslint`, `prettier`, `next`, and `typescript`, among other. The `src` directory holds `assets`, `components`, `data`, `pages`, and `theme` files. You can rearrange these however you like, but keep in mind because Banquet is a Next app, [there are specific ways in which the `pages` directory files must be laid out](https://nextjs.org/docs/basic-features/pages).

In most cases, components are grouped together with a default index and test file.

> Note that for tests, _these are not intended to be left as-is_, but rather are simply basic templates for you to add more specific tests as you customize the app. The default tests will simply check to make sure the associated component renders.

Component directories with default index files serve as a way to easily import related components elsewhere in the app. For example, the `Layout` component directory includes many simple core layout elements that are slightly tweaked with Chakra UI (`Section`, `Article`, `Main`, etc). Since these are all exported from the `Layout/index.ts` file, they can be imported together like this:

```tsx
import { Main, Article, Section, Layout } from '@components/Layout'
```

Similarly, Banquet uses path aliasing to make it easier to resolve paths as your app grows, allowing for you to import from `@components/SomeComponent` instead of `../../../../components/SomeComponent`. Supported aliases are configured in `tsconfig.json`, and by default include:

```json
"paths": {
      "@components/*": ["src/components/*"],
      "@data/*": ["src/data/*"],
      "@pages/*": ["src/pages/*"],
      "@public/*": ["public/*"],
      "@test/*": ["test/*"],
      "@styles/*": ["src/styles/*"],
      "@theme/*": ["src/theme/*"],
      "@utils/*": ["src/utils/*"],
      "@/*": ["src/*"]
    }
```

> Note that for Jest+React Testing Library tests, however, if you’re using path aliasing in your test file, you’ll also need to add that alias to `jest.config.js` as well.

### NVM and Node Releases

Banquet includes a `.nvmrc` file to enforce using the active [LTS of Node](https://nodejs.org/en/about/releases/). This ensures full functionality of all features and configurations.

### Chakra UI and global theming

Banquet uses Chakra UI as a component library with a few presets. [Theming with Chakra is straightforward](https://chakra-ui.com/docs/theming/customize-theme), and can be updated with your own preferences. In `src/pages/_app.tsx`, the Chakra Provider wraps the overall app (as well as a custom `Layout` component that will wrap all pages by default), and aside from[Chakra’s own defaults](https://chakra-ui.com/docs/theming/theme), adds a few settings via a `theme` object imported from `src/theme/index.ts`.

Theme files, [per Chakra’s own recommendations](https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project), are split into `colors.ts`, `fonts.ts`, etc., to allow for scalability, but exported together from the theme `index.ts` file. These include some custom global styles, fonts, and colors for Banquet’s own design scheme, but you can simply substitute your own preferences here.

### Fonts

Banquet uses [`@fontsource`](https://fontsource.org/docs/introduction) for efficiently self-hosting open source fonts. By default it includes Inter and Playfair Display. You can add your own preferred fonts from ones supported by `fontsource` with `yarn add @fontsource/some-font`, update the `src/theme/fonts.ts` file, and import the appropriate font-weights into `src/pages/_document.tsx`.

### Plop.js: Bake new components, pages, etc.

Banquet comes with a `bake` command to invoke a CLI code generator called [Plop](~https://plopjs.com~). You can use it to add new components, tests, pages, etc., based on the included [Handlebars.js-style](~https://handlebarsjs.com/guide/~) templates—or create ones yourself!

The included templates can generate:

- A new `tsx` component with accompanying `.test`, `.scss`, and `index.ts` files inside their own directory in `src/components`
- _Only_ a `.tsx` component inside its own directory in `src/components`
- A new page inside `src/pages`

To use it, run `yarn bake` from the terminal, and choose from the options available, or [read more about using Plop in Banquet](~docs/plop.md~) and make your own custom templates.

### Git Hooks with Husky

Banquet also comes with pre-commit and pre-push hooks ready to use via Husky and [`lint-staged`](~https://github.com/okonet/lint-staged~). These are checks and commands run against staged code when you’re committing and pushing changes, respectively.

Current defaults include linting with ESLint, formatting with Prettier, type checking with `tsc`, and testing any changed files, but you can add whatever customizations you like.

## License

Banquet is offered under an [MIT license](./LICENSE.md).
