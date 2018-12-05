---
id: graphql-api-plugins
title: GQLify Plugin
---

GQLify Plugin is responsible for generate GraphQL schema and resolvers for each model. Think Plugin as a way to modulize your GraphQL application.

## What plugins does GQLify have now?
Currently, we have 6 plugins for different jobs.
* [Base Type Plugin](/docs/graphql-api-base-type-plugin): generate base type of model. The types can be shared and reused between plugins.
* [Where Input Plugin](/docs/graphql-api-where-input-plugin): generate where input of model. The inputs can be shared and reused between plugins.
* [Query Plugin](/docs/graphql-api-query-plugin): generate queries that can find one record and find many records with filter in data-source.
* [Create Plugin](/docs/graphql-api-create-plugin): generate mutations that can create record in data-source.
* [Update Plugin](/docs/graphql-api-update-plugin): generate mutations that can update record in data-source.
* [Delete Plugin](/docs/graphql-api-delete-plugin): generate mutations that can delete record in data-source.

## Plugin interface
```typescript
interface Plugin {
  init?(context: Context): void;
  setPlugins?(plugins: Plugin[]): void;
  visitModel(model: Model, context: Context): void;
  resolveInQuery?({model, dataSource}: {model: Model, dataSource: any}): IResolverObject;
  resolveInMutation?({model, dataSource}: {model: Model, dataSource: any}): IResolverObject;
  resolveInRoot?({model, dataSource}: {model: Model, dataSource: any}): IResolvers;
}

interface Context {
  root: RootNode;
}
```

## init(context: Context): void
GQLify will call this method once before starting the visit.

## setPlugins(plugins: Plugin[]): void
GQLify will pass all plugins to `setPlugins`, so plugin can call public method from other plugin.

For example, in `Query Plugin`, we use `whereInputPlugin.getWhereInputName(model: Model)` to know the `WhereInput` name of a model.

## visitModel(model: Model, context: Context): void;
GQLify will iterate each model and call `visitModel` of every plugins.

**This is where you generate GraphQL Schema.**

## resolveInQuery?({model, dataSource}: {model: Model, dataSource: any}): IResolverObject;
For every query you generate in `visitModel`, you need to return an object with the exact query name as member in order to resolve it.

For example, if you append a query with name `getUser`, you'll need to return
```js
return {
  getUser: async (root, args, context) => {
    return context.db.getUsers();
  }
}
```

## resolveInMutation?({model, dataSource}: {model: Model, dataSource: any}): IResolverObject;
For every mutation you generate in `visitModel`, you need to return an object with the exact mutation name as member in order to resolve it.

For example, if you append a mutation with name `sendEmail`, you'll need to return
```js
return {
  sendEmail: async (root, args, context) => {
    return context.emailService.sendEmail(args.email);
  }
}
```

## resolveInRoot?({model, dataSource}: {model: Model, dataSource: any}): IResolvers;
When you need to resolve a type in root schema, you can return an object here.
