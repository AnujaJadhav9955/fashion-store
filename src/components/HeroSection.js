import React from 'react'
import {Grid, styled, Button} from '@mui/material';
import { NavLink } from "react-router-dom";

const GridContainer = styled(Grid) ({
marginTop: '150px',
width: '100%',
paddingLeft: '200px',
paddingRight: '200px',
alignItems: 'center',
});

const HeroSection = () => {
  return (
    <GridContainer container item >
        <Grid item xs={6}>
        <p>Welcome to </p>
        <h1>Fashion Store</h1>
            <Button variant='contained'>SHOW NOW</Button>
        </Grid>
        <Grid item xs={6} style={{textAlign: 'center'}}>
        <img
            src={"/images/hero.jpg"}
            style={{ height: "200px", width: "250px" }}
          />
        </Grid>
    </GridContainer>
  )
}

export default HeroSection
