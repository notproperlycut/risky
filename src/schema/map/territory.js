import { objectType, enumType } from "@nexus/schema";

export const BorderType = enumType({
  name: "BorderType",
  members: ["LAND", "SEA"]
});

export const Territory = objectType({
  name: "Territory",
  definition(t) {
    t.list.field('borders', {
      type: 'Border'
    })
    t.field('map', {
      type: 'Map'
    })
    t.field('deployment', {
      type: 'Deployment',
      nullable: true
    })
  }
})

export const Border = objectType({
  name: "Border",
  definition(t) {
    t.field('fromTerritory', {
      type: 'Territory'
    })
    t.field('toTerritory', {
      type: 'Territory'
    })
    t.field('type', {
      type: 'BorderType'
    })
  }
})
