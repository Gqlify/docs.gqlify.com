---
id: graphql-api-base-type-plugin
title: Base Type Plugin
---

## Source Code
> [gqlify/src/plugins/baseType.ts](https://github.com/Canner/gqlify/blob/master/packages/gqlify/src/plugins/baseType.ts)

## GraphQL Schema
For datamodel below
```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  id: ID! @unique @autoGen
  username: String!
  email: String
}
```

You'll get following types appended to GraphQL schema using this plugin.
```graphql
type User {
  id: ID!
  username: String!
  email: String
}
```

## About this plugin
Base type like `User` is created to be reused in other plugins.
