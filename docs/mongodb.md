---
id: mongodb
title: MongoDB
---

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
