import React from 'react'
import { Box, /*Typography, useTheme*/ } from "@mui/material";
//import { tokens } from "../../theme";
import Header from "../../components/Header";

const Comida = () => {

  //const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  //Dentro del box vamos a cargar solo los items con el tag de comida

  return (
    <Box>
      <Header title="Comida" subtitle=" " />
  
    </Box>
    )

}

export default Comida