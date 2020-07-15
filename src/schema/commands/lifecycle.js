import { inputObjectType, mutationField, arg } from "@nexus/schema";
import { commandSucceed } from '../../game'

export const startGameInput = inputObjectType({
  name: "startGameInput",
  definition(t) {
    t.list.id('playerIds', { required: true })
  }
})

export const abandonGameInput = inputObjectType({
  name: "abandonGameInput",
  definition(t) {
    t.id('gameId', { required: true })
  }
})

export const startGame = mutationField("startGame", {
  type: 'commandPayload',
  args: {
    input: arg({
      type: startGameInput,
      required: true
    })
  },
  resolve: async () => commandSucceed()
})

export const abandonGame = mutationField("abandonGame", {
  type: 'commandPayload',
  args: {
    input: arg({
      type: abandonGameInput,
      required: true
    })
  },
  resolve: async () => commandSucceed()
})
