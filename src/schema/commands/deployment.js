import { inputObjectType, mutationField, arg } from "@nexus/schema";
import { commandSucceed } from '../../game'

export const deployBattalionInput = inputObjectType({
  name: "deployBattalionInput",
  definition(t) {
    t.id('territoryId', { required: true })
  }
})

export const redeployBattalionsInput = inputObjectType({
  name: "redeployBattalionsInput",
  definition(t) {
    t.id('fromTerritoryId', { required: true })
    t.id('toTerritoryId', { required: true })
    t.int('battalionCount', { required: true })
  }
})

export const deployBattalion = mutationField("deployBattalion", {
  type: 'commandPayload',
  args: {
    input: arg({
      type: deployBattalionInput,
      required: true
    })
  },
  resolve: async () => commandSucceed()
})

export const redeployBattalions = mutationField("redeployBattalions", {
  type: 'commandPayload',
  args: {
    input: arg({
      type: redeployBattalionsInput,
      required: true
    })
  },
  resolve: async () => commandSucceed()
})
