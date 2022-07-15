<div align="center">
	<a href="https://eoscostarica.io">
		<img src="https://raw.githubusercontent.com/eoscostarica/.github/master/.github/workflows/images/eos-costa-rica-logo.png" width="300">
	</a>

![](https://img.shields.io/github/license/eoscostarica/full-stack-boilerplate) ![](https://img.shields.io/badge/code%20style-standard-brightgreen.svg) ![](https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg) ![](https://img.shields.io/twitter/follow/eoscostarica.svg?style=social&logo=twitter) ![](https://img.shields.io/github/forks/eoscostarica/full-stack-boilerplate?style=social)

</div>

# EOSCR Full-Stack Boilerplate

A highly scalable skeleton with best practices, fullstack monorepo containing our front end and backend boilerplates.

- [EOSCR Boilerplate](#eoscr-full-stack-boilerplate)
- [Features](#features)
- [Installation](#installation)
  - [Getting Started](#getting-started)
  - [First Time](#first-time)
  - [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Technical Documentation](#technical-documentation)
  - [Infrastructure Diagram](#infrastructure-diagram)
  - [Technologies Specification](#technologies-specification)
    - [Kubernetes Cluster](#kubernetes-cluster)
    - [Web Application](#web-application)
    - [Backend](#backend)
      - [Hasura GraphQL Server](#hasura-graphql-server)
      - [Hapi REST Server](#hapi-rest-server)
    - [EOSIO Blockchain Technology Integration](#eosio-blockchain-technology-integration)
- [Contributing](#contributing) 
  - [About EOS Costa Rica](#about-eos-costa-rica)

# Features!

This boilerplate features all the latest technologies and practices in the industry.

- Hapi
- Hasura
- React
- Kubernetes
- EOSIO

# Installation

## Getting Started

Some things you need before getting started:

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/es/)
- [docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/)

## First Time

Copy the `.env.example` then update the environment variables according to your needs.

```
cp .env.example .env
```

## Quick Start

1.  Clone this repo using `git clone --depth=1 https://github.com/eoscostarica/full-stack-boilerplate.git <YOUR_PROJECT_NAME>`.
2.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3.  Run `make run` in order to start the project using docker compose.

At this point you can navigate to `http://localhost:3000`.

# File Structure

Within the download you'll find the following directories and files:

```
├── docs
│   └── img
├── hapi
│   └── src
│       ├── config
│       ├── routes
│       ├── services
│       └── utils
├── hasura
│   ├── metadata
│   ├── migrations
│   └── seeds
├── kubernetes
├── utils
├── wallet
│   └── config
└── webapp
    ├── public
    └── src
        ├── components
        │   ├── Footer
        │   ├── Header
        │   ├── Loader
        │   ├── Message
        │   ├── PageTitle
        │   └── Sidebar
        ├── config
        ├── context
        ├── gql
        ├── language
        ├── layouts
        │   └── Dashboard
        ├── routes
        │   ├── About
        │   ├── Help
        │   ├── Home
        │   └── Route404
        ├── theme
        └── utils
```

# Technical Documentation

## Infrastructure Diagram

<p align="center">
  <img src="docs/img/infraNew.png" />
</p>

## Technologies Specification

### Kubernetes Cluster

At EOS Costa Rica, we build software taking into consideration the high availability of the services that can integrate it. For this, we use [Kubernetes](https://kubernetes.io/), which allows isolating modules to reduce the risk of the system collapsing. In the image above, you can take a look at our representation of the architecture we consider to be more suitable for our purposes.

### Web Application

This FullStack Template uses [React.js](https://reactjs.org) as a Frontend Library which together with other tools like [Apollo Client](https://www.apollographql.com/docs/react/), [GraphQL](https://graphql.org/), and [Material UI](https://material-ui.com/) brings a robust solution for building Single Page Applications out of the box.

### Backend

#### Hasura GraphQL Server

[Hasura](https://hasura.io/) technology maps a [PostgreSQL](https://www.postgresql.org/) database and provides a reliable and easy-to-use API. This allows us to focus on critical features of our projects, delegating mechanic CRUD (Create, Read, Update, Delete) operations.
Hasura also enables custom REST handling capabilities with the possibility to integrate a custom REST server, that way we can extend the base CRUD functionalities and build custom business logic.

#### Hapi REST Server

We need to handle REST custom requests coming from the Hasura GraphQL server. For this, we use [hapi.dev](https://hapi.dev/), which is a simple and easy-to-use backend framework.

### EOSIO Blockchain Technology Integration

As a company that delivers EOSIO blockchain-based solutions, we build a template that contains EOSIO integration, specifically [eosjs](https://github.com/EOSIO/eosjs). This allows us to iterate quickly over the more challenging features of our projects.

# Contributing

Please Read EOS Costa Rica's [Open Source Contributing Guidelines](https://developers.eoscostarica.io/docs/open-source-guidelines).

Please report big and small bugs by [opening an issue](https://github.com/eoscostarica/full-stack-boilerplate/issues)

## About EOS Costa Rica

<p align="center">
	<a href="https://eoscostarica.io">
		<img src="https://raw.githubusercontent.com/eoscostarica/.github/master/.github/workflows/images/eos-costa-rica-logo.png" width="300">
	</a>

EOS Costa Rica is an independently-owned, self-funded, bare-metal Genesis block producer that provides a stable and secure infrastructure for EOSIO blockchains. We support open-source software for our community while offering enterprise solutions and custom smart contract development for our clients.

[eoscostarica.io](https://eoscostarica.io)
