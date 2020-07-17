import { objectType } from "@nexus/schema";

export const Map = objectType({
  name: "Map",
  definition(t) {
    t.list.field('territories', {
      type: 'Territory'
    })
  }
})
