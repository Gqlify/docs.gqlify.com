---
id: graphql-api-create-own-plugin
title: Create Your Own Plugin
---

In order to create your plugin, you need to create a class implementing `Plugin` interface.

> Learn about [Plugin interface](/docs/graphql-api-plugins)

### Example
For example, we can create a `sendEmail` plugin to append a mutation with ability to send email.

```typescript
import { Plugin } from '@gqlify/server';

export class SendEmailPlugin implements Plugin {
  public init(context: Context) {
    const { root } = context;

    // append mutation
    root.addMutation(`sendEmail(email: String!): Boolean`);
  }

  public resolveInMutation() {
    // return `sendEmail` resolver
    return {
      sendEmail: async (root, args, context) => {
        await context.emailService.send(args.email);
        return true;
      },
    };
  }
}
```
