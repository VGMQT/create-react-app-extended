# Create React App eXtended v.1.3.0

> "react": "^17.0.1"

### Content

**[How to launch](#how-to-launch)**
**[What is this?](#what-is-this)**
**[Pre-commit](#pre-commit)**
**[Dependencies](#dependencies)**
**[License](#license)**

## How to launch:

1. `git clone`
2. `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git` to update the origin remote with your own repository / `git remote rm origin` to remove the origin remote
3. `yarn` / `npm i`
4. `yarn start` / `npm start`
5. Navigate to your localhost address
   (default is http://localhost:3000/)

For more info visit the [original CRA repository](https://github.com/facebook/create-react-app).

P.S. Don't forget to remove extra info like keywords, repository, etc. from `package.json`.

## What is this?

_Create React App eXtended_ or _CRAX_ is an opinionated version of [Create React App](https://github.com/facebook/create-react-app).

It contains the whole [CRA](https://github.com/facebook/create-react-app) +

- [CSS Modules](https://github.com/css-modules/css-modules) implementation
- Basic styles adjustment: `"normalize.css": "^8.0.1"` and `./src/styles/misc`
- Set of SCSS/Sass mixins and variables in `./src/styles/includes`
- Pre-configured and customizable [Stylelint](https://stylelint.io/), [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/)
- Pre-commit feature with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- [ScrollToTop function](https://reacttraining.com/react-router/web/guides/scroll-restoration) that does not include hash navigation (for that, try [React Router Hash Link](https://github.com/rafrex/react-router-hash-link))
- [uniqid](https://github.com/adamhalasz/uniqid)
- `jsconfig.json`, that includes [absolute imports](https://create-react-app.dev/docs/importing-a-component/#absolute-imports)

## Pre-commit

_CRAX_ has a pre-commit script, based on [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). It looks like this:

```
"lint-staged": {
  "src/**/*.{js,jsx}": [
    "pretty-quick --pattern './src/**/*.{js,jsx}'",
    "eslint './src/**/*.{js,jsx}' --fix"
  ],
  "src/**/*.{scss,sass,css}": [
    "stylelint './src/**/*.{scss,sass,css}' --fix"
  ]
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged && yarn build && git add ."
  }
}
```

And it can be configured in any preferrable way. Enjoy!

## Dependencies

You **should** `yarn upgrade --latest` / `npm update && npm audit fix -f` as _CRAX_ will always be ok working with the latest versions of the dependencies, so it is **strongly recommended**. If anything goes wrong, visit the [original CRA repository](https://github.com/facebook/create-react-app) for explanations.

```
"dependencies": {
  "normalize.css": "^8.0.1",
  "react": "^17.0.1",
  "react-app-polyfill": "^2.0.0",
  "react-dom": "^17.0.1",
  "react-router-dom": "^5.2.0",
  "react-scripts": "4.0.0"
},
"devDependencies": {
  "css-loader": "^5.0.0",
  "eslint-config-airbnb": "^18.2.0",
  "eslint-config-prettier": "^6.15.0",
  "eslint-plugin-import": "^2.22.1",
  "eslint-plugin-jsx-a11y": "^6.4.1",
  "eslint-plugin-prettier": "^3.1.4",
  "eslint-plugin-react": "^7.21.5",
  "husky": "^4.3.0",
  "lint-staged": "^10.5.1",
  "node-sass": "^5.0.0",
  "prettier": "^2.1.2",
  "pretty-quick": "^3.1.0",
  "stylelint": "^13.7.2",
  "stylelint-config-standard": "^20.0.0",
  "stylelint-order": "^4.1.0"
},
```

## License

Copyright © 2019 - 2020, based on Create React App by Facebook, Inc.

Licensed under the MIT license.
