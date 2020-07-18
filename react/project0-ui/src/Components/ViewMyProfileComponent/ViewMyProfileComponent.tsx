//on the path /profile/ idnum
//w/id send request to api to get 
import react, { FunctionComponent, useState, useEffect } from 'react'
import {MyProfileComponent} from '../MyProfileComponent/MyProfileComponent'
import { User } from '../../Models/User'
import { useParams } from 'react-router'
import { Project1getUserById } from '../../Remote/project1-app-api/Project1getUserById'
import React from 'react'

// || userProfile.userId !== +userId
//let {userId} = useParams()
//changeUserProfile(await getUserById(userId))

export const ViewMyProfileComponent:FunctionComponent <any> = (props) =>{
let [userProfile, changeUserProfile] = useState <null | User> (null)
let {userId} = useParams()

//will run after every single render
useEffect(()=>{
    let getUser = async()=>{
        //await user userinfo and than call state 
        let userInfo = await Project1getUserById(userId)
        changeUserProfile( userId)
    }
    //havent gotten user profile yet
    if(!userProfile || userProfile.userId !== +userId){
        getUser()
    }

})

return (

(userProfile)?
<MyProfileComponent user = {userProfile} />
:
<div>

<h1>User Not Found</h1>

</div>
)

}
