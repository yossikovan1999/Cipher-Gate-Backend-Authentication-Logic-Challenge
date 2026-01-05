import mysql from 'mysql2/promise';
import * as queries from "./queries.js";

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ciphergate',
});

await connection.query(queries.CREATE_USERS_TABLE);

export default connection;