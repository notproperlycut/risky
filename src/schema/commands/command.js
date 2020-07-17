import { objectType } from "@nexus/schema";

export const commandPayload = objectType({
  name: "commandPayload",
  definition(t) {
    t.id('id')
  }
})
