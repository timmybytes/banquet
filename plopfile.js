// Define location of your template files (relative to this file)
const TEMPLATE_DIR = './templates'

// Define the files that can be generated
module.exports = plop => {
  plop.setWelcomeMessage('Choose from the menu options below:')
  plop.setGenerator('Component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter a name for the component:',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Select a type:',

        // Create single or multiple files from a template
        choices: [
          {
            name: 'TSX Component with SCSS module, test, and index file',
            value: 'full',
          },
          {
            name: 'TSX Component only',
            value: 'basic',
          },
        ],
      },
    ],

    actions: function (data) {
      // Fallback name for the component if one isn't provided - randomized to avoid duplicates
      if (!data.name) {
        data.name = `Component__${Math.random().toString(36).substr(2, 5)}`
      }

      var actions = []

      if (data.type === 'full') {
        actions.push(
          {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: `${TEMPLATE_DIR}/Component/Component.tsx.hbs`,
          },
          {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
            templateFile: `${TEMPLATE_DIR}/Component/Component.test.tsx.hbs`,
          },
          {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
            templateFile: `${TEMPLATE_DIR}/Component/Component.module.scss.hbs`,
          },
          {
            type: 'add',
            path: 'src/components/{{pascalCase name}}/index.ts',
            templateFile: `${TEMPLATE_DIR}/Component/index.ts.hbs`,
          }
        )
      } else {
        actions.push({
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: `${TEMPLATE_DIR}/Component/Component.tsx.hbs`,
        })
      }

      return actions
    },
  }),
    plop.setGenerator('Page', {
      description: 'Create a new page',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Enter a name for the page:',
        },
      ],
      actions: function (data) {
        // Fallback name for the component if one isn't provided - randomized to avoid duplicates
        if (!data.name) {
          data.name = `Component__${Math.random().toString(36).substr(2, 5)}`
        }

        var actions = []

        actions.push({
          type: 'add',
          path: 'src/pages/{{lowerCase name}}.tsx',
          templateFile: `${TEMPLATE_DIR}/Page/Page.tsx.hbs`,
        })

        return actions
      },
    })

  // Create further generators in the same way, ex:
  // plop.setGenerator('Layout', {
  //   description: 'Create a new layout',
  //   prompts: [
  //     {
  //       type: 'input',
  //       name: 'name',
  //       message: 'Enter a name for the layout',
  //     },
  //   ],
  //   actions: function (data) {
  //     if (!data.name) {
  //       data.name = 'Layout'
  //     }

  //     var actions = []

  //     actions.push({
  //       type: 'add',
  //       path: 'src/layouts/{{lowerCase name}}.tsx',
  //       templateFile: 'templates/Layout/Layout.tsx.hbs',
  //     })

  //     return actions
  //   }
  // })
}
