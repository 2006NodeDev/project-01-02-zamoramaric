//project0GetAllUsers
import {Project1Client} from '.'
export const project0GetAllUsers = async () => {

    try{
        let response = await Project1Client.get ('/users')
        return response.data
    }
    catch(e){
        console.log(e)
    }

}
