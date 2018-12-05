---
id: object-types
title: Object Types
---

The object type is the most common type used in a schema and represents a group of fields. Each field inside of an object type maps to another type, allowing nested types and circular references.

> Without `@GQLifyModel` directive, GQLify will see object type as a normal type.

## Defining Object Type
```graphql
type TypeName {
  fieldA: String
  fieldB: Boolean
  fieldC: Int
}
```

## Use in GQLify
```graphql
type TypeName {
  fieldA: String
  fieldB: Boolean
  fieldC: Int
}

type User @GQLifyModel(dataSource: "memory", key: "users")  {
  customField: TypeName
}
```
