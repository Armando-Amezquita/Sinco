import { useEffect, useState } from "react";
import { getAllVehicles } from "../../../actions/get-vehicles";
import { ResponseAPIVehicles } from "../../../infrastructure/interfaces/api-interfaces";
import { Card } from "../utils/Card/Card";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Cars.scss"

export const Cars = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [vehiclesPopular, setVehiclesPopular] = useState<ResponseAPIVehicles[]>([]);
    const [vehiclesNotPopular, setVehiclesNotPopular] = useState<ResponseAPIVehicles[]>([]);
    const [vehiclesSold, setVehiclesSold] = useState<ResponseAPIVehicles[]>([]);
    const [token, setToken] = useState<string | null>(null);

    const handleLoadVehicles = async () => {
        const data = await getAllVehicles();
        setVehiclesPopular(data.filter(vehicle => vehicle.popular && !vehicle.sold ))
        setVehiclesNotPopular(data.filter(vehicle => !vehicle.popular && !vehicle.sold ));
        setVehiclesSold(data.filter(vehicle => vehicle.sold ));
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        handleLoadVehicles();
    }, []);

    useEffect(() => {
        const storedToken = localStorage.getItem('authToken');
        setToken(storedToken);
      }, []);

    return (
        <section className="cars">
            { loading && <p>Cargando...</p> }
            <div className="cars__titleContainer">
                <p className="cars__title">Nuestros carros mas populares </p>
                {
                    token?.length &&
                    <Button
                        variant="outlined"
                        type="submit"
                        size="small"
                        onClick={()=>navigate('/edit-create')}
                        sx={{
                            fontSize: "14px",
                            borderRadius: '20px',
                            border: "1px solid #f65151",    
                            padding: '6px 18px',        
                            boxSizing: 'border-box',   
                            minWidth: 'unset',         
                            minHeight: 'unset',        
                            backgroundColor: '#fff',
                            color: '#f65151',
                        }}
                    >Crear vehiculo</Button>
                }
            </div>

            <div className="cars__content">
                {
                    !loading && vehiclesPopular.map((vehicle, index) => (
                        <Card key={vehicle._id} vehicle={vehicle} index={index} isActive={!!token?.length}/>
                    ))
                }
            </div>

            <p className="cars__title">Catalogo completo</p>
            <div className="cars__content">
                {
                    !loading && vehiclesNotPopular.map(vehicle => (
                        <Card key={vehicle._id} vehicle={vehicle} isActive={!!token?.length}/>
                    ))
                }
            </div>

            <p className="cars__title">Vehiculos vendidos</p>
            <div className="cars__content">
                {
                    !loading && vehiclesSold.map(vehicle => (
                        <Card key={vehicle._id} vehicle={vehicle} isActive={!!token?.length}/>
                    ))
                }
            </div>

        </section>
    );
}