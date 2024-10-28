import { apiSever } from "../config/api";

export const login = async (user: string, password: string) : Promise<any> => {
    try {
        const url = `/auth/login`

        const { data }  = await apiSever.post(url, { user, password });
        console.log('data', data)

        return data

    } catch (error) {
        console.log('error', error)
        throw new Error(`Error getting user`);
    }
}