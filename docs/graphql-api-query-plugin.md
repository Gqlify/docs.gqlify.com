---
id: graphql-api-query-plugin
title: Query Plugin
---

## Source Code
> [gqlify/src/plugins/query.ts](https://github.com/Canner/gqlify/blob/master/packages/gqlify/src/plugins/query.ts)

## GraphQL Schema
For datamodel below
```graphql
type Query {
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, first: Int, last: Int, before: String, after: String): [User]
}

type User {
  id: ID!
  username: String!
  email: String
}

input UserWhereInput {
  id: ID
  username: String
  email: String
}

input UserWhereUniqueInput {
  id: ID
}
```

## About this plugin
This plugin will create two queries, in this example: `user` and `users`, to allow users to query one or many records from data-source.

