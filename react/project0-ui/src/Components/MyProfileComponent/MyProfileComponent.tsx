import {Redirect} from 'react-router-dom'
import React from 'react'
//export const CreateAcctComponent {
    export function MyProfileComponent(props:any){


        return(
        (props.user) ?
            <div>


            </div>
        :
        <Redirect to ='/login'/>
        )
   
    }
        