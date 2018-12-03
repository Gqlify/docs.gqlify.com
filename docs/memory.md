---
id: memory
title: Memory
---

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
