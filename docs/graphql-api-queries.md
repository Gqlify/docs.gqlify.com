---
id: graphql-api-queries
title: GraphQL Queries
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

You'll get following types and queries
```graphql
# Skip mutation related types and inputs here
# We'll cover it at next section

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

## Plugins involved
* [Query Plugin](/docs/graphql-api-query-plugin)
* [Base Type Plugin](/docs/graphql-api-base-type-plugin)
* [Where Input Plugin](/docs/graphql-api-where-input-plugin)
