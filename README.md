<!-- Header Content -->

<h1 align="center">
  <img src="/public/assets/text-logo.png" width="100%" alt="Banquet Text Logo" />
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

## About

Banquet is an opinionated starter + boilerplate for creating [Next.js](https://nextjs.org/) projects. There are _many_ great starter templates out there for settings up a web development project, but Banquet front-loads many useful tools and configurations as defaults with less tinkering required.

Banquet comes with the following out of the box:

- Modern React developement: [Next.js](https//nextjs.org) + [TypeScript](https://www.typescriptlang.org/)
- Robust UI library: [Chakra UI](https://chakra-ui.com/) + [React Icons](https://github.com/react-icons/react-icons) included
- Flexible styling: Support for [CSS Modules](https://github.com/css-modules/css-modules) with SCSS/SASS and/or inline-styling with Chakra
- Testing defaults: [Jest](https://github.com/facebook/jest) + [React Testing Library](https://github.com/testing-library/react-testing-library)
- Customizable templating: [Plop.js](https://github.com/plopjs/plop) code generator
- Pre-commit and pre-push hooks with [Husky](https://github.com/typicode/husky) and [`lint-staged`](https://github.com/okonet/lint-staged), including linting, formatting, type checking, and testing

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

Use the various objects in [`SiteData`](./src/data/SiteData.tsx) to update Banquet with your own information, including data for site metadata, `header` and `footer` links, and information for the homepage’s `Hero` component.

The `CustomHead` component adds a variety of `meta` tags and [Open Graph](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/) information for personalizing Banquet for your own needs, including link sharing data and images, favicons, icons, and more.

### Components and basic config

Banquet follows a familiar React project structure, with a few caveats. Most config files are located in the root directory, including those for `jest`, `eslint`, `prettier`, `next`, and `typescript`, among others. The `src` directory holds `assets`, `components`, `data`, `pages`, and `theme` files. You can rearrange these however you like, but keep in mind because Banquet is a Next app, [there are specific ways in which the `pages` directory files must be laid out](https://nextjs.org/docs/basic-features/pages).

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

Banquet uses Chakra UI as a component library with a few presets. [Theming with Chakra is straightforward](https://chakra-ui.com/docs/theming/customize-theme), and can be updated with your own preferences. In `src/pages/_app.tsx`, the Chakra Provider wraps the overall app (as well as a custom `Layout` component that will wrap all pages by default), and aside from [Chakra’s own defaults](https://chakra-ui.com/docs/theming/theme), adds a few settings via a `theme` object imported from `src/theme/index.ts`.

Theme files, [per Chakra’s own recommendations](https://chakra-ui.com/docs/theming/customize-theme#scaling-out-your-project), are split into `colors.ts`, `fonts.ts`, etc., to allow for scalability, but exported together from the theme `index.ts` file. These include some custom global styles, fonts, and colors for Banquet’s own design scheme, but you can simply substitute your own preferences here.

[Read more about using Chakra in Banquet](docs/chakra.md)

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
