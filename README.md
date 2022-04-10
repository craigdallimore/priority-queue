# Priority Queue

[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

## Installation

```
npm install @decoy9697/priority-queue
```

## Usage

```js
import PQ, { LOW_FIRST } from "@decoy9697/priority-queue";

const pq = new PQ({ sort: LOW_FIRST });

// The number influences priority
// - lower takes precedence (given LOW_FIRST, otherwise use HIGH_FIRST)
// - with equal numbers, recency of insert takes precendence
pq.insert("🌵", 5);
pq.insert("🌿", 10);
pq.insert("🌴", 3);

// .peek() gives the item with the lowest number, but does not dequeue it
pq.peek(); // 🌴
pq.peek(); // 🌴

// .pop() gives the item with the lowest number, dequeuing it
pq.pop(); // 🌴
pq.pop(); // 🌵
pq.pop(); // 🌿
pq.pop(); // undefined

// .isEmpty() returns a boolean, true given it is empty
pq.isEmpty(); // true
```

## Development

This project uses [nix](https://nixos.org/) to install dependencies for the development shell.

### Commands

`nix-shell` - starts a development shell with system dependencies

#### Within the shell

`yarn` - install project dependencies

`yarn test` - run the tests

`npx eslint` - run the linter

<!-- Definitions -->

[downloads-badge]: https://img.shields.io/npm/dm/@decoy9697/priority-queue.svg
[downloads]: https://www.npmjs.com/package/@decoy9697/priority-queue
[size-badge]: https://img.shields.io/bundlephobia/minzip/@decoy9697/priority-queue.svg
[size]: https://bundlephobia.com/result?p=@decoy9697/priority-queue
