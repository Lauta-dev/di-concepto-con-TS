import { Games } from "./di/Games";
import { IGame } from "./interface/Game";

class Main {
  private m: IGame

  constructor(game: IGame) {
    this.m = game
  }

  async main() {
    const game = await this.GetGameById(1)
    console.log(game)
  }

  /* private async GetGames() {
    return this.m.GetGames()
  } */

  private async GetGameById(id: number) {
    return this.m.GetGameById(id)
  }
}

new Main(new Games).main()
