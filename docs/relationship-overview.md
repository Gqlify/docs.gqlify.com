---
id: relationship-overview
title: Overview
---

In GQLify, relationship between models can be easily defined with datamodel.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  id: ID! @unique @autoGen # auto generate unique id
  username: String!
  email: String
  books: [Book!]!
  adminGroups: [Group!]! @relation(name: "Admin")
  belongedGroups: [Group!]! @relation(name: "Membership")
}

type Book @GQLifyModel(dataSource: "memory", key: "books") {
  id: ID! @unique @autoGen # auto generate unique id
  name: String!
  author: User!
}

type Group @GQLifyModel(dataSource: "memory", key: "groups") {
  id: ID! @unique @autoGen # auto generate unique id
  name: String
  admins: [User!]! @relation(name: "Admin")
  members: [User!]! @relation(name: "Membership")
}
```

When GQLify detects relations, it will print messages for clear overview.

![home](assets/screenshot/relation.png)

## Relationships
* [One-to-one](/docs/one-to-one-relationship)
* [One-to-many](/docs/one-to-many-relationship)
* [Many-to-many](/docs/many-to-many-relationship)
