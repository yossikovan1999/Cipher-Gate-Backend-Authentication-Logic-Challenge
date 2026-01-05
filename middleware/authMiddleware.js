import { comparePasswords } from "../utils/password.js";
import {getUserByUsername} from "../dal/userDal.js";

export async function authMiddleware(req, res, next){

    try{
        const {username, password} = req.body;

        const user = await getUserByUsername(username);

        if(!await comparePasswords(user.password_hash ,password)){
            return res.status(409).json({message : "user not authorized."})
        };
        
        next();
        
    }catch(error){
        next(error);
    }
}