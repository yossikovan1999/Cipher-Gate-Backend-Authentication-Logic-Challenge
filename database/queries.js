
export const CREATE_USERS_TABLE = `
CREATE TABLE IF NOT EXISTS users(
    id INT PRIMARY KEY AUTO_INCREMENT, 
    username VARCHAR(50) UNIQUE,
    password_hash TEXT
);
`

export const ADD_USER =`
INSERT INTO users (username, password_hash)
VALUES (?, ?);
` 

export const GET_USER_BY_USERNAME = `
SELECT * FROM users
WHERE username = ?
`