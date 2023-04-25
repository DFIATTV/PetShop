import Header from "../../components/Header";
import { Box } from "@mui/material";
import CardProduct from '../../components/CardProduct';
import { useState, useEffect } from "react";
import url from "../../components/URLs";


const Juguetes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${url}articulos`).then(x => x.json()).then(x =>{
      setData(x)
    })
  }, [])

  return (
    <Box m="20px">
      <Header title="PET SHOP"></Header>
      <Box display="flex" justifyContent="space-between" alignItems="center">
      {data && data.map((x, i, data) => 
        x.tipo === 'Juguete' &&
        <CardProduct key={i} obj={x}/>
      )}
      </Box>
    </Box>
  );
};

export default Juguetes;
