---
id: data-model-relationships
title: Relationships
---

A relation defines a connection between two models. Two models in a relation are connected via a relation field. When a relation is ambiguous, the relation field needs to be annotated with the `@relation` directive to make it clear for GQLify.

## Using `@relation`
Take following datamodel for example:

```graphql
type Book @GQLifyModel(dataSource: "memory", key: "books") {
  authors: [User!]!
  anotherAuthors: [User!]!
}

type User @GQLifyModel(dataSource: "memory", key: "users") {
  books: [Book!]!
  anotherBooks: [Book!]!
}
```

Since there are multiple relations defined on both Book and User, it's impossible for GQLify to know what fields should be paired as one relation.

Thus, using a `@relation` directive will tell GQLify what to do:
```graphql
type Book @GQLifyModel(dataSource: "memory", key: "books") {
  authors: [User!]! @relation(name: "Author")
  anotherAuthors: [User!]! @relation(name: "AnotherAuthor")
}

type User @GQLifyModel(dataSource: "memory", key: "users") {
  books: [Book!]! @relation(name: "Author")
  anotherBooks: [Book!]! @relation(name: "AnotherAuthor")
}
```

GQLify will create two many-to-many relation on Book and User.

## One-to-One
Simply put model type on both side of models without brackets(`[]`) will create a `one-to-one` relationship.

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

> Learn more about [one-to-one relationship](/docs/one-to-one-relationship)

## One-to-Many
One side should be wrapped with brackets to tell GQLify it's a `to-many` relation from its side.

### Example
```graphql
type User @GQLifyModel(dataSource: "memory", key: "users")  {
  books: [Book!]!
}

type Book @GQLifyModel(dataSource: "memory", key: "books")  {
  author: User!
}
```

GQLify will create a `one-to-many` relationship between User and Book.

You can also define a field map to array of it's type. Like each person has many friends.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users")  {
  friends: [User!]!
}
```

> Learn more about [one-to-many relationship](/docs/one-to-many-relationship)


## Many-to-Many
Wrapped both side of relationship with brackets and GQLify will create a `many-to-many` relationship.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users")  {
  groups: [Group!]! @relation(name: "Membership")
}

type Group @GQLifyModel(dataSource: "memory", key: "groups")  {
  users: [User!]! @relation(name: "Membership")
}
```

> Learn more about [many-to-many relationship](/docs/many-to-many-relationship)
