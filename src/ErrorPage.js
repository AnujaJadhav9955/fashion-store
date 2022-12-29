import React from "react";
import { Button, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box display="flex" flexDirection="column"  alignItems='center' justifyContent='center' marginTop='100px'>
      <h2>404</h2>
      <h2>Uhh Ohh! you are lost.</h2>
      <p>
        The page you are looking for does not exist. How you got here is a
        mystery. But you can click the button below to go back to home page
      </p>
      <Button sx={{width: '200px'}} variant="contained">
        <NavLink to="/" style={{ textDecoration: 'none', color: 'white'}}>Home</NavLink>
      </Button>
    </Box>
  );
};

export default ErrorPage;
