/* eslint-disable prettier/prettier */
import { type QueryResult, type Connection } from 'mysql2';

export class User {
  private readonly connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  };

  transaction(sqlQuery: string): Promise<QueryResult> {
    return new Promise((res, rej) => {
      this.connection.query(sqlQuery, (error, results) => {
        return error ? rej(error) : res(results);
      })
    })
  };

  async user(userId: number): Promise<QueryResult> {
    return await this.transaction(`SELECT * FROM users WHERE ID = ${userId}`);
  };

  async addUser(userId: number): Promise<QueryResult> {
    return await this.transaction(`INSERT INTO users (ID) VALUES (${userId})`);
  };

  async updateUserName(
    userId: number,
    userName: string,
  ): Promise<QueryResult> {
    return await this.transaction(
      `UPDATE users SET user_name = ${userName} WHERE ID = ${userId})`
    );
  };
};
