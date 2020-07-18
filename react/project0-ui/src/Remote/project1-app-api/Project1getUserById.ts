import {Project1Client} from '.'


export const Project1getUserById = async (userId:number)=>{

    try{
        let response = await Project1Client.get(`/users/${userId}`)
        return response.data
    }
    catch(e){
        console.log(e)
    }
}