import {Project1Client} from '.'
import { User } from '../../Models/User';

export const Project1EditUser = async (updateUser:User) =>{
console.log(updateUser)
try{
    let res = await Project1Client.patch('/users', updateUser)
    console.log(res);
    return res.data
}
catch(e){
    console.log(e);
    throw e
}
}