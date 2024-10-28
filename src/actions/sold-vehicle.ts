import { apiSever } from "../config/api";

export const sold = async (id: string) : Promise<any> => {
    try {
        const url = `/vehicles/sell/${id}`

        const { data }  = await apiSever.put(url);
        console.log('data', data)

        return data

    } catch (error) {
        console.log('error', error)
        throw new Error(`Error getting user`);
    }
}