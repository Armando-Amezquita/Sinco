import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import car from "../../../assets/images/car.png"
import moto from "../../../assets/images/moto1.png"
import { AccordionItem } from "../../components/utils/Accordion/Accordion";
import { Navbar } from "../../components/Navbar/Navbar";
import { ModalVehicle } from "../../components/ModalVehicle/ModalVehicle";
import './VehicleDetails.scss'
import { getVehicleById } from "../../../actions/get-vehicle-by-id";
import { useParams } from "react-router-dom";
import { ResponseAPIVehicles } from "../../../infrastructure/interfaces/api-interfaces";
import GradeIcon from '@mui/icons-material/Grade';
import { sold } from "../../../actions/sold-vehicle";

export const VehicleDetails = () => {

    const params = useParams();

    const [openModal, setOpenModal] = useState<boolean>(false);

    const [loading, setLoading] = useState(false);
    const [vehicle, setVehicle] = useState<ResponseAPIVehicles | null >();

    const handleLoadVehicle = async () => {
        if (params.id) {
            const data = await getVehicleById(params.id);
            setVehicle(data);
        }
        setLoading(false);
    }

    const soldVehicle = async () => {
        if(vehicle){
            await sold(vehicle?._id);
            setVehicle((prev) => (prev ? { ...prev, sold: true } : null));
            setOpenModal(false)
        }
    }

    useEffect(() => {
        setLoading(true);
        handleLoadVehicle();
    }, []);

    if(loading){
        return <p>Cargando...</p>
    }

    return (
        <div className="details">
            <Navbar />
            <div className="details__container">
                <section className="details__contentCar">
                    {vehicle?.sold && (
                        <div className="sold-badge">Vendido</div>
                    )}
                    <div className="details__contentCar-header">
                        <p className="details__contentCar-headerName">{vehicle?.model}</p>
                        <p className="details__contentCar-headerPrice">$ <span>{vehicle?.value ? Number(vehicle.value).toLocaleString('es-AR') : '0'}</span></p>
                    </div>
                    <img src={vehicle?.typeVehicle === 'car' ? car : moto} alt={vehicle?.typeVehicle === 'car' ? car : moto} className="details__contentCar-img" />

                    <div className="details__contentCar-imgContent">
                        <p className="details__contentCar-otherImgs">others images</p>
                    </div>
                </section>
                <section className="details__contentDescription">
                    <div>
                        <AccordionItem title="Calificación">
                            {
                                Array.from({ length: Number(vehicle?.calification)|| 0 }, (_, i) => (
                                    <GradeIcon key={i} style={{ color: '#FFD700' }} /> ))
                            }
                        </AccordionItem>
                        <AccordionItem title="Colores disponibles">
                            <ul className="colors">
                                <li className="color color-red"></li>
                                <li className="color color-blue"></li>
                                <li className="color color-black"></li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem title="Descripción">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quisquam sunt perspiciatis molestiae velit nisi, molestias enim iure, minus at tempore. Asperiores, quidem? Nesciunt minus vitae quae aperiam, at possimus!</p>
                        </AccordionItem>
                        <AccordionItem title="Características">
                            {/* <p>Fecha de Registro: { vehicle?.registerDate ? vehicle.registerDate.toLocaleDateString() : 'N/A' }</p> */}
                            { vehicle?.popular && <p>Popular</p> }
                        </AccordionItem>
                    </div>
                    <div className="details__contentDescription-footer">
                        <p>{ vehicle?.model }</p>
                        <Button
                            onClick={() => setOpenModal(true)}
                            variant="outlined"
                            disabled={vehicle?.sold}
                            sx={{
                                fontSize: "14px",
                                borderRadius: '20px',
                                border: "1px solid #f65151",
                                padding: '4px 8px',
                                backgroundColor: '#fff',
                                color: '#f65151',
                                '&:hover': {
                                    backgroundColor: '#f65151',
                                    color: '#fff'
                                },
                            }}
                            >
                            Adquirir ahora
                        </Button>
                    </div>
                </section>
            </div>

            { openModal && <ModalVehicle onClick={() => setOpenModal(false)} action={soldVehicle}/> }
        </div>
    );
}
