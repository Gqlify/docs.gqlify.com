---
id: mongodb
title: MongoDB
---

## 1. Construct MongoDB data-source
```js
const { Gqlify } = require('@gqlify/server')
const { MongodbDataSourceGroup } = require('@gqlify/mongodb')

// connect to your mongoUri. You might keep your mongoUri in env.
const mongoUri = process.env.MONOG_URI;

// new MongodbDataSourceGroup(uri, database)
const mongodbDataSourceGroup = new MongodbDataSourceGroup(mongoUri, 'gqlify');

const createGraphQLServer = async () => {
  // initialize mongo connection
  await mongodbDataSourceGroup.initialize();

  // put to Gqlify dataSources
  const gqlify = new Gqlify({
    sdl: ...,
    dataSources: {
      // getDataSource(collectionName): `collectionName` is the name of the collection you'd like to use
      mongodb: args => mongodbDataSourceGroup.getDataSource(args.key),
    },
  });
  
  // create apollo server with gqlify config
  return new ApolloServer(gqlify.createApolloConfig());
}
```

## 2. Use in datamodel
```graphql
type User @GQLifyModel(dataSource: "mongodb", key: "users") {
  id: ID! @unique @autoGen
  name: String
}
```

## MongodbDataSourceGroup
```ts
new MongodbDataSourceGroup(mongoUri: string, database: string);
```

### MongodbDataSourceGroup.initialize
```ts
MongodbDataSourceGroup.initialize: Promise<void>;
```

### MongodbDataSourceGroup.getDataSource
```ts
MongodbDataSourceGroup.getDataSource(collectionName: string): MongodbDataSource;
```

### Arguments
* `uri`: `string`, the link to mongodb server.
* `dbName`: `string`, the name of database in mongodb.
* `collectionName`: `string`, the name of collection.
