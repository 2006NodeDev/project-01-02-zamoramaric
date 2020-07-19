

//project0GetAllAttractions
import {Project1Client} from '.'
export const project0GetAllAttractions = async () => {

    try{
        let response = await Project1Client.get ('/attractions')
        return response.data
    }
    catch(e){
        console.log(e)
    }

}
