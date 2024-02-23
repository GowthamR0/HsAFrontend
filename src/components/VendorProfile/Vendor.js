


import axios from "axios";
import { useNavigate } from "react-router-dom";


import { Typography } from "@mui/material";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

import "./Evendor1.css";

const Book = (props) => {
    const history = useNavigate();
    const { name, email, phoneno, booked, image } = props.book;

    return (
        <div className="grid-container">

            <div className="grid-item">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia

                        height="140"
                        image={props.image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>

                    </CardActions>
                </Card>
            </div>


        </div>
    );

};



export default Book;


/*
    return (
        <div className="card">

            <h3>{name}</h3>
            <p>{email}</p>
            <h3>Rs {address}</h3>
            <p>{phoneno}</p>

            <Button sx={{ mt: "auto" }}>
                Update
            </Button>

        </div>
    ); */