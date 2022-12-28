import React from "react";
import { Box } from "@mui/material";

const Trusted = () => {
  return (
    <Box
      marginTop="50px"
      padding="20px 100px 20px 100px"
      backgroundColor="#F5F5F5"
      display="flex"
      flexDirection="column"
    >
      <h3 style={{ paddingLeft: "40%" }}>Trusted By 1000+ Companies</h3>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <img
          style={{ height: "80px", width: "80px", marginLeft: "145px" }}
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
          alt="trusted-brands"
        />

        <img
          style={{ height: "80px", width: "80px" }}
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
          alt="trusted-brands"
        />

        <img
          style={{ height: "80px", width: "80px" }}
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
          alt="trusted-brands"
        />

        <img
          style={{ height: "80px", width: "80px" }}
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
          alt="trusted-brands"
        />

        <img
          style={{ height: "80px", width: "80px", marginRight: "120px" }}
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
          alt="trusted-brands"
        />
      </Box>
    </Box>
  );
};

export default Trusted;
