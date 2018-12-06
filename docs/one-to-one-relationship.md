---
id: one-to-one-relationship
title: One-to-One
---

An example for a one-to-one association could be a `User` and the `ShippingAddress`. Each `User` has **exactly one** `ShippingAddress` and each `ShippingAddress` belongs to one `User`. On the data-source level, this mapped by a foreign key column either on the `ShippingAddress` or the `User` table.

Let’s take a look at the uni-directional mapping first.

## Uni-directional one-to-one
```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  shippingAddress: ShippingAddress!
}

type ShippingAddress @GQLifyModel(dataSource: "memory", key: "shippingAddress") {
  address: String
}
```

## Under the hood
GQLify will insert a foreign key to `User` record and map the foreign key to data in GraphQL resolver.

## Bi-directional one-to-one
The bi-directional one-to-one relationship extends the uni-directional relationship, so that you can also navigate it in the other direction. In this example, you also add a field in `ShippingAddress` type pointing to `Uer`, so that you can get the `User` for a giving `ShippingAddress`.

```graphql
type User @GQLifyModel(dataSource: "memory", key: "users") {
  shippingAddress: ShippingAddress!
}

type ShippingAddress @GQLifyModel(dataSource: "memory", key: "shippingAddress") {
  address: String
  belongedUser: User
}
```

## Under the hood
GQLify will insert a foreign key to one side of model, which we call the `owning-side` in `bi-one-to-one` relationship, meaning that this side actually **owns** the foreign key. The other side, we call `reference-side`, simply calls `findOneByRelation` method of `data-source` to get the data.
