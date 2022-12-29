import React from "react";
import { Paper, Box, styled, Button, Grid, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const StyledPaper = styled(Paper)({
  backgroundColor: "#f7f8fd",
  display: "flex",
  flexDirection: "row",
  width: "800px",
  height: "80px",
});

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="4"
      backgroundColor="black"
      alignItems="center"
      justifyContent="center"
      marginTop="65px"
      sx={{ position: "relative" }}
    >
      <StyledPaper sx={{ position: "absolute", marginTop: "-320px" }}>
        <Box
          style={{ paddingLeft: "50px" }}
          display="flex"
          flexDirection="column"
        >
          <span>
            <h5 style={{ margin: "25px 0 0 0" }}>Ready to get started</h5>
          </span>
          <span>
            <h5 style={{ margin: "0" }}>Talk to us today</h5>
          </span>
        </Box>
        <Button
          sx={{ height: "35px", margin: "25px 50px 0 auto" }}
          variant="contained"
        >
          <NavLink
            to="/contact"
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            Get Started
          </NavLink>
        </Button>
      </StyledPaper>
      <Box
        display="flex"
        gap="1"
        sx={{
          width: "100%",
          height: "250px",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "5px",
          margin: "0 100px 0 100px",
        }}
      >
        <Grid
          container
          display="flex"
          justifyContent="center"
          sx={{
            margin: "190px 0 140px 30px",
            alignItems: "baseline",
            paddingLeft: "80px",
          }}
        >
          <Grid item xs={3} paddingLeft="90px">
            <Grid>
              <p>Jadhav Technical</p>
            </Grid>
            <Grid>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3}
            display="flex"
            flexDirection="column"
            sx={{ paddingLeft: "65px" }}
          >
            <Grid>
              <p>Subscribe to get important updates</p>
            </Grid>
            <Grid>
              <TextField
                sx={{
                  width: "200px",
                  height: "50px",
                  backgroundColor: "white",
                }}
                autoComplete="off"
                name="username"
                variant="filled"
                label="Username"
              />
            </Grid>
            <Grid>
              <Button variant="contained" sx={{ marginTop: "20px" }}>
                Subscribe
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid>
              <p>Follow us</p>
            </Grid>
            <Grid>
              <LinkedInIcon />
              <InstagramIcon />
              <FacebookIcon />
            </Grid>
          </Grid>
          <Grid item xs={3} display="flex" flexDirection="column">
            <Grid>
              <p>Call us</p>
            </Grid>
            <Grid>
              <a style={{ textDecoration: "none" }} href="tel:7263952383">
                +91 7263952383
              </a>
            </Grid>
          </Grid>
         
        </Grid>
      </Box>
      <Grid container xs={12} borderTop='1px solid grey' color='white' margin='10px 0 10px 0' padding='10px 0 10px 0'>
                <Grid item xs={6} display='flex' justifyContent='center'>
                    <h5 style={{margin:'0'}}>@{new Date().getFullYear()} JadhavTechnical All Rights Reserved</h5>
                </Grid>
                <Grid item xs={6}>
                    <h5 style={{margin:'0'}}>PRIVACY POLICY</h5>
                    <h5 style={{margin:'0'}}>TERMS & CONDITIONS</h5>
                </Grid>
          </Grid>
    </Box>
  );
};

export default Footer;
