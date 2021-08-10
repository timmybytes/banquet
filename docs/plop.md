# 🧁 Baking with Plop.js

**Main Course** comes with a CLI code generator called [Plop](https://plopjs.com). You can use it to add new components, tests, pages, etc., based on the included [`.hbs`](https://handlebarsjs.com/guide/) templates—or ones you create yourself!

The included templates can generate:

- A new `tsx` component with accompanying `.test`, `.scss`, and `index.ts` files inside their own directory in `src/components`
- _Only_ a `.tsx` component inside its own directory in `src/components`
- A new page inside `src/pages`

## Getting Started

To create new components and pages, run `yarn bake` from the terminal.

### Example Component Generation

![Plop CLI](./plop1.svg)

1. Choose `Component` from the menu, and enter a name (if none is provided, a randomized default will be generated)

![Plop CLI](./plop2.svg)

2. Choose `TSX Component with SCSS module, test, and index file` from the menu

![Plop CLI](./plop3.svg)

3. Plop will add a new subdirectory for the component and its related files

![Plop CLI](./plop4.svg)

Follow the same initial steps to create a standalone component or a new page.

## Customize

The included templates are meant to help save you time by creating from defaults. But these can (and often should) be customized to your needs as you build your application.

To add your own custom templates and commands, edit the [`templates`](./templates) folder and [`plopfile.js`](./plopfile.js), or read [Plop’s documentation](https://plopjs.com/documentation/). Plop uses [`Handlebars.js`](https://handlebarsjs.com/) for templating, which is easy to incorporate into your own templates. Variables to be passed to the templates are defined in the `plopfile`, and passed in handlebars' curly bracket syntax (e.g. `{{ variableName }}`).

The included templates create very basic components with the following structure:

### TSX Component

```tsx
// Component.tsx.hbs template file
import styles from './{{pascalCase name}}.module.scss';

type {{pascalCase name}}Props = {
  children?: React.ReactNode;
}

export const {{pascalCase name}} = ({children}: {{pascalCase name}}Props): React.ReactElement => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};
```

```tsx
// Which is generated as...
import styles from './NewComponent.module.scss'

type NewComponentProps = {
  children?: React.ReactNode
}

export const NewComponent = ({
  children,
}: NewComponentProps): React.ReactElement => {
  return <div className={styles.root}>{children}</div>
}
```

### SCSS Module

```scss
// Component.module.scss.hbs and generated code are the same,
// since no custom name is being passed to the template
@use 'theme' as *;

.root {
}
```

### Jest+React Testing Library Test

```tsx
// Component.test.tsx.hbs template
import { render } from '@test/test-utils';
import { {{pascalCase name}} } from './{{pascalCase name}}';

describe('{{pascalCase name}}', () => {
  it('should render', () => {
    render(
      <{{pascalCase name}} />);
    });
});
```

```tsx
// Which is generated as...
import { render } from '@test/test-utils'
import { NewComponent } from './NewComponent'

describe('NewComponent', () => {
  it('should render', () => {
    render(<NewComponent />)
  })
})
```

### Index File

```ts
// index.ts.hbs template
export * from './{{pascalCase name}}'
```

```ts
// Which is generated as...
export * from './NewComponent'
```
