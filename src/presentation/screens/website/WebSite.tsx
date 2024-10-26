import { useState } from "react";
import { Link } from "react-router-dom"; 
import { Button } from "@mui/material";
import { Mask } from "../../components/utils/Mask/Mask";
import car1 from "../../../assets/images/car1.png";
import brand from "../../../assets/images/DC.png";
import "./Website.scss";

export const WebSite = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="website">
      <Mask className="website__mask" />

        <header className="website__header">
            <nav className="website__navbar">
                <img src={brand} alt={brand} className="website__navbar-brand" />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        width: '120px',
                        backgroundColor: '#f65151',
                        borderRadius: '20px',
                        '&:hover': {
                            backgroundColor: '#A93226', 
                        },
                    }}
                >Comprar</Button>
            </nav>

            
            <div className="website__header-brand">
                <h1 className="website__header-brandName" >Vehiculos Premium</h1>
                <img src={car1} alt={car1} className="website__header-img" />
            </div>
        </header>
    </div>
  );
};
