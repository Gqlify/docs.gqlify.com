---
id: firestore
title: Firestore
---
## 1. download serviceAccount.json
![how-to-get-service-account-json](assets/data-source/firebasesdk.gif)

## 2. Construct Firestore data-source
```js
const admin = require('firebase-admin');
const { Gqlify } = require('@gqlify/server');
const { FirestoreDataSource } = require('@gqlify/firestore');
const cert = require('/path/to/serviceAccount.json');
const databaseUrl = 'https://databaseName.firebaseio.com';

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    firestore: args => new FirestoreDataSource({
        credential: admin.credential.cert(cert),
        databaseURL,
      },
      collection: args.key,
    }),
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

## API Reference
### `FirestoreDataSource(option: {config? admin.AppOptions, path: string})`
#### config `admin.AppOptions`
`config` will be directly passed into `admin.initializeApp` method. Reference from https://firebase.google.com/docs/reference/admin/node/admin.app.AppOptions

#### collection `string`
Firestore collection name.

## Use in Firebase Cloud Function
In the functions runtime and in locally emulated functions, admin configuration is applied automatically when you initialize the Firebase Admin SDK with no arguments.

Simply don't use `config` argument, configuration will be applied automatically.
```js
const { Gqlify } = require('@gqlify/server');
const { FirestoreDataSource } = require('@gqlify/firestore');

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    firestore: args => new FirestoreDataSource({
      collection: args.key,
    }),
  },
});
```
