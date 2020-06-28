'use strict';

import context from './context'
import schema from './schema'
import { graphql } from "graphql";

const handlePost = async request => {
  let json;

  try {
    json = await request.json()
  } catch (error) {
    return new Response(`Syntax Error: Could not parse request`, { status: 400 });
  }

  const { query, variables, operationName } = json
  const result = await graphql(
    schema,
    query || ``,
    null,
    await context(request),
    variables,
    operationName
  )

  return new Response(JSON.stringify(result), { headers: { "Content-Type": `application/json` } })
}

export default async request => {
  try {
    switch (request.method.toLowerCase()) {
      case `post`:
        return await handlePost(request)
        break;

      default:
        return new Response(``, { status: 405 });
    }
  } catch (error) {
    return new Response(`Internal Server Error`, { status: 500 });
  }
}
