import { apiSever } from "../config/api";
import { ResponseAPIVehicles } from "../infrastructure/interfaces/api-interfaces";


export const getAllVehicles = async () : Promise<ResponseAPIVehicles[]> => {
    try {
        const url = '/vehicles'

        const { data }  = await apiSever.get<ResponseAPIVehicles[]>(url);

        return data

    } catch (error) {
        console.log('error', error)
        throw new Error("Error getting Vehicles");
    }
}