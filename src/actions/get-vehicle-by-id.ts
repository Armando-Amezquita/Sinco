import { apiSever } from "../config/api";
import { ResponseAPIVehicles } from "../infrastructure/interfaces/api-interfaces";

export const getVehicleById = async (id: string) : Promise<ResponseAPIVehicles> => {
    try {
        const url = `/vehicles/${id}`

        const { data }  = await apiSever.get<ResponseAPIVehicles>(url);

        return data

    } catch (error) {
        console.log('error', error)
        throw new Error(`Error getting Vehicle by Id ${id}`);
    }
}