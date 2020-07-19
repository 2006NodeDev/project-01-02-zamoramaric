import React, { FunctionComponent, useEffect, useState} from 'react'
import {project0GetAllUsers} from '../../Remote/project1-app-api/project0GetAllUsers'
import { MyProfileComponent } from '../MyProfileComponent/MyProfileComponent'

export const AllUsersComponent:FunctionComponent<any> = (props) => {

    let [allUsers, changeAllUsers] = useState([])
    
    
    useEffect(()=>{

        //async func that can update state w/fetched users
        const getUsers = async ()=>{
            let response = await project0GetAllUsers()
            changeAllUsers(response)

        }


        //only callthat function of we haven't already called if
        if (allUsers.length === 0){
            //get the users
            //update the state with those users
            getUsers()
        }
    })

    let userDisplay = allUsers.map((user)=>{
       return <MyProfileComponent user = {user} />
    })

return (
<div>
    {userDisplay}
</div>

)
}