import Header from "../../components/Header";
import { Box } from "@mui/material";
import CardProduct from '../../components/CardProduct';


const Dashboard = () => {
  const items = [
    {image: 'https://puppytoob.com/wp-content/uploads/2018/04/Pomeranian-5-750x422.jpg',
    title: 'Dog',
    description: 'Not a single thought.',
    price: 149.99 }]

    //el arreglo items son objetos que vamos a traer de la base de datos

  return (
    <Box m="20px">
      <Header title="PET SHOP"></Header>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <CardProduct obj={items[0]}/>
      </Box>
    </Box>
  );
};

export default Dashboard;
