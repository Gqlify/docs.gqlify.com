---
id: graphql-api-mutations
title: GraphQL Mutations
---

## Example
For datamodel below
```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  id: ID! @unique @autoGen
  username: String!
  email: String
}
```

You'll get following types and mutations
```graphql
# Skip query related types and inputs here
# We cover it at previous section

type Mutation {
  createUser(data: UserCreateInput!): User
  updateUser(where: UserWhereUniqueInput, data: UserUpdateInput!): UserUpdateResponse
  deleteUser(where: UserWhereUniqueInput!): UserWithUniqueFields
}

type User {
  id: ID!
  username: String!
  email: String
}

input UserCreateInput {
  username: String
  email: String
}

input UserUpdateInput {
  username: String
  email: String
}

type UserUpdateResponse {
  id: ID
}

input UserWhereInput {
  id: ID
  username: String
  email: String
}

input UserWhereUniqueInput {
  id: ID
}

type UserWithUniqueFields {
  id: ID
}
```

## Plugins involved
* [Create Plugin](/docs/graphql-api-create-mutation-plugin)
* [Update Plugin](/docs/graphql-api-update-mutation-plugin)
* [Delete Plugin](/docs/graphql-api-delete-mutation-plugin)
* [Base Type Plugin](/docs/graphql-api-base-type-plugin)
* [Where Input Plugin](/docs/graphql-api-where-input-plugin)
