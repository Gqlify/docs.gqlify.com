---
id: one-to-many-relationship
title: One-to-Many
---

An example for a one-to-many relationship could be a `User` and the `Book`. Each `User` has many `Book` and each `Book` belongs to one `User`. On the data-source level, this mapped by a foreign key column on the `Book` side.

Let’s take a look at the uni-directional `one-to-many` relationship first.

## Uni-directional one-to-many
In `User`, We define a to-many relation to `Book` via `books` field and we don't define to-one field in `Book`.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  books: [Book!]!
}

type Book @GQLifyModel(dataSource: "memory", key: "books") {
  name: String
}
```

## Under the hood
GQLify will insert a foreign key to `Book` record. When you query `User` and trying to map to many books, GQLify will call `findManyFromOneRelation` method of `DataSource` to get records.

## Bi-directional one-to-many
Let's add another field in `Book`, so we can join data back from `Book` side.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  books: [Book!]!
}

type Book @GQLifyModel(dataSource: "memory", key: "books") {
  name: String
  author: User
}
```

## Under the hood
The implementation of bi-directional one-to-many is the same with uni-directional one-to-many.
