'use strict';

import { makeSchema, queryField } from "@nexus/schema";

import * as types from './types'

const schema = makeSchema({
  types,
  outputs: {}
})

export default schema
