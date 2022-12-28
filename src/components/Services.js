import React from "react";
import { Paper, Box, styled } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SecuritySharpIcon from "@mui/icons-material/SecuritySharp";
import CurrencyRupeeSharpIcon from "@mui/icons-material/CurrencyRupeeSharp";
import ShieldIcon from "@mui/icons-material/Shield";

const StyledPaper = styled(Paper)({
  backgroundColor: "#f7f8fd",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Services = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "250px",
        marginTop: "50px",
        "& > :not(style)": {
          m: 1,
          width: 250,
          height: 200,
        },
      }}
    >
      <StyledPaper sx={{ flexDirection: "column" }}>
        <LocalShippingOutlinedIcon
          style={{ marginBottom: "10px" }}
          color="primary"
        />
        <span>Super Fast and Free Delivery</span>
      </StyledPaper>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0 !important",
          "& > :not(style)": {
            m: 1,
            width: 250,
            height: 90,
          },
        }}
      >
        <StyledPaper>
          <SecuritySharpIcon style={{ marginRight: "10px" }} color="primary" />{" "}
          Non-contact Shipping
        </StyledPaper>
        <StyledPaper>
          <CurrencyRupeeSharpIcon
            style={{ marginRight: "10px" }}
            color="primary"
          />
          Money-back Guranteed
        </StyledPaper>
      </Box>
      <StyledPaper sx={{ flexDirection: "column" }}>
        <ShieldIcon style={{ marginBottom: "10px" }} color="primary" />
        <span>Super Secure Payment System</span>
      </StyledPaper>
    </Box>
  );
};

export default Services;
