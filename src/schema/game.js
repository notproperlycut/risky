import { objectType } from "@nexus/schema";

export const Game = objectType({
  name: "Game",
  definition(t) {
    t.list.field('players', {
      type: 'Player'
    })
  }
})
