---
id: data-source-overview
title: Overview
---

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
