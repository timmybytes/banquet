// Define location of your template files (relative to this file)
const TEMPLATE_DIR = './templates'

// Define the template files that will be used for each generator
const PLOP_COMPONENT = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
  templateFile: `${TEMPLATE_DIR}/Component/Component.tsx.hbs`,
}

const PLOP_COMPONENT_SINGLE = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
  templateFile: `${TEMPLATE_DIR}/Component/ComponentSingle.tsx.hbs`,
}

const PLOP_COMPONENT_TEST = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
  templateFile: `${TEMPLATE_DIR}/Component/Component.test.tsx.hbs`,
}

const PLOP_COMPONENT_INDEX = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/index.ts',
  templateFile: `${TEMPLATE_DIR}/Component/index.ts.hbs`,
}

const PLOP_COMPONENT_SCSS = {
  type: 'add',
  path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
  templateFile: `${TEMPLATE_DIR}/Component/Component.module.scss.hbs`,
}

const PLOP_PAGE = {
  type: 'add',
  path: 'src/pages/{{lowerCase name}}.tsx',
  templateFile: `${TEMPLATE_DIR}/Page/Page.tsx.hbs`,
}

// Define the files that can be generated (CLI menu)
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
            name: 'TSX Component with test and index file (no SCSS)',
            value: 'basic',
          },
          {
            name: 'TSX Component only',
            value: 'single',
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
          PLOP_COMPONENT,
          PLOP_COMPONENT_TEST,
          PLOP_COMPONENT_INDEX,
          PLOP_COMPONENT_SCSS
        )
      } else if (data.type === 'basic') {
        actions.push(
          PLOP_COMPONENT_SINGLE,
          PLOP_COMPONENT_TEST,
          PLOP_COMPONENT_INDEX
        )
      } else if (data.type === 'single') {
        actions.push(PLOP_COMPONENT_SINGLE)
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
        actions.push(PLOP_PAGE)
        return actions
      },
    })
}
