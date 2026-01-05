import connection from "../database/connection.js";
import * as queries from "../database/queries.js";

//============================================
//               registerUser
//============================================
export async function registerUser(username, password_hash) {
  const [results, fields] = await connection.query(queries.ADD_USER, [
    username,
    password_hash,
  ]);
}

//============================================
//             getUserByUsername
//============================================
export async function getUserByUsername(username) {
  const [results, fields] = await connection.query(
    queries.GET_USER_BY_USERNAME,
    [username]
  );

  return results[0];
}
