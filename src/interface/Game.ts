import { Row } from "@libsql/client";

// dependencia
export interface IGame {
  GetGames(): Promise<Row[]>
  GetGameById(id: number): Promise<any>
}
