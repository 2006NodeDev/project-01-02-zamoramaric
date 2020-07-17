import {Redirect} from 'react-router-dom'
import React from 'react'
//export const CreateAcctComponent {
    export function EditProfileComponent(props:any){


        return(
        (props.user) ?
            <div>

                <h1 > Welcome to Edit Profile </h1>

            </div>
        :
        <Redirect to ='/login'/>
        )
   
    }
        