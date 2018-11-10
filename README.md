# Yorker

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ddoronin/yorker/blob/master/LICENSE) 
[![npm version](https://img.shields.io/npm/v/yorker.svg?style=flat)](https://www.npmjs.com/package/yorker) 
[![Build Status](https://travis-ci.org/ddoronin/yorker.svg?branch=master)](https://travis-ci.org/ddoronin/yorker) 

NodeJS library for nice & easy console logs.

## Quick Start
Install using `yarn` or `npm`.
```bash
$ yarn add yorker
```
```bash
$ npm --save yorker
```

Import in one of your `js`, `ts` or `vue` files and start using it.
```typescript
import { yorker } from 'yorker';

const say = yorker.see('something');
say('something');
```
By default it will be switched off for production enviroment `NODE_ENV="production"`.

## Advanced Setup
Create a file in your project to have a singlethon instance of the logger. To instantiate the Yorker class you need two parameters to set up: `Theme` and the flag `enabled`.

```typescript
import { Yorker, NYPDTheme } from 'yorker';

const theme = new NYPDTheme();
const enabled = process.env.NODE_ENV !== 'production';
export const newYorker = new Yorker(theme, enabled);
```
A new custom theme can be created by implementing the `ITheme` interface.

## API

It's very easy and has only one method `see(msg)` that returns a function `say(msg, error?)`.

```typescript
const say = yorker.see('something');
say('everything is Okay');
say('there is an error', new Error('smth'));
```

## Example

```typescript
function startMongo(config: { url: string }) {
    const say = yorker.see(`Connecting to mongo: "${config.url}"`);
    const client = new MongoClient(config.url, { raw: true, useNewUrlParser: true });
    client.connect((err, client) => {
        if (err) {
            say('Error while connecting to mongo.', err);
            return process.exit(1);
        }
        say('Connection to mongo succeeded.');
    });
}
```

