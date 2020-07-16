import { siteLoginClient } from "."



export const SiteLogin = async(username:string, password:string) =>{
    let credentials = {
        username,
        password
    }
    try{
    let response = await siteLoginClient.post('/login', credentials)
    console.log(response);
    }
    catch(e){

    }
}