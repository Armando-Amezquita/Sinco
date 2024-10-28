import { Box, Button, TextField } from "@mui/material";
import brand from "../../../assets/images/DC.png"
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Login.scss"
import { login } from "../../../actions/login";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await login(name, password);
      if(data && data.token){
        localStorage.setItem('authToken', data.token);
        navigate('/')
      }
    } catch (error) {
      console.log('error', error)
      throw new Error("Error to get user")
    }
  }

  return (
    <div className="login">
      <div className="modal-content">
          <img src={brand} alt={brand} className="navbar-brand" />
          
          <Button
              variant="text"
              type="submit"
              onClick={handleLogin}
              sx={{
                  position: 'absolute',
                  top: "1rem",
                  left: "1rem",
                  minWidth: 'unset',
                  padding: 0,
                  borderRadius: '50%',
                  '&:hover': {
                      backgroundColor: 'transparent',
                  },
              }}
              >
              <ArrowBackIcon  fontSize="medium" sx={{ color: '#2e2828' }} />

          </Button>

          <p className="modal-title">Ingresa tus datos</p>
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
                  label="Password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  type="password" 
                    onChange={(e) => setPassword(e.target.value)}
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
              onClick={handleLogin}
              disabled={(!name.length || !password.length)} 
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
          > Ingresar</Button>
      </div>
    </div>
  );
}

