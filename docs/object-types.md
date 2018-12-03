---
id: object-types
title: Object Types
---

General [object types](https://www.apollographql.com/docs/apollo-server/essentials/schema.html#object) is same as Apollo Server. Each field inside of an object type maps to another type, allowing nested types and circular references.

```graphql
type TypeName {
  fieldA: String
  fieldB: Boolean
  fieldC: Int
  fieldD: CustomType
}

type CustomType {
  circular: TypeName
}
```
