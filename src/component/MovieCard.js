import React from "react";
import { Card, Button } from "react-bootstrap";

function MovieCard({ movie }) {

    return (
    <div className="card-div">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.posterUrl} className="image" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text className="descript">{movie.description}</Card.Text>
          <Card.Text>
          <Card.Text>{movie.rate}</Card.Text>
          </Card.Text>
          <Button variant="primary">
            Regarder
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
