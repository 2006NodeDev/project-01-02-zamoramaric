import express, { Request, Response, NextFunction } from 'express'
import { getAllAttractions } from '../daos/dao - attractions'

export const attractionsRouter = express.Router() //creating the userRouter variable to use as a router 


attractionsRouter.get('/', async (req:Request, res:Response, next:NextFunction)=>{
    //authorizationMiddleware(['admin', 'Finanical Manager']),
try { 
    let allAttractions = await getAllAttractions()
    res.json(allAttractions)
}catch(e){
    next(e)
}

})