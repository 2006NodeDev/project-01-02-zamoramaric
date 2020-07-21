import {Project1Client} from '.'
import { User } from '../../Models/User';

export const Project1SaveNewUser = async (newUser:User) => {
    
    try{
        let response = await Project1Client.post('/users//newaccount', newUser)
        console.log(response);
        return response.data//should be the user object
    } catch(e){
        console.log(e);
        //should probably do something is we get an error
    }
}
