import { Project1Client } from "."


//:Promise<User> 
export const SiteLogin = async(username:string, password:string)=>{
    let credentials = {
        username,
        password
    }
    try{
    let response = await Project1Client.post('/login', credentials)
    console.log(response);
    return response.data
    }
    catch(e){

    }
}