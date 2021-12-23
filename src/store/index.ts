import { makeAutoObservable } from 'mobx'

class Store {
  constructor() {
    makeAutoObservable(this)
  }
  count = 0
  add() {
    this.count += 1
  }
}

export const store = new Store()
