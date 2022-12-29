import React from "react";
import { Box, TextField, Button } from "@mui/material";

function Contact() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' gap='20px'>
      <h3 style={{marginTop: '100px'}}>Feel Free To Contact Us</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7564.690840321188!2d73.78302412138646!3d18.558459620509282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93519e003cf%3A0xd40322c7ae45b1d9!2sBaner%20Gaon%2C%20Baner%2C%20Pune%2C%20Maharashtra%20411045!5e0!3m2!1sen!2sin!4v1672237073475!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <form action='https://formspree.io/f/xzbqpqao' method='POST'>
        <Box display='flex' flexDirection='column' gap='20px'>
      <TextField sx={{width:'300px'}} autoComplete='off' name='username' required label='Username'/>
      <TextField sx={{width:'300px'}} autoComplete='off' name='email' required label='Email'/>
      <TextField sx={{width:'300px'}} autoComplete='off' name='message' required multiline minRows={4} label='Enter your message'/>
      <Button type='submit' sx={{width:'100px'}} variant='contained' name='Send'>Send</Button>
      </Box>
      </form>
    </Box>
  );
}

export default Contact;
