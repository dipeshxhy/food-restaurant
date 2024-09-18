import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{textAlign:"center", bgcolor:"#1A1A19",p:2 ,color:"white"}}>
        <Box sx={{my:2,"& svg":{
            fontSize:'2rem',
            mx:2,
            cursor:"pointer",
            transition:"all 0.3s ease-in-out",
            color:"goldenrod",
            "&:hover":{
                transform:'scale(1.1)'
            }
        }}}>
            <Instagram/>
            <Twitter/>
            <Facebook/>
            <YouTube/>
        </Box>
<Typography variant="h6" sx={{"@media(max-width:600px)":{
    fontSize:'1.2rem',
    p:2
  
}}}>
    All Rights researved &copy; Dipesh Fast Food
</Typography>
    </Box>
  )
}

export default Footer