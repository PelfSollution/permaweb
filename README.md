# Epona [![Build Status](https://travis-ci.org/GetEpona/Epona-js.svg?branch=master)](https://travis-ci.org/GetEpona/Epona-js) [![Homepage](https://img.shields.io/badge/homepage-www-brightgreen.svg?style=flat)](http://getepona.com)
## Contribute [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/GetEpona/Epona-js/issues) [![feature requests](https://img.shields.io/badge/feature-requests-blue.svg?style=flat)](https://github.com/GetEpona/Epona-js/issues)
## Community [![Discord](https://img.shields.io/badge/Chat-Discord-purple.svg?style=flat)](https://discord.gg/DrPFqa2) [![Matrix](https://img.shields.io/badge/Chat-Matrix%20&%20Riot-blue.svg?style=flat)](https://riot.im/app/#/room/#epona:getepona.com) [![IRC](https://img.shields.io/badge/IRC-freenode%20%23epona-brightgreen.svg?style=flat)](https://mirc.com)

## Description
Epona is a super fast way to write with productivity shortcuts on IPFS. Draft notes, create markdown files, or share a paste bin fully encrypted without any hassles.

Everything you write is encrypted and you're in control of the keys.
Content can easily be shared to additional nodes so there's no single point of failure.

## Technology
Epona runs on a series of self-hosted nodes. Anyone can be a server. *You are the platform*.
Epona uses [IPFS](https://ipfs.io) for content addressable hashing to make mirroring and mesh networking easy.
We use [Textile](https://textile.io), the best library for distributed web applications.


## Project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and then the build/run configuration was customized with a `craco.config.js` file.

## Available Scripts
In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### `yarn test`
Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`
Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started), and the [Craco project repo](https://github.com/sharegate/craco).

## Textile
[Textile](https://www.textile.io) provides encrypted, recoverable, schema-based, and cross-application data storage built on [IPFS](https://github.com/ipfs) and [libp2p](https://github.com/libp2p). We like to think of it as a decentralized data wallet with built-in protocols for sharing and recovery, or more simply, **an open and programmable iCloud**.

This demo is designed to showcase the features of `js-http-client`, which is available on [`npmjs.com`](https://www.npmjs.com/package/@textileio/js-http-client) under the `@textile` scope. `js-http-client` provides access to an underlying `textile-go` node's REST API, adding various simplified APIs to support in-browser and programmatic desktop access. For the most part, the API would mimic the command-line and/or mobile APIs of `textile-go`, with some browser-specific enhancements. It works well in conjunction with the Textile [desktop Tray app](https://github.com/textileio/go-textile#tray-app).
