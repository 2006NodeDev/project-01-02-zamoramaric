import React, { FunctionComponent, useEffect, useState} from 'react'
import {project0GetAllAttractions} from '../../Remote/project1-app-api/project0GetAllAttractions'
import { AttractionComponent } from '../AttractionComponent/AttractionComponent'
import { TitleComponent } from '../TitleComponent/TitleComponent'

export const AllAttractionsComponent:FunctionComponent<any> = (props) => {

    let [allAttractions, changeAllAttractions] = useState([])
    
    
    useEffect(()=>{

        //async func that can update state w/fetched attractions
        const getAttractions = async ()=>{
            let response = await project0GetAllAttractions()
            changeAllAttractions(response)

        }


        //only callthat function of we haven't already called if
        if (allAttractions.length === 0){
            //get the attractions
            //update the state with those attractions
            getAttractions()
        }
    })

    let attractionDisplay = allAttractions.map((attraction)=>{
       return <AttractionComponent attraction = {attraction} />
    })
    
return (
<div>
    <TitleComponent size='large' title={`US Attractions Per State`} />
    {attractionDisplay}
</div>

)
}