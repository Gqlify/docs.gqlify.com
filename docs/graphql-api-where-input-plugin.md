---
id: graphql-api-where-input-plugin
title: Where Input Plugin
---

## Source Code
> [gqlify/src/plugins/whereInput.ts](https://github.com/Canner/gqlify/blob/master/packages/gqlify/src/plugins/whereInput.ts)

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
`WhereInput` and `WhereUniqueInput` is useful for other plugins to know how model is defined to find records.
