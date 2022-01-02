import { makeAutoObservable } from 'mobx'

class Store implements IMobx {
  constructor() {
    makeAutoObservable(this)
  }

  public token: boolean = true

  public setToken(val: boolean) {
    this.token = val
  }
}

export const store = new Store()
