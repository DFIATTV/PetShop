import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Juguetes = () => {
  //const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  //Dentro del box vamos a cargar solo los items con el tag de juguete
  return (
    <Box>
      <Header title="Juguetes" subtitle=" " />
  
    </Box>
    )
}

export default Juguetes