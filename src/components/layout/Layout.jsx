/* eslint-disable react/prop-types */
import { Box } from "@mui/material"
import Footer from "./Footer"
import Header from "./Header"

const Layout=({children})=>{
    return <>
    <Header/>
    <Box sx={{"@media(max-width:600px) ":{
      
     
    }}}  >{children} </Box>
    <Footer/>
    </>
}
export default Layout