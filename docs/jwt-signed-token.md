---
id: jwt-signed-token
title: JWT Signed Token
---

GQLify provides `context` layer, GQLify will pass it to `apollo-server`. You can put some useful information like user's data in context. For example:

```js
const jwt = require('jsonwebtoken')
const { Gqlify } = require('@gqlify/server')

const context = ({ req }) => {
  const bearerToken = (ctx.header.authorization)
    ? ctx.header.authorization.replace("Bearer ", "")
    : null;
  let user = ctx.cookies.get("user");

  if (!user) {
    user = jwt.verify(bearerToken, config.authJwtKey)
  }

  return { user }
}

const gqlify = new Gqlify({
  sdl: ...,
  dataSources: { ... },
  context
});
```

With putting some information in context, you can get this information in middleware layer or resolver layer and do the authentication flow as you want.
