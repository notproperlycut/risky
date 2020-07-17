import { objectType, unionType, interfaceType } from "@nexus/schema";

export const GameStateWithPlayer = interfaceType({
  name: "GameStateWithPlayer",
  definition(t) {
    t.field('playing', {
      type: 'Player'
    })
    t.resolveType((item) => item.name);
  }
})

export const GameState = unionType({
  name: "GameState",
  definition(t) {
    t.members("SetupDeployUnoccupied", "SetupDeploy", "Trade", "TradeOrDeploy", "Deploy", "AttackOrFortify", "Defend", "Won", "Abandoned");
    t.resolveType((item) => item.name);
  }
})

export const SetupDeployUnoccupied = objectType({
  name: "SetupDeployUnoccupied",
  definition(t) {
    t.implements('GameStateWithPlayer')
  }
})

export const SetupDeploy = objectType({
  name: "SetupDeploy",
  definition(t) {
    t.implements('GameStateWithPlayer')
  }
})

export const Trade = objectType({
  name: "Trade",
  definition(t) {
    t.implements('GameStateWithPlayer')
  }
})

export const TradeOrDeploy = objectType({
  name: "TradeOrDeploy",
  definition(t) {
    t.implements('GameStateWithPlayer')
  }
})

export const Deploy = objectType({
  name: "Deploy",
  definition(t) {
    t.implements('GameStateWithPlayer')
  }
})

export const AttackOrFortify = objectType({
  name: "AttackOrFortify",
  definition(t) {
    t.implements('GameStateWithPlayer')
  }
})

export const Defend = objectType({
  name: "Defend",
  definition(t) {
    t.implements('GameStateWithPlayer')
    t.field('defending', {
      type: 'Deployment'
    })
    t.field('attackedFrom', {
      type: 'Deployment'
    })
    t.int('attackedWithBattalions')
  }
})

export const Won = objectType({
  name: "Won",
  definition(t) {
    t.implements('GameStateWithPlayer')
  }
})

export const Abandoned = objectType({
  name: "Abandoned",
  definition(t) {
    t.field('by', {
      type: 'Player'
    })
  }
})
