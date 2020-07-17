import { inputObjectType, mutationField, arg } from "@nexus/schema";
import { commandSucceed } from '../../game'

export const attackInput = inputObjectType({
  name: "attackInput",
  definition(t) {
    t.id('fromTerritoryId', { required: true })
    t.id('toTerritoryId', { required: true })
    t.int('withBattalionsCount', { required: true })
  }
})

export const defendInput = inputObjectType({
  name: "defendInput",
  definition(t) {
    t.int('withBattalionsCount', { required: true })
  }
})

export const attack = mutationField("attack", {
  type: 'commandPayload',
  args: {
    input: arg({
      type: attackInput,
      required: true
    })
  },
  resolve: async () => commandSucceed()
})

export const defend = mutationField("defend", {
  type: 'commandPayload',
  args: {
    input: arg({
      type: defendInput,
      required: true
    })
  },
  resolve: async () => commandSucceed()
})
