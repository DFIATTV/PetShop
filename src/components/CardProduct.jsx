import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
//import Button from '@mui/material/Button'
import { tokens } from "../theme";
import { Typography, useTheme } from "@mui/material";
import "../styles/Card.css";

export default function CardProduct(props) {
  const { obj } = props;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia sx={{ height: 140 }} image={obj.imagen} title={obj.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {obj.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {obj.descripcion}
          </Typography>
        </CardContent>
        <CardActions className="btn-container">
          <button
            className={
              theme.palette.mode === "light" ? "btn-light" : "btn-dark"
            }
            size="small"
            onClick={() => {
              const message = `Quiero comprar ${obj.nombre} a ${obj.precio}$ ¿aún está disponible?`;
              const phoneNumber = "72768391";
              const encodedMessage = encodeURIComponent(message);
              window.open(
                `https://wa.me/${phoneNumber}/?text=${encodedMessage}`
              );
            }}
          >
            Buy now
          </button>
          <span className="price">{`$${obj.precio}`}</span>
        </CardActions>
      </Card>
    </>
  );
}
