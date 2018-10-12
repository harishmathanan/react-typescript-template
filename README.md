# Project Template for building apps with React and TypeScript

Initialise project `npm init`.

Add webpack and webpack-cli to the project `yarn add --dev`.

Add the following npm scripts to the package.json file.

    "scripts": {
      "start": "webpack --mode development",
      "build": "webpack --mode production"
    }

Create a webpack.config.js file in the root directory.

Begin configuring the webpack file.

    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'public/js/'),
        filename: 'bundle.js'
      },
      resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
      }
    };

Update the npm script to point to the webpack config file.

     "scripts": {
      "start": "webpack --mode development --config webpack.config.js",
      "build": "webpack --mode production --config webpack.config.js"
    }

**Note:** The `--config` flag is only required if you're using webpack-cli and dont have webpack installed globally.

Add typescript and awesome-typescript-loader to the project `yarn add --dev typescript awesome-typescript-loader`.

Update the webpack config file to include rule for transpiling TypeScript files (.tsx, .ts).

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/
        }
      ]
    }

In order to start using TypeScript, a few configuration options and rules need to be defined first.

Create a tslint.json file in the root directory, and add the below.

    {
      "extends": ["tslint:recommended"],
      "rules": {
        "quotemark": [ true, "single", "jsx-double" ],
        "object-literal-sort-keys": false,
        "ordered-imports": false
      },
      "max-line-length": [ true, 240 ],
      "linterOptions": {
        "exclude": [
          "node_modules"
        ]
      }
    }

Next create a tsconfig.json file in the root directory, and add the below.

    {
      "compilerOptions": {
        "outDir": "./public/js/",
        "baseUrl": ".",
        "target": "es5",
        "module": "es6",
        "allowJs": true,
        "jsx": "react",
        "moduleResolution": "node",
        "alwaysStrict": true,
        "noImplicitThis": true,
        "noImplicitAny": true,
        "noImplicitReturns": true,
        "forceConsistentCasingInFileNames": true
      },
      "exclude": [
        "node_modules"
      ]
    }

Add css-loader and style-loader to the project `yarn add --dev css-loader style-loader`.

Update the webpack config file to include rule for transpiling stylesheet files (.css).

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/
        }
      ]
    }

&nbsp;

## Optional:

### State Management
- redux
- react-redux

### Routing
- react-router-dom

### Styling
- office-ui-fabric (Microsoft)

### Icons
- react-icons

### Server
- express
