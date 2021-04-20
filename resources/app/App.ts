import Ux from './Ux'

class App {
  public Ux = Ux

  public getConfig() {
    // @ts-ignore
    return APP_CONFIG as App.StaticConfig
  }
}

export default new App()
