import "./Statistics.scss"
import useStore from "../../../store/globalData";

export const Statistics = () => {

    const {
        totalVehicles,
        vehiclesPopular,
        vehiclesSold,
        motos,
        cars,
      } = useStore();

  return (
    <div className="statistics">
        <p className="statistics__warning"><span>Nota: </span> Se pueden almacenar máximo 10 carros, y 15 motos.</p>
        <div className="statistics__content">
            <article className="statistics__content-article">
                <p>Total autos: </p>
                <span className="statistics__content-total">{`${cars.length}/10`}</span>
            </article>
            <article className="statistics__content-article">
                <p>Total motos:</p>
                <span className="statistics__content-total">{`${motos.length}/15`}</span>
            </article>
            <article className="statistics__content-article">
                <p>Total vehículos: </p>
                <span className="statistics__content-total">{totalVehicles.length}</span>
            </article>
            <article className="statistics__content-article">
                <p>Vehículos populares: </p>
                <span className="statistics__content-total">{vehiclesPopular.length}</span>
            </article>
            <article className="statistics__content-article">
                <p>Vehículos vendidos: </p>
                <span className="statistics__content-total">{vehiclesSold.length}</span>
            </article>
        </div>
    </div>
  )
}
