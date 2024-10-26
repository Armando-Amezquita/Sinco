import "./Brands.scss";
import brand1 from "../../../assets/images/brands/brand2.png"
import brand2 from "../../../assets/images/brands/brand3.png"
import brand3 from "../../../assets/images/brands/brand4.png"
import brand4 from "../../../assets/images/brands/brand5.png"

export const Brands = () => {
  return (
    <div className="brands">
        {/* <p className="brands__title">Algunas de las marcas que <br /> confian en nosotros</p> */}
        <div className="brands__content">
            <img src={brand1} alt="" className="brands__content-img" />
            <img src={brand2} alt="" className="brands__content-img" />
            <img src={brand3} alt="" className="brands__content-img" />
            <img src={brand4} alt="" className="brands__content-img" />
        </div>
    </div>
  )
}
