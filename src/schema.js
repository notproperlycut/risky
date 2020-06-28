'use strict';

import { makeSchema, queryField } from "@nexus/schema";

const types = {
  hello: queryField("hello", {
    type: "String",
    resolve: async () => "Hello nexus world"
  })
}

const schema = makeSchema({
  types,
  outputs: {}
})

export default schema
