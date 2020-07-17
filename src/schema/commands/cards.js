import { inputObjectType, mutationField, arg } from "@nexus/schema";
import { commandSucceed } from '../../game'

export const playCardsInput = inputObjectType({
  name: "playCardsInput",
  definition(t) {
    t.list.id('cardIds', { required: true })
  }
})

export const playCards = mutationField("playCards", {
  type: 'commandPayload',
  args: {
    input: arg({
      type: playCardsInput,
      required: true
    })
  },
  resolve: async () => commandSucceed()
})
