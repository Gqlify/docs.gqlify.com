---
id: data-model-relationships
title: Relationships
---

## One-to-One
Define one field of type map to another type. Also, in another type, define one field map to the type. For example, each person link to one contact information. You don't have to tag any directive for one-to-one relationship. GQLify will auto detect it.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users")  {
  contact: Contact!
}

type Contact @GQLifyModel(dataSource: "memory", key: "contacts")  {
  user: User!
}
```

A field also can be mapped to it's type. Like each person has one spouse.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users")  {
  spouse: User!
}
```

## One-to-Many

Define one field of type map to array of another type. Also, in another type, define one field map to the type. For example, each author can write many books. You don't have to tag any directive for one-to-many relationship. GQLify will auto detect it.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users")  {
  books: [Book!]!
}

type Book @GQLifyModel(dataSource: "memory", key: "books")  {
  author: User!
}
```

You can also define a field map to array of it's type. Like each person has many friends.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users")  {
  friends: [User!]!
}
```

## Many-to-Many

GQLify provides directive `relation` with one parameter `name`. You can define many-to-many relationship by tag `relation` directive with same `name` in two fields. For example, one user can join many groups and one group includes many users.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users")  {
  groups: [Group!]! @relation(name: "Membership")
}

type Group @GQLifyModel(dataSource: "memory", key: "groups")  {
  users: [User!]! @relation(name: "Membership")
}
```
