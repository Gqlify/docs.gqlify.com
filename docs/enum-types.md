---
id: enum-types
title: Enum Types
---

> (Quoted from GraphQL website) ...
>
> Enum types are a special kind of scalar that is restricted to a particular set of allowed values. This allows you to:
> 
> 1. Validate that any arguments of this type are one of the allowed values
> 2. Communicate through the type system that a field will always be one of a finite set of values


## Defining Enum type
```graphql
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```

## Use in GQLify
Using enum in GQLify is easy, simple write declaration in datamodel.
```graphql
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}

type User @GQLifyModel(dataSource: "memory", key: "users")  {
  episode: Episode
}
```
