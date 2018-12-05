---
id: memory
title: Memory
---

## 1. Construct Memory data-source
```js
const { Gqlify, MemoryDataSource } = require('@gqlify/server');
const defaultData = require('/your/default/data.json');

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: {
    memory: args => new MemoryDataSource(defaultData[args.key]),
  },
});
```

## 2. Use in datamodel
```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  id: ID! @unique @autoGen
  name: String
}
```

## MemoryDataSource
```js
new MemoryDataSource(defaultData);
```

### Arguments
* `defaultData`: `any[]`, the mocked data
