---
id: firebase
title: Firebase
---

## 1. Install dependencies
```sh
$ yarn add firebase-admin graphql @gqlify/server @gqlify/firebase
```

## 2. Download serviceAccount.json
![how-to-get-service-account-json](assets/data-source/firebasesdk.gif)

## 3. Construct Firebase data-source
```js
const admin = require('firebase-admin');
const { Gqlify } = require('@gqlify/server');
const { FirebaseDataSource } = require('@gqlify/firebase');
const cert = require('/path/to/serviceAccount.json');
const databaseUrl = 'https://databaseName.firebaseio.com';

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    firebase: args => new FirebaseDataSource({
      config: {
        credential: admin.credential.cert(cert),
        databaseURL,
      },
      path: args.key,
    }),
  },
});
```

## 4. Use in datamodel
```graphql
type User @GQLifyModel(dataSource: "firebase", key: "users") {
  id: ID! @unique @autoGen
  name: String
}
```

## API Reference
### `FirebaseDataSource(option: {config? admin.AppOptions, path: string})`
#### config `admin.AppOptions`
`config` will be directly passed into `admin.initializeApp` method. Reference from https://firebase.google.com/docs/reference/admin/node/admin.app.AppOptions

#### path `string`
Firebase real-time database path.

## Use in Firebase Cloud Function
In the functions runtime and in locally emulated functions, admin configuration is applied automatically when you initialize the Firebase Admin SDK with no arguments.

Simply don't use `config` argument, configuration will be applied automatically.
```js
const { Gqlify } = require('@gqlify/server');
const { FirebaseDataSource } = require('@gqlify/firebase');

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    firebase: args => new FirebaseDataSource({
      path: args.key,
    }),
  },
});
```
