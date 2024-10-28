import { Cars } from "../../components/Cars/Cars"
import { Navbar } from "../../components/Navbar/Navbar"
import "./DashBoard.scss"

export const DashBoard = () => {
  return (
    <div className="dashboard">
        <Navbar />
        <section className="dashboard__content">
            <h2 className="dashboard__content-title">Conduce el vehiculo de tus suenos </h2>
            <div className="dashboard__filters">
            </div>
            <Cars />
        </section>
    </div>
  )
}
