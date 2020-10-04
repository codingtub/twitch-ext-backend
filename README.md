![](https://s1.gifyu.com/images/ezgif.com-gif-makerd763d596e366789a.gif)

## Description

This repo contains a simple backend (NestJS) that provides a WebSocket endpoint. The applications only puprose is to receive click events from a custom Twitch.tv extension and forward it in order to be used inside of a game.

### About the project

It was created as part of an in-game technologies course at my university with the vision to create a game that can be interactively played through a twitch live stream with the means of a custom extension to add further interface capabilities and the ability to directly interact with the game via clicking on the live stream ([the repo for the exension boilerplate](https://github.com/codingtub/twitch-ext-nextjs)). The clicks of the live stream are sent to a custom backend (this repo) and forwarded to the game (([this Unreal Engine 4 project](https://github.com/codingtub/twitch-ext-unreal))). This was done because Twitch extensions don't allow opening WebSckets in the extension directly, which makes a lot of sense regarding security. Those click events were then mapped from 2D Screen coordinates to 3D world space coordinates and used to simply move a player in a top-down setting to move across the screen, pretty great!

Feel free to use this concept for your own ideas and if you ever create an experience similiar to ours please [contact me](mailto:mr@codingtub.eu), I'd be happy to test it!


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
