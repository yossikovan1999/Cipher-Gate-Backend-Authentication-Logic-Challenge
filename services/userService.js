import {hashPassword, comparePasswords} from "../utils/password.js";
import * as userDal from "../dal/userDal.js";

//========================================
//                 signUp
//========================================
export async function signUp(username, password){

    const hashsed = await hashPassword(password);
    
    //store the hashed password and username into the db.
    await userDal.registerUser(username, hashsed);
    
}