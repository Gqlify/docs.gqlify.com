---
id: schema-directives
title: Schema directives
---

Directives are used to provide additional information in your datamodel. They look like this: `@name(argument: "value")` or simply @name when there are no arguments.

## Unique directive
`@unique` directive tells GQLify this field is under unique constraint and will not have same value between two nodes. GQLify will use unique fields to generate `input` and `type` for queries and mutations.

```graphql
# the `Article` type has a unique `slug` field
type Article @GQLifyModel(dataSource: "memory", key: "articles") {
  slug: String @unique
}
```

For example:
```graphql
type Article {
  # ...
}

input ArticleWhereUniqueInput {
  slug: String
}

Query {
  article(where: ArticleWhereUniqueInput!): Article
}
```

## AutoGen directive
`@autoGen` directive tell GQLify that this field is auto-generated on server-side.

For example, some APIs will insert `createdAt` and `updatedAt` for all records.

```graphql
type Article @GQLifyModel(dataSource: "memory", key: "articles") {
  createdAt: DateTime! @autoGen
  updatedAt: DateTime! @autoGen
}
```

Thus, GQLify will exclude these fields from create and update payload.

```graphql
type Article {
  # ...
  createdAt: DateTime!
  updatedAt: DateTime!
}

ArticleCreateInput {
  title: String
  # createdAt and updatedAt will be excluded
}

Mutation {
  createArticle(data: ArticleCreateInput!): Article
}
```
