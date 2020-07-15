import { objectType } from "@nexus/schema";

export const Player = objectType({
  name: "Player",
  definition(t) {
    t.list.field('games', {
      type: 'Game'
    })
  }
})
