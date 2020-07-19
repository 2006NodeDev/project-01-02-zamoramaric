import { AttractionsDestin } from "../models/AttractionsDestin";
import { AttractionDTO } from "../dtos/dto - attractions";

//declaring the user model variables for conversion
export function AttractDTOAttractConvertor(udto: AttractionDTO): AttractionsDestin{
    return {
        attract_id: udto.attract_id,
        USLocation: udto.USLocation,
        capital: udto.capital,
        region: udto.region,
        attraction: udto.attraction,       
    }
}