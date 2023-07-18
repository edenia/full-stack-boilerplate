<div  align="center">
	<a  href="https://eoscostarica.io">
	<img  src="https://raw.githubusercontent.com/eoscostarica/.github/master/.github/workflows/images/eos-costa-rica-logo.png"  width="300">
</a>
![](https://img.shields.io/github/license/eoscostarica/backend-boilerplate) ![](https://img.shields.io/badge/code%20style-standard-brightgreen.svg) ![](https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg) [![](https://img.shields.io/twitter/follow/eoscostarica?style=social)](https://twitter.com/EOSCostaRica) ![](https://img.shields.io/github/forks/eoscostarica/backend-boilerplate?style=social)
</div>

# EOSIO Frontend Boilerplate

**A highly scalable skeleton with best practices, ideal for React Web App projects quick start**

# Features!

This boilerplate features all the latest tools and practices in the industry.

- _React.js_ - **React 18**✨, React Router 6, React Context
- _TypeScript_ - TypeScript is **JavaScript with syntax for types.**
- _MUI_ - **Material UI v5**✨ React components for faster and easier web development
- _Graphql_ - **Graphql Clients**✨ A query language for your API
- _UAL hook_ - **Custom hook created by Edenia Labs**✨ A wrapper for Universal Authenticator Library (UAL Core for short) to allowing apps to easily use different auth providers (optional)
- _Lint_ - ESlint find and fix problems in your JavaScript code
- _Styles_ - Material-UI Theme (customizable)
- _i18n_ - react-i18next is a powerful internationalization framework

## Installation

### Before to start

Somethings you need before getting started:

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/es/)
- [yarn](https://yarnpkg.com/)

### First time

Copy the `.env.example` then update the environment variables according to your needs

```
cp .env.example .env
```

_If you want to the boilerplate using UAL login integration, please make sure that `REACT_APP_USE_UAL` env variable is set as true._

## Development

### Quick start

1. Clone this repo using `git clone --depth=1 https://github.com/eoscostarica/webapp-boilerplate.git <YOUR_PROJECT_NAME>`
2. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3. Run `yarn` in order to install dependencies.
   _At this point you can run `yarn start` to see the example app at `http://localhost:3000`._

## File Structure

Within the download you'll find the following directories and files:

```
eoscrwebappboilerplate/
├── public
│ ├── index.html
│ └── manifest.json
│
├── src
│ ├── components
│ ├── config
│ ├── context
│ ├── gql
│ ├── hooks
│ ├── language
│ ├── layouts
│ ├── routes
│ ├── theme
│ ├── types
│ ├── utils
│ ├── App.tsx
│ ├── index.tsx
│ ├── graphql.ts
│ └── i18n.ts
│
├── .babelrc.js
├── .dockerignore
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── .config-overrides.js
├── docker-compose.yml
├── Dockerfile
├── LICENSE
├── nginx.conf
├── package.json
├── README.md
└── tsconfig.json
```

## Contributing

Please Read EOS Costa Rica's [Open Source Contributing Guidelines](https://developers.eoscostarica.io/docs/open-source-guidelines).

Please report bugs big and small by [opening an issue](https://github.com/eoscostarica/webapp-boilerplate/issues)

## About EOS Costa Rica

<span  align="center">

<a  href="https://eoscostarica.io"><img  width="300"  alt="image"  src="https://raw.githubusercontent.com/eoscostarica/.github/master/.github/workflows/images/eos-costa-rica-logo.png"></img></a>

[![Twitter](https://img.shields.io/twitter/follow/EOSCostaRica?style=for-the-badge)](https://twitter.com/EdeniaWeb3)

[![Discord](https://img.shields.io/discord/946500573677625344?color=black&label=Discord&logo=discord&logoColor=white&style=for-the-badge)](https://discord.gg/YeGcF6QwhP)

EOS Costa Rica is an independently-owned, self-funded, bare-metal Genesis block producer that provides stable and secure infrastructure for the EOS mainnet. We support open source software for our community while offering enterprise solutions and custom smart contract development for our clients.

</span>
