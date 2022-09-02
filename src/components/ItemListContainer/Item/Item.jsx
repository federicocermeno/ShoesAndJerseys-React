import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Item.css";



const Item = ({ item }) => {

  function irArriba() {
    window.scrollTo(0, 0);
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.foto} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>{item.descripcion}</Card.Text>
        <Link to={`/detalle/${item.id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
