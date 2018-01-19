import { Messages } from '/both/collections'

export async function TurnOffBot (ID) {
  Messages.upsert({_id: ID}, {$set: {botActive: false}})
}
