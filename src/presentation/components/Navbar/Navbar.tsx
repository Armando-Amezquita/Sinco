import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import brand from "../../../assets/images/DC.png";
import "./Navbar.scss";
import { useEffect, useState } from "react";

export const Navbar = () => {

  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  const handleNavigate = () => {
    navigate("/dashboard");
  }

  const handleNavigateLogin = () => {
    navigate("/login");
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    setToken(storedToken);
  }, []);


  return (
    <nav className="navbar">
      <Link to="/">
        <img src={brand} alt={brand} className="navbar-brand" />
      </Link>

      <div className="navbar__content">
        <Button
          variant="contained"
          type="submit"
          onClick={handleNavigate}
          sx={{
            width: '120px',
            backgroundColor: '#f65151',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: '#A93226', 
            },
          }}
        >Comprar</Button>
        <Button
          variant="text"
          type="submit"
          onClick={handleNavigateLogin}
          sx={{
              minWidth: 'unset',
              padding: 0,
              borderRadius: '50%',
              backgroundColor: 'transparent',
              '&:hover': {
                  backgroundColor: 'transparent',
              },
          }}
        >
          <AccountCircleIcon  fontSize="large" sx={{ color: token?.length ? "#5d9d0b" :'#2e2828' }} />

        </Button>          
      </div>
    </nav>
  );
};
