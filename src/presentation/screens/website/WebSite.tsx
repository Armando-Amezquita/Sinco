import { Mask } from "../../components/utils/Mask/Mask";
import { Header } from "../../components/Header/Header"
import { Brands } from "../../components/brands/Brands"

import "./Website.scss";
import { Cars } from "../../components/Cars/Cars";
import useStore from "../../../store/globalData";
import { useEffect } from "react";
import { getAllVehicles } from "../../../actions/get-vehicles";

export const WebSite = () => {

  const {
    setTotalVehicles,
    setVehiclesPopular,
    setVehiclesSold,
    setVehiclesNotPopular,
    setMotos,
    setCars,
  } = useStore();

  const handleLoadVehicles = async () => {
    const data = await getAllVehicles();
    setTotalVehicles(data)
    setVehiclesPopular(data.filter(vehicle => vehicle.popular && !vehicle.sold ))
    setVehiclesNotPopular(data.filter(vehicle => !vehicle.popular && !vehicle.sold ))
    setMotos(data.filter(vehicle => vehicle.typeVehicle !== "car" && !vehicle.sold ));
    setCars(data.filter(vehicle => vehicle.typeVehicle === "car" && !vehicle.sold ));
    setVehiclesSold(data.filter(vehicle => vehicle.sold ));
  }

  useEffect(() => {
    handleLoadVehicles();
  }, []);

  return (
    <div className="website">
      <Mask className="website__mask" />
      <Header />
      <Brands />
      <Cars />
    </div>
  );
};
