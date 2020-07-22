import express, { Request, Response, NextFunction } from 'express'
//import { authenticationMiddleware } from '../middleware/authent-middleware'
import { getUserById,getAllUsers,UpdatesToUser,saveNewUser } from '../daos/dao - user'
//import {UserNewInputError} from '../errors/UserInputError'
//import {authorizationMiddleware} from '../middleware/authoriz-middleware'
import { User } from '../models/User'
import {UserInputError} from '../errors/UserInputError'

export const userRouter = express.Router() //creating the userRouter variable to use as a router 

//userRouter.use(authenticationMiddleware)

//get by id - using the get verb to find a user through an id
userRouter.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    //, authorizationMiddleware(['admin', 'Finanical Manager'])
    let { id } = req.params
    if (isNaN(+id)) {
        // responding with a 400 error:"Id needs to be a number"
        res.status(400).send('Id needs to be a number')
    } else {
        try {
            let user = await getUserById(+id)
            res.json(user)
        } catch (e) {
            next(e)
        }
    }
})
//authorizMiddleware([//get

//get all users
userRouter.get('/', async (req:Request, res:Response, next:NextFunction)=>{
    //authorizationMiddleware(['admin', 'Finanical Manager']),
try { 
    let allUsers = await getAllUsers()
    res.json(allUsers)
}catch(e){
    next(e)
}

})

//update user record
userRouter.patch('/', async (req:Request, res:Response, next:NextFunction) => {
    // authorizationMiddleware(['admin']),
    let { userId,
        username,
        password,
        firstName,
        lastName,
        email,
        role } = req.body
    if(!userId) { //update request must contain a userId
        res.status(400).send('User Updates Require UserId and at Least One Other Field')
    }
    else if(isNaN(+userId)) { //check if userId is valid
        res.status(400).send('Id Needs to be a Number')
    }
    else {
        let updatedUserInfo:User = {
            userId,
            username,
            password,
            firstName,
            lastName,
            email,
            role
        }
        updatedUserInfo.username = username || undefined
        updatedUserInfo.password = password || undefined
        updatedUserInfo.firstName = firstName || undefined
        updatedUserInfo.lastName = lastName || undefined
        updatedUserInfo.email = email || undefined
        updatedUserInfo.role = role || undefined
        try {
            let result = await UpdatesToUser(updatedUserInfo)
            res.json(result)
        } catch (e) {
            console.log(e)
            next(e)
        }
    }
}) 

//Create New
userRouter.post('/newaccount', async (req: Request, res: Response, next: NextFunction) => {
    // get input from the user
    let { username, password,firstName, lastName, email, role } = req.body//a little old fashioned destructuring
    //verify that input
    if (!username || !password || !role) {
        next(new UserInputError)
    } else {
        //try  with a function call to the dao layer to try and save the user
        let newUser: User = {
            username,
            password,
            firstName,
            lastName,
            role,
            userId: 0,
            email,
        }
        newUser.email = email || null
        try {
            let savedUser = await saveNewUser(newUser)
            res.json(savedUser)// needs to have the updated userId
        } 
        catch (e) {
            next(e)
        }
    }
})
