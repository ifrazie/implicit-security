import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  ContactSubmission: a
    .model({
      name: a.string().required(),
      email: a.email().required(),
      message: a.string().required(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 365,
    },
  },
});
