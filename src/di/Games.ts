import { createClient, Client } from "@libsql/client";
import { IGame } from "../interface/Game";

export class Games implements IGame {
  private file = "games.db"
  private m: Client;

  constructor() {
    this.m = createClient({
      url: `file:${this.file}`
    })
  }

  async GetGames() {
    const games = await this.m.execute("SELECT * FROM games LIMIT 1")
    return games.rows
  }

  async GetGameById(id: number) {
    const getGame = await this.m.execute({
      sql: "SELECT * FROM games WHERE id = ?",
      args: [id]
    })
    
    const row = getGame.rows

    return row
  }
}
