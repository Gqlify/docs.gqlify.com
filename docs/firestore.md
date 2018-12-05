---
id: firestore
title: Firestore
---
## 1. download serviceAccount.json
![how-to-get-service-account-json](assets/data-source/firebasesdk.gif)

## 2. Construct Firestore data-source
```js
const { Gqlify } = require('@gqlify/server');
const { FirestoreDataSource } = require('@gqlify/firestore');
const cert = require('/path/to/serviceAccount.json');
const databaseUrl = 'https://databaseName.firebaseio.com';

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    firestore: args => new FirestoreDataSource(cert, databaseUrl, args.key),
  },
});
```

## 3. Use in datamodel
```graphql
type User @GQLifyModel(dataSource: "firestore", key: "users") {
  id: ID! @unique @autoGen
  name: String
}
```


