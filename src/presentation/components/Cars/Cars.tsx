import brand from "../../../assets/images/DC.png"
import car from "../../../assets/images/car.png"
import { Button } from "@mui/material";
import "./Cars.scss"

export const Cars = () => {
    return (
        <section className="cars">
            <p className="cars__title">Nuestros carros mas populares </p>
            <div className="cars__content">
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>

            </div>
            <p className="cars__title">Nuestros Coleccion</p>
            <div className="cars__content">
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>
                <article className="card">
                    <p className="card__brand">Drive Cycle</p>
                    <div className="card__header">
                        <div className="card__header-brand">
                            <img src={brand} alt={brand} className="card__brandImg" />
                            <p className="card__brand-name">Nombre</p>
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
                        >Detalles</Button>
                    </div>
                    <img src={car} alt={car} className="card__img" />
                    <div className="card__footer">
                        <p> kilometraje: 15000</p>
                        <p>$899</p>
                    </div>

                </article>

            </div>

        </section>
    );
}

const pastelColors = [
    "#FFB3BA", // Soft pink
    "#FFDFBA", // Peach
    "#FFFFBA", // Soft yellow
    "#BAFFC9", // Light green
    "#BAE1FF", // Light blue
    "#E3BAFF", // Lavender
    "#FFBABA", // Light coral
    "#BAFFD9", // Mint
    "#FFCBA4", // Peach pink
    "#C6E2FF", // Pale sky blue
  ];

  interface Vehicle {
    modelo: string;
    color: string;
    kilometraje: number;
    valor: number;
    fechaRegistro: string;
    imagen?: string;
    popular: boolean;
  }
  
  interface Car extends Vehicle {}
  
  interface Moto extends Vehicle {
    cilindraje: number;
    numeroVelocidades: number;
  }
  
  const vehicles: (Car | Moto)[] = [
    {
      modelo: "Toyota Corolla",
      color: "Azul",
      kilometraje: 20000,
      valor: 15000,
      fechaRegistro: "2023-01-15",
      imagen: "toyota-corolla.jpg",
      popular: true,
    },
    {
      modelo: "Honda Civic",
      color: "Rojo",
      kilometraje: 30000,
      valor: 18000,
      fechaRegistro: "2022-08-22",
      popular: true,
    },
    {
      modelo: "Chevrolet Spark",
      color: "Blanco",
      kilometraje: 45000,
      valor: 9000,
      fechaRegistro: "2021-03-12",
      popular: false,
    },
    {
      modelo: "Ford Focus",
      color: "Negro",
      kilometraje: 25000,
      valor: 16000,
      fechaRegistro: "2023-02-05",
      popular: true,
    },
    {
      modelo: "Yamaha MT-07",
      color: "Negro",
      kilometraje: 5000,
      valor: 12000,
      fechaRegistro: "2023-06-10",
      cilindraje: 689,
      numeroVelocidades: 6,
      imagen: "yamaha-mt07.jpg",
      popular: true,
    },
    {
      modelo: "Kawasaki Ninja",
      color: "Verde",
      kilometraje: 12000,
      valor: 14000,
      fechaRegistro: "2021-11-30",
      cilindraje: 650,
      numeroVelocidades: 6,
      popular: true,
    },
    {
      modelo: "Suzuki Swift",
      color: "Gris",
      kilometraje: 22000,
      valor: 13000,
      fechaRegistro: "2022-09-18",
      popular: false,
    },
    {
      modelo: "Ducati Monster",
      color: "Rojo",
      kilometraje: 7000,
      valor: 15000,
      fechaRegistro: "2021-12-22",
      cilindraje: 937,
      numeroVelocidades: 6,
      popular: true,
    },
    {
      modelo: "Hyundai Elantra",
      color: "Plata",
      kilometraje: 30000,
      valor: 17000,
      fechaRegistro: "2022-04-14",
      popular: false,
    },
    {
      modelo: "BMW X5",
      color: "Negro",
      kilometraje: 15000,
      valor: 50000,
      fechaRegistro: "2023-07-25",
      popular: true,
    },
  ];
  