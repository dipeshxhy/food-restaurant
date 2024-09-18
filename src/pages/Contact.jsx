import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Email, Phone, SupportAgent } from "@mui/icons-material";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          ml: 4,
          mt: 2,
          "& p ": {
            fontSize: "1rem",
            my: 2,
          },
        }}
      >
        <Typography variant="h4" component={"div"}>
          Contact Us
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sit.
          Minima, neque quibusdam. Consequuntur molestiae iusto laudantium ad,
          eveniet voluptate minima assumenda obcaecati eius aperiam rem
          excepturi magnam non cupiditate?{" "}
        </p>
      </Box>
      <Box sx={{ml:4,width:500,"@media(max-width:600px)":{
        width:400,
        ml:2
      }}} >
        <TableContainer component={Paper} >
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "1.2rem" ,bgcolor:"black", color:'white',p:2}} align="center">
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{display:"flex",flexDirection:"column",justifyContent:'center'}}>
              <TableRow>
                <TableCell sx={{fontSize:"1.3rem"}} >
                  <SupportAgent sx={{pt:0.1}} /> 1898298
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontSize:"1.3rem"}}>
                  <Phone sx={{pt:0.1}} /> 1898298
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{fontSize:"1.3rem"}}>
                  <Email sx={{pt:0.1}} /> @helprestro.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
