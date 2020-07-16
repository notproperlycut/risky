import { objectType } from "@nexus/schema";

export const Deployment = objectType({
  name: "Deployment",
  definition(t) {
    t.field('player', {
      type: 'Player'
    })
    t.field('territory', {
      type: 'Territory'
    })
    t.int('battalionCount')
  }
})
