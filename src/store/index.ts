import { makeAutoObservable } from 'mobx'

class Store implements IMobx {
  constructor() {
    makeAutoObservable(this)
  }

  public token: boolean = false

  public setToken(val: boolean) {
    this.token = val
  }
}

export const store = new Store()
