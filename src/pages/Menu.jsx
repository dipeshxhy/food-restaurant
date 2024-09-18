import React from 'react'
import Layout from "../components/layout/Layout"
import {Menulist} from "../Data/data"
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",mt:4}}>
        {Menulist.map(menu=>(
          <Card sx={{width:300,ml:4, mb:2
          }}>
            <CardActionArea>
              <CardMedia sx={{minHeight:300}} component="img" src={menu.image} alt={menu.name} />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {menu.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {menu.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Layout>
  )
}

export default Menu