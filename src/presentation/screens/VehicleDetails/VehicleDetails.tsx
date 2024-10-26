import { Button } from "@mui/material";
import img from "../../../assets/images/car.png"
import './VehicleDetails.scss'
import { AccordionItem } from "../../components/utils/Accordion/Accordion";
import { Navbar } from "../../components/Navbar/Navbar";

export const VehicleDetails = () => {
    return (
        <div className="details">
            <Navbar />
            <div className="details__container">
                <section className="details__contentCar">
                    <div className="details__contentCar-header">
                        <p className="details__contentCar-headerName">Honda</p>
                        <p className="details__contentCar-headerPrice">$<span>899</span></p>
                    </div>
                    <img src={img} alt={img} className="details__contentCar-img" />

                    <div className="details__contentCar-imgContent">
                        <p className="details__contentCar-otherImgs">others images</p>
                    </div>
                </section>
                <section className="details__contentDescription">
                    <div>
                        <AccordionItem title="Calificación">
                            <p>Calificación: Estrellas</p>
                        </AccordionItem>
                        <AccordionItem title="Colores disponibles">
                            <ul>
                                <li>Rojo</li>
                                <li>Azul</li>
                                <li>Negro</li>
                            </ul>
                        </AccordionItem>
                        <AccordionItem title="Descripción">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
                        </AccordionItem>
                        <AccordionItem title="Características">
                            <p>Fecha de Registro: 2023-01-15</p>
                            <p>Popular: true</p>
                        </AccordionItem>
                    </div>
                    <div className="details__contentDescription-footer">
                        <p>Marca: Honda</p>
                        <Button
                            variant="outlined"
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
        </div>
    );
}
