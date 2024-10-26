import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebSite } from '../screens/website/WebSite.tsx';
import { Login } from '../screens/Login/Login.tsx';

export const Navigator = () =>{
    return (
        <>
            <BrowserRouter >
                <Routes>
                    <Route path="/" element={<WebSite />}/>
                    <Route path="/login" element={<Login />}/>
                    {/* <Route path="/signup" element={<SignUp />}/>
                    <Route path="/dashboard" element={<DashBoard />}/>
                    <Route path="*" element={<NotFound />}/> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}