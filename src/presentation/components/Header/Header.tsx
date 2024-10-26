import car1 from "../../../assets/images/car1.png";
// import car1 from "../../../assets/images/car.png";
import "./Header.scss";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <header className="header">
      <Navbar />
      
      <div className="header-brand">
          <h1 className="header-brandName" >Vehiculos Premium</h1>
          <img src={car1} alt={car1} className="header-img" />
      </div>
    </header>
  );
};
