
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import brand from "../../../../assets/images/DC.png"
import car from "../../../../assets/images/car.png"
import { ResponseAPIVehicles } from '../../../../infrastructure/interfaces/api-interfaces'

interface Props {
    vehicle: ResponseAPIVehicles;
    index?: number;
}

export const Card = ({ vehicle, index } : Props) => {

    const navigate = useNavigate();

    const handleDetailsClick = () => {
        navigate(`/vehicle-details/${vehicle._id}`);
    };

    const colors = [
        "#50E3C2", "#B8E986", "#BD10E0", "#F5A623", "#F8E71C",
        "#4A90E2", "#D0011B", "#F8E71C",
        "#B8E986", "#50E3C2"
    ];

    const backgroundColor = index !== undefined 
        ? colors[index % colors.length] 
        : "#D3D3D3";

  return (
    <article key={vehicle._id} 
        className={`card`} 
        style={{ backgroundColor }}
    >
        <p className="card__brand">Drive Cycle</p>
        <div className="card__header">
            <div className="card__header-brand">
                <img src={brand} alt={brand} className="card__brandImg" />
                <p className="card__brand-name">{vehicle.model}</p>
            </div>
            <Button
                variant="outlined"
                type="submit"
                size="small"
                sx={{
                    fontSize: "10px",
                    borderRadius: '20px',
                    border: "1px solid #f65151",
                    width: 'fit-content',    
                    height: 'fit-content',     
                    padding: '4px 8px',        
                    boxSizing: 'border-box',   
                    minWidth: 'unset',         
                    minHeight: 'unset',        
                    backgroundColor: '#fff',
                    color: '#f65151',
                    '&:hover': {
                        backgroundColor: '#f65151',
                        color: '#fff'
                    },
                }}
                onClick={ handleDetailsClick }
            >Detalles</Button>
            <div className="actions">
                <button className="action">
                    <EditIcon fontSize="medium" />
                </button>
                <button className="action">
                    <DeleteIcon fontSize="medium"/>
                </button>
            </div>
        </div>
        <img src={car} alt={car} className="card__img" />
        <div className="card__footer">
            <p> kilometraje: {vehicle.km}</p>
            <p className="details__contentCar-headerPrice">$ <span>{vehicle?.value ? Number(vehicle.value).toLocaleString('es-AR') : '0'}</span></p>
        </div>
    </article>
  )
}
