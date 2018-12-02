---
id: data-model
title: Data Model
---

## Overview

The data model help Gqlify **define database schema** including which **storage** you want to use and **relationship** between each type.

Data model is written by [GraphQL Schema Definition Language]() (SDL) and stored in one `.graphql` file.

## Example

You can use general SDL with defined directive `@GQLifyModel` with parameters `dataSource` and `key` in Gqlify. `dataSource` tell Gqlify which storage store this objects. `key` is like table name in SQL or collection name in NoSQL.

Also, there are some special directive in Gqlify like `unique` and `autoGen`. `unique` define a field is unique. `autoGen` define a field will auto generate by Gqlify, so user don't have to input the field in creation.

Here we can see that `User` type has _one-to-many_ relationship with `Book`. This is caused by `books` attribute in `User` type which is defined as array of `Book` and `author` attribute in `Book` type which is defined as an `User`. **In Gqlify, you don't need to specify _one-to-one_ or _one-to-many_ relationship. Gqlify auto detect these relationship in SDL.**

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  id: ID! @unique @autoGen # auto generate unique id
  username: String!
  email: String
}
```

## Scalar types

Default [scalar types]((https://www.apollographql.com/docs/apollo-server/essentials/schema.html#scalar)) is same as Apollo Server. Following are default scalar types:

* `Int`: Signed 32-bit integer
* `Float`: Signed double-precision floating-point value
* `String`: UTF‐8 character sequence
* `Boolean`: true or false
* `ID` (serialized as `String`): A unique identifier, often used to refetch an object or as the key for a cache. While serialized as a String, ID signifies that it is not intended to be human‐readable

## Object types

General [object types](https://www.apollographql.com/docs/apollo-server/essentials/schema.html#object) is same as Apollo Server.

## Relations

### One-to-One relation
Define one field of type map to another type. Also, in another type, define one field map to the type. For example, each person link to one contact information. You don't have to tag any directive for one-to-one relationship. GQLify will auto detect it.

```graphql
type User {
  contact: Contact!
}

type Contact {
  user: User!
}
```

A field also can be mapped to it's type. Like each person has one spouse.

```graphql
type User {
  spouse: User!
}
```

### One-to-Many relationship

Define one field of type map to array of another type. Also, in another type, define one field map to the type. For example, each author can write many books. You don't have to tag any directive for one-to-many relationship. GQLify will auto detect it.

```graphql
type User {
  books: [Book!]!
}

type Book {
  author: User!
}
```

You can also define a field map to array of it's type. Like each person has many friends.

```graphql
type User {
  friends: [User!]!
}
```

### Many-to-Many relationship

GQLify provides directive `relation` with one parameter `name`. You can define many-to-many relationship by tag `relation` directive with same `name` in two fields. For example, one user can join many groups and one group includes many users.

```graphql
type User {
  groups: [Group!]! @relation(name: "Membership")
}

type Group {
  users: [User!]! @relation(name: "Membership")
}
```

### Schema directive

Gqlify provide special directive `GQLifyModel` with parameters `dataSource` and `key` which you can use to assign storage.

* `GQLifyModel`
  * `dataSource`: storage for the object type. Now support: `memory`, `firebase`, `firestore` and `mongodb`.
  * `key`: like table name in SQL or collection name in No-SQL

### Add new Schema directive


### Add new Scalar
