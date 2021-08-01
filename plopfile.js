module.exports = (plop) => {
  plop.setGenerator("Component", {
    description: "Create a new component with default configuration",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter a name for the component",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/general/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/Component/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/general/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "templates/Component/Component.test.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/general/{{pascalCase name}}/{{pascalCase name}}.module.scss",
        templateFile: "templates/Component/Component.module.scss.hbs",
      },
      {
        type: "add",
        path: "src/components/general/{{pascalCase name}}/index.ts",
        templateFile: "templates/Component/index.ts.hbs",
      },
    ],
  });
  plop.setGenerator("Page", {
    description: "Create a new page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter a name for the page",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/pages/{{lowerCase name}}.tsx",
        templateFile: "templates/Page/Page.tsx.hbs",
      },
    ],
  });
  // TODO: Pages
  //   plop.setGenerator('page', {
  //     description: 'Create a page',
  //     prompts: [
  //       {
  //         type: 'input',
  //         name: 'name',
  //         message: 'What is your page name?',
  //       },
  //     ],
  //     actions: [
  //       {
  //         type: 'add',
  //         path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.js',
  //         templateFile: 'templates/Page/Page.js.hbs',
  //       },
  //       {
  //         type: 'add',
  //         path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.test.js',
  //         templateFile: 'templates/Page/Page.test.js.hbs',
  //       },
  //       {
  //         type: 'add',
  //         path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.module.css',
  //         templateFile: 'templates/Page/Page.module.css.hbs',
  //       },
  //       {
  //         type: 'add',
  //         path: 'src/pages/{{pascalCase name}}/index.js',
  //         templateFile: 'templates/Page/index.js.hbs',
  //       },
  //       {
  //         type: 'add',
  //         path: 'src/pages/index.js',
  //         templateFile: 'templates/injectable-index.js.hbs',
  //         skipIfExists: true,
  //       },
  //       {
  //         type: 'append',
  //         path: 'src/pages/index.js',
  //         pattern: `/* PLOP_INJECT_IMPORT */`,
  //         template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
  //       },
  //       {
  //         type: 'append',
  //         path: 'src/pages/index.js',
  //         pattern: `/* PLOP_INJECT_EXPORT */`,
  //         template: `\t{{pascalCase name}},`,
  //       },
  //     ],
  //   });

  //   plop.setGenerator('service', {
  //     description: 'Create service',
  //     prompts: [
  //       {
  //         type: 'input',
  //         name: 'name',
  //         message: 'What is your service name?',
  //       },
  //     ],
  //     actions: [
  //       {
  //         type: 'add',
  //         path: 'src/services/{{camelCase name}}.js',
  //         templateFile: 'templates/service.js.hbs',
  //       },
  //       {
  //         type: 'add',
  //         path: 'src/services/index.js',
  //         templateFile: 'templates/injectable-index.js.hbs',
  //         skipIfExists: true,
  //       },
  //       {
  //         type: 'append',
  //         path: 'src/services/index.js',
  //         pattern: `/* PLOP_INJECT_IMPORT */`,
  //         template: `import {{camelCase name}} from './{{camelCase name}}';`,
  //       },
  //       {
  //         type: 'append',
  //         path: 'src/services/index.js',
  //         pattern: `/* PLOP_INJECT_EXPORT */`,
  //         template: `\t{{camelCase name}},`,
  //       },
  //     ],
  //   });

  //   plop.setGenerator('hook', {
  //     description: 'Create a custom react hook',
  //     prompts: [
  //       {
  //         type: 'input',
  //         name: 'name',
  //         message: 'What is your hook name?',
  //       },
  //     ],
  //     actions: [
  //       {
  //         type: 'add',
  //         path: 'src/hooks/{{camelCase name}}.js',
  //         templateFile: 'templates/hook.js.hbs',
  //       },
  //       {
  //         type: 'add',
  //         path: 'src/hooks/index.js',
  //         templateFile: 'templates/injectable-index.js.hbs',
  //         skipIfExists: true,
  //       },
  //       {
  //         type: 'append',
  //         path: 'src/hooks/index.js',
  //         pattern: `/* PLOP_INJECT_IMPORT */`,
  //         template: `import {{camelCase name}} from './{{camelCase name}}';`,
  //       },
  //       {
  //         type: 'append',
  //         path: 'src/hooks/index.js',
  //         pattern: `/* PLOP_INJECT_EXPORT */`,
  //         template: `\t{{camelCase name}},`,
  //       },
  //     ],
  //   });
};
