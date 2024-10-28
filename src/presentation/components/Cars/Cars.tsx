import { useEffect, useState } from "react";
import { getAllVehicles } from "../../../actions/get-vehicles";
import { ResponseAPIVehicles } from "../../../infrastructure/interfaces/api-interfaces";
import { Card } from "../utils/Card/Card";
import "./Cars.scss"

export const Cars = () => {

    const [loading, setLoading] = useState(false);
    const [vehiclesPopular, setVehiclesPopular] = useState<ResponseAPIVehicles[]>([]);
    const [vehiclesNotPopular, setVehiclesNotPopular] = useState<ResponseAPIVehicles[]>([]);

    const handleLoadVehicles = async () => {
        const data = await getAllVehicles();
        setVehiclesPopular(data.filter(vehicle => vehicle.popular ))
        setVehiclesNotPopular(data.filter(vehicle => !vehicle.popular ))
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        handleLoadVehicles();
    }, []);


    return (
        <section className="cars">
            { loading && <p>Cargando...</p> }
            <p className="cars__title">Nuestros carros mas populares </p>
            <div className="cars__content">
                {
                    !loading && vehiclesPopular.map((vehicle, index) => (
                        <Card key={vehicle._id} vehicle={vehicle} index={index}/>
                    ))
                }
            </div>

            <p className="cars__title">Catalogo</p>
            <div className="cars__content">
                {
                    !loading && vehiclesNotPopular.map(vehicle => (
                        <Card key={vehicle._id} vehicle={vehicle}/>
                    ))
                }
            </div>

        </section>
    );
}