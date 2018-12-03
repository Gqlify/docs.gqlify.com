---
id: add-new-scalar
title: Add new Scalar
---

You can define [new scalar](https://www.apollographql.com/docs/apollo-server/v2/features/scalars-enums.html#custom-scalars) like Apollo Server.

1. Define scalar name in SDL.

```graphql
scalar MyCustomScalar
```

2. Define how to serialize `MyCustomScalar`. You can see more information in [`GraphQLScalarType`](https://graphql.org/graphql-js/type/#graphqlscalartype).

```js
// myCustomScalar.js
const { GraphQLScalarType } = require('graphql')

module.exports = new GraphQLScalarType({
  name: 'MyCustomScalar',
  description: 'my custom scalar',
  serialize: ...,
  parseValue: ...,
  parseLiteral: ...,
})
```

3. Map new scalar in GQLify.

```js
const { Gqlify } = require('@gqlify/server')
const MyCustomScalar = require('./myCustomScalar')

const server = new Gqlify({
  sdl: ...,
  dataSources: ...,
  scalars: {
    MyCustomScalar
  }
})
```
