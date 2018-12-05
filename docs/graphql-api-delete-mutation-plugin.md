---
id: graphql-api-delete-mutation-plugin
title: Delete Mutation Plugin
---

## Source Code
> [gqlify/src/plugins/delete.ts](https://github.com/Canner/gqlify/blob/master/packages/gqlify/src/plugins/delete.ts)

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
  deleteUser(where: UserWhereUniqueInput!): UserWithUniqueFields
}

type UserWithUniqueFields {
  id: ID
}

# NOTICE: `UserWhereUniqueInput` is generated from `WhereInputPlugin`
input UserWhereUniqueInput {
  id: ID
}
```

## Resolvers
In `delete` mutation, GQLify will call `delete` method of `DataSource` to delete a record.
> [Learn more about `DataSource` methods](/docs/create-own-data-source)
