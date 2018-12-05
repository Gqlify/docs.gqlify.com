---
id: add-new-scalar
title: Add new Scalar
---

You can define [new scalar](https://www.apollographql.com/docs/apollo-server/v2/features/scalars-enums.html#custom-scalars) just like Apollo Server.

## 1. Define scalar name in datamodel.

```graphql
scalar MyCustomScalar
```

## 2. Using a package
Here, we’ll take the `graphql-type-json` package as an example to demonstrate what can be done. This npm package defines a JSON GraphQL scalar type.

Add the graphql-type-json package to the project’s dependencies:

```shell
$ npm install --save graphql-type-json
```

In code, require the type defined by in the npm package and use it :
```js
// myCustomScalar.js
const GraphQLJSON = require('graphql-type-json');

const { Gqlify } = require('@gqlify/server');

const gqlify = new Gqlify({
  sdl: "<datamodel>",
  dataSources: { /* data-sources */ },
  scalars: {
    JSON: GraphQLJSON
  },
});

// use with apollo
const server = new ApolloServer(gqlify.createApolloConfig());

server.listen().then(({ url }) => {
  // tslint:disable-next-line:no-console
  console.log(`🚀 Server ready at ${url}`);
});
```
