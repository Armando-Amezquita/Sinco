import axios from "axios";

export const apiSever = axios.create({
    baseURL: "http://localhost:3000/api"
})