import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebSite } from '../screens/website/WebSite.tsx';
import { Login } from '../screens/Login/Login.tsx';
import { VehicleDetails } from "../screens/VehicleDetails/VehicleDetails.tsx";
import { DashBoard } from "../screens/DashBoard/DashBoard.tsx";
import { EditCreate } from "../screens/EditCreate/EditCreate.tsx";

export const Navigator = () =>{
    return (
        <>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<WebSite />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/vehicle-details/:id" element={<VehicleDetails />} /> 
                    <Route path="/dashboard" element={<DashBoard />}/>
                    <Route path="/edit-create/:id?" element={<EditCreate />} /> 
                    {/* 
                    <Route path="*" element={<NotFound />}/> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}