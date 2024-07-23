import express from 'express';
import * as AuthController from "../controller/auth";
import { aunthenticate } from '../middleware/auth';
import { Request } from '../interface/auth';
import { Response } from 'express';
const router = express();

//Route to handle login
router.post("/login", AuthController.login);

router.get("/checkToken",aunthenticate,(req:Request,res:Response)=>{res.json({user:req.user})});

//Route to handle new access token from refresh token
//startrouter.post("/refreshAccessToken", AuthController.refreshAccessToken);

export default router;