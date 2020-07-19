import { PoolClient } from "pg";
import { connectionPool } from ".";
import { AttractionsDestin } from "../models/AttractionsDestin";
import { AttractDTOAttractConvertor } from "../utils/AttractDTOAttractConvertor";



export async function getAllAttractions():Promise<AttractionsDestin[]> {
    //first thing is declare a client
    let client: PoolClient
    try {
        //get a connection
        client = await connectionPool.connect()
        //send the query
        let results = await client.query(`select "attract_id","USLocation","capital","region","attraction" from project1.destinAttrac;`)
        return results.rows.map(AttractDTOAttractConvertor)//return the rows
       // return UserDTOtoUserConver(results.rows[0])//there should only ever be one row
    } catch (e) {
        //if we get an error we don't know 
        console.log(e)
        throw new Error('Unhandled Error Occured')
    } finally {
        //let the connectiopn go back to the pool
        client && client.release()
    }
}