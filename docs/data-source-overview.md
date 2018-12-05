---
id: data-source-overview
title: Overview
---

GQLify support multiple data source like [Firebase](https://firebase.google.com), [Firestore](https://firebase.google.com/docs/firestore/), [MongoDB](https://www.mongodb.com) ...etc. You can create a data-source by yourself using interface `DataSource` in GQLify.

## About data-source
Data-source encapsulates fetching data and storing data from a particular service. It provides unified methods like `find`, `findOne` to let GQLify call them at resolvers.

> Learn more about data-source interface at [create own data source](/docs/create-own-data-source)

## How to use data-source
### 1. Construct data-source map in GQLify
The `dataSources` attribute in GQLify constructor is a map of `DataSource`. The `key` of the map will provide usage in datamodel.

```js
const { Gqlify, MemoryDataSource } = require('@gqlify/server');
const CustomizedDataSource = require('./customized-data-source);

const server = new Gqlify({
  sdl: "<datamodel>",
  dataSources: {
    // memory data-source
    memory: () => new MemoryDataSource(),

    // myApi data-source
    myApi: args => new CustomizedDataSource({
      service: args.service,
      table: args.table,
    }),
  },
});
```

### 2. Use in datamodel
`dataSource` value would be mapped to `dataSources` in GQLify constructor

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users")  {
  id: ID! @unique @autoGen
  name: String
}

type Book @GQLifyModel(dataSource: "myApi", key: "users")  {
  id: ID! @unique @autoGen
  title: String
}
```

## Currenly supported data-sources
### [Firebase Realtime Database](/docs/firebase)
> The Firebase Realtime Database is a cloud-hosted database. Data is stored as JSON and synchronized in realtime to every connected client.
### [Firestore](/docs/firestore)
> Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform.
### [MongoDB](/docs/mongodb)
> MongoDB is a cross-platform document-oriented database
