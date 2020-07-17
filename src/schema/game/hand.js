import { objectType, enumType } from "@nexus/schema";

export const Hand = objectType({
  name: "Hand",
  definition(t) {
    t.field('player', {
      type: 'Player'
    })
    t.int('battalionCount')
  }
})
