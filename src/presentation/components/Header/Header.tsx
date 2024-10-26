import { Button } from "@mui/material";
import car1 from "../../../assets/images/car1.png";
// import car1 from "../../../assets/images/car.png";
import brand from "../../../assets/images/DC.png";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
          <img src={brand} alt={brand} className="navbar-brand" />
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

      <div className="header-brand">
          <h1 className="header-brandName" >Vehiculos Premium</h1>
          <img src={car1} alt={car1} className="header-img" />
      </div>
    </header>
  );
};
