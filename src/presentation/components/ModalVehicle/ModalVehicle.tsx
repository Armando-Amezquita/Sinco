import { Box, Button, TextField } from "@mui/material";
import './ModalVehicle.scss'
import brand from "../../../assets/images/DC.png";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

interface Props {
    onClick?: () => void;
}

export const ModalVehicle = ({ onClick } : Props ) => {

    const [name, setName] = useState("")
    const [document, setDocument] = useState("");

    return (
        <div className="modalSell">
            <div className="overlay" onClick={onClick}></div>
            <div className="modal-content">
                <img src={brand} alt={brand} className="navbar-brand" />
                
                <Button
                    variant="text"
                    type="submit"
                    onClick={onClick}
                    sx={{
                        position: 'absolute',
                        top: "1rem",
                        right: "1rem",
                        minWidth: 'unset',
                        padding: 0,
                        borderRadius: '50%',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                    >
                    <CloseIcon  fontSize="medium" sx={{ color: '#2e2828' }} />

                </Button>

                <p className="modal-title">Confirma tus datos para completar la compra</p>
                <Box mb={2} sx={{ width: '100%' }}>
                    <TextField
                        label="Nombre completo"
                        variant="outlined"
                        fullWidth
                        value={name}
                          onChange={(e) => setName(e.target.value)}
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
                <Box mb={2} sx={{ width: '100%' }}>
                    <TextField
                        label="Documento"
                        variant="outlined"
                        fullWidth
                        value={document}
                          onChange={(e) => setDocument(e.target.value)}
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
                <Button
                    variant="outlined"
                    type="submit"
                    size="large"
                    disabled={(!name.length || !document.length)} 
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
                > Pagar</Button>
            </div>
        </div>
    );
}

