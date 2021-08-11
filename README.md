<!-- Header Content -->

<div align="center">
  <img src="/public/Icon-Dark.svg" width="200px" alt="Next Dish Logo" />
  <h1>Main Course</h1>
</div>

<div align="center">
  <p>A hearty Next.js boilerplate</p>
</div>

<div align="center">
  <img alt="Netlify" src="https://img.shields.io/netlify/8fda250e-338f-4ad0-b887-dbf08ff7781e">
  <img alt="GitHub" src="https://img.shields.io/github/license/timmybytes/main-course">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/timmybytes/main-course">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/timmybytes/main-course">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/timmybytes/main-course">
  <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/timmybytes/main-course">
</div>

<p align="center">
  <sub>🍴 Built with 🍲 by <a href="https://timmybytes.com"target="_blank"rel="noopener noreferrer">Timothy Merritt</a> 🍴</sub>
</p>

<!-- prettier-ignore -->
<p align="center">
  ✨ Currently a work-in-progress ✨
</p>

<!-- Main Content -->

## 🍛 Contents

- [About](#about)
- [Features](#features)
  - [Structure](#structure)
  - [Plop.js](#bake-new-components-pages-etc-with-plopjs)
  - [Chakra UI](#️chakra-ui)
- [Getting Started](#getting-started)
- [License](./LICENSE)

## 🥘 About

🥙 Main Course is an opinionated boilerplate for creating [Next.js](https://nextjs.org/) projects. There are _many_ great starter templates out there for settings up a web development project, but there always seems to be a few things I want that are missing from all of them. Main Course aims to solve this by front-loading more tools and configurations as defaults (without overloading it), with less tinkering required.

It's configured with the following out of the box:

- [Next.js](https//nextjs.org) + [TypeScript](https://www.typescriptlang.org/)
- Support for [CSS Modules](https://github.com/css-modules/css-modules) with SCSS/SASS
- [Jest](https://github.com/facebook/jest) + [React Testing Library](https://github.com/testing-library/react-testing-library)
- [Chakra UI](https://chakra-ui.com/)
- [Plop.js](https://github.com/plopjs/plop) code generator

## 🍡 Features

Main Course is bootstrapped from `create-next-app` with support for TypeScript, (S)CSS Modules, Jest testing, Plop code generation, and Chakra UI.

### 🍱 Structure

Main Course follows a common React project style:

```bash
public/
  images/
  favicon
src/
  assets/
  components/
    SomeComponent/
      SomeComponent.tsx
      SomeComponent.test.tsx
      SomeComponent.module.scss
      index.ts
  pages/
    _app.tsx
    index.tsx
  styles/
    _theme.scss
  utils/
  ...
```

This differs a little from the initial Next.js structure, which doesn't use a `src` directory by default, but is still [fully compatible with all of Next's features](https://nextjs.org/docs/advanced-features/src-directory).

Components are also kept in their own directories with related files, and when creating new components and pages with [`yarn bake`](./docs/plop.md), the same structure is followed by default.

### 🧁 Plop.js: Bake new components, pages, etc.

Main Course comes with a CLI code generator called [Plop](https://plopjs.com). You can use it to add new components, tests, pages, etc., based on the included [`.hbs`](https://handlebarsjs.com/guide/) templates—or create ones yourself!

The included templates can generate:

- A new `tsx` component with accompanying `.test`, `.scss`, and `index.ts` files inside their own directory in `src/components`
- _Only_ a `.tsx` component inside its own directory in `src/components`
- A new page inside `src/pages`

To use it, run `yarn bake` from the terminal, and choose from the options available, or [read more about using Plop in Main Course](docs/plop.md).

### ⚡️ Chakra UI

Main Course also includes [Chakra UI](https://chakra-ui.com/) as a dependency. Main Course uses Chakra because of its flexibility, ease of use, and accessibility. You can use it as a basis for a project theme, customize the Chakra components, or delete it altogether if it isn't useful to you.

## 🍽 Getting Started

Clone the repo and install the dependencies:

```bash
git clone https://github.com/timmybytes/main-course.git
cd main-course
yarn
```

To run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## 📄 License

Main Course is offered under an MIT license.
