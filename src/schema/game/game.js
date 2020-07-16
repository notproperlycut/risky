import { objectType } from "@nexus/schema";

export const Game = objectType({
  name: "Game",
  definition(t) {
    t.list.field('hands', {
      type: 'Hand'
    })
    t.field('map', {
      type: 'Map'
    })
    t.field('state', {
      type: 'GameState'
    })
  }
})
