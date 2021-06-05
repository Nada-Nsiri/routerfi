import React from "react";
import {Link} from "react-router-dom"
import { Card,Button } from "react-bootstrap";
const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img
                variant="top"
                src={movie.posterUrl}
                width="250px"
                height="250px"
            />
            <Card.Body>
                <Card.Title> {movie.name} </Card.Title>
                <Card.Text>
                    date : {movie.date}
                    movie duration :{movie.duration}
                
                </Card.Text>
                <Link to={`/description/${movie.name}`}>
                    <Button   variant="primary">Go to description</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;