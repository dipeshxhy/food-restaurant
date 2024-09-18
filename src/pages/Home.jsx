import {} from 'react'
import Layout from "../components/layout/Layout"
import {Box, Button, Typography} from "@mui/material"
import { Link } from 'react-router-dom'
import "../styles/HomeStyle.css"



const Home = () => {
  return (
    <Layout>
      <Box  sx={{backgroundImage:`url(banner.jpeg)`,color:"white",height:"100vh","@media(max-width:600px)":{
        backgroundSize:"cover",
        backgroundPosition:"center",
        height:"77.8vh",
"& h2":{
  pt:20,
}

      
      }}}>
        <Box className="home-container" sx={{"@media(max-width:600px)":{
     display:"flex",
     flexDirection:"column",
     gap:"10px",
    
     

     
        }}}>
        <Typography variant="h2" className='home-content'>
  Food Website
</Typography>
<Typography variant="body2" className='paragraph' gutterBottom>
  Welcome to our food website! We offer a variety of delicious and healthy options for your favorite cuisine. Please select a category above to explore our menu.
</Typography>
<Link to={"/menu"}> 

<Button variant="contained" sx={{mt:3}} >Order Now</Button>
</Link>
        </Box>

      </Box>
    </Layout>
  )
}

export default Home