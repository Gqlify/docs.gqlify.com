---
id: data-model-overview
title: Overview
---

The data model help Gqlify **define database schema** including which **storage** you want to use and **relationship** between each type.

Data model is written by [GraphQL Schema Definition Language]() (SDL) and stored in one `.graphql` file.

## Example

You can use general SDL with predefined directive `@GQLifyModel` with parameters `dataSource` and `key` in Gqlify. `dataSource` tell Gqlify which storage store this objects. `key` is an argument which provide more information to initialize storage.

Also, there are some special directive in Gqlify like `unique` and `autoGen`. `unique` define a field is unique. `autoGen` define a field will auto generate by Gqlify, so user don't have to input the field in creation.

Here we can see that `User` type has _one-to-many_ relationship with `Book`. This is caused by `books` attribute in `User` type which is defined as array of `Book` and `author` attribute in `Book` type which is defined as an `User`. **In Gqlify, you don't need to specify _one-to-one_ or _one-to-many_ relationship. Gqlify auto detect these relationship in SDL.**

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  id: ID! @unique @autoGen # auto generate unique id
  username: String!
  email: String
}
```
