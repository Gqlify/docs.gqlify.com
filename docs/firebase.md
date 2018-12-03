---
id: firebase
title: Firebase
---

Input `key` of `GQLifyModel` for Firebase is an object including two key `cert` and `path`.
* `cert`: the input of `cert` is service account json, which you can find in [Service Account](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk) tab on Firebase app's settings page.
* `path`: the location of collection.

![how-to-get-service-account-json](assets/data-source/firebasesdk.gif)

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
