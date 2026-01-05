import bcrypt from "bcrypt";

const SALT_ROUNDS = 10

//======================================
//            hash Password
//======================================
export async function hashPassword(password) {
    
    const hashed = await bcrypt.hash(password, SALT_ROUNDS);

    return hashed
}

//======================================
//          compare Passwords
//======================================
export async function comparePasswords(hashedPwd, pwd) {

    const result = await bcrypt.compare(pwd, hashedPwd);

    return result;
}
