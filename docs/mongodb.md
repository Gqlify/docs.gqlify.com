---
id: mongodb
title: MongoDB
---

## 1. Construct MongoDB data-source
```js
const { Gqlify } = require('@gqlify/server')
const MongodbDataSource = require('@gqlify/mongodb')

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    mongodb: args => new MongodbDataSource({uri, dbName, collectionName: args.key}),
  },
});
```

## 2. Use in datamodel
```graphql
type User @GQLifyModel(dataSource: "mongodb", key: "users") {
  id: ID! @unique @autoGen
  name: String
}
```

## MongodbDataSource
```js
new MongodbDataSource({uri, dbName, collectionName});
```

### Arguments
* `uri`: `string`, the link to mongodb server.
* `dbName`: `string`, the name of database in mongodb.
* `collectionName`: `string`, the name of collection.
