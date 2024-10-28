import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { Navbar } from "../../components/Navbar/Navbar"
import "./EditCreate.scss"
import { useEditCreate } from "../../hooks/useEditCreate";
import { useParams } from "react-router-dom";
import { Statistics } from "../../components/Statistics/Statistics";

export const EditCreate = () => {

    const { id } = useParams<{ id: string }>();
    const isEditMode = Boolean(id);

    
    const {
        //Properties
        model,
        isNew,
        value,
        valueUsed,
        popular,
        sold,
        calification,
        km,
        cilindraje,
        vehiculos, 
        cilindrajes,

        //Methods
        setIsNew, 
        setValue,
        setValueUsed,
        setPopular,
        setSold,
        setCalification,
        setKm,
        setCilindraje,
        handleSubmit,
        handleChangeModel
    } = useEditCreate(id);

  return (
    <div className="edit">
         
        <Navbar />
        <Statistics />

        <form className="edit__content" onSubmit={handleSubmit}>
            <h2 className="edit__content-title">{ id?.length ? "Edita el vehiculo" : "Crear vehiculo"}</h2>
            <div className="edit__form">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={model ? model.model : ""}
                        label="Modelo"
                        disabled={isEditMode}
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '20px',
                            },
                        }}
                        onChange={handleChangeModel} 
                    >
                        <MenuItem value="">
                            <em>Seleccione una modelo</em>
                        </MenuItem>
                        {
                            vehiculos.map(ele => 
                                <MenuItem value={ele.model} key={ele.model}>{ele.model}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Vehiculo Nuevo</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={isNew.length ? isNew : ""}
                        label="Vehiculo Nuevo"
                        onChange={(event) => setIsNew(event.target.value)}
                        disabled={!model}
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '20px',
                            },
                        }}
                    >
                        <MenuItem value="Si">Si</MenuItem>
                        <MenuItem value="No">No</MenuItem> 
                    </Select>
                </FormControl>
            </div>
            <div className="edit__form">
                {
                    isNew === "Si" ?
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Precio</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            label="Precio"
                            sx={{
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '20px',
                                },
                            }}
                            onChange={(e) => setValue(e.target.value)} 
                        >
                            <MenuItem value="">
                                <em>Seleccione un precio</em>
                            </MenuItem>
                            {
                                vehiculos.map((ele) => 
                                    <MenuItem value={ele.price} key={ele.model}>
                                        {Number(ele.price).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
                                    </MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                    :
                    <Box mb={2} sx={{ width: '100%', mb: 0}}>
                        <TextField
                            label="Valor"
                            variant="outlined"
                            fullWidth
                            value={valueUsed}
                            onChange={(e) => setValueUsed(e.target.value)}
                            disabled={!isNew.length}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                                margin: "0", 
                                '& fieldset': {
                                    borderColor: '#BDC3C7',
                                    margin: "0",
                                },
                                },
                            }}
                        />
                    </Box>

                }
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Popular</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={popular.length ? popular : ""}
                        label="Popular"
                        onChange={(e) => setPopular(e.target.value)}
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '20px',
                            },
                        }}
                    >
                        <MenuItem value="Si">Si</MenuItem>
                        <MenuItem value="No">No</MenuItem> 
                    </Select>
                </FormControl>
            </div>
            <div className="edit__form">
                {
                    isNew === "No" &&
                    <Box mb={2} sx={{ width: '100%', mb: 0 }}>
                        <TextField
                            label="Kilometraje"
                            variant="outlined"
                            fullWidth
                            value={km}
                            onChange={(e) => setKm(e.target.value)}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                                '& fieldset': {
                                    borderColor: '#BDC3C7',
                                },
                                },
                            }}
                        />
                    </Box>
                }

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">¿Vendido?</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sold.length ? sold : ""}
                        label="¿Vendido?"
                        onChange={(e) => setSold(e.target.value)}
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '20px',
                            },
                        }}
                    >
                        <MenuItem value="Si">Si</MenuItem>
                        <MenuItem value="No">No</MenuItem> 
                    </Select>
                </FormControl>
            </div>
            <div className="edit__form">

                {
                    model?.type === 'motocycle' &&
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Cilindraje</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={cilindraje?.length ? cilindraje : "" }
                            label="Cilindraje"
                            onChange={(e) => setCilindraje(e.target.value)}
                            sx={{
                                borderRadius: '20px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '20px',
                                },
                            }}
                        >
                            <MenuItem value="">
                                <em>Seleccione un Cilindraje</em>
                            </MenuItem>
                            {
                                cilindrajes.map(ele => 
                                    <MenuItem key={ele} value={ele}>{ele}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                }
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Calificación</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={calification}
                        label="Calificación"
                        onChange={(e) =>setCalification(e.target.value)}
                        sx={{
                            borderRadius: '20px',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderRadius: '20px',
                            },
                        }}
                    >
                        <MenuItem value="">
                            <em>Seleccione una calificación</em>
                        </MenuItem>
                        {Array.from({ length: 5 }, (_, index) => (
                            <MenuItem key={index + 1} value={index + 1}>
                                {index + 1}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <Button
              variant="outlined"
              type="submit"
              size="large"
              sx={{
                  borderRadius: '20px',
                  border: "1px solid #f65151",  
                  padding: '12px 20px',        
                  boxSizing: 'border-box',   
                  minWidth: '190px',    
                  backgroundColor: '#fff',
                  color: '#f65151',
                  fontSize: '1rem',
                  fontWeight: '600',
                  '&:hover': {
                      backgroundColor: '#f65151',
                      color: '#fff',
                  },
              }}
          > Guardar</Button>
                
        </form>
    </div>
  )
}
