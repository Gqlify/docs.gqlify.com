---
id: quick-start
title: Quick Start
---

## Goals

* Setup Gqlify
* Setup Datamodel
* Start Gqlify with Apollo Server

## Setup Gqlify

### Create new directory

```bash
$: mkdir gqlify-demo
$: cd gqlify-demo
```

### Install Gqlify

Initialize project in current directory and install `@gqlify/server`.

```bash
$: yarn init -y
$: yarn add @gqlify/server
```

## Setup Datamodel

Create the datamodel in `demo.graphql` as follows:

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  id: ID! @unique @autoGen # auto generate unique id
  username: String!
  email: String
  books: [Book!]! # User-Book: one-to-many
}

type Book @GQLifyModel(dataSource: "memory", key: "books") {
  id: ID! @unique @autoGen # auto generate unique id
  name: String!
  author: User!
}
```

## Start Gqlify with Apollo Server

### Prepare required packages

```bash
$: yarn add apollo-server
```

### Setup Gqlify with Apollo Server

Add following code to `index.js`:

```js
const { Gqlify, MemoryDataSource } = require('@gqlify/server')
const { ApolloServer } = require('apollo-server');

// Read GraphQL Schema Definition Language (sdl)
const sdl = readFileSync(__dirname + '/demo.graphql', { encoding: 'utf8' });

const defaultData = {
  users: [
    {id: '1', username: 'Alice', email: 'alice@gmail.com'},
    {id: '2', username: 'Bob', email: 'bob@gmail.io'},
  ],
  books: [
    {id: '1', name: 'book1', userId: '1'},
    {id: '2', name: 'book2', userId: '2'},
  ],
};

const gqlify = new Gqlify({
  sdl,
  dataSources: {
    memory: args => new MemoryDataSource(defaultData[args.key]),
  },
});
const server = new ApolloServer(gqlify.createApolloConfig());

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

Next, execute `index.js` to start gqlify:

```bash
$: node index.js
```

Now, you can open `http://localhost:4000` and gqlify prepare CRUD api of `User` and `Book` for you. You don't need to write any other code. **Only thing which you need to do is define the schema and choose a data source.**
