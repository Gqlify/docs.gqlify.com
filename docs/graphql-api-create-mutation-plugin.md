---
id: graphql-api-create-mutation-plugin
title: Create Mutation Plugin
---

## Source Code
> [gqlify/src/plugins/create.ts](https://github.com/Canner/gqlify/blob/master/packages/gqlify/src/plugins/create.ts)

## GraphQL Schema
For datamodel below
```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  id: ID! @unique @autoGen
  username: String!
  email: String
}
```

You'll get following mutations appended to GraphQL schema using this plugin.
```graphql
type Mutation {
  createUser(data: UserCreateInput!): User
}

input UserCreateInput {
  username: String
  email: String
}

# NOTICE: User Type is generates from `Base Type Plugin`
type User {
  id: ID!
  username: String!
  email: String
}
```

## Resolvers
In `create` mutation, GQLify will call `create` method of `DataSource` to insert a new record.
> [Learn more about `DataSource` methods](/docs/create-own-data-source)
