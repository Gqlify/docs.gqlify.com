---
id: data-source
title: Data Source
---

## Overview

GQLify support multiple data source like [Firebase](https://firebase.google.com), [Firestore](https://firebase.google.com/docs/firestore/), [MongoDB](https://www.mongodb.com), etc. You can define data source yourself by implementing interface `DataSource` in GQLify.

There are two parts to link data source to GQLify:

1. **GQLify `dataSources` input**: `dataSources` is a mapping in GQLify. You can define multiple data sources in the mapping. Following is an example:

```js
const { Gqlify, MemoryDataSource } = require('@gqlify/server')

const server = new Gqlify({
  sdl: ...,
  dataSources: {
    memory1: (args: any) => new MemoryDataSource({key: args.key}),
  },
});
```

2. **SDL schema**: Define data source for types by directive `GQLifyModel`. There are two parameters `dataSource` and `key` in `GQLifyModel`.

* `dataSource`: the parameter is link to mapping in GQLify `dataSources` input. For example, you can define `dataSource` as `memory1`, so GQLify will find `memory1` in GQLify `dataSources` input.
* `key`: `key` is different for each data source. You can see more detail in following sections.

```graphql
type User @GQLifyModel(dataSource: "memory1", key: "users") {
  ...
}
```

## Firebase

Input `key` of `GQLifyModel` for Firebase is an object including two key `cert` and `path`.
* `cert`: the input of `cert` is service account json, which you can find in [Service Account](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk) tab on Firebase app's settings page.
* `path`: the location of collection.

```graphql
type User @GQLifyModel(
  dataSource: "firebase",
  key: {
    "cert": ..., # service account json
    "path": "users"
  }
) {
  ...
}
```

```js
const { Gqlify } = require('@gqlify/server')
const FirebaseDataSource = require('@gqlify/firebase')

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    firebase: args => new FirebaseDataSource(defaultData[args.key]),
  },
});
```

## Firestore

Input `key` of `GQLifyModel` for Firestore is an object including two key `cert` and `path`.
* `cert`: the input of `cert` is service account json, which you can find in [Service Account](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk) tab on Firebase app's settings page.
* `path`: the location of collection.

```graphql
type User @GQLifyModel(
  dataSource: "firestore",
  key: {
    "cert": ..., # service account json
    "path": "users"
  }
) {
  ...
}
```

```js
const { Gqlify } = require('@gqlify/server')
const FirestoreDataSource = require('@gqlify/firestore')

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    firestore: args => new FirestoreDataSource(defaultData[args.key]),
  },
});
```

## MongoDB

Input `key` of `GQLifyModel` for MongoDB is an object including three key `uri`, `dbName` and `collectionName`.
* `uri`: the link to mongodb server.
* `dbName`: the name of database in mongodb.
* `collectionName`: the name of collection.

```graphql
type User @GQLifyModel(
  dataSource: "mongodb",
  key: {
    "uri": "mongodb://...",
    "dbName": "gqlify",
    "collectionName": "users"
  }
) {
  ...
}
```

```js
const { Gqlify } = require('@gqlify/server')
const MongodbDataSource = require('@gqlify/mongodb')

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    mongodb: args => new MongodbDataSource(defaultData[args.key]),
  },
});
```

## Memory

Input `key` of `GQLifyModel` for Memory is a string which indicates location of memory storage.

```graphql
type User @GQLifyModel(
  dataSource: "memory",
  key: "users"
) {
  ...
}
```

```js
const { Gqlify, MemoryDataSource } = require('@gqlify/server')

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    memory: args => new MemoryDataSource(defaultData[args.key]),
  },
});
```

## Add new Data Source


