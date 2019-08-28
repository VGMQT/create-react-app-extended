# Create React App eXtended v.1.0.0

> "react": "^16.9.0"

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

P.S. Don't forget to remove extra info like keywords, repository and etc. from `package.json`.

## What is this?

_Create React App eXtended_ is an opinionated (a bit) version of [Create React App](https://github.com/facebook/create-react-app).

It contains the whole [CRA](https://github.com/facebook/create-react-app) +

- [CSS Modules](https://github.com/css-modules/css-modules) implementation
- Basic styles adjustment: `"normalize.css": "^8.0.1"` and `./src/styles/misc`
- Set of SCSS/Sass mixins and variables (a bit) in `./src/styles/includes`
- Pre-configured and customizable [Stylelint](https://stylelint.io/), [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/)
- Pre-commit with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- [uniqid](https://github.com/adamhalasz/uniqid)

## Pre-commit

_CRAX_ has a pre-commit script, based on [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). It looks like this:

```
"lint-staged": {
    "src/**/*.{js,jsx}": [
      "pretty-quick",
      "eslint 'src/**/*.{js,jsx}' --fix"
    ],
    "src/**/*.{scss,sass,css}": [
      "stylelint 'src/**/*.{scss,sass,css}' --fix"
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

You **should** `yarn upgrade --latest` / `npm update && npm audit fix -f` as _CRAX_ will always be ok working with the latest versions of the dependencies, so it is **strongly recommended**. If anything goes wrong, visit [original CRA repository](https://github.com/facebook/create-react-app) for explanations.

```
"dependencies": {
    "normalize.css": "^8.0.1",
    "react": "^16.9.0",
    "react-app-polyfill": "^1.0.2",
    "react-dom": "^16.9.0",
    "react-scripts": "3.1.1",
    "uniqid": "^5.0.3"
},
"devDependencies": {
    "css-loader": "^3.2.0",
    "eslint-config-airbnb": "^18.0.1",
    "eslint-config-prettier": "^6.0.0",
    "eslint-plugin-import": "^2.18.0",
    "eslint-plugin-jsx-a11y": "^6.2.3",
    "eslint-plugin-prettier": "^3.1.0",
    "eslint-plugin-react": "^7.14.2",
    "husky": "^3.0.0",
    "lint-staged": "^9.2.0",
    "node-sass": "^4.12.0",
    "prettier": "^1.18.2",
    "pretty-quick": "^1.11.1",
    "stylelint": "^10.1.0",
    "stylelint-config-standard": "^18.3.0",
    "stylelint-order": "^3.0.1"
}
```

## License

Copyright © 2019, based on Create React App by Facebook, Inc.

Licensed under the MIT license.
