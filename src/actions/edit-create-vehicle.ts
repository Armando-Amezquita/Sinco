import { apiSever } from "../config/api";
import { ResponseAPIVehicles } from "../infrastructure/interfaces/api-interfaces";
import { savedVehicle } from "../infrastructure/interfaces/save-vehicle";

export const createVehicle = async (vehicle: savedVehicle) : Promise<ResponseAPIVehicles> => {
    try {
        const url = '/vehicles'

        const { data }  = await apiSever.post<ResponseAPIVehicles>(url, vehicle);

        return data

    } catch (error) {
        console.log('error', error)
        throw new Error("Error in created Vehicles");
    }
}

export const updateVehicle = async (vehicle: savedVehicle) : Promise<ResponseAPIVehicles> => {
    try {
        const url = '/vehicles'

        const { data }  = await apiSever.put<ResponseAPIVehicles>(url, { _id: vehicle?._id, vehicle});
        return data

    } catch (error) {
        console.log('error', error)
        throw new Error("Error in created Vehicles");
    }
}
