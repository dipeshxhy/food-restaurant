import {useState} from 'react'
import  "../../styles/HeaderStyle.css"
import {Box,AppBar,Toolbar,Typography, IconButton,Drawer, Divider, Container} from "@mui/material"
import {Menu }from '@mui/icons-material';
import{  NavLink} from "react-router-dom"
const Header = () => {
  const [mobileOpen,setMobileOpen]=useState(false)
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
    <Typography variant='h6' color="goldenrod" component="div" sx={{flexGrow:1}}   >
  <img src="logo.svg" width={150}  alt="" />
</Typography>
<Divider />
  <ul className="mobile-menu">
    <li >
      <NavLink activeClass="active" to="/">Home</NavLink>
    </li>
    <li>
      <NavLink activeClass="active" to="/about">About</NavLink>
    </li>
    <li>
      <NavLink activeClass="active"  to="/menu">Menu</NavLink>
    </li>
    <li>
      <NavLink activeClass="active" to="/contact">Contact</NavLink>
    </li>
  </ul>
</Box>
  )

  return (
    <>
<Box component="nav" >
  <AppBar sx={{bgcolor:"black"}}>
    
    <Toolbar >
      <IconButton onClick={handleDrawerToggle} color="inherit" aria-label='open drawer' edge="start" sx={{mr:2,display:{sm:"none"}}}>

      <Menu/>
      </IconButton>
<Typography variant='h6' color="goldenrod" component="div" sx={{flexGrow:1}}   >
  <img src="logo.svg" width={220} height={70} alt="" />
</Typography>
<Box sx={{display:{xs:"none",sm:"block"}}}>
  <ul className="navigation-menu">
    <li className='list-item'>
      <NavLink activeClass="active"  to="/">Home</NavLink>
    </li>
    <li>
      <NavLink  activeClass="active" to="/about">About</NavLink>
    </li>
    <li>
      <NavLink activeClass="active"  to="/menu">Menu</NavLink>
    </li>
    <li>
      <NavLink  activeClass="active" to="/contact">Contact</NavLink>
    </li>
  </ul>
</Box>
    </Toolbar>
  </AppBar>
  <Box component="nav">
    <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:"block",sm:"none"},color:"gray",'& .MuiDrawer-paper':{
      boxSizing:"border-box",
      width:"200px",
    }}}>
      {drawer}
    </Drawer>
  </Box>
  <Container  >

  <Toolbar />
  </Container>

</Box>

    </>
  )
}

export default Header