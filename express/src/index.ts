import express, { Request, Response, NextFunction } from 'express'
import { loggingMiddleware } from './middleware/loggingMiddleware'
import { sessionMiddleware } from './middleware/sessionMiddleware'
import { BadCredentError } from './errors/BadCredError'
import { getUserByUsernameAndPassword } from './daos/dao - user'
import { userRouter } from './routers/userRouter'
import { corsFilter } from './middleware/cors-filter'

const app = express()//call the express function
app.use(express.json())//example of middleware

app.use(loggingMiddleware)
app.use(sessionMiddleware)
app.use(corsFilter)
app.use('/users', userRouter)// redirect all requests on /users to the router

app.post('/login', async (req:Request, res:Response, next:NextFunction)=>{
    // destructuring to see ./routers/book-router
    let username = req.body.username
    let password = req.body.password
    // checking if the user did not enter a usrname/password send an error 
    if(!username || !password){
        throw new BadCredentError()
    } else {
        try{
            let user = await getUserByUsernameAndPassword(username, password)
            req.session.user = user//  add user data to the session
            // so we can use that data in other requests
            res.json(user)
        }catch(e){
            next(e)
        }
    }
})






app.use((err,req,res,next)=>{

    if (err.statusCode){
        res.status(err.statusCode).send(err.message)
    }
    else{
        console.log(err)
        res.status(500).send('Oops, something went wrong')
    }}
)
app.listen(2006,()=>{
    console.log('Server has started')
})

//trigger git
