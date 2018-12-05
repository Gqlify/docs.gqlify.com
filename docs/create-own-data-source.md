---
id: create-own-data-source
title: Create Own Data-source
---

`DataSource` in GQLify plays a important role that it unifies the interface of fetching data, storing data and dealing with relationship.

## DataSource class
`Datasource` implements several interfaces including:
* `ListReadable`
* `ListMutable`
* `ToOneRelation`
* `OneToManyRelation`
* `ManyToManyRelation`

Implementing these interfaces will guarantee that your data-source can be used in GQLify.

## ListReadable Interface
```ts
export interface Pagination {
  // cursor base
  last?: number;
  first?: number;
  before?: string;
  after?: string;

  // number based
  perPage?: number;
  page?: number;
}

export interface PaginatedResponse {
  data: any[];
  total: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export enum Operator {
  eq = 'eq',
  neq = 'eq',
  gt = 'gt',
  gte = 'gte',
  lt = 'lt',
  lte = 'lte',
}

export type Where = Record<string, Record<string /** Operator */, any>>;

export interface OrderBy {
  field: string;
  value: 1 | -1;
}

export interface ListFindQuery {
  pagination?: Pagination;
  where?: Where;
  orderBy?: OrderBy;
}

export interface ListReadable {
  find(query?: ListFindQuery): Promise<PaginatedResponse>;

  findOne({
    where,
  }: {
    where: Where,
  }): Promise<any>;

  findOneById(id: string): Promise<any>;
}
```
## ListMutable Interface
```ts
export interface ListMutable {
  create(payload: any): Promise<any>;
  update(where: Where, payload: any): Promise<any>;
  delete(where: Where): Promise<any>;
}
```

## ToOneRelation Interface
```ts
export interface ToOneRelation {
  findOneByRelation(foreignKey: string, foreignId: string): Promise<any>;
  updateOneRelation(id: string, foreignKey: string, foreignId: string): Promise<void>;
}
```

## OneToManyRelation Interface
```ts
export interface OneToManyRelation {
  findManyFromOneRelation(foreignKey: string, foreignId: string): Promise<any[]>;
}
```

## ManyToManyRelation Interface
```ts
export interface ManyToManyRelation {
  // it's source-side data-source's responsibility to get the many relation from source-side
  findManyFromManyRelation(sourceSideName: string, targetSideName: string, sourceSideId: string): Promise<any[]>;
  addIdToManyRelation(
    sourceSideName: string, targetSideName: string, sourceSideId: string, targetSideId: string): Promise<void>;
  removeIdFromManyRelation(
    sourceSideName: string, targetSideName: string, sourceSideId: string, targetSideId: string): Promise<void>;
}
```


## Examples
* [Memory](https://github.com/Canner/gqlify/blob/master/packages/gqlify/src/dataSource/memoryDataSource.ts)
* [Firebase](https://github.com/Canner/gqlify/tree/master/packages/gqlify-firebase)
* [Firestore](https://github.com/Canner/gqlify/tree/master/packages/gqlify-firestore)
* [MongoDB](https://github.com/Canner/gqlify/tree/master/packages/gqlify-mongodb)
